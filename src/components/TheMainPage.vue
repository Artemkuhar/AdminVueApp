<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1>Welcome to Jayway</h1>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(['getProducts']),
  },
  computed: {
    ...mapState({
      showSpinner: state => state.ads.showSpinner,
    }),
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
  color: #1e90ff;
  font-size: 50px;
}
</style>


