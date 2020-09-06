<template>
  <div class="about">
    <section class="intro">
      <div class="intro-title">
        About
      </div>
      <div class="intro-text">
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </div>
    </section>
    <section class="meet">
      <div class="meet-title">
        Meet the directors
      </div>
      <div class="meet-box">
        <div class="meet-avatar">
          <img
            src="@/assets/images/avatar-nikita.jpg"
            alt="Nikita, Founder & CEO"
          />
        </div>
        <div class="meet-avatar-name">
          Nikita Marks
        </div>
        <div class="meet-avatar-title">
          Founder & CEO
        </div>
        <div class="meet-more">
          <img src="@/assets/images/icon-cross.svg" alt="more" />
        </div>
      </div>
      <div class="meet-box">
        <div class="meet-avatar">
          <img
            src="@/assets/images/avatar-christian.jpg"
            alt="Cristian, Co-Founder & CEO"
          />
        </div>
        <div class="meet-avatar-name">
          Cristian Duncan
        </div>
        <div class="meet-avatar-title">
          Co-Founder & CEO
        </div>
        <div class="meet-more">
          <img src="@/assets/images/icon-cross.svg" alt="more" />
        </div>
      </div>
      <div class="meet-box">
        <div class="meet-avatar">
          <img
            src="@/assets/images/avatar-cruz.jpg"
            alt="Cruz, Co-Founder & CEO"
          />
        </div>
        <div class="meet-avatar-name">
          Cruz Hamer
        </div>
        <div class="meet-avatar-title">
          Co-Founder & CTO
        </div>
        <div class="meet-more">
          <img src="@/assets/images/icon-cross.svg" alt="more" />
        </div>
      </div>
      <div class="meet-box">
        <div class="meet-avatar">
          <img
            src="@/assets/images/avatar-drake.jpg"
            alt="Drake, Business Development Lead"
          />
        </div>
        <div class="meet-avatar-name">
          Drake Heaton
        </div>
        <div class="meet-avatar-title">
          Business Development Lead
        </div>
        <div class="meet-more">
          <img src="@/assets/images/icon-cross.svg" alt="more" />
        </div>
      </div>
      <div class="meet-box">
        <div class="meet-avatar">
          <img
            src="@/assets/images/avatar-griffin.jpg"
            alt="Griffin, Lead Marketing"
          />
        </div>
        <div class="meet-avatar-name">
          Griffin Wise
        </div>
        <div class="meet-avatar-title">
          Lead Marketing
        </div>
        <div class="meet-more">
          <img src="@/assets/images/icon-cross.svg" alt="more" />
        </div>
      </div>
      <div class="meet-quote">
        <div class="meet-quote-name">
          Aden Allan
        </div>
        <div class="meet-quote-text">
          “Empowered teams create truly amazing products. Set the north star and
          let them follow it.”
        </div>
        <div class="meet-quote-social">
          <img src="@/assets/images/icon-twitter.svg" alt="Twitter" />
          <img src="@/assets/images/icon-linkedin.svg" alt="LinkedIn" />
        </div>
        <div class="meet-quote-close">
          <img src="@/assets/images/icon-close-2.svg" alt="close" />
        </div>
      </div>
    </section>
    <section class="our-clients">
      <div class="our-clients-title">
        Some of our clients
      </div>
      <div class="our-clients-logos">
        <img src="@/assets/images/logo-the-verge.png" alt="The Verge" />
        <img
          src="@/assets/images/logo-jakarta-post.png"
          alt="Jakarta Post"
          class="jakarta-post"
        />
        <img src="@/assets/images/logo-the-guardian.png" alt="The Guardian" />
        <img src="@/assets/images/logo-tech-radar.png" alt="Tech Radar" />
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

export default {
  name: 'About',
  components: {
    GetStarted
  }
}
</script>
