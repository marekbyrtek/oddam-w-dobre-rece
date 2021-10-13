import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCckFlXeRhzg74briH6Hq0w0qitR8zuo54",
    authDomain: "oddam-w-dobre-rece-9273c.firebaseapp.com",
    projectId: "oddam-w-dobre-rece-9273c",
    storageBucket: "oddam-w-dobre-rece-9273c.appspot.com",
    messagingSenderId: "590375628730",
    appId: "1:590375628730:web:fae0efc9b432d9a81db783"
});

export const auth = app.auth();
export default app;