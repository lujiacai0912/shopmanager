import Vue from 'vue';
import Router from 'vue-router';
import { Message } from 'element-ui';
// import Login from '../components/login';
import Login from '@/components/login';
import Home from '@/components/home';
import Users from '@/components/users';
import Rights from '@/components/rights';
import Roles from '@/components/roles';
import Goodslist from '@/components/goodslist';
import Goodsadd from '@/components/goodsadd';

Vue.use(Router);

const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      name: 'users',
      path: '/users',
      component: Users,
    },
    {
      name: 'rights',
      path: '/rights',
      component: Rights,
    },
    {
      name: 'roles',
      path: '/roles',
      component: Roles,
    },
    {
      name: 'goods',
      path: '/goods',
      component: Goodslist,
    },
    {
      name: 'goodsadd',
      path: '/goodsadd',
      component: Goodsadd,
    },
    ],
  }, {
    name: 'login',
    path: '/login',
    component: Login,
  }],
});
router.beforeEach((to, from, next) => {
  // console.log('路由守卫执行----');
  // console.log(to, from);
  // next();
  if (to.name === 'login') {
    next();
  } else {
    const token = localStorage.getItem('token');
    if (!token) {
      Message.warning('请先登录');
      router.push({
        name: 'login',
      });
      return;
    } next();
  }
});
export default router;
