<script setup lang="ts">
import thumbnail1 from "@/assets/img/thumbnail-1.png";
import thumbnail2 from "@/assets/img/thumbnail-2.png";
import thumbnail3 from "@/assets/img/thumbnail-3.png";
</script>

<template>
  <article class="chart charts__weakest-topics">
    <h6 class="overview__head mb-2">Weakest Topics</h6>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail1" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">Food Safety</h4>
        <div class="topics__bar weak">
          <div class="topics__bar-child weak" style="width: 74%"></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage">74% <span>Correct</span></h4>
      </div>
    </div>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail2" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">Compliance Basics Procedures</h4>
        <div class="topics__bar weak">
          <div class="topics__bar-child weak" style="width: 52%"></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage">52% <span>Correct</span></h4>
      </div>
    </div>
    <div class="topics__container">
      <img class="topics__img" :src="thumbnail3" alt="" />
      <div class="topics__info">
        <h4 class="topics__topic">Company Networking</h4>
        <div class="topics__bar weak">
          <div class="topics__bar-child weak" style="width: 36%"></div>
        </div>
      </div>
      <div class="topics__details">
        <h4 class="topics__percentage">36% <span>Correct</span></h4>
      </div>
    </div>
  </article>
</template>
