<template>
  <div class="contact">
    <section class="intro">
      <div class="intro-contact">
        <h2 class="intro-title">
          Contact

          <span class="intro-title-accent">Ask us about</span>
        </h2>
        <div class="contact-about">
          <div class="contact-about-item">
            <div class="contact-about-item-image person"></div>
            <div class="contact-about-item-text">
              The quality of our talent network
            </div>
          </div>
          <div class="contact-about-item">
            <div class="contact-about-item-image cog"></div>
            <div class="contact-about-item-text">
              Usage & implementation of our software
            </div>
          </div>
          <div class="contact-about-item">
            <div class="contact-about-item-image chart"></div>
            <div class="contact-about-item-text">
              How we help drive innovation
            </div>
          </div>
        </div>
      </div>
      <form>
        <label :class="{ error: $v.name.$error }">
          <span>Name</span>

          <input v-model.trim="$v.name.$model" type="text" />
        </label>

        <label :class="{ error: $v.email.$error }">
          <span>Email Address</span>

          <input v-model.trim="$v.email.$model" type="email" />
        </label>

        <label :class="{ error: $v.company.$error }">
          <span>Company Name</span>

          <input v-model.trim="$v.company.$model" type="text" />
        </label>

        <label :class="{ error: $v.title.$error }">
          <span>Title</span>

          <input v-model.trim="$v.title.$model" type="text" />
        </label>
        <label :class="['textarea', { error: $v.message.$error }]">
          <span>Message</span>

          <textarea v-model.trim="$v.message.$model" />
        </label>
        <div>
          <button class="btn-secondary">submit</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
// @flow

import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Contact',
  validations: {
    name: {
      required
    },
    email: {
      required
    },
    company: {
      required
    },
    title: {
      required
    },
    message: {
      required
    }
  },
  data() {
    return {
      name: undefined,
      email: undefined,
      company: undefined,
      title: undefined,
      message: undefined
    }
  }
}
</script>
