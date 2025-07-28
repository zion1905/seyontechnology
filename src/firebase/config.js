import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoZGJXWAqRzK5_nWCPGg_sVw5DoyChl7Q",
  authDomain: "seyontech-4460b.firebaseapp.com",
  databaseURL: "https://seyontech-4460b-default-rtdb.firebaseio.com",
  projectId: "seyontech-4460b",
  storageBucket: "seyontech-4460b.appspot.com",
  messagingSenderId: "225760083946",
  appId: "1:225760083946:web:bf81fbe49665f5c29d7c93",
  measurementId: "G-30SRXBC0Z1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
