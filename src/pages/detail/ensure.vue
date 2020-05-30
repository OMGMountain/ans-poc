<template>
  <div class="hello">
    <header class="ui-header">
      <div class="ui-header-back"
           @back="goBack">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAL1QTFRFAAAA////j4+WipKSjo6VkZGRjY2UkJCQjIyTj4+PjJKSjo6Ui5GRjo6Ti5CQjY2Sio+PjJCQjo6Si5CQjY2Si4+PjY2Rio+TjIyRjo6SjJCQjo6Si4+PjY2Ri4+TjY2Ri4+SjIyQio6SjIyQio6Rio6Pi42Qio2Pio2Qio2Qi42PioyQi42PioyQi42Pi4yQio2Qi4yPio2Qi42PioyQioyPi42QioyPi42Qi4yPio2Qi42PioyQi42QioyPk+ZOBAAAAD50Uk5TAAIiIyQlJicoKSorLC0uLzA1Njc4OTo7PD0+P0BBQkNERUZHSJCR1Nbh4uPk5ebn6Onq6+zw8fLz9PX29/i+TOnQAAAA10lEQVRIx+3URxLCMAwFUAGhl9AJvXcIJfTi+x8LycMB9BcwLND6/Rk7kT/Rf749xdk4hPjS0ZgJ4MsnY8xU76tn9gdX7Wvig5zaexf2+6zaN8TvMmrfvIpPq33rxn6bUvuO+E1C7bt39n5c7fvi1zG1HzzYr6JqPxK/dPT3fbJfRPQLNGU/DxMWWCABe6QlcCQa2o/kAAn0NxD1bCKO3ENWyU8AibZdviSQaF2x9eYHBz4gorp90hkg4YGl8a6lwAUSFSm+Q/6DVcnlDZYxUQGs+//88LwAI74l0PQXLosAAAAASUVORK5CYII=">
      </div>
      <p class="ui-header-text">确认订单</p>
    </header>
    <!-- 订单详情 -->
    <div class="order">
      <div class="order-item">
        <div class="order-item-img">
          <img src="@/assets/iphone.jpg"
               alt="">
        </div>
        <div class="order-item-detail">
          <p class="order-item-detail-desc">111111111111</p>
          <p class="order-item-detail-price">22222222222222</p>
          <div class="order-item-detail-num">
            <p class="order-item-detail-num-text">数量：</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 总成交 -->
    <p class="all-num">订单总额: <span class="orange">￥{{numAll}}</span></p>
    <!-- 确认订单 -->
    <button class="submit-order">提交订单</button>
  </div>
</template>
<script>
import detail from "@/assets/iphone.jpg"

export default {
  name: 'ensure',
  data () {
    return {
      orderList: [
        { index: 0, desc: "", num: "" },

      ],
      numAll: 0,
      numAllPrice: 0
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
/* 订单列表 */
.order {
  width: 90%;
  margin: 0 auto;
}
.order-item {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.order-item-img {
  float: left;
  width: 120px;
  height: 120px;
}
.order-item-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.order-item-detail {
  float: left;
}
.order-item-detail-desc {
  text-align: left;
  line-height: 40px;
}
.order-item-detail-price {
  text-align: left;
  line-height: 40px;
}
.order-item-detail-num {
  text-align: left;
  line-height: 40px;
  height: 40px;
  width: 200px;
  overflow: hidden;
}
.order-item-detail-minus {
  float: left;
  width: 30px;
  border: 1px solid #ccc;
  text-align: center;
  height: 30px;
  line-height: 34px;
  margin-top: 5px;
  text-indent: 3px;
}
.order-item-detail-num-text {
  float: left;
}
.order-item-detail-value {
  width: 60px;
  height: 40px;
  line-height: 40px;
  outline: none;
  border: none;
  text-indent: 0;
  float: left;
  text-align: center;
}
.order-item-detail-plus {
  float: left;
  width: 30px;
  border: 1px solid #ccc;
  text-align: center;
  height: 30px;
  line-height: 34px;
  margin-top: 5px;
}
.all-num {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  line-height: 40px;
}
.orange {
  color: #fa800a;
}
</style>
