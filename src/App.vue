<script setup>
import { RouterView } from "vue-router";
</script>
 
<template>
  <div class="container">
    <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Restaurent</a>
    </div>
  </nav>
    <RouterView />
  </div>
</template>
 
<style scoped>
</style>
