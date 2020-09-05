<template>
  <div class="mobile-menu-container">
    <div
      v-if="visible"
      class="mobile-menu-backcloth"
      @click="visible = false"
    ></div>
    <transition name="mobile-menu-transition">
      <div v-if="visible" class="mobile-menu">
        <div class="mobile-menu-header">
          <div class="btn-close" @click="visible = false">
            <img src="@/assets/images/icon-close.svg" alt="close" />
          </div>
        </div>
        <div class="mobile-menu-body">
          <router-link :to="{ name: 'Home' }" @click.native="visible = false">
            home
          </router-link>
          <router-link :to="{ name: 'About' }" @click.native="visible = false">
            about
          </router-link>
          <router-link
            :to="{ name: 'Contact' }"
            class="btn-light"
            tag="button"
            @click.native="visible = false"
          >
            contact us
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @flow

export default {
  name: 'MobileMenu',
  data() {
    return {
      visible: true
    }
  },
  created() {
    this.$root.$on('toggleMenu', () => {
      this.visible = !this.visible
    })
  }
}
</script>
