<script setup lang="ts">
import { useUserStore } from './stores/user.ts';
import HelloWorld from './components/HelloWorld.vue';
import Navigation from './components/Navigation.vue';

import { ref, computed } from 'vue';

const userStore = useUserStore()

const toggleLogin = () => {
  if(userStore.prihlaseny) userStore.odhlas()
  else userStore.prihlas()
}


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

const formular = ref({
  meno: '',
  email: '',
  vek: null as number | null,
  suhlas: false
});
// funkcia na simulované odoslanie formulára
const odoslatFormular = () => {
  console.log('Formulár odoslaný:', formular.value);
  alert(`Odoslané: ${JSON.stringify(formular.value)}`);
  // po odoslaní môžeme formulár vyčistiť
  formular.value = { meno: '', email: '', vek: null, suhlas: false };
};


</script>

<template>

  <Navigation/>

  <router-view />

<p>{{ userStore.meno }} je {{ userStore.prihlaseny ? 'prihlásený' : 'odhlásený' }}</p>
  <button @click="toggleLogin">Prepni stav</button>


  <form @submit.prevent="odoslatFormular">
      <div>
        <label>Meno:</label>
        <input v-model="formular.meno" placeholder="Napíš svoje meno" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="formular.email" placeholder="Napíš svoj email" />
      </div>
      <div>
        <label>Vek:</label>
        <input type="number" v-model="formular.vek" placeholder="Napíš svoj vek" />
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="formular.suhlas" />
          Súhlasím s podmienkami
        </label>
      </div>
      <button type="submit">Odoslať</button>
    </form>
    <h3>Hodnoty formulára (pre zobrazenie v reálnom čase):</h3>
    <pre>{{ formular }}</pre>


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

  
  <HelloWorld msg="Vite + Vue projekt" />

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


</template>

<style scoped>



</style>