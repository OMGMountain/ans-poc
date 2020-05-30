<template>
  <div class="hello">
    <header class="ui-header">
      <p class="ui-header-text">购物车</p>
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
            <p class="order-item-detail-minus">➖</p>
            <input type="number"
                   class="order-item-detail-value"
                   v-model="numAll">
            <p class="order-item-detail-plus">✚</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 总成交 -->
    <p class="all-num">订单总额: <span class="orange">￥{{numAll}}</span></p>
    <!-- 确认订单 -->
    <button class="submit-order">去付款</button>
    <el-footer class="footer-box">
      <div class="footer-item footer-item1">
        <router-link :to="{name:'index'}">
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABx0lEQVR4AWJwL/AZURjQrj3AyhUGYRiujbhujFph7TbeoHYbe4PajF1HVYza7px/7Y1R23anX3nNw9k7m7xrzBPsYVMFK1jBClawghV848aNEegkeoSeonPGmFElCQZuBfqOuJq2lgyYmVsCtBtxHR0qFottRIOz2WxHQE4irmeXk8lkV5HgWCzWHYAk4oZEREXc9hUFjkaj/TH0LcSN7AHgQ0WAMex49BKxzd4aY6YHGkxE8zDoZ8QO9RUtCyQY2DWOQStFRFsCA2bmVhhqP2KXO5hMJlv7CiaizhjkLGKPumR3sWUH2xMDZBB7XCEej/fxFGxZ1kD88B3EPnUfDfEEjB+ajF4j9rk3RDTVTfAv7CL0BXFA+oqWugImog0BglZuk6NgfOEuxAFvt13wP+xMxEKa6QSYBIHJCfBHQeCPToBZUgr+lYIVrGAFK1jBCj5GRGE0q1LhX6+VEvibZVmheuxFCeG9X8WDiWhHA7a5d4gHG2MG1Rf8673iwbi0bOChVdng+mL/peAKKVjBClawghV8VxD4rhPgQ4LAB+2C/x34fioA/DSZTPawDf6HRkfwpfcDCL7/azbUU08fVrCCpadgBf8EtVB3wVub18UAAAAASUVORK5CYII="></div>
          <p class="footer-item-text">首页</p>
        </router-link>
      </div>
      <div class="footer-item footer-item2">
        <router-link :to="{name:'classify'}">
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAFVBMVEVHcEzIyMjDw8PDw8PDw8PDw8PDw8NNc7pKAAAAB3RSTlMAHKbm/+2nMPnTbQAAAE1JREFUeAFjIBuMAkZlFxAwEkBmIoCoCwQEIjMRIAUq5oTMRAATqJgzMhMBXGAAiYlDelSacKASjhLCEcqYDEsDCOYwT6mjKXU0pY4CAF0upynPNQ7eAAAAAElFTkSuQmCC"></div>
          <p class="footer-item-text">分类</p>
        </router-link>
      </div>
      <div class="footer-item footer-item3">
        <router-link :to="{name:'cart'}">
          <div class="footer-item-icon"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAPAA8AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMABgYGBgYGCgYGCg4KCgoOEg4ODg4SFxISEhISFxwXFxcXFxccHBwcHBwcHCIiIiIiIicnJycnLCwsLCwsLCwsLP/bAEMBBwcHCwoLEwoKEy4fGh8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/dAAQABP/aAAwDAQACEQMRAD8A+qaKwNe0P+244o/PMPlkn7u4HPtkdK4+2s5PCuv20by+ZDcjaWxtHJxyMnocGvNxOOqUKiUqfuXS5rrr5HoYfB061NuNT37N8tu3men0UUV6R54UUUUAFFFFAH//0PqmuP8AGln5+li6QfNbuG/4C3B/XBrsKgurdLu2ltpPuyqVP4jFc2Moe3ozpd1/wx0YSv7GtGr2Z4n/AMJBrX/P3L/31R/wkGtf8/cv51mTRPBK8MgwyMVI9wcGo6/NXiq6dnN/ez9BWGovVQX3I1/+Eg1r/n7l/Oj/AISDWv8An7l/Osiij63X/nf3sf1Wj/IvuR1+g6trV5q9vbm5d1LZcMcjaOT+let15t4Est0txqDDhQI1+p5P9Pzr0mvuMgjU+re0qNu769tj43O5Q+sclNJWXQ//0fqmiiigDx7xhZfZdYaVRhbhRIPr0P6jP41y1e66taaVcW/m6sqmOLncxK4z7jB59O9YdjovhHUlZ7KMSBeDh5AR9QSDXxuOyKc8TJ0pxXNrZvXz0sfW4POoww8faQk7aXS0PJqK9n/4RPw//wA+3/kR/wD4qs6zsPBk939ntFR5lPClnIOPTcdrfrXLLh2tFqM6kVfzf+R0Rz6jJNwhJ28l/ma/hqy+w6NBGRhnHmN9X5/QYFbtFFfb0KSpU4047JWPjq1V1JyqS6u5/9L6pooooAwfEemT6tpptrdgJFYOAeA2MjH61jeFNAvtLmlur3CF12BAQe4OTjjtxXb0Vw1MvpTxEcU78y+47YY+rCg8MvhZBdQ/aLaW33bfMRkyO24YzXm+keE9VttVinudqRQuH3Bgd23sB1598V6fRRisvpYicKlS94hhsfVoQlTp7SCiiiu44j//2Q=="></div>
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
import detail from "@/assets/iphone.jpg"

export default {
  name: 'cart',
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
  background: #fa800a;
  border: none;
  outline: none;
  margin-left: -150px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
  margin: 20px auto;
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
/* 底部导航 */
.footer-box {
  display: flex;
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
