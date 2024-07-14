import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDQ2tDk1aSaVei_pnQZc7FUzi_MiV5dEpA",
    authDomain: "shop-react-77b26.firebaseapp.com",
    projectId: "shop-react-77b26",
    storageBucket: "shop-react-77b26.appspot.com",
    messagingSenderId: "711053063838",
    appId: "1:711053063838:web:e6ffc2aac11089404fad8f",
    measurementId: "G-ZPEEV1H2CN"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };