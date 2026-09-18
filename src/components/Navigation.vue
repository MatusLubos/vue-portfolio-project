<script setup lang="ts">
</script>

<template>
  <nav>
    <div class="component_container background relative">
      <div class="project_container">
        <h1 class="project_title">Vue projekt - test základných konceptov</h1>
      </div>
      <p class="component_title navigation_title">components/Navigation.vue</p>
      <div class="logos_container">
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
      <div>    
        <p class="nav_items_title">Routing nav via<br><span class="component_p_highlight"> router-view</span> </p>
        <div class="nav_items_container">
          <router-link to="/description" class="nav_item description">Popis</router-link>
          |
          <router-link to="/" class="nav_item home">Domov</router-link>
          |
          <router-link to="/about" class="nav_item about">O nás</router-link>
          
            <a href="https://lubosmatus.sk/" class="nav_item portfolio_link">Vrátiť sa na Portfólio</a>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.background {
  background-color: rgb(87, 220, 96);
}

.logos_container {
  display: flex;
  align-items: center;
}

.nav_items_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
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
  filter: drop-shadow(0 0 2em #fefffe);
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
  font-size: 22px;
  margin: 0;
}

.nav_items_title {
  margin: 20px 0;
} 

.nav_item {
  padding: 4px 8px;
  border-radius: 12px;
  color: white;
  background-color: #42b883;
  border: 1px solid black;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}

.nav_item:hover {
  color: black;
  background-color: white;
}

.description {
  background-color: rgb(255, 147, 147);
}

.home {
  background-color: rgb(94, 255, 88);
}

.about {
  background-color: rgb(255, 190, 217);
}

.portfolio_link {
  background-color: #243752;
  color: white;
  margin-left: 80px;
  border: 1px solid #243752;
}

.portfolio_link:hover {
  background-color: white;
  color: #243752;
  border-color: #F2C94C;
}

.navigation_title {
  background-color: white;
  color: rgb(87, 220, 96);;
}

</style>
