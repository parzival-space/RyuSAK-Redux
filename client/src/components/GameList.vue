<template>
    <div class="game-list" ref="parentRef">
        <div class="search" ref="searchRef">
            <v-text-field
                label="Filter games"
                prepend-icon="fa-solid fa-magnifying-glass"
                variant="underlined"
                v-model="searchInput"
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
                width="180"
                min-width="180"
                v-for="game in this.filteredGames"
                @click="() => this.$router.push(`/game/${game.id}`)"
            >
                <v-img
                    :src="game.iconUrl"
                    draggable="false"
                    height="180"
                    :cover="true"
                >
                    <template v-slot:placeholder>
                        <div class="justify-center align-center text-center fill-height d-flex bg-black">
                            <span>No Preview</span>
                        </div>
                    </template>
                </v-img>
                <v-card-text class="text-center pa-3">{{ game.name }}</v-card-text>
            </v-card>
        </div>
        <div v-if="this.filteredGames.length < 1" class="text-center">
            No games found.
        </div>
    </div>
</template>

<script lang="ts">
import { Game } from "src/types/Game";
import { defineComponent } from "vue";
import Center from "./generic/Center.vue";

export default defineComponent({
    name: "GameList",
    components: { Center },
    props: {
        games: { type: Array<Game>, default: [] },
        height: { type: String, default: "500px" }
    },
    data() {return {
        gamesHeight: "10px",
        searchInput: ""
    }},
    computed: {
        filteredGames() {
            return this.games.filter((g: Game) =>
                g.name.toLowerCase().includes(this.searchInput.toLowerCase())
            );
        }
    },
    mounted() {
        const searchHeight = this.$refs["searchRef"].offsetHeight;
        const parentHeight = this.$refs["parentRef"].offsetHeight;
        this.gamesHeight = `calc(${parentHeight}px - ${searchHeight}px)`;
    },
});
</script>

<style lang="scss" scoped>
.game-list {
    height: v-bind(height);
}

.games {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 180px;

    margin-right: 2px;
    max-height: v-bind(gamesHeight);
    gap: 24px;

    // disable selection
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    overflow-y: scroll;
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