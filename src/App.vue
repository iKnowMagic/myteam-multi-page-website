<template>
  <div class="main-container">
    <div class="main-header">
      <div class="header-shapes">
        <div class="shapes-d">
          <div class="shape d1"></div>
          <div class="shape d2"></div>
        </div>
        <div class="shapes-s">
          <div class="shape s1"></div>
          <div class="shape s2"></div>
        </div>
      </div>
    </div>
    <div class="main-body">
      <div v-if="filterTags.length > 0" class="filters">
        <div class="filter-tags">
          <template v-for="filterTag in filterTags">
            <div :key="filterTag" class="filter-tag">
              <div class="filter-tag-text">
                {{ filterTag }}
              </div>
              <div class="filter-tag-close" @click="deleteFilterTag(filterTag)">
                <div class="icon-cancel"></div>
              </div>
            </div>
          </template>
        </div>
        <div class="filter-clear" @click="filterTags = []">
          <div class="btn-clear">
            Clear
          </div>
        </div>
      </div>
      <template v-for="job in jobListings">
        <job-listing v-if="isListingIncluded(job)" :key="job.id" :job="job" />
      </template>
    </div>
  </div>
</template>

<script>
// @flow

import JobListing from '@/components/JobListing'
import { call, get, sync } from 'vuex-pathify'

import _cloneDeep from 'lodash/cloneDeep'
import _difference from 'lodash/difference'
import _intersection from 'lodash/intersection'

export default {
  name: 'App',
  components: {
    JobListing
  },
  computed: {
    jobListings: get('jobs/jobListings'),
    filterTags: sync('jobs/filterTags')
  },
  mounted() {
    this.getJobListings()
  },
  methods: {
    getJobListings: call('jobs/getJobListings'),
    isListingIncluded(job) {
      if (this.filterTags.length === 0) return true
      const common = _intersection(this.filterTags, this.getJobFeatures(job))
      return common.length === this.filterTags.length
    },
    getJobFeatures(job) {
      const result = []
      result.push(job.role)
      result.push(job.level)
      result.push(...job.languages)
      result.push(...job.tools)
      return result
    },
    deleteFilterTag(filterTag: string) {
      const filterTags = _cloneDeep(this.filterTags)
      this.filterTags = filterTags.filter(item => {
        return item !== filterTag
      })
    }
  }
}
</script>
