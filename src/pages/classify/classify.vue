<template>
  <div class="hello">
    <div class="ui-header">商品分类</div>
    <ul class="ui-brand">
      <li class="ui-brand-item"
          @click="clickBand(index)"
          v-for="(item,index) in brandList"
          :key="item.index">{{item.brand}}</li>
    </ul>
    <div class="ui-gray"></div>
    <el-header class="hot-recommend">热门推荐</el-header>
    <el-main class="main-box">
      <router-link :to="{name:'detail'}">
        <div class="hot-box"
             v-for="item in goodList"
             :key="item.index">
          <!-- 图片 -->
          <div class="hot-box-img">
            <img :src="item.src">
          </div>
          <!-- 详情介绍 -->
          <div class="hot-box-desc">
            <p class="hot-box-desc-name">
              <img class="hot-box-desc-name-icon"
                   src="@/assets/618.png"> {{item.name}}</p>
            <p class="hot-box-desc-price"><span class="hot-box-desc-price-icon">￥</span>{{item.price}}</p>
            <p class="hot-box-desc-desc">{{item.desc}}</p>
          </div>
        </div>
      </router-link>
    </el-main>
    <el-footer class="footer-box">
      <div class="footer-item footer-item1">
        <router-link :to="{name:'index'}">
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABx0lEQVR4AWJwL/AZURjQrj3AyhUGYRiujbhujFph7TbeoHYbe4PajF1HVYza7px/7Y1R23anX3nNw9k7m7xrzBPsYVMFK1jBClawghV848aNEegkeoSeonPGmFElCQZuBfqOuJq2lgyYmVsCtBtxHR0qFottRIOz2WxHQE4irmeXk8lkV5HgWCzWHYAk4oZEREXc9hUFjkaj/TH0LcSN7AHgQ0WAMex49BKxzd4aY6YHGkxE8zDoZ8QO9RUtCyQY2DWOQStFRFsCA2bmVhhqP2KXO5hMJlv7CiaizhjkLGKPumR3sWUH2xMDZBB7XCEej/fxFGxZ1kD88B3EPnUfDfEEjB+ajF4j9rk3RDTVTfAv7CL0BXFA+oqWugImog0BglZuk6NgfOEuxAFvt13wP+xMxEKa6QSYBIHJCfBHQeCPToBZUgr+lYIVrGAFK1jBCj5GRGE0q1LhX6+VEvibZVmheuxFCeG9X8WDiWhHA7a5d4gHG2MG1Rf8673iwbi0bOChVdng+mL/peAKKVjBClawghV8VxD4rhPgQ4LAB+2C/x34fioA/DSZTPawDf6HRkfwpfcDCL7/azbUU08fVrCCpadgBf8EtVB3wVub18UAAAAASUVORK5CYII="></div>
          <p class="footer-item-text">首页</p>
        </router-link>
      </div>
      <div class="footer-item footer-item2">
        <router-link :to="{name:'classify'}">
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAFVBMVEVHcEz/iBL6gQr6gAv6gAr6gAr6gAqW66y0AAAAB3RSTlMAHKbm/+2nMPnTbQAAAE1JREFUeAFjIBuMAkZlFxAwEkBmIoCoCwQEIjMRIAUq5oTMRAATqJgzMhMBXGAAiYlDelSacKASjhLCEcqYDEsDCOYwT6mjKXU0pY4CAF0upynPNQ7eAAAAAElFTkSuQmCC"></div>
          <p class="footer-item-text">分类</p>
        </router-link>
      </div>
      <div class="footer-item footer-item3">
        <router-link :to="{name:'cart'}">
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACEklEQVR4AWJwB7RrBxDNRVEcwH2f74tCiRQJBRACAgQKKEqAIoRFoARkAEQgISAJTWiAFhH0dvYurgkjBSg2aFUSLa3XuVzMtQruu+/sdvBHxbn355zdl/u2MvWrwmAGM5jBDKYcBgdBsIB5xERNUs/n8zkp5X+fwJcm1AwAzPgEvv4JjF3O+gRewjwbyA/j51dMt9eHFgInDHTKa3AURX8QedMw1oH3jyVEbjWOuRBiyHfwmDHWaa/BONZ/EVlpAF95/58WIneMLh9i9ohlUwgxYAUMAOMKSj348buwAsax/ocF71oAXbEC1ofXbgt0eN8aGAAmWwA8bQ1cKpXasOgTYfBLoVBotwbWY31AGHxk/QIAi84SHud562ApZYcaHYLgN9xbl3WwHussQfBJbHdaWHyOIDgVG1gI0YkL1Ahh62EY9lkHG10+JgQ+V3uKG7xI6HRejR0spezBxd4pgHGcB2MH6y6fEQAXnb15AIBlAuC0MzB+dvrNq1zXEUIMOwPrsQbXSPOqyTV4LcHTecM5WF3ZJgUGgFHnYN3lYgLgW/WSIBEwjtZ6AuDtxF6IA0AvbuDeIfZBXccmBlYJw3AEO30a8xVQDdfIqbX4Kw8MZjCDrUSdnkEQZDBlnYz6nes6ZuLEVpucrlX1Nwd13IJ1R6IvknFQxzm4/M1Gy67rMJhHmg8tfizRD4MZzGAG+5BP4NOyXq3NTiAAAAAASUVORK5CYII="></div>
          <p class="footer-item-text">购物车</p>
        </router-link>
      </div>
      <div class="footer-item footer-item4">
        <router-link :to="{name:'mine'}">
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACiUlEQVR4Ae2aQ5hdQRBGY9veJ5vYtp1VVrHtbGIb69jGMlbfOzPPim3bqvz1fXfWwet+053pxZl5rjqXXdWdo+OEbtmK7CRrha2wFbbCVtgKE1Gu8+fPtwJLgQNugvfgA7h14cIFFywXQrQlotxGC0OoO4gB+kMuQ76vccK8V5H4epb4RzYSUR5jhJHwNkBJchjSOXUXZtlBgGSAo2Si1sLxeLwIEn0NSBKfhBDltBVGcuMkymbu5dnaCiPBDECSua6lcDgcLozkvgFSsJcraSfsOE5TFbKecE/thJFYb4XCQ3QUHgxIEdN1FO6vSpiv/joKt1Io3E874YyMjKoKz+Faut6HIwqE7/GYWkthHhUpEF6n7UgrPT29tOyxNKime7U0U6LwUu3LQ27TINHjEi5U7tWrV/NrL+wNM0sh6UQSwjf8fn9Fo3paoVCoBBI/8Q+yIhgMljWyicd9Ka9GfvkHom9wGE+Nx+P5jO9LQ6YkZEbi/ykWA+TxFpwFY3AIl/lvG/GQL5qWllbMzjwYJGyFXdetzoU7WI5z9AiI4fEd/H8BvoCv4CW/BuLgKFgBhuBwr2GEsBCiBSQ2ggeAkuQB2OQ4TkuthHlaBaIDeV4IkCIucwyOlaXCXuMuCihFRDlmyoW5PvVKwe+AUsx3js05pETY7/fnRcAdHDyL2cm5qBP29iwC7QWkCfs4J2XC2LPzOZBmLFAiLISonXnOasZ3x3HqSBX21mn4AGmK/0/Xh6R8klv9dIwc4YABwmEpwvihevyDhtBIhvAiU4S5UElamDsSBgm7MoTvAjKERzKEnxkk/FzGObzGIOF1SQt7xcJiXk2jsehNvmBxi9f2tKywFTYZK2yFfwGm25uZfOtK2AAAAABJRU5ErkJggg=="></div>
          <p class="footer-item-text">我的</p>
        </router-link>
      </div>
    </el-footer>
  </div>
