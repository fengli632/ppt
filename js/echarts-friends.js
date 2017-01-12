// var dom = document.getElementById("friends-container");
var chart3 = echarts.init(document.getElementById('c3'));

        // var myChart = echarts.init(dom);
        var app = {};
        option = null;
        //data-民间线下锤友组织
        var data1 = [
             {name: '西安', value: 161, title:'西安锤友会', time: '2013-01-01', heads: 100, qq: 123123123},
             {name: '苏州', value: 50, title:'苏州锤友会', time: '2013-01-01', heads: 100, qq: 123123123},
             {name: '北京', value: 180, title:'北京锤友会', time: '2013-01-01', heads: 100, qq: 123123123},
             {name: '杭州', value: 120, title:'杭州锤友会', time: '2013-01-01', heads: 100, qq: 123123123},
             {name: '上海', value: 110, title:'上海锤友会', time: '2013-01-01', heads: 100, qq: 123123123},
             {name: '广州', value: 100, title:'广州锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '青岛', value: 60, title:'青岛锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '成都', value: 80, title:'成都锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '拉萨', value: 90, title:'拉萨锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '西宁', value: 88, title:'西宁锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '乌鲁木齐', value: 78, title:'乌鲁木齐锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '昆明', value: 89, title:'昆明锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '兰州', value: 140, title:'兰州锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '重庆', value: 140, title:'重庆锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             {name: '贵阳', value: 120, title:'贵阳锤友会', time: '2013-01-01', heads: 100, qq: 123123123}, 
             

             // {'海门':[121.15,31.89],}
        ];
        //data-民间线下即将举办活动
        var data2 = [
             // {name: '西安', value: 161, title:'西安锤友线下交流会', time: '2016-01-01', heads: 100, loc: '<a href="http://www.baidu.com" target="_blank">李家村万达6层平仄咖啡店<a/>'},
             {name: '西安', value: 161, title:'西安锤友线下交流会', time: '2016-01-01', heads: 100, loc: '李家村万达6层平仄咖啡店'},
             {name: '南京', value: 150, title:'南京锤友线下交流会', time: '2016-01-01', heads: 100, loc: '李家村万达6层平仄咖啡店'},
             {name: '南宁', value: 179, title:'南宁锤友线下交流会', time: '2016-01-01', heads: 100, loc: '李家村万达6层平仄咖啡店'},
             {name: '海口', value: 184, title:'海口锤友线下交流会', time: '2016-01-01', heads: 100, loc: '李家村万达6层平仄咖啡店'},
             {name: '吉林', value: 125, title:'吉林锤友线下交流会', time: '2016-01-01', heads: 100, loc: '李家村万达6层平仄咖啡店'},
             {name: '郑州', value: 138, title:'郑州锤友线下交流会', time: '2016-01-01', heads: 100, loc: '李家村万达6层平仄咖啡店'}
             
        ];
        //data-官方活动即将举办
        var data3 = [
             {name: '北京', value: 200, title:'官方 T3 发布会', time:'2016-09-07', loc:'体育中心'},
             {name: '上海', value: 180, title:'官方坚果发布会', time:'2015-08-25', loc:'上海奔驰文化中心'},
        ];
        var geoCoordMap = {
            '海门':[121.15,31.89],
            '鄂尔多斯':[109.781327,39.608266],
            '招远':[120.38,37.35],
            '舟山':[122.207216,29.985295],
            '齐齐哈尔':[123.97,47.33],
            '盐城':[120.13,33.38],
            '赤峰':[118.87,42.28],
            '青岛':[120.33,36.07],
            '乳山':[121.52,36.89],
            '金昌':[102.188043,38.520089],
            '泉州':[118.58,24.93],
            '莱西':[120.53,36.86],
            '日照':[119.46,35.42],
            '胶南':[119.97,35.88],
            '南通':[121.05,32.08],
            '拉萨':[91.11,29.97],
            '云浮':[112.02,22.93],
            '梅州':[116.1,24.55],
            '文登':[122.05,37.2],
            '上海':[121.48,31.22],
            '攀枝花':[101.718637,26.582347],
            '威海':[122.1,37.5],
            '承德':[117.93,40.97],
            '厦门':[118.1,24.46],
            '汕尾':[115.375279,22.786211],
            '潮州':[116.63,23.68],
            '丹东':[124.37,40.13],
            '太仓':[121.1,31.45],
            '曲靖':[103.79,25.51],
            '烟台':[121.39,37.52],
            '福州':[119.3,26.08],
            '瓦房店':[121.979603,39.627114],
            '即墨':[120.45,36.38],
            '抚顺':[123.97,41.97],
            '玉溪':[102.52,24.35],
            '张家口':[114.87,40.82],
            '阳泉':[113.57,37.85],
            '莱州':[119.942327,37.177017],
            '湖州':[120.1,30.86],
            '汕头':[116.69,23.39],
            '昆山':[120.95,31.39],
            '宁波':[121.56,29.86],
            '湛江':[110.359377,21.270708],
            '揭阳':[116.35,23.55],
            '荣成':[122.41,37.16],
            '连云港':[119.16,34.59],
            '葫芦岛':[120.836932,40.711052],
            '常熟':[120.74,31.64],
            '东莞':[113.75,23.04],
            '河源':[114.68,23.73],
            '淮安':[119.15,33.5],
            '泰州':[119.9,32.49],
            '南宁':[108.33,22.84],
            '营口':[122.18,40.65],
            '惠州':[114.4,23.09],
            '江阴':[120.26,31.91],
            '蓬莱':[120.75,37.8],
            '韶关':[113.62,24.84],
            '嘉峪关':[98.289152,39.77313],
            '广州':[113.23,23.16],
            '延安':[109.47,36.6],
            '太原':[112.53,37.87],
            '清远':[113.01,23.7],
            '中山':[113.38,22.52],
            '昆明':[102.73,25.04],
            '寿光':[118.73,36.86],
            '盘锦':[122.070714,41.119997],
            '长治':[113.08,36.18],
            '深圳':[114.07,22.62],
            '珠海':[113.52,22.3],
            '宿迁':[118.3,33.96],
            '咸阳':[108.72,34.36],
            '铜川':[109.11,35.09],
            '平度':[119.97,36.77],
            '佛山':[113.11,23.05],
            '海口':[110.35,20.02],
            '江门':[113.06,22.61],
            '章丘':[117.53,36.72],
            '肇庆':[112.44,23.05],
            '大连':[121.62,38.92],
            '临汾':[111.5,36.08],
            '吴江':[120.63,31.16],
            '石嘴山':[106.39,39.04],
            '沈阳':[123.38,41.8],
            '苏州':[120.62,31.32],
            '茂名':[110.88,21.68],
            '嘉兴':[120.76,30.77],
            '长春':[125.35,43.88],
            '胶州':[120.03336,36.264622],
            '银川':[106.27,38.47],
            '张家港':[120.555821,31.875428],
            '三门峡':[111.19,34.76],
            '锦州':[121.15,41.13],
            '南昌':[115.89,28.68],
            '柳州':[109.4,24.33],
            '三亚':[109.511909,18.252847],
            '自贡':[104.778442,29.33903],
            '吉林':[126.57,43.87],
            '阳江':[111.95,21.85],
            '泸州':[105.39,28.91],
            '西宁':[101.74,36.56],
            '宜宾':[104.56,29.77],
            '呼和浩特':[111.65,40.82],
            '成都':[104.06,30.67],
            '大同':[113.3,40.12],
            '镇江':[119.44,32.2],
            '桂林':[110.28,25.29],
            '张家界':[110.479191,29.117096],
            '宜兴':[119.82,31.36],
            '北海':[109.12,21.49],
            '西安':[108.95,34.27],
            '金坛':[119.56,31.74],
            '东营':[118.49,37.46],
            '牡丹江':[129.58,44.6],
            '遵义':[106.9,27.7],
            '绍兴':[120.58,30.01],
            '扬州':[119.42,32.39],
            '常州':[119.95,31.79],
            '潍坊':[119.1,36.62],
            '重庆':[106.54,29.59],
            '台州':[121.420757,28.656386],
            '南京':[118.78,32.04],
            '滨州':[118.03,37.36],
            '贵阳':[106.71,26.57],
            '无锡':[120.29,31.59],
            '本溪':[123.73,41.3],
            '克拉玛依':[84.77,45.59],
            '渭南':[109.5,34.52],
            '马鞍山':[118.48,31.56],
            '宝鸡':[107.15,34.38],
            '焦作':[113.21,35.24],
            '句容':[119.16,31.95],
            '北京':[116.46,39.92],
            '徐州':[117.2,34.26],
            '衡水':[115.72,37.72],
            '包头':[110,40.58],
            '绵阳':[104.73,31.48],
            '乌鲁木齐':[87.68,43.77],
            '枣庄':[117.57,34.86],
            '杭州':[120.19,30.26],
            '淄博':[118.05,36.78],
            '鞍山':[122.85,41.12],
            '溧阳':[119.48,31.43],
            '库尔勒':[86.06,41.68],
            '安阳':[114.35,36.1],
            '开封':[114.35,34.79],
            '济南':[117,36.65],
            '德阳':[104.37,31.13],
            '温州':[120.65,28.01],
            '九江':[115.97,29.71],
            '邯郸':[114.47,36.6],
            '临安':[119.72,30.23],
            '兰州':[103.73,36.03],
            '沧州':[116.83,38.33],
            '临沂':[118.35,35.05],
            '南充':[106.110698,30.837793],
            '天津':[117.2,39.13],
            '富阳':[119.95,30.07],
            '泰安':[117.13,36.18],
            '诸暨':[120.23,29.71],
            '郑州':[113.65,34.76],
            '哈尔滨':[126.63,45.75],
            '聊城':[115.97,36.45],
            '芜湖':[118.38,31.33],
            '唐山':[118.02,39.63],
            '平顶山':[113.29,33.75],
            '邢台':[114.48,37.05],
            '德州':[116.29,37.45],
            '济宁':[116.59,35.38],
            '荆州':[112.239741,30.335165],
            '宜昌':[111.3,30.7],
            '义乌':[120.06,29.32],
            '丽水':[119.92,28.45],
            '洛阳':[112.44,34.7],
            '秦皇岛':[119.57,39.95],
            '株洲':[113.16,27.83],
            '石家庄':[114.48,38.03],
            '莱芜':[117.67,36.19],
            '常德':[111.69,29.05],
            '保定':[115.48,38.85],
            '湘潭':[112.91,27.87],
            '金华':[119.64,29.12],
            '岳阳':[113.09,29.37],
            '长沙':[113,28.21],
            '衢州':[118.88,28.97],
            '廊坊':[116.7,39.53],
            '菏泽':[115.480656,35.23375],
            '合肥':[117.27,31.86],
            '武汉':[114.31,30.52],
            '大庆':[125.03,46.58]
        };

        // 民间线下锤友组织获取数据
        var convertData1 = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                //位置坐标数据
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        title: data[i].title,
                        time: data[i].time,
                        heads: data[i].heads,
                        qq: data[i].qq


                        // name: data[i].name,
                        // value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        // 民间线下即将举办活动获取数据
        var convertData2 = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                //位置坐标数据
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        title: data[i].title,
                        time: data[i].time,
                        heads: data[i].heads,
                        loc: data[i].loc


                        // name: data[i].name,
                        // value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        // 官方活动即将举办 获取数据
        var convertData3 = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                //位置坐标数据
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        title: data[i].title,
                        time: data[i].time,
                        loc: data[i].loc

                        // name: data[i].name,是否value必须为2+？
                        // value: geoCoord.concat(data[i].value, data[i].title, data[i].time, data[i].loc)

                        //同上上，为何不行？
                        // name: data[i].name,
                        // value: data[i].value,
                        // geo: geoCoord,
                        // title: data[i].title,
                        // time: data[i].time,
                        // loc: data[i].loc
                    });
                    //console.log(res);
                }
            }
            return res;
            
        };

        option = {
            backgroundColor: '#404a59',
            title: {
                text: '锤友线下活动地图',
                subtext: ' ----  Smartisan Friends  ----',
                sublink: 'http://t.tt',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            //提示框设置
            tooltip : {
                enterable: true,    //鼠标是否可以进入提示框
                hideDelay:600,     //提示框隐藏延迟时间
                trigger: 'item',
                alwaysShowContent:false,

                formatter:function(params){
                    // return params.value[3] + "<br />时间："+params.value[4] + '<br />地点：' +params.value[5];
                    // console.log(params.color);
                    var index = params.seriesIndex;
                    var t1 = params.data.title + "<br/>成立时间："+
                             params.data.time + "<br />人数：" + 
                             params.data.heads +"<br />QQ："+
                             params.data.qq;
                    var t2 = params.data.title + "<br/>活动时间："+
                             params.data.time + "<br />预计参加人数：" + 
                             params.data.heads +"<br />地点："+
                             params.data.loc;
                    var t3 = params.data.title + "<br />时间："+
                            params.data.time + "<br />地点："+
                            params.data.loc;
                    switch(index){
                        case 0:
                            return t1;
                            breake;
                        case 1:
                            return t2;
                            breake;
                        case 2:
                            return t3;
                            breake;
                    }
                },
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x:'left',
                data:['民间线下锤友组织','民间线下即将举办活动','官方活动即将举办'],
                symbol:'pin',
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series : [
                {
                    name: '民间线下锤友组织',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData1(data1),
                    symbol: 'pin',
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {

                            show: true,
                            position: 'top',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FB4747'
                        }
                    }
                },
                {
                    name: '民间线下即将举办活动',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData2(data2),
                    symbol: 'pin',
                    symbolSize: function (val) {

                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true,
                            position: 'top',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#29C232'
                        }
                    }
                },
                {
                    name: '官方活动即将举办',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData3(data3),
                    symbol: 'pin',
                    symbolSize: function (val) {
                        // console.log(val[2]);
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position:'right',
                            //position: ['120%','0'],
                            show: true
                        },
                        emphasis: {
                            show: true,
                            position: ['120%','0'],
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FDB225'
                        }
                    },
                    zlevel: 1
                }
                // {
                //     name: 'Top 5',
                //     type: 'effectScatter',
                //     coordinateSystem: 'geo',
                //     data: convertData(data.sort(function (a, b) {
                //         return b.value - a.value;
                //     }).slice(0, 6)),
                //     symbolSize: function (val) {
                //         return val[2] / 10;
                //     },
                //     showEffectOn: 'render',
                //     rippleEffect: {
                //         brushType: 'stroke'
                //     },
                //     hoverAnimation: true,
                //     label: {
                //         normal: {
                //             formatter: '{b}',
                //             position: 'right',
                //             show: true
                //         }
                //     },
                //     itemStyle: {
                //         normal: {
                //             color: '#f4e925',
                //             shadowBlur: 10,
                //             shadowColor: '#333'
                //         }
                //     },
                //     zlevel: 1
                // }
            ]
        };;
        if (option && typeof option === "object") {
            chart3.setOption(option, true);
        }