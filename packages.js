import "log.js"

function get_runing_app(){
    ActivityManager = Java.use("android.app.ActivityManager");
    ActivityManager.RunningAppProcessInfo.implementation = function(){
        var result = this.RunningAppProcessInfo(arg);
        printBacktrace("RunningAppProcessInfo :",result);
        return result;
    }
    
    ActivityManager.getRunningAppProcesses.implementation = function(){
        var result = this.getRunningAppProcesses(arg);
        printBacktrace("getRunningAppProcesses :",result);
        return result;
    }

    //android 5.0 以下使用
    ActivityManager.getRunningTasks.implementation = function(){
        var result = this.getRunningTasks(arg);
        printBacktrace("getRunningTasks :",result);
        return result;
    }   
}

function installPackage(){
    PackageManager = Java.use("android.content.pm.PackageManager");
    PackageManager.getInstalledPackages.implementation = function(arg){
        var result = this.getInstalledPackages(arg);
        printBacktrace("getInstalledPackages :",result);
        return result;
    }

}

function readClipboard(){
    ClipboardManager = Java.use("android.content.ClipboardManager");
    ClipboardManager.getPrimaryClip.implementation = function(){
        var result = this.getPrimaryClip(arg);
        printBacktrace("ClipboardManager getPrimaryClip :",result);
        return result;
    }

    ClipboardManager.getText.implementation = function(){
        var result = this.getText(arg);
        printBacktrace("ClipboardManager getText :",result);
        return result;
    }
}