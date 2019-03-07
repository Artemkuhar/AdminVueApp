import Vue from 'vue';
import Router from 'vue-router';
import TheMainPage from '@/components/TheMainPage';
import HomePage from '@/components/ads/HomePage/HomePage';
import Basket from '@/components/ads/BasketPage/BasketPage';
import Management from '@/components/ads/ManagementPage/ManagementPage.vue';
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
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/management',
      name: 'management',
      component: Management
    }
  ],
  mode: 'history'
})
