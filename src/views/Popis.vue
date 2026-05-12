<template>
  <div class="container_w_background">
    <div class="component_main_container relative">
      <div class="content_container">
        <h1>Popis projektu</h1>
        <h2 class="component_title absolute">views/Popis.vue</h2>
        <p>Vyskúšanie si základných princípov Vue.js. :</p>
        <ul>
          <li>Reactivity</li>
          <li>Components</li>
          <li>Views</li>
          <li>Routing</li>
          <li>State management - Pinia</li>
        </ul> 
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.container_w_background {
  background-color: rgb(255, 147, 147);  
}
.component_main_container {
  max-width: 1600px;
  margin: 0 auto;
  display: block;
  padding: 0 22px;
  justify-items: center;
  padding-bottom: 22px;
}

.content_container {
  padding: 22px;
  display: inline-block;
}

ul  {
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  list-style-position: inside; 
  padding: 0;
  margin: 0;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 40%;
  left: 10%;
}

@media (max-width:870px) {
  .absolute {
    top: 18%;
    left: 20%;
  }
}

p {
  padding-bottom: 12px;
}
</style>