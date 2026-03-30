
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAkwJFFHDIUFiLj60c9R1x7PogZmuqwthY",
    authDomain: "webcarros-c5b8b.firebaseapp.com",
    projectId: "webcarros-c5b8b",
    storageBucket: "webcarros-c5b8b.appspot.com",
    messagingSenderId: "880717485089",
    appId: "1:880717485089:web:e878f6b9792afdc9e7bf60"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };