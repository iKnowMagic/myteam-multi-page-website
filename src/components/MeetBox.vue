<template>
  <div class="meet-box" :class="{ 'meet-quote': expanded }">
    <div v-if="!expanded" class="meet-avatar">
      <img :src="avatar" :alt="avatarName" />
    </div>
    <div class="meet-avatar-name">{{ avatarName }}</div>
    <div v-if="!expanded" class="meet-avatar-title">{{ avatarTitle }}</div>
    <div v-if="expanded" class="meet-quote-text">“{{ quote }}”</div>
    <div v-if="expanded" class="meet-quote-social">
      <a href="#">
        <img src="@/assets/images/icon-twitter.svg" alt="Twitter" />
      </a>
      <a href="#">
        <img src="@/assets/images/icon-linkedin.svg" alt="LinkedIn" />
      </a>
    </div>
    <div
      class="meet-more"
      :class="{ 'meet-more-expanded': expanded }"
      @click="expanded = !expanded"
    >
      <img v-if="!expanded" src="@/assets/images/icon-cross.svg" alt="more" />
      <img v-if="expanded" src="@/assets/images/icon-close-2.svg" alt="close" />
    </div>
  </div>
</template>

<script>
// @flow

export default {
  name: 'MeetBox',
  props: {
    avatar: {
      type: String,
      default: undefined
    },
    avatarName: {
      type: String,
      default: undefined
    },
    avatarTitle: {
      type: String,
      default: undefined
    },
    quote: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {}
}
</script>
