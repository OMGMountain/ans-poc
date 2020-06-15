<template>
  <div class="hello">
    <el-container direction="vertaical">
      <el-header>易观方舟</el-header>
      <el-main>
        <!-- swiper -->
        <el-carousel height="150px">
          <el-carousel-item v-for="item in headerswiper"
                            :key="item.index">
            <img :src="item.src">
          </el-carousel-item>
        </el-carousel>
        <!-- icon 导航 -->
        <div class="ui-icon">
          <div class="ui-icon-item">
            <div class="ui-icon-item-icon">
              <img src="data:image/png;base64,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">
            </div>
            <p class="ui-icon-item-text">优惠活动</p>
          </div>
          <div class="ui-icon-item">
            <div class="ui-icon-item-icon">
              <img src="data:image/png;base64,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">
            </div>
            <p class="ui-icon-item-text">积分商城</p>
          </div>
          <div class="ui-icon-item">
            <div class="ui-icon-item-icon">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAC6FBMVEVHcEw83NxH58pR8sZI6shN7sZI6shK68dI6cdI6cdH6chI6chI6sdI6cdD5ck/4cs83c1S+sxR8sRQ8cVO78VN7sZM7cZL7MZK68dJ6sdI6cdH6MhG58dF58hE5shE5chD5chC5MlC48lC5Mc+38w83c9S8sRQ8sRP8MRQ8cVC5MhB48lA4slA4so/4co94MtH7ehS8sVR8sRP8MVL7MdE5sk+4Mo938o+38o938pT9sU938s83ss73co428xT88VS88Q73cs63Ms428s32sw22cw428053Mw22c022c022M012M00180018wz1s4y1cwu0dAy1c4w088w1M4v0s8hxtQs0NAu0c8w08+h7uf7/v3+//////8u0c4t0M8t0M996tq18PCt7u5s5tdG3c8rz9AlydLy/Pwrz88/4MbZ9vfX9vY01skv0sspzdDs+/v6/f79/v/n+foozNL2/f30/f3q+vsrzswpzdEtz93k+Pkny9Eqz9M73cfh+PkmyMomytIhxdQ42cQpzM0mydIlydEew9Unys0dwdXV9fUkyNIjx9Iix9M118Xb9vcixcocwNbd9/jG8/VZ4+glyM4ixtIew9Te9/gz3OEb1dw82t+/7O3U8/MhxtMhxdMg1t2J3d8fxNQ32sgw0sW98/V03uGW39+u5ubJ7/AgxdIew9Xj+PnY9vgs2t+P3N3Q8fIfxNPl+PlN5Ocm196A3N3b9fYixs8+4OUt190dwMsew9SU4+YdwtMcwdTs+/ye4OG35+gXvNYfw88Yvdbw+/wavtYbwNXy+/wav9QrzscZv9YdwtEZvtb4/f4avcgcwNAYvdY/4cr6/v4Zvc4XvNYWutcbv9MWu9YWvNgnyMcWuMkYvdEausAXtr6s3+O75OgOrr4RscIWus4ewcZHwMbL6+5CvMgUutchxMYOrbcJp7IGpK4Goq8Lq7gVu9c12M0Us8AUudcx1M8Vudcdw9YrztEfwtYdwtVITphGAAAA+HRSTlMACS9LY3+PpLTD0d7r+Z5ySw+34/////////////////////9ZGXPE/////////7sFrP/////////qOv///9+c////////hf+u/8b//////1//////UN//e///////7v/////////D////////////////qP//////D///OP////9o//96/43/nP///7T////O///////c/////////+T///H///////////v/////////////////////////////wP+y/6f/////gv///////+H////c//9c///////////////////s////////crf//5z6LrdH6xSSoeEAAApHSURBVHgB7NIDkkRBEIThsW3btu2Z+x9oM18tAmurD/DFH1mt+vL3/9QarU5vMJrMFqvNbrdZLWaT0WHQO3Uujfq1plur93h9Pp8/EAgGg4FQOByJRKKxeDyRSKZS6UzW4si5X6zmC8VSuVwC6/fTDYUJR6OAwSYrlWqmVq83Gs1c6yWspt3plEvdUhdugME9pRcs3EQ/lU5nqrUa3MFwNHY+m554OnDL5S53kN6QzBDlDpxB3MFgMJzO5gvX86ZdrhS3BJe54obD0UgsGkuIm5bcwWg4m81n601T87Sr9XbolhSXQ4jLXrrJZIW91RrdIXpn6/UGL/eUq+90VsyVXn/whpWz0QVcq8EFTHcOeLvd7Q+Psq0lcwF3u5IbEJe9+GdJ9qarsu9oAHZG9gh4tz+pH3E94jLXJyvAlR2Us7GXLmo5BNwNco8I3p/Pl4fl5fUO6BVXzhaTGWSHKmrv9t0owTvAV5SWxZsaXxBFf5pkGxsXvnHZRFdxV2hcm3HDIWHcXf/o3FdVrx8aqdHV4X6n6xZ8+fr1Y1O/WAfNbalYM3C5bS5aM/iVuCovNID7yf3F/dXTxPO/wFbXQjQATHnRinEK7OR9/UFp4LxfPR7L23B/bxu94pcCK6zyOzbW19cndQP32TPFVfsArOJaluWzGu0zekEezJq1VV8d7AM0SN2wZa8Ql/WSB8vn8/k/N+gxsOAiL2+Zvg6mFsCKBtU38Yt1ABV5AQ74/cFQHfhWlQfEJXAXrcNjXTeKy7WA3g9vias9BAL+QDBce5H+ocfGXNFrHpsLtdB1U3GfKg8cV/v1Ud5gMBKtAd8369vCep1aUItj8YTNE49xi5GX/Sq9ViCgwMlIZKK6JoMjOA/s13luUgsXncm47Uz8qVqHD6CKX4/kBXdycrJ65YYo713xq98suBedU1NT0wk9dsKemZqaneO8X4AlvaQhAvD8QhV4mDTc1XFZQ2+Pq79/bHaRcoKIb/6LWZx1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">
            </div>
            <p class="ui-icon-item-text">订单</p>
          </div>
          <div class="ui-icon-item">
            <div class="ui-icon-item-icon">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAC61BMVEVHcEz/P5j/OLH7N7P8NrT8NrL7NrP7Nrb7NrP7NbH7Naz7Na37Na37Na38NKX7Nab7NrP8Naz8Naf/Oqr6Nrb7Nrb7Nbb7NbX7NbT7NbP7NbL7NbD7Na/6Na37Na77Naz7Nar8Naj8Naf8Nab7NKb7NKP8NJz/OYj/OZv7Nrj8Nan8NKX8NaP8NaH/Vab7Nrn8NKH8NKD7NJ/9Nqj6Nrr8NJ77NJ38NKD/NJL7Nrr8NJ38NJz9M5T6Nrr8NJv8NJn8M5f9NJn9NJj8M5f9M5b9M5D8M5X9NJX7M5v8M5P9NJP8M5H9M5H7MpH/NIn9M4/8Mo79M4n7M5j9M479M4z/Mnn5SK37d7/8lcv7oND8hcT5XK77SKD9M4v8vd/9xN/80Ob9yeH5QKb5M6H6P579vdj6crX/Mnb/+fz/7/b/6PH/9/r/4+78sNX6RKT6Q53/+fv/7vX/8/j8z+H6wtr+M4r////5u9X93ev82eb/6vL9Mon4tM/5sM73pcb4Mp36x9r/4Oz6MYz+M4j4q8r3n8T2mb/4ksD3MIz9Mob/MoD2MZn2krz1irj+Mof2hLb1f7H/7PP2L4b0d6z0b6f2kbr/5/DzV5n+MoTzLovzZ6LzYZ3zLIH7Mor+MoP2MJLxPInxPX/5MIf/M3z/cKj+MoL/M4D/Mnn4L4L/MXX1LX3+MoD+Mn//MnryK3n4L377MYH/MXLyLYX/MXX9MX3/Mnr/Mnr/Mnz/Mnj/MnrvKnzuKHP+sc//tNHtKHD5MZT+utX/MXn/x93zK3X8MXv/MXj/0+T/eq3/WZf/MXf/2uj/w9v/Xpv/hbT4Lnn/jrr/MXb/ZaD+MXT/5e//nsT/aqT/MXP+MXP/rs3+MXL/Mm3/MXL/8fb/q8z0K3H/MXD/daz5LnX9MHf/MW3/9fn/MW7/MW//MW7/+vz/MXT//f7//v/5LXP/MWzpJGruKG3/MGz9M5H8M5X/MGz/M3L/MWv/M4D/M3n/MXbEQXbZAAAA+XRSTlMACS5KZH6Toa7E0d7r+beehnJhDrfh/////////////////////1oQGf//////Bf///+o6t///3U7///+45P///4X/rv/F//////////4z///d////c//////////p////////////X/////////////////////////////////////////////+n////////////////////////////////aP//fo3/m////7T///+//87/2eX/7v///////////////////////////////////////////1P//////////9z/rP///8P////s////nOT6LYfhR95N7jJNAAAKm0lEQVR4AezMAwFDUQAAwG/btp77p5sSzL4Ax/29HC+Ikqyomm6Ylm1bpqE7muvJfiAK/LVnKHpRnKRpludFWZZV3dRt23ZH/TCM02y4y3rxuvk6ACBJ0izLi6I4vFXTnF7Y9X0/TBOaMZ6Js9BLWkFjbM9IWXS3DQVhtNwui2HOU8qVHTDJzIIwo6nM/3+V73tjZh2t77nnzsxrcbXvHLDzbb7KMMD1+f3rz8ZGb2yapjkB7iQ7CHaulUGt0Jdcn++jf2srEAyNl/ZR2AyLruTlN88OLe6q6AILbiRiRe+N5t6PhU2zxZW87CBcyas+GJpLcMSKx63E2ijuQ9MMC3cCeaUvM+AXrlLYB3yCDWwFLCueiCeSqaHYT4/DYRHm2KZmhDsHXcHSd1XvA8fmD9AXwolEOpHM3B3C3TSbeaWv5J0n9p34Sl6Ojb5WAL74ksl0NjeY/DisO0zImgl3DtzWWahV6LIvO4gvqIl0MpnPFzID+7LCBMFTk8DK9s63OnDN2Pcj5kbdSKTIDBRO5wu2bQ/ofB9cmRszECzrINx3mvv+gw4hutwHTYUuwI7jrvXd3xi5E5rbPIvW80BbOQvpEAlYxSY3S2HX9bZ3+oBxF11nIb5teVXzLHgV4su8xDqe43lurs8d95yFrK9wlxWMW1dMsuhCGB1sx3ZcfLt7vde9SS7XDHlbr5mGkssM6AuuzlsklWByCwXH9VxvF9/e/qfu94x5W7pcM9qSqGiLNeMnuvH4QfHgIMk9kwwuOrjAHh4eHXeBn0zUz63xquvlPTk9O7+4NAxS4Stjs4oHlxfnZ6dXrIuxObbLDvA9PDo6uu48kzf116FtbOCe3pTK5UrprFrjlhny6MSLn89KlXK59OWrnbdlzTyP2MO9I3zfOsDP6ufWeHUWgFWnpfL3Hz9//S79+Vv7aPjqa1b896f0+/8t5fWgJEkTRQE4fqyt4HqrV4G1X2Btsydq7Gr32DM5tm3b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">
            </div>
            <p class="ui-icon-item-text">红包</p>
          </div>
        </div>
      </el-main>
      <el-header>热门推荐</el-header>
      <el-main class="main-box">
        <div class="hot-box"
             v-for="(item,index) in goodList"
             :key="item.index"
             @click="goDetail(index)">
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
      </el-main>
      <el-footer class="footer-box">
        <div class="footer-item footer-item1">
          <router-link :to="{name:'index'}">
            <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB7klEQVR4Ae3aw79VURTA8Yy1bjbnWbNs2+Y/UJOMg9w4jzJG2a5ZxjzbrrNPn9Xa2XiH+941+D0erO971/vm6zS+e06Vq2ABC1jAAhawgD0HmngW7vAsuMPd56/3enamWVaCGTiJe8fRjykbZ2cNmDYPKKgsWKphf2kNba5dxGgwLaqEny7C9I8dovllShkJpoVQmQGnOPrPLjG6plFgmpOpzYNf4Shv4S2aDQ2NACsXW/PQjzkK2HPlQudUg30Lh/GgbzkKKeVbMC6VYB5uGkdRpCx0UwOmw60KeRaujAj7NRtX0/ImhRMF04JyJRi7J3Ls1w4GvdsKgq3K2LMxYj93kdwyNWIF0xysyye+xlFC3SQHGsQCVi625xM+5SjhnikXOkYK9i0YxSfyOEpJyndgbCRgPvgsjtKYstAOFaxsWJJW7Fc0LA0F7Ds4MO3Yz+lZA4OVBSdMAetZA4P5QK9NAetZwwCTSQlYwAIWsIAFLGAB67Z6Fk7wLRz0bfpn+nfZBPaVk+n9t/PobXhbZTxYWTjvn19N4W2NB5OD9f4VrLc1H8zLpf+ztGo8OA8rGAL+moAFLGABC1jA1w0CXw8DvMYYsI2rA4I/L3zDfQPA92k2VAkC/hG9jruZQrCeaZ2eUd4+LGABm56ABfweJF3rsUofdZMAAAAASUVORK5CYII="></div>
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
    </el-container>
  </div>
