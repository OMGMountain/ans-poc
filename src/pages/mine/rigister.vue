<template>
  <div class="hello">
    <header class="ui-header">
      <div class="ui-header-back"
           @click="goBack">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAL1QTFRFAAAA////j4+WipKSjo6VkZGRjY2UkJCQjIyTj4+PjJKSjo6Ui5GRjo6Ti5CQjY2Sio+PjJCQjo6Si5CQjY2Si4+PjY2Rio+TjIyRjo6SjJCQjo6Si4+PjY2Ri4+TjY2Ri4+SjIyQio6SjIyQio6Rio6Pi42Qio2Pio2Qio2Qi42PioyQi42PioyQi42Pi4yQio2Qi4yPio2Qi42PioyQioyPi42QioyPi42Qi4yPio2Qi42PioyQi42QioyPk+ZOBAAAAD50Uk5TAAIiIyQlJicoKSorLC0uLzA1Njc4OTo7PD0+P0BBQkNERUZHSJCR1Nbh4uPk5ebn6Onq6+zw8fLz9PX29/i+TOnQAAAA10lEQVRIx+3URxLCMAwFUAGhl9AJvXcIJfTi+x8LycMB9BcwLND6/Rk7kT/Rf749xdk4hPjS0ZgJ4MsnY8xU76tn9gdX7Wvig5zaexf2+6zaN8TvMmrfvIpPq33rxn6bUvuO+E1C7bt39n5c7fvi1zG1HzzYr6JqPxK/dPT3fbJfRPQLNGU/DxMWWCABe6QlcCQa2o/kAAn0NxD1bCKO3ENWyU8AibZdviSQaF2x9eYHBz4gorp90hkg4YGl8a6lwAUSFSm+Q/6DVcnlDZYxUQGs+//88LwAI74l0PQXLosAAAAASUVORK5CYII=">
      </div>
      <p class="ui-header-text">注册</p>
    </header>
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
      name: '',
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
.ui-gray {
  width: 100%;
  height: 20px;
  background: #eee;
}
.ui-header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.ui-header-back {
  position: absolute;
  width: 100px;
  height: 100%;
  left: 0;
}
.ui-header-back img {
  display: block;
  width: 24px;
  height: 24px;
  margin-top: 12px;
  margin-left: 12px;
}
.ui-header-text {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #fa800a;
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
.login {
  width: 90%;
  height: 45px;
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-top: 40px;
  background: #fa800a;
  font-size: 18px;
  font-weight: 600;
}
</style>
<style>
.el-carousel__indicators--horizontal {
  bottom: -77px !important;
}
</style>
