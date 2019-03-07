<template>
  <v-app
  >
  <div class='backgroundImg'></div>
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
      <v-btn
      to="/"
      flat: false
      outline
      color="white"
      class="btn-title"
      >
        <v-toolbar-title
        id='title'
        class="mr-4"
        >Jayway</v-toolbar-title>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="link of links"
          :key=" link.title"
          :to='link.url'
        >{{link.title}}</v-btn>
      </v-toolbar-items>
      <div  class="toolbar-title" @click="showDrawer">
        <v-icon size='34' color="black">vertical_split</v-icon>
      </div>
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
        { title: 'Home', icon: 'grade', url: 'home' },
        { title: 'Management', icon: 'grade', url: 'management' },
      ],
    };
  },
  methods: {
    showDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style scoped>
.btn-title{
  border: 0px;
}
#title {
  color: #1e90ff;
  cursor: pointer;
}
.backgroundImg{
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZUzzZoix0JlvDhneCWfi8qxdmN7VA_bdPSp0wDjgYhTg6I8HHw);
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-size: 100%;
opacity: 0.15;
position: absolute;
}
.toolbar-title{
  position: absolute;
  right: 25px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
}
</style>
