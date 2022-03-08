<template>
  <div class="top">
    <router-view/>
    <div class="header">
      <div>Google Fonts Checker</div>
      <a href="https://github.com/54GradSoftware/tracker-checker/tree/google-fonts-only" target="_blank" rel="noreferrer" class="github">
        <img src="./assets/GitHub-Mark-Light-64px.png" alt="GitHub Repository">
      </a>
    </div>
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
  font-family: system-ui;
  .top{
    .header{
      padding: 1rem;
      box-sizing: border-box;
      background-color: #088aaa;
      color: #fff;
      font-weight: bold;
      font-size: 1.2rem;
      position: fixed;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 4rem;
      .github{
        width: 2rem;
        height: 2rem;
        display: flex;
      }
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
