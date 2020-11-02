/**
 * login userr
 * @type {number}
 */
var UID = 1

/**
 * The latitude and longitude coordinate information of the parking space is stored here
 * @type {{lng: number, lat: number}[]}
 */
var sites = []

/**
 * This array saves the specific conditions of each station's vehicles [name, quantity, used quantity]
 * @type {*[]}
 */
var cars = []

var firebaseConfig = {
    apiKey: "AIzaSyB-L8dDs6_4288n6oANBvW3dPimJLeBbN4",
    authDomain: "mobile-drive-56512.firebaseapp.com",
    databaseURL: "https://mobile-drive-56512.firebaseio.com",
    projectId: "mobile-drive-56512",
    storageBucket: "mobile-drive-56512.appspot.com",
    messagingSenderId: "167101083432",
    appId: "1:167101083432:web:bcd322dc6f2ffe4ecb6a1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

/**
 * Initialize site information
 */
db.collection("sites").get().then((querySnapshot) =>
{
    querySnapshot.forEach((doc) =>
    {
        sites.push(doc.data())
    });
});

/**
 * Initialize site vehicle information
 */
db.collection("cars").get().then((querySnapshot) =>
{
    querySnapshot.forEach((doc) =>
    {
        cars.push(doc.data())
    });
});


function GetRequest()
{
    const url = location.search; //Get the string after the "?" character in the url
    let theRequest = new Object();
    if (url.indexOf("?") != -1)
    {
        let str = url.substr(1);
        strs = str.split("&");
        for(let i = 0; i < strs.length; i ++)
        {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}