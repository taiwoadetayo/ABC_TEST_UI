/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layouts
import LayoutBackend from '@/layouts/variations/BackendStarter.vue'
import LayoutSimple from '@/layouts/variations/Simple.vue'


// Register Vue Router
Vue.use(Router)

// Frontend Page Example
const Landing = () => import("@/views/starter/Landing.vue")
const AuthSignIn = () => import(/* webpackChunkName: "auth-signin" */"@/views/pages/auth/SignIn.vue")

// Backend Page Example
const Dashboard = () => import("@/views/starter/Dashboard.vue")

// Router Configuration
export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/auth',
      component: LayoutSimple,
      children: [
        {
          path: 'signin',
          name: 'Sign In',
          component: AuthSignIn
        }
      ]
    },
    {
      path: '/backend',
      redirect: '/backend/dashboard',
      component: LayoutBackend,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
