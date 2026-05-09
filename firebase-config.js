/* ========================================
   DELIVERY GERAL - Firebase Configuration
   ======================================== */

// IMPORTANTE: Substitua pelos dados do seu projeto Firebase!
// 1. Acesse https://console.firebase.google.com
// 2. Crie um projeto chamado "delivery-geral"
// 3. Clique em "</>" (Adicionar app da Web)
// 4. Copie o objeto firebaseConfig e cole aqui

const firebaseConfig = {
  apiKey: "AIzaSyBPdbt1b-tQaYtQgZKLKRaiZhp80bkuI8I",
  authDomain: "delivery-geral-af64e.firebaseapp.com",
  projectId: "delivery-geral-af64e",
  storageBucket: "delivery-geral-af64e.firebasestorage.app",
  messagingSenderId: "414484131141",
  appId: "1:414484131141:web:67d058d157e6b7fc0f622c",
  measurementId: "G-WHS4WZJXFH"
};

// Inicializa o Firebase App
firebase.initializeApp(firebaseConfig);

// Exporta as instancias globais para uso nos outros scripts
const db = firebase.firestore();
const auth = firebase.auth();

// Habilita persistencia offline do Firestore
db.enablePersistence({ synchronizeTabs: true })
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Persistencia offline: multiplas abas abertas');
    } else if (err.code === 'unimplemented') {
      console.warn('Persistencia offline nao suportada neste navegador');
    }
  });

// Configuracao do Firebase Cloud Messaging (notificacoes push)
let messaging = null;
try {
  messaging = firebase.messaging();
  messaging.usePublicVapidKey("SUA_CHAVE_VAPID_AQUI"); // Substitua pela chave VAPID do Firebase Console > Cloud Messaging
} catch (e) {
  console.log('FCM nao disponivel neste ambiente');
}

console.log('Firebase inicializado com sucesso!');
