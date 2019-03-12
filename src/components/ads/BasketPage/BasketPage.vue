<template>
  <v-container>
    <header>
      <h1 class="page-title">Selected devices</h1>
    </header>
    <v-progress-linear
      :indeterminate="true"
      v-show="spiner"
    ></v-progress-linear>
    <hr class="mb-3">
    <section>
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
    </section>
    <section>
      <div
        class="listItem"
        :class="{'listItem-active': spiner }"
        v-for="(item, index) of selectItems"
        :key="item.name"
      >
        <div class="item">
          <img
            :src="item.imgUrl"
            alt="item Photo"
          >
        </div>
        <p class="item">{{item.name}}</p>
        <p class="item">{{item.description}}</p>
        <p class="item">{{item.price}}</p>
        <div class="item">
          <v-icon
            class="buy-icon"
            size="45"
            @click="removeElem(item, index)"
          >delete_forever</v-icon>
        </div>
      </div>
    </section>
    <section>
      <div :class="{'listItem-active': spiner }">
        <div
          class="buy-all-icon"
          @click="showStepperWindow()"
        >
          <v-icon
            class="buy-icon"
            size="45"
            color="#1e90ff"
          >shopping_cart</v-icon>
          <br>BUY ALL
        </div>
        <div class="total-sum">
          <p>Total sum: {{totalSum}} $</p>
        </div>
      </div>
    </section>
    <Stepper
      class="stepper-payment"
      :totalSum="totalSum"
      :showStepper="showStepper"
      :onUpdateStepper="updateStepper"
    ></Stepper>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Stepper from '../componentsADS/StepperComponent/stepperComponent';

export default {
  components: {
    Stepper,
  },
  data() {
    return {
      totalSum: 0,
      spiner: true,
      dialog: true,
      showStepper: false,
      headers: ['Photo', 'Name', 'Descriptions', 'Price', 'Buy'],
    };
  },
  mounted() {
    this.showSpiner();
    this.getTotalSum();
  },
  computed: {
    ...mapState({
      selectItems: state => state.ads.selectItems,
    }),
  },
  methods: {
    ...mapActions(['sendSelectItem']),
    removeElem(item, index) {
      this.spiner = true;
      setTimeout(() => {
        this.selectItems.splice(index, 1);
        this.spiner = false;
        this.getTotalSum();
      }, 500);
    },
    showSpiner() {
      setTimeout(() => {
        this.spiner = false;
      }, 1000);
    },
    getTotalSum() {
      let sum = 0;
      this.selectItems.forEach((item, i) => (sum += +item.price));
      this.totalSum = sum;
    },
    showStepperWindow() {
      this.showStepper = true;
    },
    updateStepper(stepStatus) {
      if (stepStatus == 2) {
        this.sendSelectItem();
        this.totalSum = 0;
      }
      this.showStepper = false;
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>