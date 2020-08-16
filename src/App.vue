<template>
  <div class="main-container">
    <div class="main-header">
      <div class="header-shapes">
        <div class="shape s1"></div>
        <div class="shape s2"></div>
      </div>
    </div>
    <div class="main-body">
      <template v-for="job in jobListings">
        <job-listing :key="job.id" :job="job" />
      </template>
    </div>
    <div class="main-footer"></div>
  </div>
</template>

<script>
// @flow

import JobListing from '@/components/JobListing'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    JobListing
  },
  data() {
    return {
      jobListings: undefined
    }
  },
  mounted() {
    this.getJobListings()
  },
  methods: {
    async getJobListings() {
      const { data } = await axios.get(`/data.json`)
      this.jobListings = data
    }
  }
}
</script>
