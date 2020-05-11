<template>
  <div class="home">
    <div class="banner">
      <router-link to>
        <img src="../assets/imgs/banner_1.png" alt />
      </router-link>
    </div>
    <div id="shuju">
      <ul class="title">
        <li>币种</li>
        <li>最新成交价</li>
        <li>最高</li>
        <li>24h涨跌幅</li>
      </ul>

      <ul class="bizhong" v-for="(item,index) in coinDatas" :key="index">
        <li>{{item.coinName}}</li>
        <li>{{item.coinData.close}}</li>
        <li>{{item.coinData.high}}</li>
        <li>
          <span>{{item.coinChg+'%'}}</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coins: ["btcusdt", "ltcusdt", "ethusdt", "etcusdt", "bchusdt","adausdt"],
      coinDatas: []
    };
  },

  mounted() {
  
    setInterval(() => {
      this.coinDatas= this.getData()
   
    }, 2000);
  },

  methods: {
    getData() {
      function formatterDateTime() {
        var date = new Date();
        var month = date.getMonth() + 1;
        var datetime =
          date.getFullYear() +
          "" + // "年"
          (month >= 10 ? month : "0" + month) +
          "" + // "月"
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
          "" +
          (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
          "" +
          (date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : date.getMinutes()) +
          "" +
          (date.getSeconds() < 10
            ? "0" + date.getSeconds()
            : date.getSeconds());
        return datetime;
      }

      var coinData = {};
      var coinChg = 0;
      var coinName = "";
      var coinDatas = [];
      for (var i in this.coins) {
        $.ajax({
          type: "post",
          url: "http://route.showapi.com/1614-2",
          dataType: "json",
          async: false,
          data: {
            showapi_timestamp: formatterDateTime(),
            showapi_appid: "214201", //这里需要改成自己的appid
            showapi_sign: "9902c34f539d4b66aa2524446154ed55", //这里需要改成自己的应用的密钥secret
            coin: this.coins[i]
          },

          error: function(XmlHttpRequest, textStatus, errorThrown) {
            alert("操作失败!");
          },
          success: function(result) {
            //console变量在ie低版本下不能用
            coinData = result.showapi_res_body.item;
            let open = parseFloat(coinData.open);
            let close = parseFloat(coinData.close);
            coinChg = (((close - open) / open) * 100).toFixed(2);
            coinName = coinData.symbol.substring(0, 3).toUpperCase();
            coinDatas.push({ coinData, coinChg, coinName });
          }
        });
      }
      return coinDatas;
    }
  }
};
</script>
<style scoped>
/* 轮播图样式 */
.banner {
  width: 100%;
  height: 250px;
}
.banner img {
  width: 100%;
  height: 250px;
}
/* 数据区域标题样式 */
.title {
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  color: #999999;
  line-height: 50px;
  border-bottom: 1px solid #bfbfbf;
  text-align: center;
  font-size: 14px;
}
.title > li {
  width: 25%;
}
.bizhong {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #bfbfbf;
}
.bizhong > li {
  text-align: center;
  width: 25%;
  line-height: 50px;
  color: #666;
  font-size: 14px;
}
.bizhong > li > span {
  display: block;
  line-height: 30px;
  background: #58b926;
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  width: 70px;
  margin-left: 10px;
}
.bizhong > li:nth-child(4) {
  height: 50px;
}
a{
  text-decoration: none;
}
</style>