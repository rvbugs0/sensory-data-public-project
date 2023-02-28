<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="navbar">
    <RouterLink to="/" class="btn" active-class="btn btn-active"
      >Home</RouterLink
    >
    <RouterLink to="/trends" class="btn" active-class="btn btn-active"
      >Trends</RouterLink
    >
    <RouterLink to="/about" class="btn" active-class="btn btn-active"
      >About</RouterLink
    >
    <RouterLink to="/contact" class="btn" active-class="btn btn-active"
      >Contact</RouterLink
    >
  </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap'); */

h1 {
  color: black;
}

.navbar {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: 0;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
  min-width: 157px;
  border-radius: 1.8px;
  padding: 12px 14px 14px;
  font-size: 20px;
  text-align: center;
  letter-spacing: normal;
  font-stretch: condensed;
  font-family: "Barlow", sans-serif;
  text-transform: uppercase;
}
.btn-active {
  /* background-color: #43beac;
 */
  background-color: #be0a2f;
  font-weight: bolder;
  color: white;
}
</style>
