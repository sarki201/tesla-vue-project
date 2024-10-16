<script setup lang="ts">
import "primeicons/primeicons.css";

defineProps({
  isSelectOpen: Boolean,
  label: String,
  value: String,
});

const emit = defineEmits(["openSelect"]);
const openSelect = () => {
  emit("openSelect");
};
</script>
<template>
  <div class="top-select">
    <div :class="`top-select__dropdown ${isSelectOpen && 'active'}`">
      <div @click="openSelect" class="top-select__selector">
        <p
          >{{ label }}:<span>{{ value }}</span></p
        >
        <i class="pi pi-sort-down-fill top-select__down"></i>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped></style>
