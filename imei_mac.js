import "log.js"

function getImei(){
    var TelephonyManager = Java.use("android.telephony.TelephonyManager");

    //DeviceId
    TelephonyManager.getDeviceId.implementation = function(){
        var result = this.getDeviceId();
        printBacktrace("getDeviceId :",result);
        return result;
    }

    //imei
    TelephonyManager.getImei.implementation = function(){
        var result = this.getImei();
        printBacktrace("getImei :",result);
        return result;
    }

    //meid
    TelephonyManager.getMeid.implementation = function(){
        var result = this.getMeid();
        printBacktrace("getMeid :",result);
        return result;
    }

    //imsi
    TelephonyManager.getSubscriberId.implementation = function(){
        var result = this.getSubscriberId();
        printBacktrace("getSubscriberId :",result);
        return result;
    }
}

function getMac(){
    var wifiInfo = Java.use("adnroid.net.wifi.WifiInfo");
    wifiInfo.getMacAddress.implementation = function (){
        var result = this.getMacAddress();
        printBacktrace("getMacAddress :",result);
        return result;
    }

    var NetworkInterface = Java.use("java.net.NetworkInterface");
    NetworkInterface.getHardwareAddress.implementation = function (){
        var result = this.getHardwareAddress();
        printBacktrace("getHardwareAddress :",result);
        return result;
    }

    var getMacfromRuntime =  Java.use('java.lang.Runtime').exec.overload('java.lang.String');
    getMacfromRuntime.implementation = function(cmd){
        var result = this.getMacfromRuntime.call(cmd);
        if(cmd.indexof("net/wlan0/address") || cmd.indexof("/sys/class/net/eth0/address")){
            printBacktrace("getMacfromRuntime :",result);
        }     
        return result;
    }
}



function main(){
    getMac();
}

Java.perform(main);