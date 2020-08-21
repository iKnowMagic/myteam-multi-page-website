import csrfTokenInterceptor from '@/services/helpers/csrfTokenInterceptor'
import loadingProgressInterceptor from '@/services/helpers/loadingProgressInterceptor'
import notAuthorizedInterceptor from '@/services/helpers/notAuthorizedInterceptor'
import tenantFilterInterceptor from '@/services/helpers/tenantFilterInterceptor'
import unableToConnectInterceptor from '@/services/helpers/unableToConnectInterceptor'

import axios from 'axios'
import { throttleAdapterEnhancer } from 'axios-extensions'

import cacheAdapter from './helpers/cacheAdapter'

const mongo = axios.create({
  baseURL: `${process.env.VUE_APP_SETTINGS_API_STATE}`,
  withCredentials: true,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  adapter: throttleAdapterEnhancer(axios.defaults.adapter)
})

const kpiService = axios.create({
  baseURL: `${process.env.VUE_APP_SETTINGS_API_KPIS}`,
  withCredentials: true,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const rbacService = axios.create({
  baseURL: `${process.env.VUE_APP_SETTINGS_API_RBAC}`,
  withCredentials: true,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const imsService = axios.create({
  baseURL: `${process.env.VUE_APP_SETTINGS_API_IMS}`,
  withCredentials: true,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  // adapter: cacheAdapter
})

unableToConnectInterceptor(mongo)

loadingProgressInterceptor(mongo)
loadingProgressInterceptor(kpiService)
loadingProgressInterceptor(rbacService)
loadingProgressInterceptor(imsService)

notAuthorizedInterceptor(mongo)
notAuthorizedInterceptor(kpiService)
notAuthorizedInterceptor(rbacService)
notAuthorizedInterceptor(imsService)

csrfTokenInterceptor(mongo)
csrfTokenInterceptor(kpiService)
csrfTokenInterceptor(rbacService)
csrfTokenInterceptor(imsService)

tenantFilterInterceptor(kpiService)

export { mongo, kpiService, rbacService, imsService }
