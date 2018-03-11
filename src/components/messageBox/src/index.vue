<template>
  <transition name="message-box-wrapper">
    <div class="sv-message-box__wrapper" v-show="visibility">
      <transition name="message-box">
        <div class="sv-message-box" :class="className" v-show="visibility">
          <div class="sv-message__header">
            <div class="sv-message__header-title">{{ title }}</div>
            <button class="sv-message__header-close" @click="handleClose" v-show="showClose">x</button>
          </div>
          <div class="sv-message__content-wrapper">
            <div class="sv-message__content">
              {{ message }}
            </div>
            <div class="sv-message__btns">
              <button class="confirm" @click="handleConfirm">{{confirmText}}</button>
              <button class="cancel" @click="handleCancel" v-if="type === 'confirm'">{{cancelText}}</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'messageBox',
  data() {
    return {
      type: 'info',
      visibility: false,
      title: '提示',
      showClose: false,
      message:
        '模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、成功提示、错误提示、询问信息。当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。',
      confirmText: '确认',
      cancelText: '取消'
    }
  },
  methods: {
    handleClose() {
      this.$el.addEventListener('transitionend', this.destroyElement)
      this.visibility = false

      if (typeof this.resolve === 'function') {
        this.resolve()
      }
    },
    handleConfirm() {
      this.$el.addEventListener('transitionend', this.destroyElement)
      this.visibility = false

      if (typeof this.resolve === 'function') {
        this.resolve()
      }
    },
    handleCancel() {
      this.visibility = false
      this.$el.addEventListener('transitionend', this.destroyElement)
      if (typeof this.reject === 'function') {
        this.reject()
      }
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    }
  },
  computed: {
    className() {
      return this.type
    }
  },

  mounted() {
    this.visibility = true
    document.body.style.overflowY = 'hidden'
  },

  destroyed() {
    document.body.style.overflowY = ''
  }
}
</script>
