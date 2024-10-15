<script setup lang="ts">
import graph from "@/assets/img/graph.png";
import data from "@/data.json";
</script>
<template>
  <article class="charts__overview">
    <div class="chart overview">
      <h6 class="overview__head mb-2">Active Users</h6>
      <h2 class="overview__details"
        >{{ data.activeUsers }}<span>/{{ data.totalUsers }}</span></h2
      >
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Questions Answered</h6>
      <h2 class="overview__details">{{ data.questionsAnswered }}</h2>
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Av. Session length</h6>
      <h2 class="overview__details">{{ data.averageSessionLength }}</h2>
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Starting Knowledge</h6>
      <h2 class="overview__details">{{ data.startingKnowledge }}%</h2>
      <img class="overview__graph" :src="graph" alt="graph" />
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Current Knowledge</h6>
      <h2 class="overview__details">{{ data.currentKnowledge }}%</h2>
      <img class="overview__graph" :src="graph" alt="graph" />
    </div>
    <div class="chart overview">
      <h6 class="overview__head mb-2">Knowledge Gain</h6>
      <h2 class="overview__details">+{{ data.knowledgeGain }}%</h2>
      <img class="overview__graph" :src="graph" alt="graph" />
    </div>
  </article>
</template>
