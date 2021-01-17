import "log.js"

function getImei(){
    var TelephonyManager = Java.use("android.telephony.TelephonyManager");

}

function getMac(){
    var wifiInfo = Java.use("adnroid.net.wifi.WifiInfo");
    wifiInfo.getMacAddress.implementation = function (){
        var tmp = this.getMacAddress();
        printBacktrace("getMacAddress ",tmp);
        return tmp;
    }
}

function main(){
    getMac();
}

Java.perform(main);