</template>

<script>
import swiper1 from "@/assets/swiper1.jpg"
import swiper2 from "@/assets/swiper2.jpg"
import swiper3 from "@/assets/swiper3.jpg"
import iphone from "@/assets/iphone.jpg"
import xmgj from "@/assets/xmgj.jpeg"

export default {
  name: 'index',
  data () {
    return {
      headerswiper: [
        { 'index': 1, 'src': swiper1 },
        { 'index': 2, 'src': swiper2 },
        { 'index': 3, 'src': swiper3 }
      ],
      goodList: [
        { 'index': 0, 'src': xmgj, 'name': '薅羊毛半年期理财', 'price': '9999', 'desc': '9999起存，半年收益666' },
        { 'index': 1, 'src': xmgj, 'name': '长久计划五年期', 'price': '50000', 'desc': '年收益超过5%' },
        { 'index': 2, 'src': xmgj, 'name': '中长期一年理财', 'price': '20000', 'desc': '时间一年，收益可观' },
        { 'index': 3, 'src': xmgj, 'name': '中长期三年理财', 'price': '30000', 'desc': '时间不长，5%收益，超划算' }
      ]
    }
  },
  methods: {
    goDetail (index) {
      let _this = this
      this.$router.push({
        name: 'detail',
        params: {
          name: _this.goodList[index].name,
          price: _this.goodList[index].price,
          desc: _this.goodList[index].desc
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
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

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__indicators {
  bottom: -77px !important;
}
/* 图片 */
.el-carousel__item img {
  display: block;
  width: 100%;
  height: 100%;
}
/* icon导航 */
.ui-icon {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
}
.ui-icon-item {
  flex: 1;
}
.ui-icon-item-icon img {
  display: block;
  width: 44px;
  height: 44px;
  margin: 10px auto 0;
}
.ui-icon-item-text {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
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
.footer-box {
  display: flex;
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
