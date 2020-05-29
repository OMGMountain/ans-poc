<template>
  <div class="hello">
    <el-page-header @back="goBack"
                    content="注册">
    </el-page-header>
    <div class="ui-name">
      <div class="ui-name-icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEVHcEzMzMzAwMC+vr6+vr6+vr7AwMC+vr6+vr7///++vr6+vr6/v7/CwsK/v7++vr6+vr7BwcG+vr6/v7++vr6+vr7a2tq+vr6+vr6+vr6+vr7AwMDCwsK+vr6+vr7ExMTCwsK+vr6+vr6/v7/AwMC/v7/JycnU1NS+vr6/v7++vr4rELeGAAAAK3RSTlMABVWl2fNR3P8CitRwKgz5a0LlGJbxB4L0zn5BJserJy7j3jgtwBMGR5W/+JgZhgAAARpJREFUeAHtlAWyowAUwHCCu0td73+/dcNhv4w1oy/ztAWET+KFKMmKqiqyJK7L13R+oWsr0g0TLNtxXce2wDQWC0w83/hV63uYi/vgBX+jwGNhK1HH/zf20ecvl7A6WxsW0myBjN0VNvJsgYLTFQ7KbIGK2xUu6vaC7SttP3r7z7r9j9v+aGx/+LY/3pNIIb8IpRXpUZzwhySOFtLTLIeirGrXrauygDxLZ9s30O7+xrsWmpkh+wPHU1edjhzOk/0PXK59eb1wmJiRNlzEoRYvNON3ZByvY/56JBtdKOc0PvpEPrZUTCtM0BIP5S1hN1WwI7kN5J1CmKTgPnAPyumCksfAPammCyqeA6dQTxfUKEsfmOHH5kN58RVTBhFBuqDfewAAAABJRU5ErkJggg=="
             alt="">
      </div>
      <input v-model="name"
             type="text"
             class="input"
             placeholder="请输入用户名"></input>
    </div>
    <div class="ui-password">
      <div class="ui-password-icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEVHcEy+vr6/v7++vr6+vr6+vr7ExMS+vr6+vr7AwMC+vr6+vr6+vr7AwMDCwsK/v7++vr6+vr6+vr7ExMS+vr6/v7++vr7ExMSrnx4VAAAAGHRSTlMA/xxrttkam/xO8vqqWiYMbv2uI/518w2prMnqAAAAv0lEQVR4Ad1UAxLEQBC8jtYbJ/9/6Tm20cXpGutxXwDnM/hiusG5asgw3eB0NWxo0KDubWCYlg3YlmmMUncIxR+UOMP6jENIpV1XKynA2ZC+5yMIMyEM4HsD/iM/Lsux77Pe/Dky/cwCvK8OgqBOBSA9/aQirHOhoN3dNSGbpITZaWBBNUkFq9PAhm6SGnanQQK3SbpIphmkSKanNL3o6W2dPrjpqzFp+brB/GnrPf2App/o5CeQvZkkyd7M/ngBUHoHoLjsuC8AAAAASUVORK5CYII="
             alt="">
      </div>
      <input v-model="password"
             type="password"
             class="input"
             placeholder="请输入密码"></input>
    </div>
    <div class="ui-gray"></div>
    <button class="login">登录</button>

  </div>
</template>

<script>

export default {
  name: 'rigister',
  data () {
    return {
      input: '',
      password: ""
    }
  },
  methods: {
    goBack () {
      history.back();
      console.log('go back');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  background: #eee;
}
.ui-gray {
  width: 100%;
  height: 20px;
  background: #eee;
}
/* 头部返回 */
.el-page-header {
  padding-left: 10px;
  height: 50px;
  line-height: 50px;
}
.ui-name {
  overflow: hidden;
  border-bottom: 1px solid #eee;
  height: 40px;
}
.ui-password {
  overflow: hidden;
  height: 40px;
}
.ui-name-icon {
  float: left;
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.ui-name-icon img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 8px auto 0;
}
.ui-password-icon {
  float: left;
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.ui-password-icon img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 8px auto 0;
}
.input {
  width: 200px;
  border: none;
  outline: none;
  height: 40px;
  font-size: 14px;
  float: left;
  margin-left: 10px;
}

/*底部导航 */
.footer-box {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
}
/* 底部导航 */
.footer-item {
  flex: 1;
}
.footer-item1 {
  flex: 0.8;
}
.footer-item4 {
  flex: 0.8;
}
.footer-item-icon {
  width: 30px;
  height: 30px;
  margin: 5px auto 0;
}
.footer-item-icon img {
  display: block;
  width: 100%;
  height: 100%;
}
.footer-item-text {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.login {
  width: 90%;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-top: 40px;
  background: #fa800a;
}
</style>
<style>
.el-carousel__indicators--horizontal {
  bottom: -77px !important;
}
</style>
