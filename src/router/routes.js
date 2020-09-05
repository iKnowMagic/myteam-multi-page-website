import { loadPage } from '@/router/helpers/loadPage'

export default [
  {
    path: '/',
    component: () => loadPage('Home'),
    name: 'Home'
  },
  {
    path: '/about',
    component: () => loadPage('About'),
    name: 'About'
  },
  {
    path: '/contact',
    component: () => loadPage('Contact'),
    name: 'Contact'
  }
  // { path: '*', component: () => loadPage('NotFound'), name: 'NotFound' }
]
