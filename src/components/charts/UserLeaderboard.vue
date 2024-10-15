<script setup lang="ts">
import "primeicons/primeicons.css";
import avatar1 from "@/assets/img/avatar-1.png";
import avatar2 from "@/assets/img/avatar-2.png";
import avatar3 from "@/assets/img/avatar-3.png";
import avatar4 from "@/assets/img/avatar-4.png";
</script>

<template>
  <article class="chart charts__user-leaderboard">
    <h6 class="overview__head mb-2">User Leaderboard</h6>
    <div class="leaderboard__container">
      <img class="leaderboard__img" :src="avatar1" alt="" />
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Jesse Thomas</h4>
        <p class="leaderboard__details">637 Points - 98% Correct</p>
      </div>
      <div class="leaderboard__rank up"
        ><h4>1</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
    <div class="leaderboard__container">
      <img class="leaderboard__img" :src="avatar2" alt="" />
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Thisal Mathiyazhagan</h4>
        <p class="leaderboard__details">637 Points - 89% Correct</p>
      </div>
      <div class="leaderboard__rank down"
        ><h4>2</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
    <div class="leaderboard__container">
      <img class="leaderboard__img" :src="avatar3" alt="" />
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Helen Chuang</h4>
        <p class="leaderboard__details">637 Points - 88% Correct</p>
      </div>
      <div class="leaderboard__rank up"
        ><h4>3</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
    <div class="leaderboard__container">
      <img class="leaderboard__img" :src="avatar4" alt="" />
      <div class="leaderboard__info">
        <h4 class="leaderboard__name">Lura Silverman</h4>
        <p class="leaderboard__details">637 Points - 66% Correct</p>
      </div>
      <div class="leaderboard__rank up"
        ><h4>4</h4><i class="pi pi-sort-down-fill"></i
      ></div>
    </div>
  </article>
</template>
