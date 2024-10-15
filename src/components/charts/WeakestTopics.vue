<script setup lang="ts">
import data from "@/data.json";
import thumbnail1 from "@/assets/img/thumbnail-1.png";
import thumbnail2 from "@/assets/img/thumbnail-2.png";
import thumbnail3 from "@/assets/img/thumbnail-3.png";
import { ref } from "vue";

const topics = ref(data.topics.slice(3));
</script>

<template>
  <article class="chart charts__weakest-topics">
    <h6 class="overview__head mb-2">Weakest Topics</h6>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail1" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topics[0].name }}</h4>
        <div class="topics__bar weak">
          <div
            class="topics__bar-child weak"
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
      <img class="topics__img" :src="thumbnail2" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topics[1].name }}</h4>
        <div class="topics__bar weak">
          <div
            class="topics__bar-child weak"
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
      <img class="topics__img" :src="thumbnail3" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">{{ topics[2].name }}</h4>
        <div class="topics__bar weak">
          <div
            class="topics__bar-child weak"
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
