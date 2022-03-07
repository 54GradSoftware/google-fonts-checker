<template>
  <div class="top">
    <router-view/>
    <div class="header">Google Fonts Checker</div>
  </div>
  <div class="footer">footer</div>
</template>

<style lang="scss">
html, body{
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 100%;
  .top{
    .header{
      padding: 1rem;
      background-color: #088aaa;
      color: #fff;
      font-weight: bold;
      font-size: 1.2rem;
      position: fixed;
      top: 0;
      width: 100%;
    }
  }
  .footer{
    padding: 1rem;
    background-color: #222;
    color: #fff;
  }
}
</style>
