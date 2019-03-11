<template>
  <v-container>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="itemName"
          :counter="10"
          :rules="nameRules"
          label="Device name"
          required
        ></v-text-field>
        <v-text-field
          v-model="itemPrice"
          :rules="priceRules"
          :counter="4"
          label="Price"
          required
        ></v-text-field>
        <v-text-field
          v-model="itemDescription"
          :rules="descriptionRules"
          :counter="10"
          label="Description"
          required
        ></v-text-field>
        <v-select
          v-model="itemImgUrl"
          :items="imgitems"
          :rules="[v => !!v || 'Logo is required']"
          label="Logo device"
          required
        ></v-select>
        <v-btn
          :disabled="!valid"
          class="info submit-btn"
          @click="validate"
        >
          Add new item
        </v-btn>
      </v-form>
      <v-progress-linear 
        :indeterminate="true" 
        v-show='showSpinner'
      ></v-progress-linear>
      <br><br>
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
    v-for="(item, index) of ads"
    :key="item.name"
    >
      <div class="item"><img :src="item.imgUrl" alt="item Photo"></div>
      <div class="item">{{item.name}}</div>
      <div class="item">{{item.description}}</div>
      <div class="item">{{item.price}}</div>
      <div class="item">
          <v-icon
            size="25"
            @click="removeItem(item, index)"
        >delete</v-icon>
      </div>  
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
   mounted() {
    this.getProducts();
  },
  computed: {
    ...mapState({
      ads: state => state.ads.list,
      showSpinner: state => state.ads.showSpinner,
    }),
  },
  data() {
    return {
      headers:['Photo', 'Name', 'Descriptions', 'Price', 'Delete'],
      itemName: '',
      itemPrice: '',
      itemDescription: '',
      itemImgUrl: '',
      imgitems:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCw-6w3lOFM5ORU2BYxGbFp6G2XogJr0z6pob7IkvrN9r3klT'],
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      priceRules: [
        v => !!v || 'Price is required',
        v => /^\d+$/.test(v) || 'Price isn`t  valid',
        v => (v && v.length <= 4) || 'Price must be less than 4 characters'
      ],
      descriptionRules:[
        v => !!v || 'description is required',
        v => (v && v.length <= 10) || 'description must be less than 10 characters'
      ],
    };
  },
  methods: {
...mapActions(['createProduct', 'removeProducts','getProducts']),
    clearFormFields() {
      this.itemName = '';
      this.itemPrice = '';
      this.itemDescription = '';
      this.itemImgUrl = '';
    },
    adNewProd() {
      const obj = {
        name: this.itemName,
        price: this.itemPrice,
        description: this.itemDescription,
        imgUrl: this.itemImgUrl,
      };
      this.createProduct(obj);
      this.getProducts()
    },
    removeItem(item, index) {
      const payload = {
        item: item,
        index: index
      }
      this.removeProducts(payload);
    },
    validate () {
        if (this.$refs.form.validate()) {
          this.adNewProd()
          this.$refs.form.reset()
        }
      },
  },
};
</script>
<style scoped>
@import './index.css';
</style>


