import MessageBox from './components/messageBox'
import Message from './components/message'
import Button from './components/button'
import Tag from './components/tag'

const components = [MessageBox, Message, Button, Tag]

const install = function(Vue, opts = {}) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$info = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm

  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  ...components
}

module.exports.default = module.exports
