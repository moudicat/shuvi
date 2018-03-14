<template>
  <button
    class="sv-button"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? `sv-button__${type}` : '',
      size ? `sv-button__${size}` : '',
      {
        'plain': plain
      }
    ]">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'svButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: ''
    },
    plain: Boolean,
    autofocus: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
