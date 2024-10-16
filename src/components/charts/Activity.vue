<script setup lang="ts">
import "primeicons/primeicons.css";
import data from "@/data.json";
import { computed, ref, type ComputedRef, type Ref } from "vue";

type RateSwitch = "Month" | "Year";

const rateSwitch: Ref<RateSwitch> = ref("Month");

const switchRate = () => {
  if (rateSwitch.value === "Month") {
    rateSwitch.value = "Year";
  } else {
    rateSwitch.value = "Month";
  }
};

const calculateLabelArr = (num: number): number[] => {
  if (num > 20) {
    return [];
  }
  const arr = [];
  for (let i = 0; i <= num; i++) {
    if (i !== 0) {
      arr.push(i / num);
    } else {
      arr.push(0);
    }
  }
  return arr;
};

const activityLabels = calculateLabelArr(8);

const activityMonths = activityLabels.map((label) =>
  Math.round(label * data.activityMonthScore),
);
const activityYears = activityLabels.map((label) =>
  Math.round(label * data.activityYearScore),
);

const rateData = computed(() => {
  return rateSwitch.value === "Month"
    ? data.activity.months
    : data.activity.years;
});

const activityToShow = computed(() => {
  return rateSwitch.value === "Month" ? activityMonths : activityYears;
});
</script>

<template>
  <article class="chart charts__activity">
    <div class="activity__head">
      <h6 class="overview__head">Activity</h6>
      <h6 @click="switchRate" class="activity__drop">
        {{ rateSwitch }}
        <i class="pi pi-chevron-down"></i>
      </h6>
    </div>
    <div class="activity__divider"></div>
    <div class="activity__chart">
      <div class="activity__labels">
        <div v-for="label in activityToShow" class="activity__label text-sm">{{
          label
        }}</div>
      </div>
      <div v-for="rate in rateData" :key="rate.date" class="activity__month">
        <div class="activity__month-name text-sm">{{ rate.date }}</div>
        <div class="activity__month-chart">
          <div
            class="activity__month-chart-child"
            :style="`height: ${rate.percentage}%`"
          ></div>
        </div>
      </div>
    </div>
  </article>
</template>
