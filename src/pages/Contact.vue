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
      <form noValidate @submit.prevent="checkForm">
        <div class="form-group" :class="[{ error: $v.name.$error }]">
          <label>
            <input
              v-model.trim="$v.name.$model"
              type="text"
              placeholder="Name"
            />
          </label>
          <span v-if="$v.name.$error">This field is required</span>
        </div>

        <div class="form-group" :class="[{ error: $v.email.$error }]">
          <label>
            <input
              v-model.trim="$v.email.$model"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <span v-if="$v.email.$error && !$v.email.required">
            This field is required
          </span>
          <span v-if="$v.email.$error && $v.email.required && !$v.email.email">
            Invalid email address
          </span>
        </div>

        <div class="form-group" :class="[{ error: $v.company.$error }]">
          <label>
            <input
              v-model.trim="$v.company.$model"
              type="text"
              placeholder="Company Name"
            />
          </label>
          <span v-if="$v.company.$error">This field is required</span>
        </div>

        <div class="form-group" :class="[{ error: $v.title.$error }]">
          <label>
            <input
              v-model.trim="$v.title.$model"
              type="text"
              placeholder="Title"
            />
          </label>
          <span v-if="$v.title.$error">This field is required</span>
        </div>

        <div class="form-group" :class="[{ error: $v.message.$error }]">
          <label :class="['textarea']">
            <textarea v-model.trim="$v.message.$model" placeholder="Message" />
          </label>
          <span v-if="$v.message.$error">This field is required</span>
        </div>

        <div>
          <button class="btn-secondary">submit</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
// @flow

import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Contact',
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
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
  },
  methods: {
    checkForm() {
      this.$v.$touch()
      console.log(this.$v.email)
      if (!this.$v.$anyError) {
        // actually submit form ...
        alert('Form is valid and ready to be submitted')
      }
    }
  }
}
</script>
