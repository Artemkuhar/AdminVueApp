<template>
  <v-container>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm4
        v-for="ad of ads"
        :key="ad.name"
        class="contend"
      >
        <v-card class="element">
          <v-img
            :src="ad.imgUrl"
            aspect-ratio="2.75"
            class="imgElement"
          ></v-img>

          <v-card-title primary-title>
            <div id="info">
              <h3 class="headline mb-0">{{ad.name}}</h3>
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
.contend {
  margin-top: 30px;
}
.element {
  height: 100%;
  width: 80%;
  border: 1px solid rgba(207, 205, 207, 0.89);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}
.imgElement {
  height: 150px;
}
#info {
  font-weight: bold;
  font-size: 20px;
}
</style>


