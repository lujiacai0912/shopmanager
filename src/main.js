// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.css';
import HttpServer from '@/http';
import moment from 'moment';
import CusBread from '@/components/cusBread';
import router from './router';
import App from './App';

Vue.use(HttpServer);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.filter('fmtdate', (v) => {
  return moment(v).format('YYYY-MM-DD');
});
Vue.component(CusBread.name, CusBread);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
// <!-- npm run lint fix -->
