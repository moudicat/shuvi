<template>
  <div id="app">
    <img src="../../images/shuvi-logo.png" width="400px">
    <h2>按钮组</h2>
    <ul>
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
    </ul>
    <h2>-----</h2>
    <ul>
    </ul>
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
