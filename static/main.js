/**
 * 登陆用户ID 暂时写死
 * @type {number}
 */
var UID = 1

/**
 * 这里存放了车位的经纬度坐标信息
 * @type {{lng: number, lat: number}[]}
 */
var sites = []

/**
 * 此数组保存了每个站点的车辆的具体情况 [名称，数量，已使用数量]
 * @type {*[]}
 */
var cars = []

var firebaseConfig = {
    apiKey: "AIzaSyD_gcMOfUCGhDgsv6kbE_oQkEC6kRR66jo",
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
 * 初始化站点信息
 */
db.collection("sites").get().then((querySnapshot) =>
{
    querySnapshot.forEach((doc) =>
    {
        sites.push(doc.data())
    });
});

/**
 * 初始化站点车辆信息
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
    const url = location.search; //获取url中"?"符后的字串
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