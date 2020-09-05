<template>
  <section class="get-started">
    <div class="get-started-text">Ready to get started?</div>
    <router-link :to="{ name: 'Contact' }" class="btn-dark" tag="button">
      contact us
    </router-link>
  </section>
</template>

<script>
// @flow

export default {
  name: 'GetStarted'
}
</script>
