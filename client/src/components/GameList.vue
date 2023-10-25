<template>
    <div class="game-list">
        <div class="search">
            <v-text-field
                label="Filter games"
                prepend-icon="fa-solid fa-magnifying-glass"
                variant="underlined"
            ></v-text-field>
            <v-btn
                prepend-icon="fa-solid fa-arrows-rotate"
                variant="outlined"
                color="blue"
            >
                Refresh
            </v-btn>
        </div>
        <div class="games pa-6">
            <v-card
                @click="alert('Hi')"
                width="180"
                min-width="180"
                v-for="_ in Array(260).keys()"
            >
                <v-img
                    src="https://img-eshop.cdn.nintendo.net/i/1a9980faeec7c32f7e3458ad2785e46ceb0324e0325a63ac4499d7d3958abcec.jpg"
                    draggable="false"
                    height="180"
                >
                    <template v-slot:placeholder>
                        <div class="justify-center align-center text-center fill-height d-flex bg-black">
                            <span>No Image</span>
                        </div>
                    </template>
                </v-img>
                <v-card-text class="text-center pa-3">Splatoon(tm) 3</v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Center from "./generic/Center.vue";

export default defineComponent({
    name: "GameList",
    components: { Center },
    props: {
        games: {},
        height: { type: String, default: "500px" }
    }
});
</script>

<style lang="scss" scoped>
.games {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 180px;

    margin-right: 2px;
    max-height: calc(v-bind(height) - 74px); /* I dont know a better way... */
    gap: 24px;

    // disable selection
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    overflow-y: scroll;
    height: 100dvh;

    &::-webkit-scrollbar-thumb {
        transition: background 3s;
        background-color: transparent;
    }

    &:hover {
        transition: background 0s;

        &::-webkit-scrollbar-thumb {
            transition: background 0s;
            background-color: #b3b3b3;
        }
    }
}

.search {
    padding-left: 48px;
    padding-right: 48px;
    display: flex;
    gap: 24px;
    align-items: center;
}
</style>