<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
</script>

<template>
  <div class="component_container component_background flex relative">
    <p class="component_title clickcounter_title">components/Clickcounter.vue</p>
    <h2>Pripočítať alebo odpočítať klikom via <br><span class="component_p_highlight">@click</span></h2>
    <span class="result">{{ count }}</span>
    <div class="buttons-container">
      <button type="button" @click="count++">Pripočítať</button>
      <button type="button" @click="count--">Odpočítať</button>
    </div>
  </div>
</template>

<style scoped>

.read-the-docs {
  color: #888;
}

.component_background {
  background-color: #00b8ff;
}

.result {
  min-width: 60px;
  background-color: white;
  display: inline-block;
  max-width: 100px;
  margin: 0 auto;
  padding: 12px 14px;
  border: 1px solid black;
  border-radius: 12px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 22px;
}

.clickcounter_title {
  background-color: white;
  color: #00b8ff;
}

</style>
