import Vue from 'vue';
import Router from 'vue-router';

// import Login from '../components/login';

import Login from '@/components/login';

Vue.use(Router);
// Vue.use(Login);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  }],
});
