import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import axios from "axios"
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import excel from 'vue-excel-export'
import BootstrapVue from 'bootstrap-vue'
import BaseLayoutModifier from '@/components/BaseLayoutModifier'
import BaseBlock from '@/components/BaseBlock'
import BaseBackground from '@/components/BaseBackground'
import BasePageHeading from '@/components/BasePageHeading'
import BaseNavigation from '@/components/BaseNavigation'
import clickRipple from '@/directives/clickRipple'
import toggleClass from '@/directives/toggleClass'
import sha256 from 'crypto-js/sha256';
import 'sweetalert2/dist/sweetalert2.min.css';

// Register global plugins
Vue.use(BootstrapVue)
Vue.use(axios);


// Register global components
Vue.component(BaseLayoutModifier.name, BaseLayoutModifier)
Vue.component(BaseBlock.name, BaseBlock)
Vue.component(BaseBackground.name, BaseBackground)
Vue.component(BasePageHeading.name, BasePageHeading)
Vue.component(BaseNavigation.name, BaseNavigation)
Vue.use(VueSweetalert2)
Vue.use(excel)
Vue.directive('click-ripple', clickRipple)
Vue.directive('toggle-class', toggleClass)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;


Vue.prototype.$preloader = '<div style="height:auto;width:50%;margin: 0 auto;"><img style="width: 100%;" src="https://media.tenor.com/SLFiTi_nrQ4AAAAC/loader.gif" /></div>'

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

Vue.mixin({
  methods: {
    formatDate(date, format) {
      let d = new Date(date)
      if (format == 'time') {
          return d.toLocaleTimeString('en-US');
      }
      else if (format == 'date') {
          return d.toDateString();
      }
      else {
          return d.toDateString() + ' ' + d.toLocaleTimeString('en-US');
      }
    },

    Preloader() { 
      this.$swal.fire({title: "", html: '<div style="height:auto;width:50%;margin: 0 auto;"><img style="width: 100%;" src="https://media.tenor.com/SLFiTi_nrQ4AAAAC/loader.gif" /></div>', showConfirmButton: false, showCancelButton: false, allowOutsideClick: false});
    }
  },
})

Vue.prototype.$msalInstance = {};

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
