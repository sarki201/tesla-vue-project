<script setup lang="ts">
import "primeicons/primeicons.css";
import data from "@/data.json";
import { ref } from "vue";

const users = ref(data.users.slice(0, 14));
</script>

<template>
  <article class="chart charts__user-leaderboard">
    <h6 class="overview__head mb-2">User Leaderboard</h6>
    <div v-for="user in users" class="leaderboard__container">
      <img class="leaderboard__img" :src="`/img/${user.img}`" alt="" />
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">{{ user.name }}</h4>
        <p class="leaderboard__details">{{ user.points }}</p>
      </div>
      <div :class="`leaderboard__rank ${user.isPromoted ? 'up' : 'down'}`"
        ><h4>{{ user.rank }}</h4
        ><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
  </article>
</template>
