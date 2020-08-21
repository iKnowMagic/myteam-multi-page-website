/**
 * https://tinyurl.com/y6j8ns9s
 */

/**
 * works with
 * axios loadingProgressInterceptor
 * vuex loadingProgressPlugin
 * vuex state loadingProgress
 */

import store from '@/state'

export default http => {
  http.interceptors.request.use(
    config => {
      if (store.state.loadingProgress) {
        store.commit('loadingProgress/START_LOADING')
      }
      return config
    },
    error => {
      if (store.state.loadingProgress) {
        store.commit('loadingProgress/FINISH_LOADING')
      }
      return Promise.reject(error)
    }
  )

  http.interceptors.response.use(
    response => {
      if (store.state.loadingProgress) {
        store.commit('loadingProgress/FINISH_LOADING')
      }
      return response
    },
    error => {
      if (store.state.loadingProgress) {
        store.commit('loadingProgress/FINISH_LOADING')
      }
      return Promise.reject(error)
    }
  )
}
