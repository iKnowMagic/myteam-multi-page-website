<template>
  <div class="home">
    <section class="intro">
      <h2 class="intro-title">
        Find the
        <br />
        best

        <span class="intro-title-accent">talent</span>
      </h2>
      <div class="intro-text">
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </div>
    </section>
    <section class="build">
      <h2 class="build-intro">
        Build & manage distributed teams like no one else.
      </h2>
      <div class="build-boxes">
        <div class="build-box">
          <div class="build-icon icon-person"></div>
          <div class="build-message">
            <div class="build-title">Experienced Individuals</div>
            <div class="build-text">
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </div>
          </div>
        </div>
        <div class="build-box">
          <div class="build-icon icon-cog"></div>
          <div class="build-message">
            <div class="build-title">Easy to Implement</div>
            <div class="build-text">
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </div>
          </div>
        </div>
        <div class="build-box">
          <div class="build-icon icon-chart"></div>
          <div class="build-message">
            <div class="build-title">Enhanced Productivity</div>
            <div class="build-text">
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="delivering">
      <h2 class="delivering-intro">
        Delivering real results for top companies. Some of our
        <span class="delivering-intro-accent">success stories.</span>
      </h2>
      <div class="delivering-boxes">
        <div class="delivering-box">
          <div class="delivering-text">
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </div>
          <div class="delivering-autor">Kady Baker</div>
          <div class="delivering-autor-title">Product Manager of Bookmark</div>
          <div class="delivering-autor-avatar">
            <img
              src="@/assets/images/avatar-kady.jpg"
              alt="Kady, Product Manager of Bookmark"
            />
          </div>
        </div>
        <div class="delivering-box">
          <div class="delivering-text">
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </div>
          <div class="delivering-autor">Aiysha Reese</div>
          <div class="delivering-autor-title">Founder of Manage</div>
          <div class="delivering-autor-avatar">
            <img
              src="@/assets/images/avatar-aiysha.jpg"
              alt="Aiysha, Founder of Manage"
            />
          </div>
        </div>
        <div class="delivering-box">
          <div class="delivering-text">
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </div>
          <div class="delivering-autor">Arthur Clarke</div>
          <div class="delivering-autor-title">Co-founder of MyPhysio</div>
          <div class="delivering-autor-avatar">
            <img
              src="@/assets/images/avatar-arthur.jpg"
              alt="Arthur, Co-founder of MyPhysio"
            />
          </div>
        </div>
      </div>
    </section>
    <get-started />
  </div>
</template>

<script>
// @flow

import GetStarted from '@/components/GetStarted'

export default {
  name: 'Home',
  components: {
    GetStarted
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
