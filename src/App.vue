<template>
  <v-app>
    <v-navigation-drawer
      app
      right
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-tile
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title
        id='title'
        class="mr-4"
      >Jayway</v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="link of links"
          :key=" link.title"
          :to='link.url'
        >{{link.title}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="changeDrawerValue">Shop
        <v-icon>arrow_drop_down</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Home', icon: 'grade', url: '/Home' },
        { title: 'Manage Products', icon: 'grade', url: 'ManageProducts' },
      ],
    };
  },
  methods: {
    changeDrawerValue() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style scoped>
#title {
  color: #1e90ff;
  cursor: pointer;
}
</style>
