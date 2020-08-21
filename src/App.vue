<template>
  <div class="main-container">
    <div class="main-header">
      <div class="header-shapes">
        <div class="shape s1"></div>
        <div class="shape s2"></div>
      </div>
    </div>
    <div class="main-body">
      <div class="filters">
        <div class="filter-tags">
          <div class="filter-tag">
            <div class="filter-tag-text">
              Frontend
            </div>
            <div class="filter-tag-close">
              <div class="icon-cancel"></div>
            </div>
          </div>
          <div class="filter-tag">
            <div class="filter-tag-text">
              CSS
            </div>
            <div class="filter-tag-close">
              <div class="icon-cancel"></div>
            </div>
          </div>
          <div class="filter-tag">
            <div class="filter-tag-text">
              JavaScript
            </div>
            <div class="filter-tag-close">
              <div class="icon-cancel"></div>
            </div>
          </div>
        </div>
        <div class="filter-clear">
          <div class="btn-clear">
            Clear
          </div>
        </div>
      </div>
      <template v-for="job in jobListings">
        <job-listing :key="job.id" :job="job" />
      </template>
    </div>
  </div>
</template>

<script>
// @flow

import JobListing from '@/components/JobListing'
import { call, get } from 'vuex-pathify'

export default {
  name: 'App',
  components: {
    JobListing
  },
  computed: {
    jobListings: get('jobs/jobListings')
  },
  mounted() {
    this.getJobListings()
  },
  methods: {
    getJobListings: call('jobs/getJobListings')
  }
}
</script>
