<template>
  <div class="home">
    <section class="intro">
      <div class="intro-title">
        Find the
        <br />
        best

        <span class="intro-title-accent">
          talent
        </span>
      </div>
      <div class="intro-text">
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </div>
    </section>
    <section class="build">
      <div class="build-intro">
        Build & manage distributed teams like no one else.
      </div>
      <div class="build-box icon-person">
        <h3>
          Experienced Individuals
        </h3>
        <div class="build-text">
          Our network is made up of highly experienced professionals who are
          passionate about what they do.
        </div>
      </div>
      <div class="build-box icon-cog">
        <h3>
          Easy to Implement
        </h3>
        <div class="build-text">
          Our processes have been refined over years of implementation meaning
          our teams always deliver.
        </div>
      </div>
      <div class="build-box icon-chart">
        <h3>
          Enhanced Productivity
        </h3>
        <div class="build-text">
          Our customized platform with in-built analytics helps you manage your
          distributed teams.
        </div>
      </div>
    </section>
    <section class="delivering">
      <div class="delivering-intro">
        Delivering real results for top companies. Some of our
        <span class="delivering-intro-accent">
          success stories.
        </span>
      </div>

      <div class="delivering-box">
        <div class="delivering-text">
          “We needed to automate our entire onboarding process. The team came in
          and built out the whole journey. Since going live, user retention has
          gone through the roof!”
        </div>
        <div class="delivering-autor">Aiysha Reese</div>
        <div class="delivering-autor-title">Founder of Manage</div>
        <div class="delivering-autor-avatar">
          <img src="@/assets/images/avatar-aiysha.jpg" />
        </div>
      </div>
      <div class="delivering-box">
        <div class="delivering-text">
          “Amazing. Our team helped us build an app that delivered a new
          experience for hiring a physio. The launch was an instant success with
          100k downloads in the first month.”
        </div>
        <div class="delivering-autor">Arthur Clarke</div>
        <div class="delivering-autor-title">Co-founder of MyPhysio</div>
        <div class="delivering-autor-avatar">
          <img src="@/assets/images/avatar-arthur.jpg" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @flow

import { call, get, sync } from 'vuex-pathify'

import _cloneDeep from 'lodash/cloneDeep'
import _difference from 'lodash/difference'
import _intersection from 'lodash/intersection'

export default {
  name: 'Home',
  components: {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>
