document.addEventListener('DOMContentLoaded', function() {
    // 数据处理
    const rawData = [
        [1, "京特"], [1, "辛德贝格"], [1, "颜景和"], [1, "徐莘农"], [1, "夏毓华"], [1, "贾瑞林"],
        [2, "辛德贝格"], [2, "父亲"],
        [3, "辛德贝格"], [3, "普尔·阿德勒·佩德森"],
        [4, "许尔特尔"], [4, "辛德贝格"],
        [5, "京特"], [5, "辛德贝格"],
        [6, "京特"], [6, "辛德贝格"],
        [7, "辛德贝格"], [7, "原18师士兵"],
        [8, "抓鸡的日军"], [8, "被手榴弹严重炸伤的小孩"], [8, "辛德贝格"], [8, "威尔逊医生"],
        [9, "中国伤兵"], [9, "辛德贝格"],
        [10, "年轻士兵"], [10, "辛德贝格"],
        [11, "中国士兵"], [11, "辛德贝格"],
        [12, "苏国宝"], [12, "辛德贝格"], [12, "京特"],
        [13, "辛德贝格"], [13, "三四千难民"],
        [14, "辛德贝格"], [14, "6000名中国农民"],
        [15, "江宁县摄山区难民代表"], [15, "昆德"], [15, "辛德贝格"], [15, "马吉"],
        [16, "克里斯蒂安·克勒格尔"], [16, "京特"], [16, "辛德贝格"],
        [17, "日军"], [17, "京特"], [17, "辛德贝格"], [17, "颜景和"], [17, "徐莘农"], [17, "夏毓华"], [17, "贾瑞林"],
        [18, "日军"], [18, "京特"], [18, "辛德贝格"], [18, "颜景和"], [18, "徐莘农"], [18, "夏毓华"], [18, "贾瑞林"],
        [19, "僧人朋友"], [19, "辛德贝格"],
        [20, "受伤的中国人"], [20, "辛德贝格"],
        [21, "辛德贝格"], [21, "马吉"],
        [22, "辛德贝格"], [22, "颜景和"],
        [23, "辛德贝格"], [23, "中国农民"],
        [24, "46岁中国妇女及其丈夫"], [24, "辛德贝格"],
        [25, "中国老农"], [25, "辛德贝格"],
        [26, "年轻中国妇女"], [26, "辛德贝格"],
        [27, "中国老农"], [27, "辛德贝格"],
        [28, "中国青年"], [28, "辛德贝格"],
        [29, "中国农民"], [29, "辛德贝格"],
        [30, "中国商人"], [30, "辛德贝格"],
        [31, "中国农民"], [31, "辛德贝格"],
        [32, "中国农民"], [32, "辛德贝格"],
        [33, "中国难民"], [33, "辛德贝格"],
        [34, "中国老妇"], [34, "辛德贝格"],
        [35, "中国老农"], [35, "辛德贝格"],
        [36, "年轻中国农民"], [36, "辛德贝格"],
        [37, "韩湘琳"], [37, "辛德贝格"],
        [38, "辛德贝格"], [38, "克勒格尔"], [38, "拉贝"],
        [39, "辛德贝格"], [39, "拉贝"], [39, "秘田中正"],
        [40, "辛德贝格"], [40, "日军士兵"],
        [41, "僧人"], [41, "辛德贝格"],
        [42, "辛德贝格"], [42, "拉贝"],
        [43, "农民王耀山（75岁）"], [43, "梅友三（79岁）"], [43, "王云奎（贵）63岁"], [43, "夏明芬（54岁)"], [43, "辛德贝格"], [43, "京特"],
        [44, "难民"], [44, "辛德贝格"], [44, "京特"], [44, "马吉"],
		[45, "辛德贝格"], [45, "李玉麟"],
		[46, "辛德贝格"], [46, "田伯烈"],
		[47, "辛德贝格"], [47, "父亲"], [47, "朱学范"], [47, "陈宝骅"], [47, "刘选萃"], [47, "潘济南"],
		[48, "辛德贝格"], [48, "父亲"], [48, "朱学范"], [48, "陈宝骅"], [48, "刘选萃"], [48, "潘济南"],
		[49, "辛德贝格"], [49, "拉贝"], [49, "斯迈士"], [49, "菲奇"], [49, "特里默"], [49, "克勒格尔"][49, "施佩林"][49, "南京安全区国际委员会和国际红十字会南京委员会委员"]		
    ];

    // 事件描述数据
    const eventDescriptions = {
        1: "1937年12月5日，京特、辛德贝格一行4人到达江南水泥厂，与颜景和、徐莘农、夏毓华、贾瑞林等人共同面对杀气腾腾的日本兵",
        2: "1937年11月底或12月初，辛德贝格写信告知父亲被派驻南京丹麦水泥厂升起丹麦国旗代理公司",
        3: "1938年2月3日辛德贝格致信友人，描述在厂房屋顶制作1350平方米的巨型丹麦国旗",
        4: "德国外交官许尔特尔驾车将辛德贝格及其购买的储备食品送往栖霞山",
        5: "日军飞机轰炸江南水泥厂附近，京特与辛德贝格等人受惊，厂区玻璃被震碎",
        6: "京特、辛德贝格等人领导和管理的江南水泥厂难民区始于1937年12月11日。",
        7: "1937年12月16日，原18师士兵装死逃脱日军屠杀，向辛德贝格求助",
        8: "1938年1月14日，日军用手榴弹炸鸡致儿童重伤，辛德贝格冒险送医，威尔逊医生实施救治",
        9: "2月18日，一个中国伤兵被带来，他告诉我们下列故事。他是南京模范师士兵，12月13日他和另外8个士兵投降日军，被俘3日，没饭吃也没水喝，然后他们与另外大约200个士兵和平民，被迫步行到城外紫金山附近，在那里排成3个长长的行列用机枪扫射。这个士兵假装被击中倒下,射击停止后又装死。于是日本兵在所有死尸身上泼洒某种酸性液体,然后点火焚烧,这个士兵的腿也被泼有这种液体,暴行进行时已近薄暮，当日本人结束这一切时天已昏黑，所以这个士兵乘黑爬开并来到这里。至今伤处未愈,这是酸液造成极为疼痛并难以治疗的创伤",
        10: "12月23日，一个年轻士兵负伤两处前来求医，一处很严重（颅骨破裂），他告诉我们下列故事。他原是87师一个连长的传令兵，12月13日战事进行时,他发现自己单独呆在太平门附近的无人地区，突然遇到日军。他投降了，保管的文件被没收。一个士兵用佩剑刺他的头部和颈部数次，他失去知觉倒下，恢复知觉后，发现自己孤零零地并且还能走路。藏匿10)天以后,乘黑夜来到这里",
        11: "1月3日，中国士兵来了，两个原属87师，一个原58师，两人受伤他们告知经过。12月15日他们被日军俘虏，他们和其他数百俘虏被排列在南京下关江边用机枪处决，这三个人逃脱枪弹并且装死,晚间爬走并且发现一个堑壕并保存几枚手榴弹。元旦那天，3个日本兵走进他们的堑壕,发现自己已入陷阱：他们抛出手榴弹，炸死两个日本兵，然后逃跑，终于到达这里。",
        12: "1937年12月6日日军侵犯湖山村，苏国宝是南京汤山社区湖山村村民，见过并得到京特和辛德贝格帮助，是当年江南水泥厂难民区一名10岁的小难民。",
        13: "1938年1月11日，辛德贝格记载三四千难民在厂区丹麦国旗下受庇护",
        14: "1938年2月3日记载收容6000名中国农民（含妇女儿童）",
        15: "1938年2月中旬，难民代表致信感谢四人拯救1万条生命",
        16: "1937年12月28日，因外国人在场，日军暴行收敛，4000难民逃至水泥厂",
        17: "江南水泥厂团队每月花费三四百元殷殷招待频繁骚扰的日军",
        18: "江南水泥厂团队有时会制止日军对厂区的骚扰",
        19: "（1938年2月3日)附近寺庙的两个僧人,这两人也是我的私人朋友。他俩听说我要进城,想搭个便车··车上的那两名僧人要去拜访城里的一些慈善机构······这样他们今天就赶不回去了，我后天还得来接他们·····后天我还得再去一趟南京城，取回道奇车，接回那两名僧人。",
        20: "1937年12月20日辛德贝格从收音机里听说南京的局势已经完全稳定了,电厂、水厂和电话设施都已经全面正常运转,便将几名受伤的中国人送到南京。",
        21: "1938年2月16-17日驾车接送马吉考察栖霞山难民营",
        22: "共同创办江南水泥厂急诊医疗站所（小医院）",
        23: "12月16日，一个中国农民来了，问我们是否可以到5公里外的村庄，我们去了，发现一个青年农民的头几乎被砍掉，我们给以初步医药处理，并把他送到这里以便护理。他的家属告知经过。12月13日，他和家人来到我们的难民营要求庇护。两天以后，他和其他一些人回本村取粮，碰上几个日本士兵正在搜寻中国士兵。他们硬说这个青年农民是士兵，所以应该处死，他们本想用刀劈下他的脑袋，但他的外衣领子高而且厚，稍许承受了刀劈的力量，日本人丢下他让他自行死去。这个青年于1938年元旦死亡。",
        24: "(1938年)1月2日，一个46岁中国妇女由其丈夫送来,他告知经过如下。他与妻子有两个儿子，一个16岁，一个11岁，家在靠近宁杭公路的村庄。12月10日，丈夫和长子被日军抓走充当夫役,妻子和幼子留在家中。12月12日夜晚,4个日本兵来到她家,醉醺醺地找年轻女人，由于未能找到而大发雷霆,枪杀她的幼子,刺刀戳伤她的左腿靠近膝部,骨头被破坏,然后士兵放火烧她的房屋。她总算逃出火焰，露宿数天无法移动，直至他的丈夫独自回来，大儿子不知道在什么地方。丈夫无法帮助她，得不到任何医疗。大约在元旦那天，听说可以在我们这里得到援助，她的丈夫就求得其他几个农民帮忙把她抬到这里。但此时伤口已严重感染,我们爱莫能助，她于1月19日死亡。",
        25: "1月10日，来了一个中国老农,肩部与右手被刺刀戳伤。他说,当天清晨许多日本兵到他的村庄索取猪、鸡,他告诉他们已被抢劫一空,于是一个日兵从他背后开了一枪，击毙另一站在他后面的农民。",
        26: "1月10日，一个年轻中国妇女来此。她说，当在房后劳作时，听见“日本人来了”的喊声，她连忙逃避，但被日本兵看见，并开了一枪，一枚子弹击伤她的手。",
        27: "1月14日，一个中国老农前来求助。他说明经过，当天早晨几个日本兵来到他家要花姑娘，他为他们提供烟酒，他们接受了。但他无法找到姑娘,而日并仍然坚持索要;他跪下说明实在找不到,于是日兵开始射击，两枚子弹击中，一枚穿过肺部，一枚穿过生殖器。",
        28: "1月15日，一个中国青年头部负伤，来此求助。他说12日他在公路上走路时被日本兵抓住,命令他找花姑娘,由于找不到，被日兵打伤。",
        29: "1月16日，一个中国农民左臂弹伤，大约是在1月1日被抢劫。",
        30: "1月20日，一个中国商人前来。他说，今天早晨，两个日本兵到他家寻找妇女未获，用刺刀戳伤他的脸部数处。",
        31: "1月21日，送来一个中国农民。他说，1月13日他从我们的难民营回家取米，在离村约3英里处突然在日兵无理枪击，一枚子弹从臀部上方贯串全身，伤及生殖器，无法行走，他在向难民营的路上爬了几天几夜，在及其悲惨的情况下被寻找他的亲戚发现,脚趾、膝盖和双手的皮肉残破露骨,显然是由于在冻硬的土地上爬行(过久）",
        32: "1月23日，一个中国农民前来求助并告知经过。1月22日下午,几个日本兵到他家强索煤油未获,便命他搬集大量柴草至于屋内,还要他自己点火,整个房屋烧垮，日兵旁观大笑，离开前以刺刀捅穿他的面部,敲落几枚牙齿,割伤脸、唇",
        33: "1月24日，一个中国难民手部负伤来此。昨天几个日本兵到他家索取鸡子,他作手势表示没有，日本兵便用手枪向他射击。",
        34: "1月25日，几个日本兵于1月23日乘船循江上岸，寻找年轻姑娘，在一家室内发现一个65岁老妇，由于在她家找不到年轻姑娘，离开前开枪向她射击，一枚子弹(碎片)布满右踝，有人曾为她初步治疗,据说是一个原中国海军水手,第二天被送来这里。",
        35: "1月26日，送来一个64岁中国老农。他在（1937年)12月16日被日本兵击伤右腿，骨头完全折断",
        36: "1月27日，一个年轻中国农民被送来,他一直住在我们的难民营,昨天他回村取粮,不知何故受到日军攻击,用刀砍他,头、臂、手和身体左侧受重伤",
        37: "1937年12月21日签署借条借用拉贝的福特车",
        38: "12月21日二人望拉贝后计划借车返回栖霞山",
        39: "12月23日递交栖霞山难民请愿书，拉贝致信日本使馆抗议暴行",
        40: "日军限制活动范围，辛德贝格需搭载日兵才能进出城门",
        41: "1938年1月25日转交栖霞寺《以人类的名义》请愿书，记录2.04万难民状况",
        42: "1938年2月3日将译成德文的栖霞寺难民信送交拉贝",
        43: "1938年1月26日四位难民联名向京特、辛德贝格提交呈文",
        44: "1938年2月16-17日辛德贝格驾车协助马吉考察，促成其日后在东京审判作证"
		45: "1938月3月20日或21日，设法从龙潭的日军那里取得通行证的辛德贝格和英文翻译李玉麟一起，从龙潭乘军用车回到了上海。龙潭是从南京到上海的铁路最靠近江南水泥厂、能上下客的火车站。辛德贝格守卫在南京城外栖霞山,连头夹尾一共106天或107天,这在他一生中是不平常的一百多天。"
		46: "辛德贝格来到上海爱德华七世大道（又称爱多亚路，今上海延安东路)9号，找到英国《曼彻斯特卫报》（《ManchesterGuardian》)特约记者、《亚洲》杂志编辑顾问（AdvisoryEditor，“Asia”Magazine）田伯烈（H.J.Timperley)。当时，田伯烈正集中精力利用贝茨和南京安全区国际委员会其他成员所提供的资料，编辑他的《战争意味什么？日军在华暴行》(《What War Means, the Japanese Terror in China》）,工作已接近尾声。"
		47: "中国派出了以朱学范为团长的劳方代表团。1938年6月2日辛德贝格得到了来访问的中国代表团的邀请，而且邀请他们进人国联大厦。"
		48: "1937年6月3日晚上,辛德贝格播放影片，应邀前来的国际联盟成员国的代表、各国记者约100人,聚集在中国国际图书馆。"
		49: "拉贝开着米尔斯的车，前往平仓巷3号美国难兄难弟的家中，参加“由丹麦人辛德贝格捐赠的圣诞晚宴”。夜色笼罩，尸臭弥漫，拉贝一路上碰到好几具已连续12天横陈在周围街道上无人收敛的尸体，经过被日本士兵纵火焚烧后剩下的废墟。美国人的住处不像拉贝那里还有当时全城惟一的圣诞树，他们只在壁炉边上有几面小红旗，客厅周围只有威尔逊从金陵大学买来的6盆圣诞红。这里聚集着斯迈士，菲奇，威尔逊医生，南京安全区国际委员会和国际红十字会南京委员会委员、金陵大学医院医生特里默（C.S.Trimmer），美国人默默地、忧心仲仲地紧靠着坐在一起。应邀前来的还有德国人克勒格尔，德国上海保险公司职员、南京安全区国际委员会总稽查施佩林（EduardSperling）。拉贝把皮革封面的西门子记事本作为圣诞礼物送给每个人。晚宴是烤猪和土豆，威尔逊为德国客人打开了一瓶德国使馆送给他们的酒并弹琴，大家围坐一起忧郁地唱圣诞歌曲。"		
    };

    // 处理数据，创建节点和链接
    const nodes = {};
    const links = [];
    const eventGroups = {};

    // 统计每个人物出现的次数
    rawData.forEach(item => {
        const eventId = item[0];
        const person = item[1];
        
        if (!nodes[person]) {
            nodes[person] = { id: person, count: 0, events: [] };
        }
        nodes[person].count++;
        
        // 记录人物参与的事件ID
        if (!nodes[person].events.includes(eventId)) {
            nodes[person].events.push(eventId);
        }
        
        if (!eventGroups[eventId]) {
            eventGroups[eventId] = [];
        }
        eventGroups[eventId].push(person);
    });

    // 创建链接
    Object.entries(eventGroups).forEach(([eventId, group]) => {
        for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
                links.push({
                    source: group[i],
                    target: group[j],
                    eventId: parseInt(eventId) // 存储事件ID
                });
            }
        }
    });

    // 转换为D3需要的数组格式
    const nodesArray = Object.values(nodes);
    
    // 为重要节点设置初始位置
    nodesArray.forEach(node => {
        if (node.id === "辛德贝格") {
            // 将辛德贝格节点固定在中心位置
            node.fx = 350;
            node.fy = 250;
        } else if (node.id === "京特") {
            // 将京特节点放在左侧
            node.x = 250;
            node.y = 200;
        } else if (node.id === "马吉") {
            // 将马吉节点放在右侧
            node.x = 450;
            node.y = 200;
        }
    });
    
    // 创建SVG
    const width = 700;
    const height = 500;
    
    const svg = d3.select("#relationship-graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    // 创建力导向图
    const simulation = d3.forceSimulation(nodesArray)
        .force("link", d3.forceLink(links).id(d => d.id).distance(120))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.1))
        .force("y", d3.forceY(height / 2).strength(0.1))
        .force("collision", d3.forceCollide().radius(d => 10 + Math.sqrt(d.count) * 2))
        .alphaDecay(0.01) // 降低冷却速度
        .alphaTarget(0.3)
        .restart();
        
    // 预热模拟，使图形更加稳定
    for (let i = 0; i < 300; i++) {
        simulation.tick();
    }
    
    // 设置最终冷却目标
    simulation.alphaTarget(0);
    
    // 创建事件信息框
    const tooltip = d3.select("body").append("div")
        .attr("class", "event-tooltip")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "1px solid #d4b95e")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("box-shadow", "0 2px 10px rgba(0,0,0,0.2)")
        .style("z-index", "1000")
        .style("max-width", "300px");
    
    // 绘制链接
    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("cursor", "pointer")
        .on("mouseover", function(event, d) {
            d3.select(this).attr("stroke", "#ff6347").attr("stroke-width", 2);
            
            // 显示事件描述
            if (eventDescriptions[d.eventId]) {
                tooltip.html(`<strong>事件 ${d.eventId}:</strong><br>${eventDescriptions[d.eventId]}`)
                    .style("visibility", "visible")
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 10) + "px");
            }
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#999").attr("stroke-width", 1);
            tooltip.style("visibility", "hidden");
        })
        .on("click", function(event, d) {
            event.stopPropagation(); // 阻止事件冒泡
            
            // 显示事件描述
            if (eventDescriptions[d.eventId]) {
                // 创建或更新固定的信息框
                showEventInfo(d.eventId, event.pageX, event.pageY);
            }
        });
    
    // 绘制节点
    const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodesArray)
        .join("circle")
        .attr("r", d => 8 + Math.sqrt(d.count) * 2.5) // 增加节点大小
        .attr("fill", d => d.id === "辛德贝格" ? "#ff6347" : "#1f77b4")
        .attr("cursor", "pointer")
        .call(drag(simulation))
        .on("mouseover", function(event, d) {
            d3.select(this).attr("stroke", "#ff6347").attr("stroke-width", 2);
            
            // 显示该人物参与的所有事件
            if (d.events && d.events.length > 0) {
                const eventsList = d.events.map(eventId => {
                    return `<li><strong>事件 ${eventId}:</strong> ${eventDescriptions[eventId] || "(事件描述暂缺)"}</li>`;
                }).join("");
                
                tooltip.html(`<strong>${d.id}</strong> 参与的事件:<br><ul>${eventsList}</ul>`)
                    .style("visibility", "visible")
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 10) + "px");
            }
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#fff").attr("stroke-width", 1.5);
            tooltip.style("visibility", "hidden");
        })
        .on("click", function(event, d) {
            event.stopPropagation(); // 阻止事件冒泡
            
            // 显示该人物参与的所有事件
            if (d.events && d.events.length > 0) {
                // 创建或更新固定的信息框
                showPersonEvents(d, event.pageX, event.pageY);
            }
        });
    
    // 添加人物名称
    const text = svg.append("g")
        .selectAll("text")
        .data(nodesArray)
        .join("text")
        .attr("dx", d => 12) // 增加水平偏移
        .attr("dy", d => 4)  // 微调垂直偏移
        .text(d => d.id)
        .attr("font-size", d => d.id === "辛德贝格" ? "14px" : "12px") // 增加字体大小，辛德贝格特别突出
        .attr("font-family", "sans-serif")
        .attr("font-weight", d => d.id === "辛德贝格" ? "bold" : "normal") // 辛德贝格加粗
        .attr("fill", d => d.id === "辛德贝格" ? "#d62728" : "#333"); // 调整文字颜色
    
    // 更新力导向图
    simulation.on("tick", () => {
        // 添加边界约束，确保节点不会超出SVG边界
        nodesArray.forEach(d => {
            // 计算节点半径（基于节点大小）- 与节点绘制时使用的计算方式保持一致
            const radius = 8 + Math.sqrt(d.count) * 2.5;
            
            // 限制x坐标
            d.x = Math.max(radius, Math.min(width - radius, d.x));
            // 限制y坐标
            d.y = Math.max(radius, Math.min(height - radius, d.y));
        });
        
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
    
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
        
        text
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });
    
    // 显示事件信息的函数
    function showEventInfo(eventId, x, y) {
        // 移除已有的固定信息框
        d3.select(".fixed-info-box").remove();
        
        // 创建新的固定信息框
        const infoBox = d3.select("body").append("div")
            .attr("class", "fixed-info-box")
            .style("position", "absolute")
            .style("left", (x + 10) + "px")
            .style("top", (y - 10) + "px")
            .style("background-color", "white")
            .style("border", "2px solid #d4b95e")
            .style("border-radius", "5px")
            .style("padding", "15px")
            .style("box-shadow", "0 2px 10px rgba(0,0,0,0.2)")
            .style("z-index", "1000")
            .style("max-width", "300px");
        
        // 添加事件信息
        infoBox.append("h3")
            .style("margin-top", "0")
            .style("color", "#8b4513")
            .text(`事件 ${eventId}`);
        
        infoBox.append("p")
            .text(eventDescriptions[eventId] || "(事件描述暂缺)");
        
        // 添加关闭按钮
        infoBox.append("button")
            .attr("class", "close-btn")
            .style("background-color", "#d4b95e")
            .style("border", "none")
            .style("padding", "5px 10px")
            .style("margin-top", "10px")
            .style("cursor", "pointer")
            .style("border-radius", "3px")
            .text("关闭")
            .on("click", function() {
                infoBox.remove();
            });
        
        // 点击文档其他地方关闭信息框
        d3.select("body").on("click.infobox", function(event) {
            if (!infoBox.node().contains(event.target)) {
                infoBox.remove();
                d3.select("body").on("click.infobox", null);
            }
        });
    }
    
    // 显示人物参与的所有事件的函数
    function showPersonEvents(person, x, y) {
        // 移除已有的固定信息框
        d3.select(".fixed-info-box").remove();
        
        // 创建新的固定信息框
        const infoBox = d3.select("body").append("div")
            .attr("class", "fixed-info-box")
            .style("position", "absolute")
            .style("left", (x + 10) + "px")
            .style("top", (y - 10) + "px")
            .style("background-color", "white")
            .style("border", "2px solid #d4b95e")
            .style("border-radius", "5px")
            .style("padding", "15px")
            .style("box-shadow", "0 2px 10px rgba(0,0,0,0.2)")
            .style("z-index", "1000")
            .style("max-width", "350px");
        
        // 添加人物信息
        infoBox.append("h3")
            .style("margin-top", "0")
            .style("color", "#8b4513")
            .text(person.id);
        
        // 添加事件列表
        const eventsList = infoBox.append("ul")
            .style("padding-left", "20px")
            .style("margin-bottom", "10px");
        
        person.events.forEach(eventId => {
            eventsList.append("li")
                .style("margin-bottom", "8px")
                .style("cursor", "pointer")
                .style("color", "#1f77b4")
                .text(`事件 ${eventId}: ${eventDescriptions[eventId] || "(事件描述暂缺)"}`);
        });
        
        // 添加关闭按钮
        infoBox.append("button")
            .attr("class", "close-btn")
            .style("background-color", "#d4b95e")
            .style("border", "none")
            .style("padding", "5px 10px")
            .style("margin-top", "10px")
            .style("cursor", "pointer")
            .style("border-radius", "3px")
            .text("关闭")
            .on("click", function() {
                infoBox.remove();
            });
        
        // 点击文档其他地方关闭信息框
        d3.select("body").on("click.infobox", function(event) {
            if (!infoBox.node().contains(event.target)) {
                infoBox.remove();
                d3.select("body").on("click.infobox", null);
            }
        });
    }
    
    // 拖拽功能
    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }
        
        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            // 保持节点位置固定，不释放fx和fy
            // 这样节点会保持在用户拖动的位置
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
});