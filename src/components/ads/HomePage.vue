<template>
  <v-container>
    <h3 class="title">Range</h3>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm4
        v-for="ad of ads"
        :key="ad.name"
      >
        <v-card class="element">
          <v-img
            :src="ad.imgUrl"
            class="imgElement"
          ></v-img>
          <v-card-title primary-title>
            <div id="description">
              <h3 class="mb-0">{{ad.name}}''</h3>
              <div>{{ad.description}}</div>
              <div id="price">
                {{ad.price}}$
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      ads: state => state.ads.list,
    }),
  },
};
</script>
<style scoped>
.element {
  border: 1px solid rgba(207, 205, 207, 0.89);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  margin: 30px;
  box-sizing: border-box;

}
.imgElement {
  height: 200px;
  width: 100%;
}
#description {
  font-weight: bold;
  font-size: 20px;
}
.title{
  text-align: center;
}

</style>


