<template>
<v-container>
    <p class="page-title">Jayway Сollection </p>
    <div 
    class="basket"
    @click="sendItem()"
    >
      <v-btn
      to="/basket"
      outline
      class="basket-btn"
      flat: false
      >
       <v-icon
        size="45"
        >delete</v-icon>
        <span class="basket-counter">({{selectItem.length}})</span>
      </v-btn>
    </div>
    <div class="catalog">
      <div 
      class="item"
      v-for="item of ads"
      :key="item"
      >
        <div class="item-img"><img :src="item.imgUrl" alt=""></div>
        <div class="item-name item-text">{{item.name}}</div>
        <div class="item-descripton item-text">{{item.description}}</div>
        <div class="item-price item-text">{{item.price}}</div>
         <v-rating      
            class='ml-0'   
            :value="item.value"
            background-color="black"
            color="blue"
            small
        ></v-rating>
        <v-checkbox
        class="AddItem"
        label="Add to basket"
        :value="item"
        v-model="selectItem"
        ></v-checkbox>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data(){
    return{
      selectItem:[],
      rating: 4,
    }
  },
  computed: {
    ...mapState({
      ads: state => state.ads.list,
    }),
  },
  methods: {
  ...mapActions(['sendSelectItem']),
    sendItem() {
      this.sendSelectItem(this.selectItem)
    },
  },
};
</script>
<style scoped>

.basket{
  position: fixed;
  top: 100px;
  left: 40px;
  cursor: pointer;
}
.basket-btn{
  border: 0px;
  border-radius: 50%;
  width: 90px;
  height: 90px;
}
.AddItem{
  position: absolute;
  right: 10px;
  bottom: -20px;
}
.page-title {
  text-align: center;
  font-size: 38px;
  color: #1e90ff;
  font-weight: 400;
}
.catalog{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 600px;
  justify-content: center;
}
.item{
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(207, 205, 207, 0.89);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  margin: 20px;
  transition: all .5s;
  background: white;
  float: left;
}
.item:hover{
  box-shadow: 0 0 70px rgba(0, 0, 0, 1);
}
.item-img{
  height: 200px;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 7px;
}
.item-text{
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
}
.basket-counter{
  font-size: 20px;
  font-weight: 500;
}

</style>


