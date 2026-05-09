/* ========================================
   DELIVERY GERAL - Authentication Module
   ======================================== */

// Roles: client | driver | store | admin

/**
 * Cadastra um novo usuario no Firebase Auth e salva perfil no Firestore
 */
async function registerUser(email, password, role, extraData = {}) {
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    const user = cred.user;

    // Salva perfil no Firestore
    const userData = {
      uid: user.uid,
      email: email,
      role: role,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      ...extraData
    };

    await db.collection('users').doc(user.uid).set(userData);

    // Se for lojista, cria documento na colecao stores
    if (role === 'store' && extraData.storeName) {
      await db.collection('stores').doc(user.uid).set({
        ownerId: user.uid,
        name: extraData.storeName,
        niche: extraData.niche || '',
        emoji: extraData.emoji || '🏪',
        address: extraData.address || '',
        city: extraData.city || '',
        rating: 0,
        isOpen: true,
        plan: 'free',
        approved: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    return { success: true, user: user };
  } catch (error) {
    console.error('Erro no cadastro:', error);
    return { success: false, error: translateAuthError(error.code) };
  }
}

/**
 * Faz login e retorna o usuario + role
 */
async function loginUser(email, password) {
  try {
    const cred = await auth.signInWithEmailAndPassword(email, password);
    const user = cred.user;

    // Busca dados do perfil no Firestore
    const doc = await db.collection('users').doc(user.uid).get();
    const profile = doc.exists ? doc.data() : { role: 'client' };

    // Salva no localStorage para acesso rapido
    localStorage.setItem('dg_user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      role: profile.role,
      name: profile.name || user.displayName || email.split('@')[0]
    }));

    return { success: true, user: user, profile: profile };
  } catch (error) {
    console.error('Erro no login:', error);
    return { success: false, error: translateAuthError(error.code) };
  }
}

/**
 * Logout
 */
async function logoutUser() {
  await auth.signOut();
  localStorage.removeItem('dg_user');
  localStorage.removeItem('dg_city');
  window.location.reload();
}

/**
 * Retorna o usuario atual (do localStorage ou Firebase)
 */
function getCurrentUser() {
  const saved = localStorage.getItem('dg_user');
  if (saved) return JSON.parse(saved);
  const u = auth.currentUser;
  if (!u) return null;
  return { uid: u.uid, email: u.email };
}

/**
 * Listener de mudanca de estado de autenticacao
 */
function onAuthChanged(callback) {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const doc = await db.collection('users').doc(user.uid).get();
      const profile = doc.exists ? doc.data() : { role: 'client' };
      callback({ user, profile });
    } else {
      callback({ user: null, profile: null });
    }
  });
}

/**
 * Atualiza dados do perfil do usuario
 */
async function updateProfile(uid, data) {
  await db.collection('users').doc(uid).update(data);
}

/**
 * Cria o primeiro admin (use uma vez no console do navegador)
 */
async function createFirstAdmin(email, password, name) {
  return registerUser(email, password, 'admin', { name, phone: '' });
}

/**
 * Traduz erros do Firebase Auth para portugues
 */
function translateAuthError(code) {
  const map = {
    'auth/email-already-in-use': 'Este email ja esta cadastrado.',
    'auth/invalid-email': 'Email invalido.',
    'auth/weak-password': 'Senha muito fraca. Use pelo menos 6 caracteres.',
    'auth/user-not-found': 'Usuario nao encontrado.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/invalid-credential': 'Email ou senha incorretos.',
    'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
    'auth/user-disabled': 'Esta conta foi desativada.',
  };
  return map[code] || 'Erro desconhecido. Tente novamente.';
}

/**
 * Redireciona para o painel correto baseado na role
 */
function redirectByRole(role) {
  switch (role) {
    case 'admin': window.location.href = 'admin.html'; break;
    case 'store': window.location.href = 'lojista.html'; break;
    case 'driver': window.location.href = 'entregador.html'; break;
    default: /* client fica no index.html */ break;
  }
}
