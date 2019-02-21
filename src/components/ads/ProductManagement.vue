<template>
  <v-container>
    <v-form
      ref="form"
    >
      <v-layout row>
        <v-flex xs6>
          <v-text-field
            v-model="itemName"
            label="Name"
            outline
            class="mr-3"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs6>
          <v-text-field
            v-model="itemPrice"
            label="Price"
            outline
            class="ml-3"
            required
            type="number"
          >
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6>
          <v-text-field
            v-model="itemDescription"
            label="Description"
            outline
            class="mr-3"
            upload
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs4>
          <v-text-field
            label="Press the button(URL--->)"
            outline
            class="ml-3"
            upload
            v-model='itemImgUrl'
            required
            readonly
          ></v-text-field>
        </v-flex>
        <v-btn
          class=" btnBrowse ml-3"
          @click="addImgLink"
        >Browse</v-btn>
      </v-layout>
      <v-btn
        class="info"
        @click="adNewProd"
        :disabled="disabled"
      >Add new item</v-btn>
      <v-progress-linear 
        :indeterminate="true" 
        v-show='showSpinner'
      ></v-progress-linear>
      <br><br>
    </v-form>
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
    :key="item"
    >
      <div class="item"><img :src="item.imgUrl" alt="item Photo"></div>
      <div class="item">{{item.name}}</div>
      <div class="item">{{item.description}}</div>
      <div class="item">{{item.price}}</div>
      <v-icon
      size="25"
        @click="removeElem(index)"
        class="item"
      >delete</v-icon>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {

  computed: {
    ...mapState({
      ads: state => state.ads.list,
      showSpinner: state => state.ads.showSpinner,
    }),
     disabled() {
      return !this.itemName || !this.itemPrice ||!this.itemDescription || !this.itemImgUrl;
    },
  },
  
  data() {
    return {
      headers:['Photo', 'Name', 'Descriptions', 'Price', 'Delete'],
      itemName: '',
      itemPrice: '',
      itemDescription: '',
      itemImgUrl: '',
    };
  },
  methods: {
...mapActions(['createProduct', 'removeEl','getProducts']),
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
      this.clearFormFields();
    },
    removeElem(index) {
      this.removeEl(index);
    },

    addImgLink() {
      this.itemImgUrl =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCw-6w3lOFM5ORU2BYxGbFp6G2XogJr0z6pob7IkvrN9r3klT';
    },
  },
 
};
</script>
<style scoped>
.btnBrowse {
  height: 45px;
  width: 70px;
  border: 1px solid #ccc;
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
  height: 120px;
   border-top: 1px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  border-color: #ccc;
  line-height: 120px;
}
.item{
  font-weight: normal;
}
img{
  width: 100%;
  height: 100%;
}

</style>


