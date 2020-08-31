import Vue from 'vue'

import VueMeta from 'vue-meta'
import Router from 'vue-router'

import routes from '@/router/routes'

Vue.use(Router)
Vue.use(VueMeta, {
  keyName: 'page',
  refreshOnceOnNavigation: true
})

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // linkActiveClass: 'active',
  routes: routes,

  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  next()
})

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {})

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...arguments_) => {
            // If the user chose to redirect...
            if (arguments_.length) {
              // If redirecting to the same route we're coming from...

              // Complete the redirect.
              next(...arguments_)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return
  }

  // If we reach this point, continue resolving the route.
  next()
})

export default router
