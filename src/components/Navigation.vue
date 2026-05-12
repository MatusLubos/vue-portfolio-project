<script setup lang="ts">
</script>

<template>
  <nav class="nav_container">
    <div class="main_container relative">
      <h1 class="project_title">Vue projekt - test základných konceptov</h1>
      <h2 class="component_title absolute">components/Navigation.vue</h2>
      <div class="loga_container">
        <a href="https://vite.dev" target="_blank">
          <img src="../assets/vite.svg" class="logo vite" alt="Vite logo" />
        </a>
        <span>+</span>
        <a href="https://vuejs.org/" target="_blank">
          <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <span>+</span>
        <a href="https://pinia.vuejs.org/" target="_blank">
          <img src="../assets/pinia.svg" class="logo pinia" alt="Pinia logo" />
        </a>
              
      </div>
      <div class="nav_items_container">    
        
        <p class="nav_items_title">Routing navigácia:</p>
        <router-link to="/" class="nav_item">Home</router-link>
        |
        <router-link to="/about" class="nav_item">About</router-link>
        |
        <router-link to="/popis" class="nav_item popis">Popis</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.nav_container {
  background-color: rgb(245, 211, 211);
}

.main_container {
  max-width: 1600px;
  margin: 0 auto;
  display: block;
  padding: 0 22px;
  justify-items: center;
  padding-bottom: 22px;
}

.loga_container {
  display: flex;
  align-items: center;
}

.nav_items_container {
  display: flex;
  align-items: center;
}

@media (max-width:450px) {
  .nav_items_container {
    display: block;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  max-width: 60px;
}
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #2e38f1aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #13ff95aa);
}

.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #f3ff08aa);
}

@media (max-width: 380px) {
  .logo {
    max-width: 50px;
  }
}

.nav_items_title, .nav_item {
  font-size: 1.5em;
  padding: 10px;
}

.nav_item:hover {
    color: lightblue;
}

.project_title {
  font-size: 1.8em;
  background: #a0a6ff;
  background: linear-gradient(to right, #4950b4 0%, #fc5754 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 22px 0;
}
.popis {
  color: red;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 25%;
  left: 10%;
}

@media (min-width:610px) and (max-width: 1099px) {
  .absolute {
    top: 20%;
  }
}

@media (min-width:1100px) {
  .absolute {
    top: 40%;
  }
}





</style>
