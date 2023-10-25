<template>
    <div class="center">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Center"
});
</script>

<style lang="scss" scoped>
.center {
    width: 75%;
    margin: 0 auto;
    text-align: center;
}
</style>