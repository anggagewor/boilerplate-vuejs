import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from './modules/auth/routes'
Vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const baseRoutes = [
  {
    path: '/',
    component: () =>
      import(
        /* webpackChunkName: "BootstrapAppLayout" */ './modules/layout/views/App.vue'
      )
  },
  {
    path: '/about',
    component: () =>
      import(
        /* webpackChunkName: "BootstrapAboutLayout" */ './modules/layout/views/About.vue'
      )
  }
]
const routes = baseRoutes.concat(auth)
const router = new VueRouter({
  routes // short for `routes: routes`
})
export default router
