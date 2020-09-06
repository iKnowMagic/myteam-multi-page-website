<template>
  <div class="contact">
    <section class="intro">
      <div class="intro-title">
        Contact

        <span class="intro-title-accent">
          Ask us about
        </span>
      </div>
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
      <form>
        <label>
          <span>
            Name
          </span>
          <input type="text" />
        </label>
        <label>
          <span>
            Email Address
          </span>
          <input type="email" />
        </label>
        <label>
          <span>
            Company Name
          </span>
          <input type="text" />
        </label>
        <label>
          <span>
            Title
          </span>
          <input type="text" />
        </label>
        <label>
          <span>
            Message
          </span>
          <textarea />
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

export default {
  name: 'Contact'
}
</script>
