importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Firebase Config from environment variables
const firebaseConfig = {
  apiKey: self.FIREBASE_API_KEY || "AIzaSyBsVbLw4mvFTJhmORUXCUNyGc98Rripj3M",
  authDomain: self.FIREBASE_AUTH_DOMAIN || "biu-students-hub.firebaseapp.com",
  projectId: self.FIREBASE_PROJECT_ID || "biu-students-hub",
  storageBucket: self.FIREBASE_STORAGE_BUCKET || "biu-students-hub.firebasestorage.app",
  messagingSenderId: self.FIREBASE_MESSAGING_SENDER_ID || "128818531382",
  appId: self.FIREBASE_APP_ID || "1:128818531382:web:190dc5688d1b9d21321c97"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});