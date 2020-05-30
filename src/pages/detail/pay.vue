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
               placeholder="如：张三">
      </div>
      <div class="pay-detail-item">
        <p class="pay-detail-item-text"> 收款人银行：</p>
        <input type="text"
               class="pay-detail-item-val"
               placeholder="如：张三">
      </div>
      <div class="pay-detail-item">
        <p class="pay-detail-item-text"> 转账金额：</p>
        <input type="text"
               class="pay-detail-item-val"
               placeholder="如：张三">
      </div>
    </div>

    <!-- 确认订单 -->
    <button class="submit-order">确认转账</button>
  </div>
</template>
<script>

export default {
  name: 'order',
  data () {
    return {

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
