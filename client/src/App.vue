<style src="./assets/base.scss"></style>

<template>
  <navbar>
    <template v-slot:left>
      <v-select
        label="Configuration"
        variant="outlined"
        v-model="model"
        :items="items"
        hide-details
        style="width: 35vw;"
      ></v-select>
    </template>
    <template v-slot:right>
        <v-btn variant="flat" color="blue-darken-2">Download Firmware 1.2.3</v-btn>
        <v-btn variant="flat" color="blue-darken-2">Download Keys</v-btn>
        <v-btn icon="fa-brands fa-discord" variant="text"></v-btn>
        <v-btn icon="fa-brands fa-github" variant="text"></v-btn>
        <v-btn icon="fa-solid fa-gear" variant="text"></v-btn>
    </template>
  </navbar>

  <GameList></GameList>
</template>

<script>
import { defineComponent, ref } from "vue";
import Navbar from "./components/generic/Navbar.vue";
import Center from "./components/generic/Center.vue";
import GameList from "./components/GameList.vue"

export default defineComponent({
  components: { Center, Navbar, GameList },
  data() { return {
    items: ['Ryujinx global (default)', 'Add additional configuration'],
    model: ref('Ryujinx global (default)')
  }}
});
</script>

<style lang="scss">
.btn-style {
  background: var(--background-secondary);
  color: var(--foreground-primary);
  max-width: 100vw;
}
</style>