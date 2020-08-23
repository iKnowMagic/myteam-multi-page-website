<template>
  <div class="main-container">
    <div class="main-header">
      <div class="main-header-logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <div class="main-header-menu-trigger">
        <img src="@/assets/images/icon-hamburger.svg" alt="logo" />
      </div>
    </div>
    <div class="main-body"></div>
  </div>
</template>

<script>
// @flow

import { call, get, sync } from 'vuex-pathify'

import _cloneDeep from 'lodash/cloneDeep'
import _difference from 'lodash/difference'
import _intersection from 'lodash/intersection'

export default {
  name: 'App',
  components: {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>
