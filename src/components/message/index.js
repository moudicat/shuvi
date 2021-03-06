
import Vue from 'vue'
import MessageVue from './src/index.vue'

let MessageConstructor = Vue.extend(MessageVue)

let Message = (options) => {
  if (typeof options === 'string') {
    options = {
      type: 'info',
      message: options
    }
  }

  let instance = new MessageConstructor({
    data: options
  })

  let vm = instance.$mount()

  document.getElementById('app').appendChild(vm.$el)

  vm.$el.style.zIndex = 10000

  return vm
}

Message.success = (options) => {
  if (typeof options === 'string') {
    options = {
      type: 'success',
      message: options
    }
  } else {
    options.type = 'success'
  }

  return Message(options)
}

Message.warning = (options) => {
  if (typeof options === 'string') {
    options = {
      type: 'warning',
      message: options
    }
  } else {
    options.type = 'warning'
  }

  return Message(options)
}

Message.error = (options) => {
  if (typeof options === 'string') {
    options = {
      type: 'error',
      message: options
    }
  } else {
    options.type = 'error'
  }

  return Message(options)
}

Message.install = function(Vue) {
  Vue.component(Message.name, Message)
}

export default Message
