import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDcCea01924p9z8u3IL-IILWW6dbonBET4",
  authDomain: "vestidosonline-2360a.firebaseapp.com",
  projectId: "vestidosonline-2360a",
  storageBucket: "vestidosonline-2360a.appspot.com",
  messagingSenderId: "154364978931",
  appId: "1:154364978931:web:536e6707aaa1839ddb7986"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);