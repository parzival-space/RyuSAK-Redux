<template>
    <div class="navbar">
        <div class="box left">
            <slot name="left"></slot>
        </div>
        <div class="box center">
            <slot name="center"></slot>
        </div>
        <div class="box right">
            <slot name="right">
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Navbar"
});
</script>

<style lang="scss" scoped>
.navbar {
    padding: 1em 1.25em;

    display: flex;
    flex-direction: row;
    align-items: center;

    .box {
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .left {
        text-align: left;
        margin-right: auto;
    }

    .center {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    .right {
        text-align: right;
        margin-left: auto;
    }
}
</style>