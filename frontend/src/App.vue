<template>
  <div class="top">
    <router-view/>
    <div class="header">Google Fonts Checker</div>
  </div>
  <div class="footer">
    Made with &#9829; by
    <a href="https://54gradsoftware.de" target="_blank" rel="noreferrer">54 Grad Software</a> -
    <a href="https://54gradsoftware.de/impressum" target="_blank" rel="noreferrer">Impressum</a> -
    <a href="https://54gradsoftware.de/datenschutz" target="_blank" rel="noreferrer">Datenschutz</a>
  </div>
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
    a{
      color: #fff;
    }
  }
}
</style>
