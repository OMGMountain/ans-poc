<template>
  <div class="hello">
    <div class="header-box">
      <router-link :to="{name:'rigister'}">
        <div class="header-box-img">
          <img src="data:image/png;base64,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"
               alt="为登录头像">
        </div>
        <p class="header-box-text">登录/注册</p>
      </router-link>
    </div>
    <div class="main-box">
      <div class="main-box-nav">
        <div class="main-box-nav-item"
             v-for="item in navList"
             :key="item.index">
          <div class="main-box-nav-item-img">
            <img :src="item.src">
          </div>
          <p class="main-box-nav-item-text">{{item.desc}}</p>
        </div>
      </div>
      <div class="ui-gray"></div>

      <div class="main-box-list">
        <div class="main-box-list-item"
             v-for="item in optList"
             :key="item.index">
          <div class="main-box-list-item-img">
            <img :src="item.src">
          </div>
          <p class="main-box-list-text">{{item.desc}}</p>
        </div>
      </div>
    </div>
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
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACEklEQVR4AWJwB7RrBxDNRVEcwH2f74tCiRQJBRACAgQKKEqAIoRFoARkAEQgISAJTWiAFhH0dvYurgkjBSg2aFUSLa3XuVzMtQruu+/sdvBHxbn355zdl/u2MvWrwmAGM5jBDKYcBgdBsIB5xERNUs/n8zkp5X+fwJcm1AwAzPgEvv4JjF3O+gRewjwbyA/j51dMt9eHFgInDHTKa3AURX8QedMw1oH3jyVEbjWOuRBiyHfwmDHWaa/BONZ/EVlpAF95/58WIneMLh9i9ohlUwgxYAUMAOMKSj348buwAsax/ocF71oAXbEC1ofXbgt0eN8aGAAmWwA8bQ1cKpXasOgTYfBLoVBotwbWY31AGHxk/QIAi84SHud562ApZYcaHYLgN9xbl3WwHussQfBJbHdaWHyOIDgVG1gI0YkL1Ahh62EY9lkHG10+JgQ+V3uKG7xI6HRejR0spezBxd4pgHGcB2MH6y6fEQAXnb15AIBlAuC0MzB+dvrNq1zXEUIMOwPrsQbXSPOqyTV4LcHTecM5WF3ZJgUGgFHnYN3lYgLgW/WSIBEwjtZ6AuDtxF6IA0AvbuDeIfZBXccmBlYJw3AEO30a8xVQDdfIqbX4Kw8MZjCDrUSdnkEQZDBlnYz6nes6ZuLEVpucrlX1Nwd13IJ1R6IvknFQxzm4/M1Gy67rMJhHmg8tfizRD4MZzGAG+5BP4NOyXq3NTiAAAAAASUVORK5CYII="></div>
          <p class="footer-item-text">购物车</p>
        </router-link>
      </div>
      <div class="footer-item footer-item4">
        <router-link :to="{name:'mine'}">
          <div class="footer-item-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACx0lEQVR4Ae2aA8wdQRCA6ya7V5tB3aC2bbtRbbvR232/a9u24tq2bdu4fcl0NtnGyY+7e2+3/yX5/v955jvPzKVpNqp1qsIX9oV9YV84NQn7wr4wQCCdiKL1BaMJgpGTNiMPke/ID+QRvnYK35sqOG0EW7qkN1pY8CxtUOoaAknktuBWJ8OE1VplZK6USBGcroBD9TIYI4xJr0XAIbsAIK32wqEg6eOCrIKO1loY5uWxMNHP7gmTXzCV5tVW2OZ0hEzUZQLaCgtGznogfF9LYZiaj2JywgNhgIRcBbUTtrlVywtZieBWO+2EMakOXgmHgqSfdsIhRvp6JYxM1E84SHt6JszpCO2EZYHglbAIWp21E4aoHEW8EoZoUl7PCw9Grngg/ExeU+sqHHD/lETm6HstHZsll+vX0vE5imorrNbyZLeEZZdE+/JQtmkw2X3OZckpmF08sxkdj+lZc2LSNxwIP4BoUsConhbMzJYdE9+fgjV7AmKsPEY28WRfStXIH5Mg+wUZD1vKZjK+Lw1x2XLYzBqMQgeVGCi+CkaO2JwOg2lW7v+2EY/1bRaYnTOrP3nwhQ0ShqBVRhbucoxiM7JbTSCeIB+QP4iNfFSvXUf2CE6mye9AjFXWCGE7yqorpwaY/AsEHIK/QVfa3KqnlbAcq4QY6S3nQgh4xG0ZQ8aKqLBq3F1FIExclTHDLizrU1UKhhAIMyEkIHMIizAsrpQRA65HIKJwskHm4qGwWrOcbJEBNWGrzMkzYcFolDayCsFptCfCECQV/u2zmhGCaFLRVWE10T8nA2jK+aTeHxKBIXdkxzFJ7FPRC5oLI/SyK8J2dNbK+ssqorNUdywsOI01RVgWKs6FGTlijjA55VjYZuQpAmZAX7kh/M4cYfLehX2YzNJHyPkcKknFgmA0Tt5No7HsQ3nAki1ev6flC/vCJuML+8J/AWznBXqCUqAEAAAAAElFTkSuQmCC"></div>
          <p class="footer-item-text">我的</p>
        </router-link>

      </div>
    </el-footer>
  </div>
