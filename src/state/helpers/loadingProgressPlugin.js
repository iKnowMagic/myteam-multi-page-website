/**
 * https://tinyurl.com/y6j8ns9s
 */

import 'nprogress/nprogress.css'

import NProgress from 'nprogress'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  template: `<div class="bar" role="bar" style="background: transparent">
    </div>
    <div class="spinner" role="spinner">
    <div class="spinner-icon"></div>
    </div>
    `
})

/**
 * works with
 * axios loadingProgressInterceptor
 * vuex loadingProgressPlugin
 * vuex state loadingProgress
 */
const loaderProgressPlugin = store => {
  store.watch(
    state =>
      state.loadingProgress ? state.loadingProgress.loading : undefined,
    (newValue, oldValue) => {
      if (newValue === 0) return NProgress.done()
      if (oldValue === 0) return NProgress.start()
      NProgress.set(1.8 / Math.max(oldValue, newValue))
    }
  )
}

export default loaderProgressPlugin
