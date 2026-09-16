/*
 * 行程数据文件：后续需要改时间、酒店、景点时，优先修改这里。
 * startISO/endISO 使用明确时区偏移，确保人在日本/中国/马来西亚/新加坡打开时，倒计时仍指向同一真实时刻。
 */
window.TRIP_DATA = {
  lastUpdated: "2026-09-16 13:28 JST",
  tripTitle: "2026 马来西亚 · 槟城 · 新加坡亲子旅行",
  primaryTimezone: "Asia/Kuala_Lumpur",
  days: [
    {
      date: "2026-09-18", dayNo: 0, label: "出发 · 上海汇合", city: "辽宁 / 沈阳 / 上海 / 东京",
      items: [
        { time:"12:36–13:56", startISO:"2026-09-18T12:36:00+08:00", endISO:"2026-09-18T13:56:00+08:00", title:"辽宁朝阳 → 沈阳北站", transport:"高铁", scope:"parents", person:"爸妈", location:"辽宁朝阳站", mapQuery:"朝阳站 双塔区 朝阳市 辽宁省" },
        { time:"14:00 起", startISO:"2026-09-18T14:00:00+08:00", title:"上海大众空港宾馆可办理入住", transport:"徒步", scope:"all", person:"三人住宿", location:"上海大众空港宾馆", mapQuery:"上海大众空港宾馆", note:"爸妈先到上海后可先入住；我晚间抵达后会合。" },
        { time:"16:30–19:10", startISO:"2026-09-18T16:30:00+08:00", endISO:"2026-09-18T19:10:00+08:00", title:"沈阳桃仙机场 T3 → 上海浦东机场 T2", transport:"飞机", scope:"parents", person:"爸妈", location:"沈阳桃仙国际机场 T3", mapQuery:"沈阳桃仙国际机场 T3" },
        { time:"20:00–22:30", startISO:"2026-09-18T20:00:00+09:00", endISO:"2026-09-18T22:30:00+08:00", title:"东京成田机场 T3 → 上海浦东机场 T2", transport:"飞机", scope:"self", person:"我", location:"成田国际机场 第3航站楼", mapQuery:"Narita Airport Terminal 3" },
        { time:"22:30 以后", startISO:"2026-09-18T22:30:00+08:00", title:"和爸妈在宾馆会合", transport:"徒步", scope:"all", person:"三人", location:"上海大众空港宾馆", mapQuery:"上海大众空港宾馆" }
      ]
    },
    {
      date: "2026-09-19", dayNo: 1, label: "上海 → 吉隆坡", city: "吉隆坡",
      items: [
        { time:"07:30–13:00", startISO:"2026-09-19T07:30:00+08:00", endISO:"2026-09-19T13:00:00+08:00", title:"上海浦东机场 T1 → 吉隆坡国际机场 T1", transport:"飞机", scope:"all", person:"三人", location:"上海浦东国际机场 T1", mapQuery:"Shanghai Pudong International Airport Terminal 1", note:"飞行约 5.5 小时。" },
        { time:"14:00–15:00", startISO:"2026-09-19T14:00:00+08:00", endISO:"2026-09-19T15:00:00+08:00", title:"吉隆坡机场 T1 → 市区", transport:"Grab 打车", scope:"all", person:"三人", location:"Kuala Lumpur International Airport Terminal 1", mapQuery:"Kuala Lumpur International Airport Terminal 1", note:"首选 Grab，定位 5 号门。若当天 Grab 预计到达时间超过 75 分钟，可考虑 KLIA Ekspres + Grab；若约 50–65 分钟，直接 Grab。" },
        { time:"15:00–15:30", startISO:"2026-09-19T15:00:00+08:00", endISO:"2026-09-19T15:30:00+08:00", title:"入住 The Platinum2 Kuala Lumpur By Wyatt", transport:"Grab 打车", scope:"all", person:"三人", location:"The Platinum2 Kuala Lumpur By Wyatt", mapQuery:"The Platinum2 Kuala Lumpur By Wyatt", note:"地址：1020 Jalan Sultan Ismail, 50250 Kuala Lumpur, Malaysia\n2晚，111㎡套房，不含早餐；9/21 11:00 前退房。" },
        { time:"15:30 之后", startISO:"2026-09-19T15:30:00+08:00", title:"酒店附近散步 · 双子塔夜景 · 商场晚餐", transport:"徒步 / Grab", scope:"all", person:"三人", location:"Petronas Twin Towers", mapQuery:"Petronas Twin Towers", note:"双子塔约步行 10–15 分钟；Suria KLCC 约 10 分钟；Bukit Nanas Monorail 约 3 分钟；Dang Wangi LRT 约 5 分钟。" }
      ]
    },
    {
      date: "2026-09-20", dayNo: 2, label: "吉隆坡一日游", city: "吉隆坡",
      items: [
        { time:"09:00–21:00", startISO:"2026-09-20T09:00:00+08:00", endISO:"2026-09-20T21:00:00+08:00", title:"吉隆坡市区一日游", transport:"徒步 / Grab", scope:"all", person:"三人", location:"National Mosque of Malaysia", mapQuery:"National Mosque of Malaysia", note:"酒店出发 → 国家清真寺 → 独立广场 → 苏丹阿都沙末大厦 → I Love KL 地标 → 中央艺术坊 → BookXcess REXKL → 茨厂街 / 鬼仔巷 → 午饭 Hometown Hainan Coffee → 麦当劳十字路口 → KLCC Park → 阿罗街夜市\n根据爸妈体力灵活调整，中途累了可回酒店休息。",
          places:["National Mosque of Malaysia","Merdeka Square Kuala Lumpur","Sultan Abdul Samad Building","I Love KL Monument","Central Market Kuala Lumpur","BookXcess REXKL","Petaling Street Kuala Lumpur","Kwai Chai Hong","Hometown Hainan Coffee Kuala Lumpur","KLCC Park","Jalan Alor Food Street"] }
      ]
    },
    {
      date: "2026-09-21", dayNo: 3, label: "吉隆坡 → 槟城", city: "吉隆坡 / 槟城",
      items: [
        { time:"08:00–08:30", startISO:"2026-09-21T08:00:00+08:00", endISO:"2026-09-21T08:30:00+08:00", title:"酒店出发 → 黑风洞 Batu Caves", transport:"Grab 打车", scope:"all", person:"三人", location:"Batu Caves", mapQuery:"Batu Caves", note:"计划 10:00–11:00 之间离开黑风洞，之后 Grab 前往 KL Sentral。" },
        { time:"13:00 集合 / 13:40 发车", prepTime:"13:00", actualDepartureTime:"13:40", startISO:"2026-09-21T13:00:00+08:00", actualDepartureISO:"2026-09-21T13:40:00+08:00", endISO:"2026-09-21T17:30:00+08:00", title:"KL Sentral 集合准备 · ETS Platinum 前往 Butterworth", transport:"ETS Platinum + 轮渡", scope:"all", person:"三人", location:"KL Sentral", mapQuery:"KL Sentral", note:"ETS Platinum 一等座已购票。NEXT 倒计时以 13:00 为目标；实际列车 13:40 发车。预计 17:30 左右抵达 Butterworth，之后乘约 15 分钟轮渡前往槟城乔治市，轮渡现场购票即可。" },
        { time:"18:00–18:30", startISO:"2026-09-21T18:00:00+08:00", endISO:"2026-09-21T18:30:00+08:00", title:"入住博物馆精品酒店", transport:"Grab 打车", scope:"all", person:"三人", location:"Museum Hotel Penang", mapQuery:"Museum Hotel Penang", note:"住 2 晚，无早餐；9/23 12:00 前退房。" }
      ]
    },
    {
      date: "2026-09-22", dayNo: 4, label: "槟城一日游", city: "槟城",
      items: [
        { time:"09:00–21:00", startISO:"2026-09-22T09:00:00+08:00", endISO:"2026-09-22T21:00:00+08:00", title:"槟城一日游", transport:"徒步 / Grab", scope:"all", person:"三人", location:"Penang Hill", mapQuery:"Penang Hill", note:"候选：升旗山 + 极乐寺；或者根据爸妈状态安排休闲吃喝购物。住宿：博物馆精品酒店。", places:["Penang Hill","Kek Lok Si Temple"] }
      ]
    },
    {
      date: "2026-09-23", dayNo: 5, label: "槟城 → 新加坡", city: "槟城 / 新加坡",
      items: [
        { time:"09:00–14:00", startISO:"2026-09-23T09:00:00+08:00", endISO:"2026-09-23T14:00:00+08:00", title:"槟城半日游", transport:"徒步 / Grab", scope:"all", person:"三人", location:"George Town Penang Street Art", mapQuery:"George Town Penang Street Art", note:"乔治市壁画 → 姓氏桥 → 娘惹建筑 → Blue Mansion 蓝屋。", places:["George Town Penang Street Art","Chew Jetty Penang","Pinang Peranakan Mansion","Cheong Fatt Tze The Blue Mansion"] },
        { time:"14:00–15:00", startISO:"2026-09-23T14:00:00+08:00", endISO:"2026-09-23T15:00:00+08:00", title:"前往槟城机场", transport:"Grab 打车", scope:"all", person:"三人", location:"Penang International Airport", mapQuery:"Penang International Airport", note:"不堵车约 30 分钟。" },
        { time:"17:20–18:55", startISO:"2026-09-23T17:20:00+08:00", endISO:"2026-09-23T18:55:00+08:00", title:"槟城 → 新加坡樟宜机场 T1", transport:"飞机", scope:"all", person:"三人", location:"Penang International Airport", mapQuery:"Penang International Airport", note:"飞行约 1.5 小时。" },
        { time:"18:55–19:45", startISO:"2026-09-23T18:55:00+08:00", endISO:"2026-09-23T19:45:00+08:00", title:"新加坡入境", transport:"徒步", scope:"all", person:"三人", location:"Changi Airport Terminal 1", mapQuery:"Changi Airport Terminal 1", note:"无托运行李，预计 30–40 分钟。" },
        { time:"19:45–21:00", startISO:"2026-09-23T19:45:00+08:00", endISO:"2026-09-23T21:00:00+08:00", title:"Jewel Changi · 晚餐 · 雨漩涡 · 森林谷", transport:"徒步", scope:"all", person:"三人", location:"Jewel Changi Airport", mapQuery:"Jewel Changi Airport", note:"T1 步行约 5 分钟直达。19:50–20:20 Forest Valley + HSBC Rain Vortex；20:20–20:50 晚餐；21:00 看雨漩涡灯光秀（约 5 分钟）。", places:["Shiseido Forest Valley Jewel Changi","HSBC Rain Vortex"] },
        { time:"21:10–21:30", startISO:"2026-09-23T21:10:00+08:00", endISO:"2026-09-23T21:30:00+08:00", title:"入住 V Hotel Bencoolen", transport:"Grab 打车", scope:"all", person:"三人", location:"V Hotel Bencoolen", mapQuery:"V Hotel Bencoolen", note:"不堵车约 20 分钟；住 3 晚。" }
      ]
    },
    {
      date: "2026-09-24", dayNo: 6, label: "新加坡滨海湾", city: "新加坡",
      items: [
        { time:"09:00–21:00", startISO:"2026-09-24T09:00:00+08:00", endISO:"2026-09-24T21:00:00+08:00", title:"滨海湾一日游", transport:"徒步 / Grab", scope:"all", person:"三人", location:"Merlion Park", mapQuery:"Merlion Park", note:"鱼尾狮 → 金沙 → 滨海湾花园 → 花穹 → 云雾林（含 Jurassic World）→ 奇幻花园（含 Disney 奇妙花园）→ 擎天树夜景。已计划使用：花穹 + 云雾林 + 奇幻花园 + 往返摆渡车套票。", places:["Merlion Park","Marina Bay Sands","Gardens by the Bay","Flower Dome Singapore","Cloud Forest Singapore","Floral Fantasy Singapore","Supertree Grove"] }
      ]
    },
    {
      date: "2026-09-25", dayNo: 7, label: "新加坡市区", city: "新加坡",
      items: [
        { time:"09:00–21:00", startISO:"2026-09-25T09:00:00+08:00", endISO:"2026-09-25T21:00:00+08:00", title:"新加坡市区一日游", transport:"徒步 / Grab", scope:"all", person:"三人", location:"Fort Canning Park", mapQuery:"Fort Canning Park", note:"福康宁 → 牛车水 → 哈芝巷 → 甘榜格南 → 旧禧街警察局 → 克拉码头。", places:["Fort Canning Park","Chinatown Singapore","Haji Lane","Kampong Glam","Old Hill Street Police Station","Clarke Quay"] }
      ]
    },
    {
      date: "2026-09-26", dayNo: 8, label: "父母返程 / 我返回吉隆坡", city: "新加坡 / 北京 / 吉隆坡",
      items: [
        { time:"06:00–07:00", startISO:"2026-09-26T06:00:00+08:00", endISO:"2026-09-26T07:00:00+08:00", title:"V Hotel Bencoolen → 樟宜机场", transport:"Grab 打车", scope:"all", person:"三人", location:"Changi Airport", mapQuery:"Changi Airport", note:"不堵车约 20 分钟；到机场后吃早餐。" },
        { time:"09:00–15:15", startISO:"2026-09-26T09:00:00+08:00", endISO:"2026-09-26T15:15:00+08:00", title:"新加坡樟宜机场 T1 → 北京首都机场 T3", transport:"飞机", scope:"parents", person:"爸妈", location:"Changi Airport Terminal 1", mapQuery:"Changi Airport Terminal 1" },
        { time:"10:20–11:25", startISO:"2026-09-26T10:20:00+08:00", endISO:"2026-09-26T11:25:00+08:00", title:"新加坡樟宜机场 T4 → 吉隆坡机场 T2", transport:"飞机", scope:"self", person:"我", location:"Changi Airport Terminal 4", mapQuery:"Changi Airport Terminal 4" },
        { time:"12:30–19:30", startISO:"2026-09-26T12:30:00+08:00", endISO:"2026-09-26T19:30:00+08:00", title:"吉隆坡半日游", transport:"徒步 / Grab", scope:"self", person:"我", location:"Kuala Lumpur", mapQuery:"Kuala Lumpur" },
        { time:"17:42–19:35", startISO:"2026-09-26T17:42:00+08:00", endISO:"2026-09-26T19:35:00+08:00", title:"北京朝阳 → 辽宁朝阳", transport:"高铁", scope:"parents", person:"爸妈", location:"北京朝阳站", mapQuery:"北京朝阳站" },
        { time:"19:30–20:30", startISO:"2026-09-26T19:30:00+08:00", endISO:"2026-09-26T20:30:00+08:00", title:"前往吉隆坡机场 T2", transport:"徒步 / Grab", scope:"self", person:"我", location:"Kuala Lumpur International Airport Terminal 2", mapQuery:"Kuala Lumpur International Airport Terminal 2" },
        { time:"21:00–次日09:00", startISO:"2026-09-26T21:00:00+08:00", endISO:"2026-09-27T09:00:00+08:00", title:"入住 Aerotel Kuala Lumpur / KLIA2", transport:"徒步", scope:"self", person:"我", location:"Aerotel Kuala Lumpur KLIA2", mapQuery:"Aerotel Kuala Lumpur KLIA2", note:"机场酒店，住 1 晚。" }
      ]
    },
    {
      date: "2026-09-27", dayNo: 9, label: "吉隆坡 → 新加坡 → 东京", city: "吉隆坡 / 新加坡 / 东京",
      items: [
        { time:"09:00–09:30", startISO:"2026-09-27T09:00:00+08:00", endISO:"2026-09-27T09:30:00+08:00", title:"办理值机", transport:"徒步", scope:"self", person:"我", location:"Kuala Lumpur International Airport Terminal 2", mapQuery:"Kuala Lumpur International Airport Terminal 2" },
        { time:"11:35–12:50", startISO:"2026-09-27T11:35:00+08:00", endISO:"2026-09-27T12:50:00+08:00", title:"吉隆坡机场 T2 → 新加坡樟宜机场 T1", transport:"飞机", scope:"self", person:"我", location:"Kuala Lumpur International Airport Terminal 2", mapQuery:"Kuala Lumpur International Airport Terminal 2" },
        { time:"23:05–次日07:05", startISO:"2026-09-27T23:05:00+08:00", endISO:"2026-09-28T07:05:00+09:00", title:"新加坡樟宜机场 T1 → 东京成田机场 T1", transport:"飞机", scope:"self", person:"我", location:"Changi Airport Terminal 1", mapQuery:"Changi Airport Terminal 1", note:"跨日航班：2026/9/28 07:05 抵达东京成田机场 T1。" }
      ]
    }
  ],
  checklist: [
    { group:"证件与出发", items:["护照随身携带","机票 / 订单确认信息可离线查看","确认父母与我的航班航站楼","准备少量现金与可境外使用的支付方式"] },
    { group:"网络与手机", items:["准备马来西亚 / 新加坡流量方案","手机充满电 + 充电线","移动电源充满电","Google Maps 离线区域 / 重要地点收藏"] },
    { group:"交通", items:["9/21 ETS Platinum 车票可随时查看","确认 9/21 13:00 抵达 KL Sentral 乘车准备","槟城轮渡现场购票","确认 9/23 槟城 → 新加坡航班信息"] },
    { group:"住宿与景点", items:["确认各酒店入住 / 退房时间","确认滨海湾花园套票可出示","把酒店英文名保存到手机","出发前再次核对 9/26 父母与我的分开路线"] }
  ]
};
