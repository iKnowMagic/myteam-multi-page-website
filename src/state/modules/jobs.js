// @flow

import { make } from 'vuex-pathify'
import axios from 'axios'

export const state = {
  jobListings: [],
  filterTags: []
}

export const getters = {
  ...make.getters(state)
}

export const mutations = {
  ...make.mutations(state)
}

export const actions = {
  ...make.actions(state),
  async getJobListings({ commit }) {
    const { data } = await axios.get(`/data.json`)
    commit('SET_JOB_LISTINGS', data)
  }
}
