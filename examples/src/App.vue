<template>
  <div id="app">
    <img src="../../images/shuvi-logo.png" width="400px">
    <h2>Button 按钮</h2>
    <div>
      <sv-button @click="handleClick">这是一个按钮</sv-button>
      <sv-button @click="handleClick" type="info">这是信息按钮</sv-button>
      <sv-button @click="handleClick" type="success">这是成功按钮</sv-button>
      <sv-button @click="handleClick" type="warning">这是警告按钮</sv-button>
      <sv-button @click="handleClick" type="danger">这是危险按钮</sv-button>
      <br>
      <br>
      <sv-button @click="handleClick" type="info" plain>简易信息按钮</sv-button>
      <sv-button @click="handleClick" type="success" plain>简易成功按钮</sv-button>
      <sv-button @click="handleClick" type="warning" plain>简易警告按钮</sv-button>
      <sv-button @click="handleClick" type="danger" plain>简易危险按钮</sv-button>
      <br>
      <br>
      <sv-button @click="handleClick" size="small">这是小按钮</sv-button>
      <sv-button @click="handleClick" size="mini">这是迷你按钮</sv-button>
    </div>
    <h2>Tag 标签</h2>
    <div>
      <sv-tag>标签测试</sv-tag>
      <sv-tag :count="10">带数字的</sv-tag>
      <sv-tag type="green">带颜色的</sv-tag>
      <sv-tag type="red" :count="8">带颜色带数字的</sv-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted() {
    this.$info('欢迎使用shuvi主题系统');
  },

  methods: {
    handleClick() {
      this.$message('click!');
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
