<script setup lang="ts">
import { useUserStore } from '../stores/useUserStore.ts';


const userStore = useUserStore()

const toggleLogin = () => {
  if(userStore.prihlaseny) userStore.odhlas()
  else userStore.prihlas()
}
</script>

<template>
  <div class="component_container component_background relative">
    <p class="component_title loginandoff_title">components/LoginandOff.vue</p>
    <h2>Prihlásiť/odhlásiť toggle via <br><span class="component_p_highlight">Pinia Stores</span></h2>
    <div class="user_toggle_container">
      <p>{{ userStore.meno }} je {{ userStore.prihlaseny ? 'prihlásený' : 'odhlásený' }}</p>
      <button @click="toggleLogin" class="button">Prepni stav</button>
    </div>
  </div>



</template>

<style scoped>

.component_background {
  background-color: rgb(204, 187, 0);
}

.user_toggle_container {
  margin-top: 22px;
  background-color: rgb(232, 227, 227);
  padding: 12px 22px;
  padding-bottom: 22px;
  border-radius: 22px;
}

.loginandoff_title {
  background-color: white;
  color: rgb(204, 187, 0);
}

.button {
  background-color: #243752;
  color: white;
}

</style>