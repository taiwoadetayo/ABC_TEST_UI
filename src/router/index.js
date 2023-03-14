/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layouts
import LayoutBackend from '@/layouts/variations/Backend.vue'
import LayoutSimple from '@/layouts/variations/Simple.vue'

// Register Vue Router
Vue.use(Router)


// Pages: Auth
const AuthSignIn = () => import("@/views/Feeds.vue")



// Router Configuration
export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: '',

    mode: 'history',

  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    // Authentication routes
    {
      path: '/',
      component: LayoutSimple,
      children: [
        {
          path: '/',
          name: 'Sign In',
          component: AuthSignIn
        }
      ]
    },
  ]
})