</template>

<script>

export default {
  name: 'mine',
  data () {
    return {
      navList: [
        { 'index': 1, desc: "待付款", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAARVBMVEVHcEz///+kq7OkqrOkqrOkqrOtrbekqrOkqrOlqrSkqrSlqrOnr7ikqrOtrbakqrSkqrOqqrSlqrS+wsj19fb///+lqrVF8RYOAAAAF3RSTlMAAWXI8v8ZvbxmybYd8xxjxxi7////ZFKQFw8AAACVSURBVHgB7ZZDosAwFACjqa373/Sj2PfVmk0bTCz1HD60sY6ZOGv05Hk+IgJvrE/oga97MURM2IsRECdqJkkM2P43BTI1mwxI+z8AJQDgnuIn6rxwTAjEsgIWiLpimWhYKFqgbppaLKZA07bNceLipnZw8HTIF4B8yX0b+X7i4ktn8TW3+GJdfJWLHw++t/i58hg+fgHdKBIkFIzjFgAAAABJRU5ErkJggg==" },
        { 'index': 2, desc: "待收货", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAOVBMVEVHcEyqqrOkqrOkqrOkqrOkqrOtrbakqrOkqrOlqrOkq7WkqrOlrLOkqrOkq7Snr7ilqrSkqrOlqrNkWS/nAAAAE3RSTlMAG6bl/+Yc7O2lSeNK4qcd7ueofhWp8QAAAHNJREFUeAHt0TEOgCAMhWGEogoI4P0PK0FN7Na61fTfv+U985u0yTpg5O18uwWYrZfcgJ0d0PGhGxB6hhH0JEJu0uCDOcPIhyHCq5jIsDskv8KdDBOSMYi4Q6FChR7IeQQzHWYES6W6WgyWuVFYO5ATn3YCaHsOlU82zF8AAAAASUVORK5CYII=" },
        { 'index': 3, desc: "待发货", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEVHcEyqqrOkqrOkqrOkqrOtrbakqrOkqrOkq7TMzMymqrOkq7SkqrOkqrOkq7SkqrP///+kqrOlqrOorbawsMSkqrOmqrWqqrukqrOkqrOlrLOkqrOnrbbX2d739/j///+R8afgAAAAHHRSTlMAG6bm/xzs7acFVKTZ80/bAYecOA3oRQ+E0UfjKWjjagAAANxJREFUeAHtkgVyhjAQRpHF3R3uf8sWXWY2yNKR/vLQfJMXl96UL7Kiwimqook8TYdLDJGpwA1MgajeEVWBOOYkJDVeULRsx/VggiX6AUoMMYwAHono8UQfRuIkZS6ONc4vy/mrao/f0eOKzjjOJ/voAkDyRBz3PWWL+Hkn8SsWZTWWiy3A3POqsjgS6wYmmhodmlOxhg00SU7FooGNBkdLchR3tF3fdy0g4pyK3fBLRzySE7EfK/RUxPzvIlLth1Rd5ki5X4TyMh9hbQfh5gEg3D9yCD3MF/n78OUH4W8c5lBuGNAAAAAASUVORK5CYII=" },
        { 'index': 4, desc: "待评价", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA6CAMAAADSkGonAAAAb1BMVEVHcEytrbakq7SkqrOkqrOkqrOkqrOkqrOkqrOlqrT///+lrLOkqrOnq7akqrOlqrWkrLSkqrOlqrOkqrOkq7OkqrSlqrSkq7WkqrOkqrOlq7SlqrOkq7SkqrOlq7Sqqv+ltLSlqrOkqrOkq7TMzMyvmTI3AAAAJXRSTlMAHKfl/6bt5vaZAUffRvhkPvU28puT7mt2gYyXoXOqAxGz7I8FA6bNZQAAALZJREFUeAHt1QkKgzAQheEXfZO02n3f9/ufsSKgVTrUBEqh5GMd4AcxDIPoj5gkZUepmJfO0oOty4RepAodvbgqZAEdsRDDN2JoxDkxUGYlrDbFGm1WQ2FJtFkNHUtOmb8QBn9q8M8Jfg5dDNti6NjQ62cA8sHnoyNsyYHhiBrRD+sYkyk1trkBzXA2p6LelLYFyeWKhTUUeljaICzcIizcISzcIyw8ZPB2JHk6w9/lers/EP3EEznDDskc/B+uAAAAAElFTkSuQmCC" }
      ],
      optList: [
        { index: 1, desc: "我的收藏", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAD9ElEQVR4Ae2Zc4A0OwzAn23btm3btm3btu23M3uvXdy7dmb3+Nm2bdtMvmv3ctZ0Tv0jh5lm0l+RJulaFz51WbMWC2gBLaAFtIAW0AJaQAvYvAF9398iysXpLpc3gNzsMP9M9/+CHWuii+2i3D8X9G5zYt5V8PvEVq1abdQoABEqwkQKZAnIqjKyEqSzy+TjMAAblgNj3vkRJltBmxUV6C4ASeL3GwSwe/fu60e4+AM7U0MZi7ODujg7DhNOLXSTjKW3MQ9I4ZjIJR1YAR2Og9zhsNTJMCtHOTFxocvEUw6T+fB+mW4LbT6F3+2I7lyQf2Gw7of2V0SYdwvovwbPOuIKIO2GAeR+oQA6XH5ADWfFU8dUuYwT8mAyIFRiVe1Th8ljoU2HkvZyKGP5WxoFdGLpg8iemVhTR7Jq1aq1oYN/kZn8DZ/VbLXI34lelllAJn8mI3pvbXQBaB3Q/wU6+Sf+XfY97jP4biecNZeJq6ke2Epruy73jjMBqAyJ2QquH+lkIJIVF4cpCD1b32kb0WR6d3i2eM07LqNGAHGvZTrAvUdNHMrw3csArFcGkssXyer5RT2fBZ54vcABXS7uJMvzKBOAet8BZLaytTQeT+1cfG7KS7V9HOzAAeHDz2oDiUT+tibDq3g8dwdyvLxc/MzfLTOzMf9yA4DyTW2ALBFjohwO2vtPhYMbavu4moIH5PIJbYAxf3vTgBgUaGeD/+NSJT7gMgN7UN6gDeAhbBoQQzqXeecw1nHj4rhXnlIyg/7RgQNGk6m9tAEMw8JOe8Du28r+opyc7psEDqiMjFFGCkOEU5GQGKQ8uGcykvlIp0JOTOwf3ux5NxIHc48xQIzoEU7Hk2HAocfGQFsBTkJvajSbQLetjC13eepQ895UPkhCuGeNp0vRhL8vRhjKYGeTZ6I63GcoW4Mxygklo3e4eJeEbe+bgGNs1boOE210Uh2JyTNCSHjpvhCdMw6HiZuCdyzyW7I03wu96MRY/h646VUHFmMlLTA4Lp8mcIX12Qb1zOH846EDC1VH5ke5OCuAlOkhUo8ZmEy22qpB66JYYMLoQpf7sMZZj/jzMZLwjsboqVEUfgHqAgK5EGuedYB7kizLUQjXqEr3CEWW62IMzmtxtr5A4Ebi/m6UdxO4PHEvZirbXD5XbYzJ5ZcEbjjWXxr15YtyPFNoibCiAxrTICwYE7ieujzRmAGV45H76OhfSTtaQ3Wz83aBZ93IIPiMtdqsSV2fYRWa1DNB5HhMWlXiOoGW80kJ0hygsXCLy48RpAKZC++ubxYXoHizBECTyWym8RhoVje8WGbA2ye837BX2DURC2gBLaAFtIAW0AJawNUE5R46k+LZPgAAAABJRU5ErkJggg==" },
        { index: 2, desc: "管理收货地址", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADOElEQVR4Ae1ZA4xeTxD/ozaD2gpr21ac2rbj2lZQf+/dZd9593yXuo0a1LZtt1930p3cnO/dd3vcJPNxZnZ/4337T+85A/I1GYAGoAFoABqA7skANAANQMaiKniYGGkxfli+H/Uwfk3SB0XX4Df130jgzTMArYDw4QrQT0neDNJPkAHZXAvQz+Ed5UbPJt+8uCDfbUmbJM1XBJ9t9V9SsGdBV64BePTo0UJyozuSbPKyxxFzrQBRJz154AFekKE6QCfozkGAmGc8jmzqoaTxjHn/d6sLZEAWdBCgcb7mp6/grpLNBDN2tJSvFgcdoIvoveoLyEyHJfWc5fAVXq/336zKG9AFOqknSbjqB4g5h+B0lXgKEtbUDhCrJQ1L955z50karrC2doAJrUA8dJFzPuUkKTxntQKERkxCZrxucEiwFq7rdhhwu9BR7HPYCjJLISGnStsOH2c5YrXFeKv0Wwj2SXFUC0Ao1Th+QWPO/CgX1UgVqfckl7/7B0a0TEsO1sSxzk3bcOO9kQlhIuq4LBb/2YwPkrIxIE/ot6QvyjNb05t4SHqMzHKAMPnjbJlRmaCg2IpSZpGkO0mAffA4fJfFRHP5+Y1qN8vS04ezK+xFhwcx/+z0eP0DI5tJAPvRO0gS0C0INcZiyyqjTVX//fILjqyVgQpuYx5qAMiv/bW02Jh6nvKqxBAUWKwVEDEQQpXyk8IRmpE9wNpK5zUdAD8o5fPT8LJDgH2SXtzLWESTlHhtFt4TeeFzBvcwH0M8hwDy56QQRNmMz7FYZNuIiIiiKfAKHKZxGvIRoP4QtRjfjACT0FPZoIeQllNPVVDpPTHTxR42YYjmVJGBWbWL5FmpThvvSR6+toQor3RtRU9I75ZBWQ1FRmebwP4n+ifkGh+qznvv4Du0CsqvoU3ob/QAEj1pMbHWYnwG6vELEo0pr6ZGr39UI4fjY5jLkuKT8mka1fQP25CTOJrRcKU8+oZt/cclLDxeQufcGMhi4RPocSk3HnhBbj1UUvkezVhEZQ0HXvPIwjx0yl2PDc2DX/Po3ly+uLk+U4fV+UDwWe/1mbkANVfYOU8GoAFoABqABqABaAAagH8AZLjQB1PgtTkAAAAASUVORK5CYII=" },
        { index: 3, desc: "我的红包", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACIklEQVR4AWJwL/ABtGcOUXMEQRyPbdvmNTnFuMe6xtY199xiO4PU8u3UTGybp9i2PV/12541LutXh/+iu2qqf82a1yUtBmRABmRABmRABmTAaClu7LAbDDfpFcnOsj6TDugeo29OADWv1VEGtXOsn7vB7J11QAUMvwz4j7R/t8tYmU1RvJ0U57eMiVkHpCBvSTYFXp2rdaQAbpSA73IBaEstzRWgiOXEZUBHDMiAuA/AapxtOMuy6lAsM+eAUh9UwDmXLl2qnMpHdVl9gokBPlUA3ytgHCG/keliCRvye0yy8wXo6C41erxt2xUSnJvjqf5vYj9cljiZwO6Ro5YvwHOkz/GgOBPgaK1gQ80uVPYnov4YaRfptVOmgjksBOYyBspE4l+Ez1eCPZ+XTcbj2d+EGrROpFExoD+o3EPfh5wy+j8vNKqBo40UwHvBcrxEGcsm+v0s+hkE6UJN8+1rnfddVPUfaEH/lztZTgK9oulbPmbqzk5i+53qtinufd0K7pgAuFVFBWM01e0Rm0mE7Z345+CU6ETaOEA+0wAO1i2KcxDArkhTb420/a97rH4xgPtk3fVA4FKNojzoxTRzNgw5otRQc2LUDunCxUWdyZDdIscngc6IaV3UgBHr7UXkDilegRTE+iWTi4okQJyLCuzt7/efqs3JNgMyIAMyIAMyIAMWOSADMiBfvvD1WRFcgPIVdnGKARmQARmQARmQARmwDF2eB291E7NeAAAAAElFTkSuQmCC" },
        { index: 4, desc: "添加红包", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACIklEQVR4AWJwL/ABtGcOUXMEQRyPbdvmNTnFuMe6xtY199xiO4PU8u3UTGybp9i2PV/12541LutXh/+iu2qqf82a1yUtBmRABmRABmRABmTAaClu7LAbDDfpFcnOsj6TDugeo29OADWv1VEGtXOsn7vB7J11QAUMvwz4j7R/t8tYmU1RvJ0U57eMiVkHpCBvSTYFXp2rdaQAbpSA73IBaEstzRWgiOXEZUBHDMiAuA/AapxtOMuy6lAsM+eAUh9UwDmXLl2qnMpHdVl9gokBPlUA3ytgHCG/keliCRvye0yy8wXo6C41erxt2xUSnJvjqf5vYj9cljiZwO6Ro5YvwHOkz/GgOBPgaK1gQ80uVPYnov4YaRfptVOmgjksBOYyBspE4l+Ez1eCPZ+XTcbj2d+EGrROpFExoD+o3EPfh5wy+j8vNKqBo40UwHvBcrxEGcsm+v0s+hkE6UJN8+1rnfddVPUfaEH/lztZTgK9oulbPmbqzk5i+53qtinufd0K7pgAuFVFBWM01e0Rm0mE7Z345+CU6ETaOEA+0wAO1i2KcxDArkhTb420/a97rH4xgPtk3fVA4FKNojzoxTRzNgw5otRQc2LUDunCxUWdyZDdIscngc6IaV3UgBHr7UXkDilegRTE+iWTi4okQJyLCuzt7/efqs3JNgMyIAMyIAMyIAMWOSADMiBfvvD1WRFcgPIVdnGKARmQARmQARmQARmwDF2eB291E7NeAAAAAElFTkSuQmCC" },
        { index: 5, desc: "我的推荐", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADb0lEQVR4Ae2YA9BcPxDA/7at4d+1bZvD2u2gtu1Bbfdy9zW59yk51bbdYW3b191eMvcZb+69+5CZ2XnKZvf3stkk+07dPo3ytGhADagBNaAG1IAaUANqQA1I6bqvHZRPQMH7PAfoYHwZwAVDIpbmPUAq/EkA/XkO0Mk8pQDuJAre6yRjN2AwGHyXMDHVQcUeQj1dTI1i/NrfDMP3qxldtIm20Qf0JeKAxM0bhOcQf5VNRzHJzFX6eJ8dXbSFNpU++hJxQBfz1kwC+JxS749ZhxMDlK4SfJdVfbSFNpUu+hJxwLCjwkPcnpZZDy1REpx6JrPnMbg6paPP8FtW+0GbaBt9yDFJRob1PQn00BUr/qd00xdwf0a+u4dtclwWBccmhxwXF0FmO5koCxP/vVA4Hf/I4RZVCOVGknnzxMFEC6UfY/BCqKvmM7ZFHdRNEpYF4Ns02e4+oWJRYuL+zywHdFLRUDqWUh6DnFdQSeQ8hmI6iWNXiravZB9307YhRlsOCM6OkgafOhifBddr6TiDf34oEeLb9PrCESPU0xHaHU/npz2AflZgeMs+mfWAbm9j5YCTeYtTGnwfwwtCsBdhfDw67GK88v79+z/MzhqLo0wobw19jCFMDIb+mobmqyim7MH36ZYDyiTxXIWMDXvYEeGlxVPfpiQjNkmjB6wH5LvV2hsIBD63BRBDSP1VSvnvVsEZRuAnsPFaRstW25YJ4uZ/JwmbHlYBygQUlNLfNkAZOjul4X1WASax8QojxVZAQkX3cHbzlY80XIzhLZ1k9DbYfh6Mi9v0De5Q5MbZFfkSh3CEAUUH2wHlEWiBynB41osUnNzlqNPDtU2bNn0SFUBK/X+prRmhfA5unAkV3eB57NvzHxMr4d6NNRj4vh2uh+H7fni3Ge49cF2DxSj4NhPXOyfjnXCtw77C4S9GRbVkQZig6IhF8pgkbvohqoByK/UqxYb5mtxf7iJUrINrHMhqQvl8eF4IVwJ6CZg84LpHFqNuqjXP1NYsHYl0zfMmJh/zc8/7R/hwzG/JvqIPKJPCA5nxEsxUrnHDLeelGr3e1h94TW7f5NlwB26vsi78XBL9k3gasRTQ/ElfzkfzctXJvEVybOE3xuBFsYyBCSSbIxiA6zisoOnKtgbUgBpQA2pADagBNaAG1IAaMPryBuEsDmrhJRhxAAAAAElFTkSuQmCC" },
        { index: 6, desc: "我的资金", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADU0lEQVR4Ae2ZA6wkPxjA/7Zt42xGZ9s2grNt2/H5uvvSWbczzzaDs23bt9fmujt9fvsyM4trki9Y9Pt+bT/2jVbj24e0CEABKAAFoAAUgAIwdEUACkCThIbugegyEbeGcgjA8IZ+BzRLqDEx5rmGYLzcBBb8l18BiREZzJjTAKLeGslost5Ttm6k3wDNktLMs9sA4pFa+g1Zc6VnbRNE3f0CCCCKe2UEPgfhvve0BIQw/hOy9nkGeSYyMvJjQwFpAPD6ioTH6hH9TBLuw92Q5YYCklOTmfJLEKZ9qAcgu6oJTM8TYImoYAigSVJqcjs7Rc8cFmZFVbiAE2MIIDk9iSm8Tn1F70RNXGCdN+BIuKeugGYbrujJe0BCc4yoRBRF+Yy6ghrQfNtUXyPnLrabt+32+C9KKgAAlCf6IvQ/JegdqLoFWqULoNke/gfnD4uL9VFnzPflrG6e0/8Wtabb7X6TgKWoAQf9qzkgsCgd1NSAthT3O2LMW3sgdtI85ptgJ/1vCRF1N++LmgNS5QDiaFUJGmRURwAgGsed9EnqHrr4oM0W/TVVwBQ9DLOG19IdzoKbE13PmM67NHXonSZqEEUPvEW2K/4bveDMNuVvmo68PgpRR4MqGbkvd2ViIXS/rTWcw5HyKVl7vzd6SniaocU2UbqGU75aQzgWqJCL28TdhncT9NTUjoKK3Eszv5PwUg4uIz4+/gO/NLzU/6gfMkPuEciqGkTM3hzcWQjxD36dydBISiMqM+gYwPjL8sPh2lwAu69FlNaorcEDuFJKKSlhl1IBnWXrvAAS7hFQY0MCtoG7Wot98+d975H/pKlBC80PuLkoCQTvcA3qC2CRO5e9JULb1M3BEq09A3Lwa7VGfkdnKMzYO2Xpwk0QjedOPs/lyvkooCfbYValLjH0ETP4IE3YxcPJLbgy7JLZHvFrMIzuadAZzJ2KvagrB2HEPwDiG+w3j8jGNAiqtwkA0WbOr2YX0aUf4L4fEHSPLzk5Oe8S45M9hfIeSW7DlWGYK/NWBOvrEstt+JznrYF2B3TGyeVMRIGDFpANcOt7gw6DZbKPBaDgfx8EUB7OgVG5CmHknyH1AEqHxOwVKoUOj1/7F14BKAAFoAAUgAJQAApAAfgSm9z+C9snQYEAAAAASUVORK5CYII=" }
      ]
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
.header-box {
  width: 100%;
  height: 200px;
  padding-top: 40px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #fa800a, #fa800a);
}
.header-box-img {
  width: 72px;
  height: 72px;
  margin: 0 auto 0;
}
.header-box-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.header-box-text {
  height: 40px;
  line-height: 80px;
  color: #fff;
}
/* 中间导航 */
.main-box-nav {
  display: flex;
  height: 70px;
}
.main-box-nav-item {
  flex: 1;
}
.main-box-nav-item-img {
  width: 28px;
  height: 28px;
  margin: 10px auto 0;
}
.main-box-nav-item-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.main-box-nav-item-text {
  font-size: 14px;
  line-height: 36px;
}
.main-box-list-item {
  overflow: hidden;
  border-bottom: 1px solid #eee;
  height: 46px;
  line-height: 46px;
}
.main-box-list-item-img {
  float: left;
  width: 28px;
  height: 28px;
  margin-left: 20px;
  margin-top: 10px;
}
.main-box-list-item-img img {
  display: block;
  width: 100%;
  height: 100%;
}
.main-box-list-text {
  float: left;
  text-align: left;
  text-indent: 20px;
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