</template>

<script>
import iphone from "@/assets/iphone.jpg"


export default {
  name: 'classify',
  data () {
    return {
      brandList: [
        { "index": 0, brand: "华为手机", id: 5893 },
        { "index": 1, brand: "苹果手机", id: 8182 },
        { "index": 2, brand: "小米手机", id: 1123 },
        { "index": 3, brand: "OPPO手机", id: 4234 },
        { "index": 4, brand: "Vivo手机", id: 1135 },
      ],
      goodList: [
        { 'index': 0, 'src': iphone, 'name': 'Apple iPhone11', 'price': '5999', 'desc': '黑色 128G，官方自营' },
        { 'index': 1, 'src': iphone, 'name': 'Apple iPhone11', 'price': '5999', 'desc': '黑色 128G，官方自营' },
        { 'index': 2, 'src': iphone, 'name': 'Apple iPhone11', 'price': '5999', 'desc': '黑色 128G，官方自营' },
        { 'index': 3, 'src': iphone, 'name': 'Apple iPhone11', 'price': '5999', 'desc': '黑色 128G，官方自营' }
      ]
    }
  },
  methods: {
    clickBand (index) {
      AnalysysAgent.track("view_item", {
        item_id: this.brandList[index].id,
        item_name: this.brandList[index].brand
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui-gray {
  width: 100%;
  height: 20px;
  background: #eee;
}
/* 头部标题 */
.ui-header {
  width: 100%;
  height: 50px;
  background: #fa800a;
  color: #fff;
  line-height: 50px;
}
.ui-brand-item {
  width: 100%;
  height: 40px;
  background: #fff;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.ui-brand-item:last-child {
  border: none;
}
.hot-recommend {
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
/* 商品列表 */
.main-box {
  padding: 10px 10px 70px;
}
.hot-box {
  overflow: hidden;
  margin-bottom: 5px;
  color: #333;
}
.hot-box-img {
  float: left;
  width: 120px;
  height: 120px;
}
.hot-box-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.hot-box-desc {
  float: left;
  width: 200px;
  height: 120px;
  border-bottom: 1px solid #ccc;
}
.hot-box-desc-name {
  height: 40px;
  text-align: left;
  line-height: 40px;
}
.hot-box-desc-name-icon {
  display: inline-block;
  width: 34px;
  height: 14px;
  vertical-align: baseline;
}
.hot-box-desc-price {
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.hot-box-desc-price-icon {
  font-size: 12px;
}
.hot-box-desc-desc {
  height: 40px;
  line-height: 40px;
  text-align: left;
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
.el-footer {
  border-top: 1px solid #ccc;
  background-color: #fefefe;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0;
}
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
  color: #333;
}
a {
  text-decoration: none;
}
.router-link-exact-active p {
  color: #fa800a;
}
</style>
<style>
.el-carousel__indicators--horizontal {
  bottom: -77px !important;
}
</style>
