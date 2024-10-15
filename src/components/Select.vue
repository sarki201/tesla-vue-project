<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  isSelectOpen: {
    type: Boolean,
  },
});
</script>
<template>
  <div class="top-select">
    <div :class="`top-select__dropdown ${isSelectOpen && 'active'}`">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped></style>
