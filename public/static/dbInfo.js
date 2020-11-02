let firebaseConfig = {
    apiKey: "AIzaSyB-L8dDs6_4288n6oANBvW3dPimJLeBbN4",
    authDomain: "mobile-drive-56512.firebaseapp.com",
    databaseURL: "https://mobile-drive-56512.firebaseio.com",
    projectId: "mobile-drive-56512",
    storageBucket: "mobile-drive-56512.appspot.com",
    messagingSenderId: "167101083432",
    appId: "1:167101083432:web:bcd322dc6f2ffe4ecb6a1d"
};
// Initialize Firebase and information 
let app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(app);