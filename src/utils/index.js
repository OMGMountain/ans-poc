export default {
    // 获取基本五项
    getProperty () {
        var appid = localStorage.getItem("Ansappkey");
        var uploadURL = localStorage.getItem("AnsuploadURL")
        var isLogin = localStorage.getItem("AnsIsLogin") || false
        var platform = AnalysysAgent.getPresetProperties().$platform
        if (isLogin) {
            var xwho = localStorage.getItem("AnsUserName")
        } else {
            var xwho = AnalysysAgent.getDistinctId();
        }
        console.log('appid', appid, uploadURL, isLogin, platform, xwho)
        return {
            appkey: appid,
            serverurl: uploadURL,
            xwho: xwho,
            isLogin: isLogin,
            platform: platform
        }
    },
    param (obj) {
        var arr = [];
        for (var key in obj) {
            arr.push(key + '=' + obj[key]);
        }
        return arr.join('&');
    },

}