<template>
  <v-container>
    <p class="page-title">Selected devices</p>
    <v-progress-linear 
      :indeterminate="true" 
      v-show='showSpinner'
    ></v-progress-linear>
    <hr class="mb-3">
    <div class="header-table">
      <div 
      class="header"
       v-for="header in headers"
      :key="header"
      >
      <p class="header-name">{{header}}</p>
      </div>
    </div>
    <hr class="mb-3">
    <div 
    class="listItem"
    :class="{'listItem-inactive': showSpinner }"
    v-for="(item, index) of selectItems"
    :key="item"
    >
      <div class="item"><img :src="item.imgUrl" alt="item Photo"></div>
      <div class="item">{{item.name}}</div>
      <div class="item">{{item.description}}</div>
      <div class="item">{{item.price}}</div>
      <div class="item">
          <v-icon
            size="25"
            @click="removeElem(index)"
        >delete</v-icon>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default { 
  data() {
    return {
      headers:['Photo', 'Name', 'Descriptions', 'Price', 'Delete'],
    };
  },
  computed: {
  ...mapState({
    showSpinner: state => state.ads.showSpinner,
    selectItems: state => state.ads.selectItems,
  }),
  
},
  methods: {
...mapActions(['createProduct', 'removeEl','getProducts']),
    removeElem(index) {
      this.removeEl(index);
    },
  },
 
};
</script>
<style scoped>
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