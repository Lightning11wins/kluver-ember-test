import Service from '@ember/service';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJrxStg4D4V8vwtbwwexzl5ul_bwYJ1a8",
  authDomain: "test-1d65a.firebaseapp.com",
  projectId: "test-1d65a",
  storageBucket: "test-1d65a.firebasestorage.app",
  messagingSenderId: "177335598150",
  appId: "1:177335598150:web:a82e167e83ec16d48c1e47"
};

export default class FirebaseService extends Service {
    app = initializeApp(firebaseConfig);
}