<script setup>

import { RouterLink } from "vue-router";


</script>

<template>
  <div class="bg">


    <div class="main">
      <header>
        <!-- <h1>Cool Articles</h1> -->
        <br>
      </header>
      <div class="band">


        <div class="item">
          <RouterLink to="/trend_detail" class="card">
            <div class="thumb" style="background-image: url('./images/air.webp');"></div>
            <article>
              <h1>Air & Climate</h1>
              <!-- <span>...</span> -->
            </article>
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/trend_detail" class="card">
            <div class="thumb" style="background-image: url('./images/biodiversity.jpeg');">
            </div>
            <article>
              <h1>Biodiversity</h1>
              <!-- <span>Melody Nieves</span> -->
            </article>
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/trend_detail" class="card">
            <div class="thumb" style="background-image: url('./images/energy.jpeg');"></div>
            <article>
              <h1>Energy & Minerals</h1>
              <!-- <span>Kezz Bracey</span> -->
            </article>
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/trend_detail" class="card">
            <div class="thumb" style="background-image: url('./images/forest.jpeg');"></div>
            <article>
              <h1>Forests</h1>
              <!-- <span>Rose</span> -->
            </article>
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/trend_detail" class="card">
            <div class="thumb" style="background-image: url('./images/water-resources.jpeg');">
            </div>
            <article>
              <h1>Inland Water Resources</h1>

              <!-- <span>Marie Gardiner</span> -->
            </article>
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/trend_detail" class="card">
            <div class="thumb" style="background-image: url('./images/agriculture.png');">
            </div>
            <article>
              <h1>Land & Agriculture</h1>
              <!-- <span>Kendra Schaefer</span> -->
            </article>
          </RouterLink>
        </div>

        <div class="item">
          <RouterLink to="/trend_detail" class="card">
            <div class="thumb" style="background-image:url('./images/ocean.jpeg')">
            </div>
            <article>
              <h1>Marine & Coastal Areas</h1>

            </article>
          </RouterLink>
        </div>

      </div>

    </div>
  </div>
</template>





<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap');

.bg {
  background: #f5f7f8;
  min-width: 100vw;
  min-height: 100vh;
}

.main {

  background: #f5f7f8;
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  padding: 20px 0;

}

header {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}

@media (min-width: 30em) {
  .band {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 60em) {
  .band {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
}

.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}

.card article {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h1 {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.card p {
  flex: 1;
  line-height: 1.4;
}

.card span {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0 0 0;
}

.card .thumb {
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
}

@media (min-width: 60em) {
  /* .item {
    grid-column: 1 / span 2;
  } */

  .item h1 {
    font-size: 24px;

    /* font-family: 'Poppins', sans-serif; */
    font-family: "Barlow", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;

    /* border: 5px solid; */
    /* padding: 2rem; */

    /* The important extrinsic width */


  }
}
</style>