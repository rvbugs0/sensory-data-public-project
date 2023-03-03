<script setup>

import { ref } from "vue";
import * as echarts from 'echarts';

import axios from 'axios';

const charts = ref([
    {
        id: 1,
        type: "line",
        title: " Major change across the week",
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yData: [1, 2, 3, 4, 5, 6, 7]
    },

    {
        id: 2,
        type: "area",
        title: "Area chart",
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yData: [1, 2, 3, 4, 5, 6, 7]
    },
    {

        id: 3,
        title: "Trends across multiple points",
        type: "pie",
        tooltipTitle: "Access from",
        data: [{ value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }]

    }, {
        id: 4,
        title: "Trends",
        type: "stacked-line",
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]

    },
    {
        id: 5,
        title: "Bar chart",
        type: 'bar',
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yData: [120, 200, 150, 80, 70, 110, 130]
    }



]
)

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', {
    params: {
        ID: 12345
    }
})
    .then(function (response) {

        // console.log(response.data.bpi)
        let pairs = response.data.bpi;

        let x = []
        let y = []

        for (var k in pairs) {
            x.push(k)
            y.push(pairs[k].rate_float)

        }

        let chart_obj = {
            id: (Math.random() + 1).toString(36).substring(7),
            type: "line",
            title: "Bitcoin prices",
            xData: x,
            yData: y
        }

        charts.value.push(chart_obj)
        setTimeout(() => {
            var m = echarts.init(document.getElementById(chart_obj.id + "_chart"));
            m.setOption(getOption(chart_obj))


        }, 1000)
        console.log("helo")




    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

function getOption(element) {
    let option;
    if (element.type == "line" || element.type == "area") {

        option = {
            title: {
                left: 'center',
                text: element.title
            },
            xAxis: {
                type: 'category',
                data: element.xData
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: element.yData,
                    type: 'line',
                    smooth: true

                }
            ]
        };

        if (element.type == "area") {
            option.series.forEach(e => { e.areaStyle = {} });
        }



    } else if (element.type == "pie") {


        option = {
            title: {
                left: 'center',
                text: element.title
            },

            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: element.tooltipTitle,
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: element.data
                }
            ]
        };




    } else if (element.type == "stacked-line") {
        option = {
            title: {
                text: element.title,
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: '5%',
                left: 'center',

                data: element.data.map((e) => {
                    return e.name;
                })
            },
            grid: {

                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: element.xData
            },
            yAxis: {
                type: 'value'
            },
            series: element.data
        };


    } else if (element.type == "bar") {
        option = {
            title: {
                left: 'center',
                text: element.title
            },

            xAxis: {
                type: 'category',
                data: element.xData
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: element.yData,
                    type: 'bar'
                }
            ]
        };
    }
    return option;
}



setTimeout(() => {

    charts.value.forEach(element => {


        var chartDom = document.getElementById(element.id + '_chart');
        var myChart = echarts.init(chartDom);
        var option = getOption(element);



        option && myChart.setOption(option);






    });

});




</script>



<template>
    <div id="chart_container">

        <div v-for="chart in charts" :id="chart.id + '_chart'" style="height:500px;width: 800px;" class="chart_box"></div>





    </div>
</template>


<style scoped>
#chart_container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 50px;
    min-height: 100vh;
    min-width: 100vw;
    color: black;
}

.chart_box {
    margin: 50px;
}
</style>