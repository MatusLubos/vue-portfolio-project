<script setup lang="ts">
</script>

<template>
    <div class="views_container background relative">
        <h1>Popis projektu stránka</h1>
        <p class="view_title description_title">views/Description.vue</p>
        <p class="p">Testovanie základných princípov Vue.js :</p>
        <ul class="list">
          <li>Routing</li>
          <li>Reactivity</li>
          <li>Views</li>
          <li>Components</li>
          <li>State management - Pinia</li>
          <li>Scoped CSS</li>
          <li>and more</li>
        </ul> 
    </div>
</template>

<style scoped>

.background {
  background-color: rgb(255, 147, 147);  
}

ul  {
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  list-style-position: inside; 
  padding: 0;
  margin: 0;
}

.description_title {
  color: rgb(255, 147, 147);
}
</style>