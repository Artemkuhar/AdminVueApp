<template>
  <v-container>
    <div class="text-xs-center">
      <v-dialog
        v-model="showSpinner"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Messages
          </v-card-title>

          <v-card-text>
            Please wait, loading data
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-form
      v-model="valid"
      ref="form"
      validation
    >
      <v-layout row>
        <v-flex xs6>
          <v-text-field
            :rules="nameRules"
            :counter="6"
            v-model="productName"
            label="Product Name"
            outline
            class="mr-3"
          ></v-text-field>
        </v-flex>

        <v-flex xs6>
          <v-text-field
            :rules="priceRules"
            :counter="6"
            v-model="price"
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
            :rules="DescRules"
            :counter="10"
            v-model="description"
            label="Product Description (options)"
            outline
            class="mr-3"
            upload
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs4>
          <v-text-field
            :rules="imgRules"
            label="Press the button(URL--->)"
            outline
            class="ml-3"
            upload
            v-model='imgUrl'
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
        :disabled="!valid"
      >Add products</v-btn>
      <br><br>
      <hr class="mb-3">
    </v-form>
    <v-layout row>
      <v-flex xs1></v-flex>
      <v-flex xs3>Name</v-flex>
      <v-flex xs5>Description</v-flex>
      <v-flex xs2>Price</v-flex>
      <v-flex xs1></v-flex>
    </v-layout>
    <hr class="mt-3">
    <v-layout
      row
      v-for="(ad, index) of ads"
      :key="ad.name"
      class="ProductList"
    >
      <v-img
        :src="ad.imgUrl"
        height="50px"
        width="50px"
        xs1
        class="imgPord"
      ></v-img>
      <v-flex xs3>{{ad.name}}</v-flex>
      <v-flex xs5>{{ad.description}}</v-flex>
      <v-flex xs2>{{ad.price}}</v-flex>
      <v-flex
        xs1
        class="btnRemove"
        @click="removeElem(index)"
      >Remove</v-flex>
    </v-layout>
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
  },
  data() {
    return {
      dialog: true,
      valid: false,
      productName: '',
      price: '',
      description: '',
      imgUrl: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 6 || 'Name must be less than 6 characters',
      ],
      priceRules: [
        v => !!v || 'Price is required',
        v => v.length <= 6 || 'Price must be less than 6 characters',
      ],
      DescRules: [
        v => !!v || 'Descriptions is required',
        v => v.length <= 10 || 'Descriptions must be less than 10 characters',
      ],
      imgRules: [v => !!v || 'Descriptions is required'],
    };
  },
  methods: {
    ...mapActions(['createProduct', 'removeEl']),
    clearFormFields() {
      this.productName = '';
      this.price = '';
      this.description = '';
      this.imgUrl = '';
    },
    adNewProd() {
      if (this.$refs.form.validate()) {
        const obj = {
          name: this.productName,
          price: this.price,
          description: this.description,
          imgUrl: this.imgUrl,
        };
        this.createProduct(obj);
        this.clearFormFields();
      }
    },
    removeElem(index) {
      this.removeEl(index);
    },

    addImgLink() {
      this.imgUrl =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXcGGTj47a2tj9QYE_6xadmcQ2ymadul2mBhTMTI8L8GrPxFw';
    },
  },
};
</script>
<style scoped>
.ProductList {
  border-top: 1px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  border-color: #ccc;
  margin: 10px 0 10px;
  line-height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.imgPord {
  margin-right: 5px;
}
.btnBrowse {
  height: 50px;
  width: 70px;
  border: 1px solid #ccc;
}
.btnRemove {
  color: #1e90ff;
  cursor: pointer;
}
</style>


