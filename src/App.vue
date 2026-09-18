<script setup lang="ts">
import Navigation from './components/Navigation.vue';

import { ref, computed } from 'vue';

const zoznam = ref([
  { id: 1, nazov: 'umyť riad', splnena: true },
  { id: 2, nazov: 'povysávať', splnena: false },
  { id: 3, nazov: 'vyhodiť smeti', splnena: true },
]);

const aktivnePolozky = computed(() => {
  return zoznam.value.filter(polozka => polozka.splnena);
});

const pocet = ref(0);

function zvysit() {
  pocet.value++;
}

const ulohy = ref([
  { id: 1, nazov: 'Naučiť sa Vue', splnena: true },
  { id: 2, nazov: 'Zabehnúť 5km', splnena: false },
  { id: 3, nazov: 'Upratať izbu', splnena: false }
]);

const meno = ref('');
const vek = ref<number | null>(null);
const suhlas = ref(false);




</script>

<template>
<div class="app_container relative">
  <p class="app_vue_title">App.vue</p>
  <Navigation/>
  <router-view />

  


  <form>
    <div>
      <label>Meno:</label>
      <input v-model="meno" placeholder="Napíš svoje meno" />
    </div>

    <div>
      <label>Vek:</label>
      <input type="number" v-model="vek" placeholder="Napíš svoj vek" />
    </div>

    <div>
      <label>
        <input type="checkbox" v-model="suhlas" />
        Súhlasím s podmienkami
      </label>
    </div>
  </form>

  <h3>Výsledok:</h3>
  <p>Meno: {{ meno }}</p>
  <p>Vek: {{ vek }}</p>
  <p>Súhlas: {{ suhlas ? 'Áno' : 'Nie' }}</p>

  
  

  <li v-for="polozka in aktivnePolozky" :key="polozka.id">
    {{ polozka.nazov }} <span v-if="aktivnePolozky">- splnené</span>
  </li>

  <button @click="zvysit">Klikni ma</button>
  <p>Počet kliknutí: {{ pocet }}</p>



  <ul>
    <li
      v-for="uloha in ulohy"
      :key="uloha.id"
      @click="uloha.splnena = !uloha.splnena"
      :style="{ textDecoration: uloha.splnena ? 'line-through' : 'none' }"
    >
      {{ uloha.nazov }}
    </li>
  </ul>

</div>
</template>

<style scoped>



</style>