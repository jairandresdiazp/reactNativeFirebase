import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBFt2lnOJiSmg8OXM6Y49kbWG0a10r6fA',
  authDomain: 'reactnativefirebase-c75c6.firebaseapp.com',
  projectId: 'reactnativefirebase-c75c6',
  storageBucket: 'reactnativefirebase-c75c6.appspot.com',
  messagingSenderId: '746582512246',
  appId: '1:746582512246:web:d4d56b091772b6a3cb4557',
  measurementId: 'G-B9SYF7MKX7',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default {
  app,
  analytics,
  db,
};
