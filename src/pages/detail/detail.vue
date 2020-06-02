<template>
  <div class="hello">
    <header class="ui-header">
      <div class="ui-header-back"
           @click="goBack">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAL1QTFRFAAAA////j4+WipKSjo6VkZGRjY2UkJCQjIyTj4+PjJKSjo6Ui5GRjo6Ti5CQjY2Sio+PjJCQjo6Si5CQjY2Si4+PjY2Rio+TjIyRjo6SjJCQjo6Si4+PjY2Ri4+TjY2Ri4+SjIyQio6SjIyQio6Rio6Pi42Qio2Pio2Qio2Qi42PioyQi42PioyQi42Pi4yQio2Qi4yPio2Qi42PioyQioyPi42QioyPi42Qi4yPio2Qi42PioyQi42QioyPk+ZOBAAAAD50Uk5TAAIiIyQlJicoKSorLC0uLzA1Njc4OTo7PD0+P0BBQkNERUZHSJCR1Nbh4uPk5ebn6Onq6+zw8fLz9PX29/i+TOnQAAAA10lEQVRIx+3URxLCMAwFUAGhl9AJvXcIJfTi+x8LycMB9BcwLND6/Rk7kT/Rf749xdk4hPjS0ZgJ4MsnY8xU76tn9gdX7Wvig5zaexf2+6zaN8TvMmrfvIpPq33rxn6bUvuO+E1C7bt39n5c7fvi1zG1HzzYr6JqPxK/dPT3fbJfRPQLNGU/DxMWWCABe6QlcCQa2o/kAAn0NxD1bCKO3ENWyU8AibZdviSQaF2x9eYHBz4gorp90hkg4YGl8a6lwAUSFSm+Q/6DVcnlDZYxUQGs+//88LwAI74l0PQXLosAAAAASUVORK5CYII=">
      </div>
      <p class="ui-header-text">商品详情</p>
    </header>
    <!-- swiper -->
    <el-carousel height="375px">
      <el-carousel-item v-for="item in headerswiper"
                        :key="item.index">
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
    <div class="ui-gray"></div>
    <div class="good-detail">
      <p class="good-detail-desc">{{detail.desc}}</p>
      <p class="good-detail-price">{{detail.price}}<span class="good-detail-price-old">{{detail.oldPrice}}</span></p>
    </div>
    <div class="footer">
      <div class="footer-cart">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAAPZQTFRFAAAA////qqqqlZWVmZmZkpKej4+XkpKZk5OZlI6akJCbj4+ZkJCVlZCaj4+UkZGZkpKWkZGUko+WkJCXj4+Wko+VkY6WkJCVj4+UkJCVjo6VkY+WkJCVkJCUkY6VkY2VkZGTkY+VkZGXj4+VkY+UkI+UkI6Vj4+UkI6Vj4+UkI+VkJCUkI+VkI+WkJCUj4+UkI+UkJCUkJCVkI+VkI6VkI+UkI+Vj4+Uj46UkI+Vjo6Tj46UkI6Uj4+Uj4+Uj46Vj4+VkI+UkI+Vj4+UkY6UkI+Vj4+VkI+UkI+Vj46Uj4+UkI+Vj46UkI+Uj46Uj46VkI+Uj46UST1I2gAAAFF0Uk5TAAEGDBQVICMoKy4yNTU5PD9KS0xQW19laWpvcnN1eHt9f3+AhoiTlJWgpqeoqqywsbO1tr6/ysvS09XW19jZ2+bq7u/w8fLz8/T4/P39/v7+LKj16QAAASJJREFUSMftltdSwzAQRdcJvbcAoTfRO6GXmE7o5/9/hhHDW6y1Z81TxvfFnl2fsXRkayRSpEiLJ6os+yxOlA1whb9clXPAjJuHfQSr5qmPQs0Md8CtXfon9PqbzjrJeau1BelHmPPXGYJZCcKXsKe+WTO6C9favDZgMtichScNPoWhYLMHviJFaAPCwuQD+s1L+QDz4e4IHCvwBeyLpmRNgXfgRpVdVeBpeDbKFumG70iT3a6t5DsMmP+be1gwyhY5hwNF9roKb0PdKFtkCl5CvRNdtkhX+OtOlf2re9C8Sd3BUnJnOE22yBkcGmWLbKKkmgKPaXBf2v679RpCG644EiSk5OLYlbJVm+K8WJet2pTYPxZnq/4vnGvYuYQVabn8AEcpdCQzmiL3AAAAAElFTkSuQmCC">
      </div>
      <p class="footer-addCart">加入购物车</p>
      <p class="foot-buy"
         @click="goOrder">立即购买</p>
    </div>
  </div>
</template>
<script>
import detail from "@/assets/iphone.jpg"

export default {
  name: 'detail',
  data () {
    return {
      headerswiper: [
        { 'index': 1, 'src': detail },
        { 'index': 2, 'src': detail },
        { 'index': 3, 'src': detail }
      ],
      detail: {
        desc: "官方正品，自营黑色，128G",
        price: "￥5199",
        oldPrice: "￥5999"
      }
    }
  },
  methods: {
    goBack () {
      history.back();
      console.log('go back');
    },
    goOrder () {
      this.$router.push({ path: '/detail/order' })
    }
  },
  beforeCreate () {
    console.log("url", location.href)
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
.good-detail-desc {
  width: 90%;
  line-height: 40px;
  text-align: left;
  margin: 0 auto;
}
.good-detail-price {
  width: 90%;
  line-height: 40px;
  text-align: left;
  margin: 0 auto;
}
.good-detail-price-old {
  font-size: 12px;
  text-decoration: line-through;
  padding: 0 10px;
}
/* swiper */
.el-carousel {
  width: 100%;
  height: 375px !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item img {
  display: block;
  width: 100%;
  height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 底部 */
.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
}
.footer-cart {
  flex: 1.5;
}
.footer-cart img {
  display: block;
  width: 30px;
  height: 30px;
  margin-left: 12px;
  margin-top: 8px;
}
.footer-addCart {
  flex: 4;
  background: #fa800a;
  color: #fff;
  line-height: 50px;
}
.foot-buy {
  flex: 4;
  color: #fff;
  line-height: 50px;
  background: #f40000;
}
</style>
<style>
.el-carousel__indicators--horizontal {
  bottom: -77px !important;
}
</style>
