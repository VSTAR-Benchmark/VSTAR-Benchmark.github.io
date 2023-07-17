var sunburst = [{
    name: 'Causal,\n48%',
    itemStyle: {
        color: '#418ccd'
    },
    children: [{
        name: 'How,\n12%',
        value: 136,
        itemStyle: {
            color: '#418ccd'
        }
    },
    {
        name: 'Why,\n36%',
        value: 367,
        itemStyle: {
            color: '#418ccd'
        }
    }]
    },{
    name: 'Temporal,\n29%',
    itemStyle: {
        color: '#db5d23'
    },
    children: [{
        name: 'Present,\n13%',
        value: 123,
        itemStyle: {
            color: '#db5d23'
        }
    }, {
        name: 'Previous/\nNext,\n16%',
        value: 160,
        itemStyle: {
            color: '#db5d23'
        }
    }]
    },{
    name: 'Descriptive,\n23%',
    itemStyle: {
        color: '#a8a8a8'
    },
    children: [{
        name: 'Binary,\n7%',
        value: 71,
        itemStyle: {
            color: '#a8a8a8'
        }
    }, {
        name: 'Other,\n7%',
        value: 58,
        itemStyle: {
            color: '#a8a8a8'
        }
    },{
        name: 'Location,\n5%',
        value: 50,
        itemStyle: {
            color: '#a8a8a8'
        }
    },{
        name: 'Count,\n4%',
        value: 35,
        itemStyle: {
            color: '#a8a8a8'
        }
    }
    ]
}];
function set_sunburst() {
    option = {
        title: {
            text: 'a) Distribute of Question Types',
            textStyle: {
                fontSize: 17,
                align: 'center'
            },
            left: 'center',
            bottom: 0
        },
        series: {
            type: 'sunburst',
            highlightPolicy: 'ancestor',
            data: sunburst,
            radius: [0, '90%'],
            sort: null,
            levels: [{}, {
                r0: '10%',
                r: '43%',

                label: {
                    align: 'center'
                }
            }, {
                r0: '45%',
                r: '90%',
                label: {
                    align: 'center'
                }
            }]
        }
    };
    var dom = document.getElementById("sunburst");
    var myChart = echarts.init(dom);
    var app = {};
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}
var Histogram = {
    title: {
        text: 'b) Distribute of Question Lengths',
        textStyle: {
            fontSize: 15,
            align: 'center'
        },
        left: 'center',
        bottom: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Causal', 'Temporal', 'Descriptive']
    },
    grid: {
        left: 20,
        right: '4%',
        bottom: 40,
        containLabel: true
    },
    xAxis: [
        {
            name: 'Number of words',
            nameLocation: 'center',
            nameGap: 20,
            axisLabel:{interval:0},
            type: 'category',
            data: ['<=4', '5', '6', '7', '8', '9', '10','11','12','13','14','15','16','17','18','19','20','21','>=22']
        }
    ],
    yAxis: [
        {
            name: 'Number of questions',
            nameLocation: 'center',
            nameRotate: 90,
            nameGap: 45,
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Causal',
            type: 'bar',
            stack: 'all',
            itemStyle: {
                color: "#418ccd"
            },
            data: [15, 248, 599, 1433, 2242, 2448, 2626, 2597, 2565, 2306, 2160, 1811, 1579, 1096, 836, 589, 414, 287, 286]
        },
        {
            name: 'Temporal',
            type: 'bar',
            stack: 'all',
            itemStyle: {
                color: "#db5d23"
            },
            data: [101, 161, 199, 178, 613, 638, 1087, 1408, 1579, 1686, 1517, 1394, 1189, 915, 702, 557, 358, 224, 225]
        },
        {
            name: 'Descriptive',
            type: 'bar',
            stack: 'all',
            itemStyle: {
                color: "#a8a8a8"
            },
            data: [954, 1859, 1275, 1206, 1683, 941, 1074, 647, 456, 316, 274, 158, 106, 74, 45, 27, 15, 4, 10]
        }
    ],
    barWidth:6
};
function set_histogram(){
    var dom = document.getElementById("histogram");
    var myChart = echarts.init(dom);
    if (Histogram && typeof Histogram === "object") {
        myChart.setOption(Histogram, true);
    }
}
var Bar = {
    title: {
        text: 'c) Distribute of Answers Lengths',
        textStyle: {
            fontSize: 15,
            align: 'center'
        },
        left: 'center',
        bottom: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Causal', 'Temporal', 'Descriptive']
    },
    grid: {
        left: 30,
        right: '4%',
        bottom: 40,
        containLabel: true
    },
    xAxis: {
        name: 'Number of answers',
        nameLocation: 'center',
        nameGap: 20,
        type: 'value'
    },
    yAxis: {
        name: 'Number of words',
        nameLocation: 'center',
        nameRotate: 90,
        nameGap: 30,
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '>6']
    },
    series: [
        {
            name: 'Causal',
            type: 'bar',
            stack: 'all',
            itemStyle: {
                color: "#418ccd"
            },
            data: [4744, 5593, 7349, 4598, 2452, 1251, 140]
        },
        {
            name: 'Temporal',
            type: 'bar',
            stack: 'all',
            itemStyle: {
                color: "#db5d23"
            },
            data: [3323, 3489, 3748, 2399, 1108, 560, 94]
        },
        {
            name: 'Descriptive',
            type: 'bar',
            stack: 'all',
            itemStyle: {
                color: "#a8a8a8"
            },
            data: [8559, 1918, 440, 134, 47, 22, 4]
        }
    ],
    barWidth:6
};
function set_bar(){
    var dom = document.getElementById("bar");
    var myChart = echarts.init(dom);
    if (Bar && typeof Bar === "object") {
        myChart.setOption(Bar, true);
    }
}
window.onload=function (){
    set_sunburst()
    set_histogram()
    set_bar()
}