<template>
  <v-stepper
    v-model="stepperCounter"
    vertical
    v-show="showStepper"
  >
    <v-stepper-step
      :complete="stepperCounter > 1"
      step="1"
    >
      Fill in the details for payment
      <small>Сheck the data is correct</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <div
        class="mb-5 qwe"
        height="200px"
      >
        <v-text-field
          v-model="user.name"
          :rules="[v => !!v || 'Name is required']"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          :rules="[v => !!v || 'email is required']"
          label="E-mail"
          required
        ></v-text-field>
        <v-select
          v-model="user.selectCard"
          :rules="[v => !!v || 'Banking card is required']"
          :items="cardList"
          label="Banking card"
          required
        ></v-select>
      </div>
      <v-btn
        color="primary"
        @click="stepperCounter = 2"
        :disabled="disabled"
      >Continue</v-btn>
      <v-btn
        flat
        @click="updateStepper"
      >Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step
      :complete="stepperCounter > 2"
      step="2"
    >Сheck the data is correct</v-stepper-step>
    <v-stepper-content step="2">
      <div
        class="userPayInfo pb-3"
        height="200px"
      >
        <div>Name:
          <span>{{user.name}}</span>
        </div>
        <div>Email:
          <span>{{user.email}}</span>
        </div>
        <div>Card:
          <span>{{user.selectCard}}</span>
        </div>
        <div>Total price:
          <span>{{totalSum}} $</span>
        </div>
      </div>
      <v-btn
        color="primary"
        @click="updateStepper"
      >Send money</v-btn>
      <v-btn
        flat
        @click="stepperCounter = 1"
      >Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  name: 'stepper',
  props: {
    totalSum: {
      type: Number,
      default: 0,
    },
    showStepper: {
      type: Boolean,
      default: false,
    },
    onUpdateStepper: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      stepperCounter: 1,
      cardList: ['2134 2343 1412 4312', '7134 2343 1412 4332', '4134 2343 1412 4333', '9134 2343 1412 4334'],
      user: {
        name: '',
        email: '',
        selectCard: '',
      },
    };
  },
  methods: {
    updateStepper() {
      this.onUpdateStepper(this.stepperCounter);
      (this.stepperCounter = 1), (this.user.name = ''), (this.user.email = ''), (this.user.selectCard = '');
    },
  },
  computed: {
    disabled() {
      return !this.user.name || !this.user.email || !this.user.selectCard;
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>