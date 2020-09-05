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
          <router-link :to="{ name: 'Home' }">home</router-link>
          <router-link :to="{ name: 'Home' }">about</router-link>
          <button class="btn-light">contact us</button>
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
      visible: false
    }
  },
  created() {
    this.$root.$on('toggleMenu', () => {
      this.visible = !this.visible
    })
  }
}
</script>
