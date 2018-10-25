function BrowserType() {
    var userAgent = navigator.userAgent //取得浏览器的userAgent字符串 
    var isOpera = userAgent.indexOf("Opera") > -1 //判断是否Opera浏览器 
    // var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera //判断是否IE浏览器 
    var isIE = window.ActiveXObject || "ActiveXObject" in window
    // var isEdge = userAgent.indexOf("Windows NT 6.1 Trident/7.0") > -1 && !isIE //判断是否IE的Edge浏览器 
    var isEdge = userAgent.indexOf("Edge") > -1 //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1 //判断是否Firefox浏览器 
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1 //判断是否Safari浏览器 
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && !isEdge //判断Chrome浏览器 

    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+)")
        reIE.test(userAgent)
        var fIEVersion = parseFloat(RegExp["$1"])
        if (userAgent.indexOf('MSIE 6.0') != -1) {
            return "IE6"
        } else if (fIEVersion == 7) {
            return "IE7"
        } else if (fIEVersion == 8) {
            return "IE8"
        } else if (fIEVersion == 9) {
            return "IE9"
        } else if (fIEVersion == 10) {
            return "IE10"
        } else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
            return "IE11"
        } else {
            return "0"
        } //IE版本过低
    } //isIE end 

    if (isFF) {
        return "Firefox"
    }
    if (isOpera) {
        return "Opera"
    }
    if (isSafari) {
        return "Safari"
    }
    if (isChrome) {
        return "Chrome"
    }
    if (isEdge) {
        return "Edge"
    }
} //myBrowser() end 


var bor = BrowserType()
if(bor === "Edge"){
    console.log('检测到您使用的浏览器为' + bor)
    // alert('抱歉,本站目前暂不支持' + bor + '浏览器！推荐使用Chrome浏览器')
    // window.opener = null
    // window.open("", '_self', "")
    // window.close()
}else if((bor === "IE6")||(bor === "IE7")||(bor === "IE8")||(bor === "IE9")||(bor === "IE10")||(bor === "IE11")){
    console.log('检测到您使用的浏览器为' + bor)
    alert('抱歉,本站目前暂不支持' + bor + '浏览器！推荐使用Chrome浏览器')
    window.opener = null
    window.open("", '_self', "")
    window.close()
}else{
    console.log('检测到您使用的浏览器为' + bor)
}
