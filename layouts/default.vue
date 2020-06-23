<template>
  <div id="app">
    <div class="wrapNav">
      <NavBar />
    </div>
    <div class="wrapData">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: 1fr;
  .wrapNav {
    background: rgb(121, 53, 186);
    background: linear-gradient(
      180deg,
      rgba(121, 53, 186, 1) 0%,
      rgba(90, 73, 191, 1) 100%
    );
    display: flex;
    width: 100%;
  }
  .wrapData {
    background-color: white;
    padding: 1rem 1.5rem;
  }
  /deep/ h1 {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
