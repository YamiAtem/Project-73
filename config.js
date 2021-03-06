import * as firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyD4ZaDUhb-c6ji6q4V5gbo-TkgDSJPaZw0",
    authDomain: "buzzerapp-97d47.firebaseapp.com",
    databaseURL: "https://buzzerapp-97d47-default-rtdb.firebaseio.com",
    projectId: "buzzerapp-97d47",
    storageBucket: "buzzerapp-97d47.appspot.com",
    messagingSenderId: "804102767255",
    appId: "1:804102767255:web:a10bd467539b386b1b9fd2",
    measurementId: "G-STXM8TYHC2"
};

// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

export default firebase.default.firestore();