<template>
  <v-container>
    <header>
      <h1 class="page-title">Jayway Сollection</h1>
    </header>
    <Card :onUpdateCard="onUpdateCard"></Card>
    <main>
      <section>
        <div class="basket">
          <v-btn
            to="/basket"
            outline
            class="basket-btn"
            flat:
            false
          >
            <v-icon size="45">shopping_cart</v-icon>
            <span class="basket-counter">({{items.length}})</span>
          </v-btn>
        </div>
      </section>
      <section>
        <div class="catalog">
          <div
            class="item"
            v-for=" item of listItems"
            :key="item.name"
          >
            <div class="item-img">
              <img
                :src="item.imgUrl"
                alt
              >
            </div>
            <p class="item-name item-text">{{item.name}}</p>
            <p class="item-descripton item-text">{{item.description}}</p>
            <p class="item-price item-text">{{item.price}}$</p>
            <div
              class="rating"
              @click="sendRating"
            >
              <v-rating
                class="ml-0"
                :value="item.value"
                background-color="black"
                color="blue"
                small
              ></v-rating>
            </div>
            <div class="checkboxWrap">
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
            <Rating></Rating>
          </div>
        </div>
      </section>
    </main>
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
  data() {
    return {
      spiner: false,
      selectItems: [],
      showCard: false,
      itemCard: {},
    };
  },
  mounted() {
    this.getProducts();
    this.selectItems = this.items;
  },
  computed: {
    ...mapState({
      listItems: state => state.ads.list,
      items: state => state.ads.selectItems,
    }),
  },
  watch: {
    selectItems: function() {
      this.sendSelectItem(this.selectItems);
    },
  },
  methods: {
    ...mapActions(['sendSelectItem', 'getProducts']),
    sendRating() {
      this.spiner = true;
      setTimeout(() => {
        this.spiner = false;
      }, 1000);
    },
    showItemDetails(item) {
      this.itemCard = item;
      this.showCard = true;
    },
    onUpdateCard() {
      this.showCard = false;
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>


