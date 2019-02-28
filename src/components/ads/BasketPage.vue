<template>
  <v-container>
    <p class="page-title">Selected devices</p>
    <v-progress-linear 
      :indeterminate="true" 
      v-show='spiner'
    ></v-progress-linear>
    <hr class="mb-3">
    <div class="header-table">
      <div 
      class="header"
       v-for="header in headers"
      :key="header.index"
      >
      <p class="header-name">{{header}}</p>
      </div>
    </div>
    <hr class="mb-3">
    <div 
    class="listItem"
    :class="{'listItem-inactive': spiner }"
    v-for="(item, index) of selectItems"
    :key="item.name"
    >
      <div class="item"><img :src="item.imgUrl" alt="item Photo"></div>
      <div class="item">{{item.name}}</div>
      <div class="item">{{item.description}}</div>
      <div class="item">{{item.price}}</div>
      <div class="item">
          <v-icon
            class="buy-icon"
            size="45"
            @click="removeElem(index)"
            color="#1e90ff"
        >shopping_cart</v-icon>
      </div>
    </div>
    <div
      :class="{'listItem-inactive': spiner }"
    >
      <div class="buy-all-icon">
        <v-icon
              class="buy-icon"
              size="45"
              @click="removeElem(index)"
              color="#1e90ff"
          >shopping_cart</v-icon>
          <br>BUY ALL
      </div>
      <div class="total-sum">
          <p>Total sum: {{totalSum}} $</p>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default { 
  data() {
    return {
      totalSum: 0,
      spiner: true,
      dialog: true,
      headers:['Photo', 'Name', 'Descriptions', 'Price', 'Buy'],
    };
  },
  mounted() {
     this.showSpiner();
     this.getTotalSum()
  },
  computed: {
    ...mapState({
      selectItems: state => state.ads.selectItems,
    }),
  },
  methods: {
    ...mapActions(['createProduct', 'removeEl','getProducts']),
    removeElem(index) {
      this.removeEl(index);
    },
    showSpiner(){
      setTimeout( () => {
        this.spiner = false
      },1000)
    },
    getTotalSum(){
      this.selectItems.forEach((item, i) => this.totalSum += +item.price);
    }
  },
 
};
</script>
<style scoped>
buy-all
.buy-icon{
  margin-top: 40px;
}
.buy-all-icon,
.total-sum{
  float: right;
  width: 20%;
  text-align: center;
  font-size: 25px;
}
.total-sum{
  margin-top: 40px;
}
.buy-icon{
  margin-top: 40px;
}
.page-title {
  text-align: center;
  font-size: 38px;
  color: #1e90ff;
  font-weight: 400;
}
.header,
.item
{
  width: 20%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.header-table,
.listItem
{
  display: flex;
  flex-direction: row;
  min-width: 500px;
}
.listItem{
  height: 130px;
  border-top: 1px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  border-color: #ccc;
  line-height: 120px;
}
.listItem:hover{
  background-color: rgba(0, 0, 0, 0.1);
}
.listItem-inactive{
  display: none;
}
.item{
  font-weight: normal;
}
img{
  width: 100%;
  height: 100%;
}

</style>