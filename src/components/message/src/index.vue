<template>
  <div class="sv-message__wrapper">
    <transition name="message">
      <div class="sv-message" :class="type" v-show="visibility">
        <div class="sv-message__img"></div>
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'message',
  data() {
    return {
      type: 'info',
      visibility: false,
      message: '常用于主动操作后的反馈提示。',
      timer: null,
      duration: 3000
    }
  },
  methods: {
    handleDestroy() {
      this.visibility = false
      this.$el.addEventListener('transitionend', this.destroyElement)
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  mounted() {
    this.visibility = true
    this.timer = setTimeout(this.handleDestroy, this.duration)
  }
}
</script>
