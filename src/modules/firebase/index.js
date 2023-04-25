// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZV2u5h2aqia0AbosivjFxCr4uJI9xq_M',
  authDomain: 'mini-485ea.firebaseapp.com',
  databaseURL: 'https://mini-485ea-default-rtdb.firebaseio.com',
  projectId: 'mini-485ea',
  storageBucket: 'mini-485ea.appspot.com',
  messagingSenderId: '289164654724',
  appId: '1:289164654724:web:aa42b7c0aa557d48382ad1',
  measurementId: 'G-KHENYZRK1K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const appDatabase = getDatabase(app);
