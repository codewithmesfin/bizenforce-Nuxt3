<template>
  <div>
    <PublicToolbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import PublicToolbar from "../components/layoutFiles/PublicToolbar.vue";
import Footer from "../components/layoutFiles/Footer.vue";
</script>
