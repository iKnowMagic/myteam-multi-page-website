<template>
  <div class="main-container">
    <div class="main-header">
      <router-link :to="{ name: 'Home' }" tag="a" class="main-header-logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>

      <div class="main-header-menu-trigger" @click="$root.$emit('toggleMenu')">
        <img src="@/assets/images/icon-hamburger.svg" alt="logo" />
      </div>
      <div class="main-header-nav-links">
        <router-link :to="{ name: 'Home' }">home</router-link>
        <router-link :to="{ name: 'About' }">about</router-link>
      </div>
      <div class="main-header-nav-button">
        <router-link :to="{ name: 'Contact' }" tag="button" class="btn-white">
          contact us
        </router-link>
      </div>
    </div>
    <div class="main-body">
      <router-view />
    </div>

    <div class="main-footer">
      <div class="main-footer-logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <div class="main-footer-links">
        <router-link :to="{ name: 'Home' }">home</router-link>
        <router-link :to="{ name: 'About' }">about</router-link>
      </div>
      <div class="main-footer-address">
        987 Hillcrest Lane
        <br />
        Irvine, CA
        <br />
        California 92714
        <br />
        Call Us : 949-833-7432
      </div>
      <div class="main-footer-social">
        <a href="#">
          <img src="@/assets/images/icon-facebook.svg" alt="Facebook" />
        </a>
        <a href="#">
          <img src="@/assets/images/icon-pinterest.svg" alt="Pinterest" />
        </a>
        <a href="#">
          <img src="@/assets/images/icon-twitter.svg" alt="Twitter" />
        </a>
      </div>
      <div class="main-footer-copy">Copyright 2020. All Rights Reserved.</div>
    </div>

    <mobile-menu />
  </div>
</template>

<script>
// @flow

import '@/scss/app.scss'
import MobileMenu from '@/components/MobileMenu'

export default {
  name: 'App',
  components: { MobileMenu }
}
</script>
