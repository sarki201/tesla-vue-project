<script setup lang="ts">
import "primeicons/primeicons.css";
</script>

<template>
  <article class="chart charts__activity">
    <div class="activity__head">
      <h6 class="overview__head">Activity</h6>
      <h6 class="activity__drop">
        Month
        <i class="pi pi-chevron-down"></i>
      </h6>
    </div>
    <div class="activity__divider"></div>
    <div class="activity__chart">
      <div class="activity__labels">
        <div class="activity__label text-sm">0</div>
        <div class="activity__label text-sm">100</div>
        <div class="activity__label text-sm">200</div>
        <div class="activity__label text-sm">300</div>
        <div class="activity__label text-sm">400</div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">JAN</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 25%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">FEB</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 23%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">MAR</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 23%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">APR</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 52%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">MAY</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 60%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">JUN</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 50%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">JUL</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 56%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">AUG</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 25%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">SEP</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 70%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">OCT</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 80%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">NOV</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 90%"></div>
        </div>
      </div>
      <div class="activity__month">
        <div class="activity__month-name text-sm">DEC</div>
        <div class="activity__month-chart">
          <div class="activity__month-chart-child" style="height: 100%"></div>
        </div>
      </div>
    </div>
  </article>
</template>
