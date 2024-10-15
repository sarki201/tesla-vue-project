<script setup lang="ts">
import "primeicons/primeicons.css";
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
import Overlay from "./components/Overlay.vue";
</script>

<template>
  <Header />
  <Aside />
  <RouterView />
  <footer></footer>
  <Overlay />
</template>

<style scoped></style>
