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
        <v-btn icon="fa-brands fa-discord" variant="text" v-if="this.links.discord !== null" @click="openInBrowser(this.links.discord)" target="_blank"></v-btn>
        <v-btn icon="fa-brands fa-github" variant="text" v-if="this.links.github !== null" @click="openInBrowser(this.links.github)" target="_blank"></v-btn>
        <v-btn icon="fa-solid fa-gear" variant="text"></v-btn>
    </template>
  </navbar>
  <GameList :height="gameListHeight" :games="this.games"></GameList>
  <div ref="footerRef" class="text-subtitle-2 text-center">
    RyuSAK-Redux v1.0.0
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Navbar from "../components/generic/Navbar.vue";
import Center from "../components/generic/Center.vue";
import GameList from "../components/GameList.vue";

import links from "../assets/links.json";

export default defineComponent({
    components: { Center, Navbar, GameList },
    data() { return {
        items: ['Ryujinx global (default)', 'Add additional configuration'],
        model: ref('Ryujinx global (default)'),
        gameListHeight: "calc(100vh - calc(88px + 24px))",
        games: Array(26).fill({ name: 'Test Game', iconUrl: 'https://img-eshop.cdn.nintendo.net/i/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5.jpg', id: '10'}),
        links
    }},
    mounted() {
        this.gameListHeight = `calc(100vh - calc(${this.$refs.navbar.$el.offsetHeight}px + ${this.$refs.footerRef.offsetHeight ?? 12}px))`
    },
    methods: {
        openInBrowser: window.electron.openInBrowser
    }
});
</script>

<style lang="scss">

</style>