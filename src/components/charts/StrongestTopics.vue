<script setup lang="ts">
import thumbnail4 from "@/assets/img/thumbnail-4.png";
import thumbnail5 from "@/assets/img/thumbnail-5.png";
import thumbnail6 from "@/assets/img/thumbnail-6.png";
</script>

<template>
  <article class="chart charts__strongest-topics">
    <h6 class="overview__head mb-2">Strongest Topics</h6>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail4" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">Covid Protocols</h4>
        <div class="topics__bar strong">
          <div class="topics__bar-child strong" style="width: 95%"></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage">95% <span>Correct</span></h4>
      </div>
    </div>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail5" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">Cyber Security Basics</h4>
        <div class="topics__bar strong">
          <div class="topics__bar-child strong" style="width: 92%"></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage">92% <span>Correct</span></h4>
      </div>
    </div>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail6" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">Social Media Policies</h4>
        <div class="topics__bar strong">
          <div class="topics__bar-child strong" style="width: 89%"></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage">89% <span>Correct</span></h4>
      </div>
    </div>
  </article>
</template>
