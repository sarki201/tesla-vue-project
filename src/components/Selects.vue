<script setup lang="ts">
import "primeicons/primeicons.css";
import Select from "./Select.vue";
import { ref, type Ref } from "vue";
import { useStore } from "@/store";

const store = useStore();

type Timeframe =
  | "All-time"
  | "Last Seven Days"
  | "This Month"
  | "This Year"
  | "Custom";

function openTimeframe() {
  store.commit("openTimeframe");
}
function openPeople() {
  store.commit("openPeople");
}
function openTopic() {
  store.commit("openTopic");
}

const timeframe: Ref<Timeframe> = ref("All-time");

const buttonsArray = ["Last Seven Days", "This Month", "This Year", "Custom"];

const setTimeframe = (time: Timeframe): void => {
  timeframe.value = time;
  store.commit("closeAllModals");
};

const search = ref("");
</script>

<template>
  <section class="top-selects">
    <Select
      :isSelectOpen="store.state.modals.isTimeframeOpen"
      label="Timeframe"
      :value="timeframe"
      @openSelect="openTimeframe"
    >
      <div class="top-select__divider"></div>
      <button
        v-for="button in buttonsArray"
        @click="setTimeframe(button as Timeframe)"
        class="top-select__btn"
      >
        {{ button }}
      </button>
    </Select>
    <Select
      :isSelectOpen="store.state.modals.isPeopleOpen"
      :openSelect="openPeople"
      label="People"
      value="All"
      @openSelect="openPeople"
    >
      <div class="top-select__tags">
        <div class="top-select__tag"> Managers <span>&times;</span> </div>
        <div class="top-select__tag"> Adrian Lu <span>&times;</span> </div>
      </div>
      <div class="top-select__search">
        <i class="pi pi-search"></i>
        <input type="text" placeholder="Search" v-model="search" />
      </div>
      <div class="top-select__divider"></div>
      <div class="top-select__options">
        <h3 class="top-select__heading">GROUPS</h3>
        <label class="top-select__options-label" for="all-users">
          <input type="radio" name="groups" id="all-users" />All Users
          <span>400</span>
        </label>
        <label class="top-select__options-label" for="managers">
          <input type="radio" name="groups" id="managers" />Managers
          <span>14</span>
        </label>
        <label class="top-select__options-label" for="trainers">
          <input type="radio" name="groups" id="trainers" />Trainers
          <span>4</span>
        </label>
      </div>
      <div class="top-select__options">
        <h3 class="top-select__heading">USERS</h3>
        <label class="top-select__options-label" for="adrian-lu">
          <input type="radio" name="users" id="adrian-lu" />Adrian Lu
        </label>
        <label class="top-select__options-label" for="evelyn-hamilton">
          <input type="radio" name="users" id="evelyn-hamilton" />Evelyn
          Hamilton
        </label>
      </div>
    </Select>
    <Select
      :isSelectOpen="store.state.modals.isTopicOpen"
      @openSelect="openTopic"
      label="Topic"
      value="All"
    >
    </Select>
  </section>
</template>
