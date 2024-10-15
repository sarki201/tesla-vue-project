<script setup lang="ts">
import "primeicons/primeicons.css";
</script>

<template>
  <article class="chart charts__groups-leaderboard">
    <h6 class="overview__head mb-2">Groups Leaderboard</h6>
    <div class="leaderboard__container">
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Houston Facility</h4>
        <p class="leaderboard__details">52 Points / User - 97% Correct</p>
      </div>
      <div class="leaderboard__rank up"
        ><h4>1</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
    <div class="leaderboard__container">
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Test Group</h4>
        <p class="leaderboard__details">52 Points / User - 95% Correct</p>
      </div>
      <div class="leaderboard__rank down"
        ><h4>2</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
    <div class="leaderboard__container">
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Sales Leadership</h4>
        <p class="leaderboard__details">52 Points / User - 87% Correct</p>
      </div>
      <div class="leaderboard__rank up"
        ><h4>3</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
    <div class="leaderboard__container">
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Northeast Region</h4>
        <p class="leaderboard__details">51 Points / User - 80% Correct</p>
      </div>
      <div class="leaderboard__rank up"
        ><h4>4</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
  </article>
</template>
