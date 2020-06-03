// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AnalysysAgent from 'ans-javascript-sdk/SDK/AnalysysAgent_JS_SDK.es6.min.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store/index'


Vue.use(ElementUI);
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

// 获取appkey
var appkey = localStorage.getItem("Ansappkey") || ""  // 'heatmaptest0916'
var uploadURL = localStorage.getItem("AnsuploadURL") || "" // 'https://arkpaastest.analysys.cn:4089'

AnalysysAgent.init({
    appkey: appkey,//APPKEY
    uploadURL: uploadURL,//上传数据的地址
    auto: true,
    autoTrack: true,
    debug: 2,
    autoWebstay: true,
    autoHeatmap: true,
    visitorConfigURL: "",
    SDKFileDirectory: "./static/SDK"
})


function random (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 生成随机数
let user_level = random(0, 6);
let user_age = random(18, 45)
let user_sex_random = random(0, 2)
let user_sex = "";
if (user_sex_random == 0) {
    user_sex = "男"
}
if (user_sex_random == 1) {
    user_sex = "女"
}

// 初始化注册通用属性  user_level:(0-5随机) user_age : 23 ,user_sex
AnalysysAgent.registerSuperProperties({
    user_level: user_level,
    user_age: user_age,
    user_sex: user_sex
})


