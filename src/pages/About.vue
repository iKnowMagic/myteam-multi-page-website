<template>
  <div class="about">
    <section class="intro">
      <h2 class="intro-title">About</h2>
      <div class="intro-text">
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </div>
    </section>
    <section class="meet">
      <h2 class="meet-title">Meet the directors</h2>
      <div class="meet-box-container">
        <meet-box
          :avatar="require('@/assets/images/avatar-nikita.jpg')"
          avatar-name="Nikita Marks"
          avatar-title="Founder & CEO"
          quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
        />
        <meet-box
          :avatar="require('@/assets/images/avatar-christian.jpg')"
          avatar-name="Christian Duncan"
          avatar-title="Co-Founder & CEO"
          quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
        />
        <meet-box
          :avatar="require('@/assets/images/avatar-cruz.jpg')"
          avatar-name="Cruz Hamer"
          avatar-title="Co-Founder & CTO"
          quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
        />
        <meet-box
          :avatar="require('@/assets/images/avatar-drake.jpg')"
          avatar-name="Drake Heaton"
          avatar-title="Business Development Lead"
          quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
        />
        <meet-box
          :avatar="require('@/assets/images/avatar-griffin.jpg')"
          avatar-name="Griffin Wise"
          avatar-title="Lead Marketing"
          quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
        />
        <meet-box
          :avatar="require('@/assets/images/avatar-aden.jpg')"
          avatar-name="Aden Allan"
          avatar-title="Head of Talent"
          quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
        />
      </div>
    </section>
    <section class="our-clients">
      <h2 class="our-clients-title">Some of our clients</h2>
      <div class="our-clients-logos">
        <img
          src="@/assets/images/logo-the-verge.png"
          alt="The Verge"
          class="the-verge"
        />
        <img
          src="@/assets/images/logo-jakarta-post.png"
          alt="Jakarta Post"
          class="jakarta-post"
        />
        <img
          src="@/assets/images/logo-the-guardian.png"
          alt="The Guardian"
          class="the-guardian"
        />
        <img
          src="@/assets/images/logo-tech-radar.png"
          alt="Tech Radar"
          class="tech-radar"
        />
        <img
          src="@/assets/images/logo-gadgets-now.png"
          alt="Gadgets Now"
          class="gadgets-now"
        />
      </div>
    </section>
    <get-started />
  </div>
</template>

<script>
// @flow

import GetStarted from '@/components/GetStarted'
import MeetBox from '@/components/MeetBox'

export default {
  name: 'About',
  components: {
    GetStarted,
    MeetBox
  }
}
</script>
