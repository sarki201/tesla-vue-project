<script setup lang="ts">
import "primeicons/primeicons.css";
import Overview from "./charts/Overview.vue";
import Activity from "./charts/Activity.vue";
import WeakestTopics from "./charts/WeakestTopics.vue";
import StrongestTopics from "./charts/StrongestTopics.vue";
import UserLeaderboard from "./charts/UserLeaderboard.vue";
import GroupsLeaderboard from "./charts/GroupsLeaderboard.vue";
</script>

<template>
  <section class="charts">
    <Overview />
    <Activity />
    <WeakestTopics />
    <StrongestTopics />
    <UserLeaderboard />
    <GroupsLeaderboard />
  </section>
</template>
