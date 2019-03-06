<template>
<v-container>
    <p class="page-title">Jayway Сollection </p>
    <Card :itemCard="itemCard" :showCard="showCard" :onUpdateCard="onUpdateCard"></Card>
    <div 
    class="basket"
    >
      <v-btn
      to="/basket"
      outline
      class="basket-btn"
      flat: false
      >
       <v-icon
        size="45"
        >shopping_cart</v-icon>
        <span class="basket-counter">({{items.length}})</span>
      </v-btn>
    </div>
    <div class="catalog">
      <div 
      class="item"
      v-for=" item of listItems"
      :key="item.name"
      >
        <div class="item-img"><img :src="item.imgUrl" alt=""></div>
        <div class="item-name item-text">{{item.name}}</div>
        <div class="item-descripton item-text">{{item.description}}</div>
        <div class="item-price item-text">{{item.price}}</div>
         <div class="rating"
         @click="sendRating"
         >
          <v-rating     
            class='ml-0'   
            :value="item.value"
            background-color="black"
            color="blue"
            small
          ></v-rating>
         </div>
        <div 
          class="checkboxWrap"
        >
          <v-checkbox
          class="AddItem"
          label="Add to basket"
          :value="item"
          v-model="selectItems"
        ></v-checkbox>
        <v-icon
            class="icon-details"
            size="55"
            @click="showItemDetails(item)"
        >slideshow</v-icon>
        </div>
        <Rating :spiner = spiner></Rating>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Rating from '../componentsADS/RatingComponent/ratingComponent';
import Card from '../componentsADS/CardComponents/cardComponent';
export default {
  components: {
    Rating,
    Card,
  },
  data(){
    return{
      spiner: false,
      selectItems:[],
      showCard: false,
      itemCard: {}
    }
  },
  mounted() {
    this.selectItems = this.items;
  },
  computed: {
    ...mapState({
      listItems: state => state.ads.list,
      items: state => state.ads.selectItems
    }),
  },
  watch: {
    selectItems: function () {
     this.sendSelectItem(this.selectItems)
  },
},
  methods: {
  ...mapActions(['sendSelectItem']),
    sendRating() {
      this.spiner = true
      setTimeout( () => {
        this.spiner = false;
      },1000)
    },
    showItemDetails(item){
      this.itemCard = item;
      this.showCard = true;
    },
    onUpdateCard(){
      this.showCard = false;
    }
  },
};
</script>
<style scoped>
@import './index.css';
</style>


