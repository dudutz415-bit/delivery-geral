/* ========================================
   DELIVERY GERAL - Notifications (FCM)
   ======================================== */

/**
 * Solicita permissao para notificacoes push
 */
async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.warn('Notificacoes nao suportadas neste navegador');
    return false;
  }

  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    await saveFcmToken();
    return true;
  }
  return false;
}

/**
 * Obtem o FCM token e salva no Firestore
 */
async function saveFcmToken() {
  if (!messaging) return;
  try {
    const token = await messaging.getToken();
    const user = getCurrentUser();
    if (user && token) {
      await db.collection('users').doc(user.uid).update({ fcmToken: token });
      console.log('FCM Token salvo:', token);
    }
  } catch (err) {
    console.error('Erro ao obter FCM token:', err);
  }
}

/**
 * Escuta mensagens em primeiro plano
 */
function listenForegroundMessages() {
  if (!messaging) return;
  messaging.onMessage((payload) => {
    console.log('Mensagem recebida:', payload);
    showLocalNotification(payload.notification?.title, payload.notification?.body);
  });
}

/**
 * Mostra uma notificacao local (quando FCM nao esta disponivel)
 */
function showLocalNotification(title, body) {
  if (Notification.permission === 'granted') {
    new Notification(title || 'Delivery Geral', {
      body: body || 'Voce tem uma nova atualizacao!',
      icon: './icon-192.svg',
      badge: './icon-192.svg',
      tag: 'delivery-geral-' + Date.now()
    });
  }
}

/**
 * Envia uma notificacao via Cloud Function (simulado localmente ate deploy)
 * No futuro, isso sera uma Cloud Function
 */
async function sendNotification(userId, title, body) {
  // Salva na colecao de notificacoes do usuario
  await db.collection('users').doc(userId).collection('notifications').add({
    title: title,
    body: body,
    read: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

/**
 * Escuta notificacoes nao lidas do usuario atual
 */
function listenNotifications(userId, callback) {
  return db.collection('users').doc(userId).collection('notifications')
    .where('read', '==', false)
    .orderBy('createdAt', 'desc')
    .onSnapshot((snap) => {
      const notifs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      callback(notifs);
    });
}

/**
 * Marca notificacao como lida
 */
async function markNotificationRead(userId, notifId) {
  await db.collection('users').doc(userId).collection('notifications').doc(notifId).update({ read: true });
}
