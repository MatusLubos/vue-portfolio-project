<script setup lang="ts">
import LoginandOff from '../components/LoginandOff.vue';
import Clickcounter from '../components/Clickcounter.vue';
import Form from '../components/Form.vue';

</script>

<template>

  <div class="views_container background relative">
    <h1>Home/Domov stránka</h1>
    <p class="view_title home_title">views/Home.vue</p>
    <p class="p">Vitaj na domovskej stránke <span class="component_p_highlight">komponentov</span>!</p>
    <div class="components_main_container">
      <LoginandOff />
      <Clickcounter />
      <Form />
    </div>

  </div>
  



</template>

<style scoped>
.background {
  background-color: rgb(94, 255, 88);
}

.home_title {
  color: rgb(94, 255, 88);
}

</style>