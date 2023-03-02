<script setup>
import * as echarts from "echarts";

import { ref, onMounted, onUnmounted } from "vue";

const myChart = ref(0);
const option = ref({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "line",
      symbol: "triangle",
      symbolSize: 20,
      lineStyle: {
        color: "#5470C6",
        width: 4,
        type: "dashed",
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: "#EE6666",
        color: "yellow",
      },
    },
  ],
});

function initializeChart() {
  let chartDom = document.getElementById("chart");

  myChart.value = echarts.init(chartDom);
  option.value && myChart.value.setOption(option.value);
}

onMounted(() => {
  initializeChart();
});

onUnmounted(() => {
  echarts.dispose(myChart.value);
});
</script>

<template>
  <div class="home">
    <div id="left">
      <p class="awesome center">Trends:</p>

      <br />
      <div id="chart"></div>
    </div>
    <div id="right">
      <p class="awesome">Info:</p>
      <p class="medium-heading">Sea water temperature</p>
      <br />
      <div class="facts">
        <p class="info">
          The ocean absorbs most of the excess heat from greenhouse gas
          emissions, leading to rising ocean temperatures.
        </p>
        <p class="info">
          Increasing ocean temperatures affect marine species and ecosystems,
          causing coral bleaching and the loss of breeding grounds for marine
          fishes and mammals.
        </p>
        <p class="info">
          Rising ocean temperatures also affect the benefits humans derive from
          the ocean; threatening food security, increasing the prevalence of
          diseases, causing more extreme weather events and the loss of coastal
          protection.
        </p>

        <p class="info">
          Achieving the mitigation targets set by the Paris Agreement on climate
          change and limiting the global average temperature increase to well
          below 2°C above pre-industrial levels is crucial to prevent the
          massive, irreversible impacts of ocean warming.
        </p>
        <p class="info">
          Establishing marine protected areas and putting in place adaptive
          measures, such as precautionary catch limits to prevent overfishing,
          can protect ocean ecosystems and shield humans from the effects of
          ocean warming.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 25px;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  flex-basis: 0;
  background-color: #fff;
  min-height: 100vh;
  height: 100%;
  width: 100%;
}

#chart {
  width: 100%;
  height: 400px;
}

#left {
  left: 0px;
  width: 50%;
}

#right {
  width: 50%;
  right: 0px;
}

.awesome {
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 200;
  line-height: 1;
  /* border: 5px solid; */
  /* padding: 2rem; */

  /* The important extrinsic width */
  width: 500px;
  margin-bottom: 50px;
}
.center {
  text-align: center;
}

.awesome[data-sizing="intrinsic"] {
  width: min-content;
}

.medium-heading {
  color: #be0a2f;
  letter-spacing: 5px;
  font-weight: bolder;
  font-size: 2rem;
  text-transform: uppercase;
}

.info {
  font-size: 1.1rem;
  display: list-item;
}

/*


Presentational styles 
*/
.awesome {
  --flow-space: 2rem;
}
</style>
