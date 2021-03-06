
import Vue from 'vue'
import merge from 'utils/merge'
import MessageBoxVue from './src/index.vue'

let MessageBoxConstructor = Vue.extend(MessageBoxVue)

let MessageBox = (options) => {
  if (typeof options === 'string') {
    options = {
      type: 'info',
      message: options
    }
  }
  return new Promise((resolve, reject) => {
    options = merge(options, {resolve, reject})

    let instance = new MessageBoxConstructor({
      data: options
    })

    let vm = instance.$mount()
    document.getElementById('app').appendChild(vm.$el)

    vm.$el.style.zIndex = 10000
  })
}

MessageBox.alert = (options) => {
  if (typeof options === 'string') {
    options = {
      type: 'alert',
      title: '警告',
      message: options
    }
  } else {
    options.type = 'alert'
  }
  return MessageBox(options)
}

MessageBox.confirm = (options) => {
  if (typeof options === 'string') {
    options = {
      type: 'confirm',
      message: options
    }
  } else {
    options.type = 'confirm'
  }
  return MessageBox(options)
}

MessageBox.install = function(Vue) {
  Vue.component(MessageBox.name, MessageBox)
}

export default MessageBox
