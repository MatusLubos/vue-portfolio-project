<script setup lang="ts">
import { ref } from 'vue';

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
  <div class="component_container component_background flex relative">
    <p class="component_title loginandoff_title">components/Form.vue</p>
    <h2>Formulár a simulácia odoslania, via <br><span class="component_p_highlight">v-model</span></h2>
    <form @submit.prevent="odoslatFormular" class="form">
      <div class="form_row">
        <label>Meno:</label>
        <input v-model="formular.meno" placeholder="Napíš svoje meno" />
      </div>
      <div class="form_row">
        <label>Email:</label>
        <input type="email" v-model="formular.email" placeholder="Napíš svoj email" />
      </div>
      <div class="form_row">
        <label>Vek:</label>
        <input type="number" v-model="formular.vek" placeholder="Napíš svoj vek" />
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="formular.suhlas" class="checkbox"/>
          Súhlasím s podmienkami
        </label>
      </div>
      <button type="submit" class="button">Odoslať</button>
    </form>
    <h3>Zobrazovanie hodnôt formulára v reálnom čase:</h3>
    <pre>Zadal si meno {{ formular.meno }}</pre>
    <pre>Zadal si email {{ formular.email }}</pre>
    <pre>Zadal si vek {{ formular.vek }}</pre>
    <pre>{{ formular }}</pre>
  </div>
</template>

<style scoped>
.component_background {
  background-color:#f899ff;
}

.loginandoff_title {
  background-color: white;
  color: #f899ff;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label, input {
  font-size: 22px;
}

.form_row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.checkbox {
  transform: scale(2);
  margin: 8px;
}

.button {
  width: 120px;
  margin: 0 auto;
}

</style>