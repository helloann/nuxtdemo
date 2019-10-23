import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cf4503a = () => interopDefault(import('../pages/dispute.vue' /* webpackChunkName: "pages/dispute" */))
const _0eebdce7 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _c5ba4bac = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _5d155f12 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _61442bbc = () => interopDefault(import('../pages/blogs/_blog.vue' /* webpackChunkName: "pages/blogs/_blog" */))
const _6cfbfa9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dispute",
    component: _7cf4503a,
    name: "dispute"
  }, {
    path: "/users",
    component: _0eebdce7,
    children: [{
      path: "",
      component: _c5ba4bac,
      name: "users"
    }, {
      path: ":id",
      component: _5d155f12,
      name: "users-id"
    }]
  }, {
    path: "/blogs/:blog?",
    component: _61442bbc,
    name: "blogs-blog"
  }, {
    path: "/",
    component: _6cfbfa9e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
