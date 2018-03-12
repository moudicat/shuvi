<template>
  <button class="sv-button">
    <i class="" v-if="loading"></i>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'svButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
