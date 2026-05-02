
// Check if running in a Node environment or browser
const isNodeEnvironment = typeof module !== 'undefined' && module.exports;

// Load from environment variables (populated at build time or runtime)
const firebaseConfig = {
  apiKey: typeof process !== 'undefined' ? process.env.FIREBASE_API_KEY : window.FIREBASE_API_KEY || 'AIzaSyBsVbLw4mvFTJhmORUXCUNyGc98Rripj3M',
  authDomain: typeof process !== 'undefined' ? process.env.FIREBASE_AUTH_DOMAIN : window.FIREBASE_AUTH_DOMAIN || 'biu-students-hub.firebaseapp.com',
  projectId: typeof process !== 'undefined' ? process.env.FIREBASE_PROJECT_ID : window.FIREBASE_PROJECT_ID || 'biu-students-hub',
  storageBucket: typeof process !== 'undefined' ? process.env.FIREBASE_STORAGE_BUCKET : window.FIREBASE_STORAGE_BUCKET || 'biu-students-hub.firebasestorage.app',
  messagingSenderId: typeof process !== 'undefined' ? process.env.FIREBASE_MESSAGING_SENDER_ID : window.FIREBASE_MESSAGING_SENDER_ID || '128818531382',
  appId: typeof process !== 'undefined' ? process.env.FIREBASE_APP_ID : window.FIREBASE_APP_ID || '1:128818531382:web:190dc5688d1b9d21321c97',
  databaseURL: typeof process !== 'undefined' ? process.env.FIREBASE_DATABASE_URL : window.FIREBASE_DATABASE_URL || 'https://biu-students-hub-default-rtdb.firebaseio.com'
};

if (isNodeEnvironment) {
  module.exports = { firebaseConfig };
} else {
  window.firebaseConfig = firebaseConfig;
}
