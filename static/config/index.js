window.mti = {
  baseUrl: "http://86.81.10.88:8088",
  d3DMapUrl: "http://127.0.0.1:8888/?cmd=1",
  mapTileUrl: "http://86.85.106.22:25033/v3/tile?x={x}&y={y}&z={z}",
  // mapTileUrl:'http://10.28.160.13/web-console/api/TileService/defaultService/{z}/{y}/{x}?key=8e3fd0e9e4364b8f8f5bc00f67d0312d',
  moreMapTileUrlList: [
    "http://86.85.106.22:25003/v3/tile?x={x}&y={y}&z={z}",
    "http://86.85.106.22:8883/tile?lid=traffic&get=map&cache=off&x={x}&y={y}&z={z}"
  ],
  cheliuliang: [
    [
      "time",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    [
      "今日",
      322,
      389,
      478,
      564,
      421,
      567,
      223,
      421,
      532,
      693,
      325,
      213,
      562,
      331,
      434,
      332,
      415,
      753,
      132,
      87,
      142,
      103,
      211,
      64,
      23
    ]
  ],
  videoUrl: [
    {
      direction: "left",
      index: "0",
      url: "../../../static/demo/video/left_video_1.mp4" // 'rtmp://58.200.131.2:1935/livetv/hunantv',
      // code: '53010348991310017930',
    },
    {
      direction: "left",
      index: "1",
      url: "../../../static/demo/video/left_video_2.mp4"
      // code: '53011441991310043980',
    },
    {
      direction: "left",
      index: "2",
      url: "../../../static/demo/video/left_video_3.mp4"
      // code: '53014008001320000046',
    },
    {
      direction: "left",
      index: "3",
      url: "../../../static/demo/video/left_video_4.mp4"
      // code: '53018815871318266335',
    },

    {
      direction: "right",
      index: "0",
      url: "../../../static/demo/video/right_video_1.mp4"
      // code: '53019023001315000004',
    },
    {
      direction: "right",
      index: "1",
      url: "../../../static/demo/video/水上视频.mp4"
      // code: '53019600001310011057',
    },
    {
      direction: "right",
      index: "2",
      url: "../../../static/demo/video/wurenji.mp4"
    },
    {
      direction: "right",
      index: "3",
      url: "../../../static/demo/video/公交视频.mp4"
      // code: '53010284031317000013',
    }
  ],
  yongdu: [
    {
      id: 14,
      zhishu: 6.1,
      road: "彩云南路",
      address: "彩云南路东北角"
    },
    {
      id: 13,
      zhishu: 5.5,
      road: "石龙路",
      address: "石龙路与广东路西北角"
    },
    {
      id: 2,
      zhishu: 5.2,
      road: "兴呈路",
      address: "兴呈路人民广场"
    },
    {
      id: 17,
      zhishu: 5.1,
      road: "祥和街",
      address: "祥和街彩云市场"
    },
    {
      id: 11,
      zhishu: 4.5,
      road: "和谐路",
      address: "和谐路如家酒店"
    }
  ],
  importCar: [
    {
      //重点车辆
      type: "top",
      name: "违管车",
      num: 11
    },
    {
      type: "top",
      name: "运管车",
      num: 16
    },
    {
      type: "top",
      name: "大客车",
      num: 16
    },
    {
      type: "down",
      name: "货运车辆",
      num: 21
    },
    {
      type: "down",
      name: "危险品车辆",
      num: 17
    }
  ],
  menberControl: [
    {
      //人员管控
      type: "ru",
      num: 1142
    },
    {
      type: "ru",
      num: 5747
    },
    {
      type: "ru",
      num: 6892
    },
    {
      type: "ru",
      num: 7745
    },
    {
      type: "chu",
      num: 1174
    },
    {
      type: "chu",
      num: 4132
    },
    {
      type: "chu",
      num: 1142
    },
    {
      type: "chu",
      num: 7142
    },
    {
      type: "pan",
      num: 1142
    },
    {
      type: "pan",
      num: 3427
    }
  ],
  menberControlEcharts: {
    key: ["涉赌", "涉黄", "涉恐", "涉稳", "精神病", "上访"],
    value: [20, 152, 200, 134, 290, 330]
  },
  power: {
    benshi: {
      num: 8164,
      name: "本市公安力量"
    },
    waidi: {
      num: 1154,
      name: "外地公安力量"
    },
    wujing: {
      num: 43,
      name: "武警"
    },
    yubeiyi: {
      num: 32,
      name: "预备役"
    },
    xiaofang: {
      num: 42,
      name: "消防"
    },
    fujing: {
      num: 31,
      name: "辅警"
    },
    zhudi: {
      num: 723,
      name: "场馆驻地警力"
    },
    anbao: {
      num: 653,
      name: "警卫安保警力"
    },
    fangkong: {
      num: 2134,
      name: "防空圈警力"
    },
    shehui: {
      num: 4234,
      name: "社会面警力"
    }
  },
  yujingStatistic: {
    yujing: {
      name: "预警总数",
      num: 800
    },
    renyuan: {
      name: "人员预警",
      num: 250
    },
    cheliang: {
      name: "车辆预警",
      num: 550
    },
    alarm1: {
      name: "红色预警",
      num: 2
    },
    alarm2: {
      name: "橙色预警",
      num: 5
    },
    alarm3: {
      name: "黄色预警",
      num: 33
    },
    alarm4: {
      name: "蓝色预警",
      num: 760
    }
  },
  yuqingTuJi: {
    //舆情统计
    zhengmian: {
      name: "正面舆情",
      num: 145
    },
    fanmian: {
      name: "反面舆情",
      num: 53
    },
    zhongxing: {
      name: "中性舆情",
      num: 80
    }
  },
  letDataTuData: {
    //预警区域统计
    indicators: [
      {
        name: "五华分局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117410000"
      },
      {
        name: "盘龙分局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117420000"
      },
      {
        name: "官渡分局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117430000"
      },
      {
        name: "西山分局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117440000"
      },
      {
        name: "呈贡分局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117450000"
      },
      {
        name: "东川分局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117460000"
      },
      {
        name: "晋宁县局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117510000"
      },
      {
        name: "富民县局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117520000"
      },
      {
        name: "宜良县局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117550000"
      },
      {
        name: "石林县局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117560000"
      },
      {
        name: "嵩明县局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117580000"
      },
      {
        name: "禄劝县局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117590000"
      },
      {
        name: "寻甸县局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117600000"
      },
      {
        name: "安宁市局",
        color: "#14D0FF",
        max: "200",
        pcsId: "310117610000"
      }
    ],
    values: [132, 98, 65, 122, 116, 75, 112, 15, 32, 99, 111, 32, 113]
  },
  airPortSiCengData: {
    //四层防控数据
    indicators: [
      {
        name: "重点车辆",
        color: "#14D0FF",
        max: "20",
        pcsId: "310117410000"
      },
      {
        name: "重点人员",
        color: "#14D0FF",
        max: "20",
        pcsId: "310117420000"
      },
      {
        name: "布控车辆",
        color: "#14D0FF",
        max: "20",
        pcsId: "310117430000"
      },
      {
        name: "布控人员",
        color: "#14D0FF",
        max: "20",
        pcsId: "310117440000"
      }
    ],
    values: [3, 8, 18, 12]
  },
  airPortImportM: [
    {
      name: "重点车辆",
      num: 3
    },
    {
      name: "重点人员",
      num: 8
      // }, {
      //   name: '重点IMSI',
      //   num: 10
    },
    {
      name: "布控人员",
      num: 18
    },
    {
      name: "布控车辆",
      num: 12
      // }, {
      //   name: '布控IMSI',
      //   num: 10
    }
  ],
  wuGanYuJing: {
    //物感预警
    import: [
      {
        name: "重点车辆",
        num: 14
      },
      {
        name: "重点人员",
        num: 9
      },
      {
        name: "WiFi嗅探",
        num: 30
      }
    ]
  },
  zhongDianRenYuan: {
    data: [
      {
        name: "胡永珍",
        matchVal: 0.98,
        sex: "2",
        code: "5301231970****3940",
        address: "彩云南路",
        imgUrl: "./static/demo/image/zdry01.png",
        matchImgUrl: "./static/demo/image/zdry01_1.png"
      },
      {
        name: "马电砖",
        matchVal: 0.95,
        sex: "1",
        code: "5321221997****037X",
        address: "临江路120号",
        imgUrl: "./static/demo/image/zdry02.png",
        matchImgUrl: "./static/demo/image/zdry02_1.png"
      }
    ]
  },
  // 重点车辆数据暂未使用
  zhongDianCheLiang: {
    data: [
      {
        code: "鲁B·677SU",
        matchVal: 0.98,
        color: "黑色",
        mark: "通用别克",
        address: "乐都西路",
        imgUrl: "./static/demo/image/zdcl01.jpg"
      },
      {
        code: "云A·119L9",
        matchVal: 0.95,
        color: "白色",
        mark: "宝马",
        address: "乐都东路",
        imgUrl: "./static/demo/image/zdcl02.png"
      }
    ]
  },
  importRen: {
    demo: true
  },
  demo: true,
  demoHalf: false,
  openNew: false
};
