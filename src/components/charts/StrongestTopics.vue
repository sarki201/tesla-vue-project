<script setup lang="ts">
import data from "@/data.json";
import thumbnail4 from "@/assets/img/thumbnail-4.png";
import thumbnail5 from "@/assets/img/thumbnail-5.png";
import thumbnail6 from "@/assets/img/thumbnail-6.png";
import { ref } from "vue";

const topics = ref(data.topics.slice(0, 3));
</script>

<template>
  <article class="chart charts__strongest-topics">
    <h6 class="overview__head mb-2">Strongest Topics</h6>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail4" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topics[0].name }}</h4>
        <div class="topics__bar strong">
          <div
            class="topics__bar-child strong"
            :style="`width: ${topics[0].strength}%`"
          ></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage"
          >{{ topics[0].strength }}% <span>Correct</span></h4
        >
      </div>
    </div>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail5" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topics[1].name }}</h4>
        <div class="topics__bar strong">
          <div
            class="topics__bar-child strong"
            :style="`width: ${topics[1].strength}%`"
          ></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage"
          >{{ topics[1].strength }}% <span>Correct</span></h4
        >
      </div>
    </div>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail6" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topics[2].name }}</h4>
        <div class="topics__bar strong">
          <div
            class="topics__bar-child strong"
            :style="`width: ${topics[2].strength}%`"
          ></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage"
          >{{ topics[2].strength }}% <span>Correct</span></h4
        >
      </div>
    </div>
  </article>
</template>
