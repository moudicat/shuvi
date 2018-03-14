<template>
  <span :class="[
    type ? `sv-tag__${type}` : ''
  ]" class="sv-tag">
    <slot />
    <span class="sv-tag__count" v-if="typeof count === 'number'">{{count}}</span>
  </span>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'svTag',
  props: {
    type: String,
    count: {
      type: Number,
      default: null
    }
  }
}
</script>
