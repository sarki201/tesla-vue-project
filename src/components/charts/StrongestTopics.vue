<script setup lang="ts">
import data from "@/data.json";
import { ref } from "vue";

const topics = ref(data.topics.slice(0, 3));
</script>

<template>
  <article class="chart charts__strongest-topics">
    <h6 class="overview__head mb-2">Strongest Topics</h6>
    <div v-for="topic in topics" class="topics__container">
      <img
        class="topics__img"
        :src="`/img/${topic.picture}`"
        alt="Dynamic Image"
      />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topic.name }}</h4>
        <div class="topics__bar strong">
          <div
            class="topics__bar-child strong"
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
