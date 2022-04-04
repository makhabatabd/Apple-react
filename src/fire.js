import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9yWngBuN9c9AmfOFLW66qZfIKcpstFEY",
  authDomain: "js17-f62f5.firebaseapp.com",
  projectId: "js17-f62f5",
  storageBucket: "js17-f62f5.appspot.com",
  messagingSenderId: "184275356947",
  appId: "1:184275356947:web:e98f20984b966a7ac25ee6",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
