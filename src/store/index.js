import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        appkey: "",
        uploadURL: "",
        userName: "",
        userSex: ""
    },
    mutations: {
        userName (state, userName) {
            state.userName = userName
        },
        userSex (state, userSex) {
            state.userSex = userSex
        },
        appkey (state, appkey) {
            state.appkey = appkey
        },
        uploadURL (state, uploadURL) {
            state.uploadURL = uploadURL
        }
    }
});

export default store;