import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCesW3X9BeiIdrecPWM_J1HJZi2lgOkqck",
  authDomain: "ema-john-simple-23261.firebaseapp.com",
  projectId: "ema-john-simple-23261",
  storageBucket: "ema-john-simple-23261.appspot.com",
  messagingSenderId: "275848397347",
  appId: "1:275848397347:web:bae3a266f89c3f7571e796"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
