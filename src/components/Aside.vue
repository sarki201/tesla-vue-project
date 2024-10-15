<script setup lang="ts">
import "primeicons/primeicons.css";
import logo from "@/assets/img/logo.png";
import avatar from "@/assets/img/avatar.png";
import { useStore } from "@/store";

const store = useStore();
</script>

<template>
  <aside :class="`${store.state.modals.isAsideOpen && 'active'}`">
    <img class="logo" :src="logo" alt="" />
    <ul>
      <li>
        <a class="active" href="/"
          ><i class="pi pi-wave-pulse"></i><p>Reports</p></a
        >
      </li>
      <li>
        <a href="/"><i class="pi pi-bolt"></i><p>Library</p></a>
      </li>
      <li>
        <a href="/"><i class="pi pi-users"></i><p>People</p></a>
      </li>
      <li>
        <a href="/"><i class="pi pi-book"></i><p>Activities</p></a>
      </li>
    </ul>
    <h4 class="aside__heading">Support</h4>
    <ul>
      <li>
        <a href="/"><i class="pi pi-lightbulb"></i><p>Get Started</p></a>
      </li>
      <li>
        <a href="/"><i class="pi pi-cog"></i><p>Settings</p></a>
      </li>
    </ul>
    <div class="aside-bottom">
      <img class="avatar" :src="avatar" alt="" />
      <h5>Sam Wheeler</h5>
      <p class="avatar__email">samwheeler@example.com</p>
    </div>
  </aside>
</template>
