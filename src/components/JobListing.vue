<template>
  <div class="job-listing">
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
      {{ job.position }}
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
</template>

<script>
// @flow

export default {
  name: 'JobListing',
  props: {
    job: {
      type: Object,
      default: undefined
    }
  }
}
</script>
