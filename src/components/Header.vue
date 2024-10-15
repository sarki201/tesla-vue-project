<script setup lang="ts">
//@ts-ignore
import { useStore } from "@/store";

const store = useStore();

function openAside() {
  store.commit("openAside");
}
</script>

<template>
  <header>
    <div class="header__head">
      <button @click="openAside" class="header__menu-btn"
        ><i class="pi pi-bars"></i
      ></button>
      <h2>Reports</h2>
    </div>
    <button class="header__download-btn">
      <i class="pi pi-download"></i>
      <p>Download</p>
    </button>
  </header>
</template>
