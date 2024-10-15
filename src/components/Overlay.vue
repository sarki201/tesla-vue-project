<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();

function closeAllModals() {
  store.commit("closeAllModals");
}
</script>
<template>
  <div
    @click="closeAllModals"
    :class="`overlay ${store.state.isOverlayActive && 'active'}`"
  ></div>
</template>
