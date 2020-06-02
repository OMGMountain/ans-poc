<template>
  <div class="hello">
    <header class="ui-header">
      <div class="ui-header-back"
           @click="goBack">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAL1QTFRFAAAA////j4+WipKSjo6VkZGRjY2UkJCQjIyTj4+PjJKSjo6Ui5GRjo6Ti5CQjY2Sio+PjJCQjo6Si5CQjY2Si4+PjY2Rio+TjIyRjo6SjJCQjo6Si4+PjY2Ri4+TjY2Ri4+SjIyQio6SjIyQio6Rio6Pi42Qio2Pio2Qio2Qi42PioyQi42PioyQi42Pi4yQio2Qi4yPio2Qi42PioyQioyPi42QioyPi42Qi4yPio2Qi42PioyQi42QioyPk+ZOBAAAAD50Uk5TAAIiIyQlJicoKSorLC0uLzA1Njc4OTo7PD0+P0BBQkNERUZHSJCR1Nbh4uPk5ebn6Onq6+zw8fLz9PX29/i+TOnQAAAA10lEQVRIx+3URxLCMAwFUAGhl9AJvXcIJfTi+x8LycMB9BcwLND6/Rk7kT/Rf749xdk4hPjS0ZgJ4MsnY8xU76tn9gdX7Wvig5zaexf2+6zaN8TvMmrfvIpPq33rxn6bUvuO+E1C7bt39n5c7fvi1zG1HzzYr6JqPxK/dPT3fbJfRPQLNGU/DxMWWCABe6QlcCQa2o/kAAn0NxD1bCKO3ENWyU8AibZdviSQaF2x9eYHBz4gorp90hkg4YGl8a6lwAUSFSm+Q/6DVcnlDZYxUQGs+//88LwAI74l0PQXLosAAAAASUVORK5CYII=">
      </div>
      <p class="ui-header-text">转账</p>
    </header>
    <!-- 收款人信息 -->
    <div class="pay-detail">
      <div class="pay-detail-item">
        <p class="pay-detail-item-text"> 收款人姓名：</p>
        <input type="text"
               class="pay-detail-item-val"
               v-model="peopleName"
               placeholder="收款人姓名">
      </div>
      <div class="pay-detail-item">
        <p class="pay-detail-item-text"> 收款人银行：</p>
        <input type="text"
               v-model="bankName"
               class="pay-detail-item-val"
               placeholder="收款人银行">
      </div>
      <div class="pay-detail-item">
        <p class="pay-detail-item-text"> 转账金额：</p>
        <input type="number"
               v-model="money"
               class="pay-detail-item-val"
               placeholder="转账金额">
      </div>
    </div>

    <!-- 确认订单 -->
    <button class="submit-order"
            @click="transfer">确认转账</button>
  </div>
</template>
<script>
import axios from 'axios'
import utils from '../../utils/index'
import $ from 'jquery'

export default {
  name: 'transfer',
  data () {
    return {
      money: "",
      peopleName: "",
      bankName: ""
    }
  },
  methods: {
    goBack () {
      history.back();
    },
    transfer () {
      if (this.money == "" || this.peopleName == "" || this.bankName == "") {
        console.log("缺少相关信息")
        return;
      }

      var baseStr = utils.param(utils.getProperty());
      var transferInfo = {
        bank: this.bankName,
        amount: this.money,
        is_usual: false
      }
      var goodstr = utils.param(transferInfo);
      console.log(333, goodstr)
      var that = this
      // 先发送请求
      //   axios.get('/api/transfer?' + baseStr + '&' + goodstr)
      //     .then(function (response) {
      //       if (response.data.code == 200) {
      //         console.log("埋点成功")
      //       }
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });

      let baseURL = localStorage.getItem("AnsAPIURL")

      $.ajax({
        url: baseURL + '/transfer?' + baseStr + '&' + goodstr,
        type: 'get',
        // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
        dataType: 'jsonp',
        success: function (res) {
          // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
          // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
          console.log(9999999)
          console.log(res)
        }
      })
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
.ui-header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.ui-header-back {
  position: absolute;
  width: 100px;
  height: 50px;
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
.submit-order {
  width: 300px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  position: fixed;
  background: #fa800a;
  border: none;
  outline: none;
  bottom: 20px;
  left: 50%;
  margin-left: -150px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
}
.orange {
  color: #fa800a;
}
.pay-detail {
  width: 95%;
  margin: 0 auto;
}
.pay-detail-item {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.pay-detail-item-text {
  width: 100px;
  float: left;
  line-height: 40px;
}
.pay-detail-item-val {
  width: 200px;
  font-size: 14px;
  outline: none;
  border: none;
  float: left;
  height: 40px;
}
</style>
