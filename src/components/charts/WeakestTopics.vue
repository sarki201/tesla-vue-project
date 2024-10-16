<script setup lang="ts">
import data from "@/data.json";
import { ref } from "vue";

const topics = ref(data.topics.slice(3));
</script>

<template>
  <article class="chart charts__weakest-topics">
    <h6 class="overview__head mb-2">Weakest Topics</h6>
    <div v-for="topic in topics" class="topics__container">
      <img class="topics__img" :src="`/img/${topic.picture}`" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topic.name }}</h4>
        <div class="topics__bar weak">
          <div
            class="topics__bar-child weak"
            :style="`width: ${topic.strength}%`"
          ></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage"
          >{{ topic.strength }}% <span>Correct</span></h4
        >
      </div>
    </div>
  </article>
</template>
