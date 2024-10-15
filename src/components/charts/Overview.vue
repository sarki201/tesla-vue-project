<script setup lang="ts">
import graph from "@/assets/img/graph.png";
</script>
<template>
  <article class="charts__overview">
    <div class="chart overview">
      <h6 class="overview__head mb-2">Active Users</h6>
      <h2 class="overview__details">27<span>/80</span></h2>
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Questions Answered</h6>
      <h2 class="overview__details">3,298</h2>
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Av. Session length</h6>
      <h2 class="overview__details">2m 34s</h2>
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Starting Knowledge</h6>
      <h2 class="overview__details">64%</h2>
      <img class="overview__graph" :src="graph" alt="graph" />
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Current Knowledge</h6>
      <h2 class="overview__details">86%</h2>
      <img class="overview__graph" :src="graph" alt="graph" />
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Knowledge Gain</h6>
      <h2 class="overview__details">+34%</h2>
      <img class="overview__graph" :src="graph" alt="graph" />
    </div>
  </article>
</template>
