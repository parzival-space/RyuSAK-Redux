<style src="./assets/base.scss"></style>

<template>
  <navbar ref="navbar">
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
  <GameList :height="gameListHeight"></GameList>
  <div ref="footerRef" class="text-subtitle-2 text-center">
    RyuSAK-Redux v1.0.0
  </div>
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
    model: ref('Ryujinx global (default)'),
    gameListHeight: "calc(100vh - calc(88px + 24px))"
  }},
  mounted() {
    console.log(this.$refs.footerRef)
    let heightString = `calc(100vh - calc(${this.$refs.navbar.$el.offsetHeight}px + ${this.$refs.footerRef.offsetHeight ?? 12}px))`
    console.log(heightString)
    this.gameListHeight = heightString
  }
});
</script>

<style lang="scss">
.btn-style {
  background: var(--background-secondary);
  color: var(--foreground-primary);
  max-width: 100vw;
}
</style>