import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCb5TCIKG-fz8JOfuybTjdL0KUoENpd0eM",
    authDomain: "fruitswala-e0b03.firebaseapp.com",
    databaseURL: "https://fruitswala-e0b03-default-rtdb.firebaseio.com",
    projectId: "fruitswala-e0b03",
    storageBucket: "fruitswala-e0b03.appspot.com",
    messagingSenderId: "275485021009",
    appId: "1:275485021009:web:4b89e7bbc808c4b7a47970"
  };

  const app=getApps.length >0 ?getApp():initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  const storage=getStorage(app);

  export {app, firestore, storage};