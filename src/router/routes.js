import { loadPage } from '@/router/helpers/loadPage'

export default [
  {
    path: '/',
    component: () => loadPage('Home'),
    name: 'Home'
  }
  // { path: '*', component: () => loadPage('NotFound'), name: 'NotFound' }
]
