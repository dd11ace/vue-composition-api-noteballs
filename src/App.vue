<script setup>
// imports
import NavBar from '@/components/Layout/NavBar.vue';
</script>

<template>
  <NavBar />

  <div class="container is-max-desktop ps-2 py-4">
    <RouterView />
  </div>
</template>

<style>
@import 'bulma\css\bulma.min.css';
</style>
