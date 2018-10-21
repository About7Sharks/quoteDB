import Vue from 'vue';
import Router from 'vue-router';
import addquote from './views/addquote.vue';
import Home from './views/Home.vue';
import about from './views/about.vue';

Vue.use(Router);

export default new Router({

  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/addquote',
      name: 'adduote',
      component: addquote,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    }  
  ],
});
