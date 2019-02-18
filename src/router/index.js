import Vue from 'vue';
import Router from 'vue-router';
import TheMainPage from '@/components/TheMainPage';
import HomePage from '@/components/ads/HomePage.vue';
import ProductManagement from '@/components/ads/ProductManagement.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'the-main-page',
      component: TheMainPage
    },
    {
      path: '/Home',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/ManageProducts',
      name: 'product-management',
      component: ProductManagement
    }
  ],
  mode: 'history'
})
