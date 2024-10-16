<script setup lang="ts">
import "primeicons/primeicons.css";
import data from "@/data.json";
import { ref } from "vue";

const groups = ref(data.groups);
</script>

<template>
  <article class="chart charts__groups-leaderboard">
    <h6 class="overview__head mb-2">Groups Leaderboard</h6>
    <div v-for="group in groups" :key="group.id" class="leaderboard__container">
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">{{ group.name }}</h4>
        <p class="leaderboard__details">{{ group.points }}</p>
      </div>
      <div :class="`leaderboard__rank ${group.isPromoted ? 'up' : 'down'}`"
        ><h4>{{ group.rank }}</h4
        ><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
  </article>
</template>
