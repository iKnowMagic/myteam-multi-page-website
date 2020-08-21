<template>
  <div class="job-listing">
    <div class="job-listing-left">
      <div class="job-logo">
        <img :src="job.logo" />
      </div>
      <div class="job-info">
        <div class="job-info-company">
          {{ job.company }}
        </div>
        <div class="job-info-pills">
          <div v-if="job.new" class="job-info-pill info-new">
            New!
          </div>
          <div v-if="job.featured" class="job-info-pill info-feat">
            Featured
          </div>
        </div>
      </div>
      <div class="job-title">
        <span>
          {{ job.position }}
        </span>
      </div>
      <div class="job-info2">
        <div class="job-info2-item">
          {{ job.postedAt }}
        </div>
        <div class="job-info2-item">
          {{ job.contract }}
        </div>
        <div class="job-info2-item">
          {{ job.location }}
        </div>
      </div>
    </div>
    <div class="job-listing-right">
      <div class="job-tags">
        <div class="tag" @click="addFilterTag(job.role)">
          {{ job.role }}
        </div>
        <div class="tag" @click="addFilterTag(job.level)">
          {{ job.level }}
        </div>
        <template v-for="language in job.languages">
          <div :key="language" class="tag" @click="addFilterTag(language)">
            {{ language }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @flow

import { sync } from 'vuex-pathify'
import _cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'JobListing',
  props: {
    job: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    filterTags: sync('jobs/filterTags')
  },
  methods: {
    addFilterTag(tag) {
      const filterTags = [...new Set(_cloneDeep(this.filterTags))]
      filterTags.push(tag)
      this.filterTags = [...new Set(filterTags)]
    }
  }
}
</script>
