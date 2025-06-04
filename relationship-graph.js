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
        [44, "难民"], [44, "辛德贝格"], [44, "京特"], [44, "马吉"]
    ];

    // 事件描述数据
    const eventDescriptions = {
        1: "1937年12月5日，京特、辛德贝格一行4人到达江南水泥厂，与颜景和、徐莘农、夏毓华、贾瑞林等人共同面对杀气腾腾的日本兵",
        2: "1937年11月底或12月初，辛德贝格写信告知父亲被派驻南京丹麦水泥厂升起丹麦国旗代理公司",
        3: "1938年2月3日辛德贝格致信友人，描述在厂房屋顶制作1350平方米的巨型丹麦国旗",
        4: "德国外交官许尔特尔驾车将辛德贝格及其购买的储备食品送往栖霞山",
        5: "日军飞机轰炸江南水泥厂附近，京特与辛德贝格等人受惊，厂区玻璃被震碎",
        6: "（事件描述暂缺）",
        7: "1937年12月16日，原18师士兵装死逃脱日军屠杀，向辛德贝格求助",
        8: "1938年1月14日，日军用手榴弹炸鸡致儿童重伤，辛德贝格冒险送医，威尔逊医生实施救治",
        9: "（案例5具体事件暂缺）",
        10: "（案例7具体事件暂缺）",
        11: "（案例11具体事件暂缺）",
        12: "（事件描述暂缺）",
        13: "1938年1月11日，辛德贝格记载三四千难民在厂区丹麦国旗下受庇护",
        14: "1938年2月3日记载收容6000名中国农民（含妇女儿童）",
        15: "1938年2月中旬，难民代表致信感谢四人拯救1万条生命",
        16: "1937年12月28日，因外国人在场，日军暴行收敛，4000难民逃至水泥厂",
        17: "江南水泥厂团队每月花费三四百元殷殷招待频繁骚扰的日军",
        18: "江南水泥厂团队有时会制止日军对厂区的骚扰",
        19: "（事件描述暂缺）",
        20: "（事件描述暂缺）",
        21: "1938年2月16-17日驾车接送马吉考察栖霞山难民营",
        22: "共同创办江南水泥厂急诊医疗站所（小医院）",
        23: "（事件描述暂缺）",
        24: "（事件描述暂缺）",
        25: "（事件描述暂缺）",
        26: "（事件描述暂缺）",
        27: "（事件描述暂缺）",
        28: "（事件描述暂缺）",
        29: "（事件描述暂缺）",
        30: "（事件描述暂缺）",
        31: "（事件描述暂缺）",
        32: "（事件描述暂缺）",
        33: "（事件描述暂缺）",
        34: "（事件描述暂缺）",
        35: "（事件描述暂缺）",
        36: "（事件描述暂缺）",
        37: "1937年12月21日签署借条借用拉贝的福特车",
        38: "12月21日二人望拉贝后计划借车返回栖霞山",
        39: "12月23日递交栖霞山难民请愿书，拉贝致信日本使馆抗议暴行",
        40: "日军限制活动范围，辛德贝格需搭载日兵才能进出城门",
        41: "1938年1月25日转交栖霞寺《以人类的名义》请愿书，记录2.04万难民状况",
        42: "1938年2月3日将译成德文的栖霞寺难民信送交拉贝",
        43: "1938年1月26日四位难民联名向京特、辛德贝格提交呈文",
        44: "1938年2月16-17日辛德贝格驾车协助马吉考察，促成其日后在东京审判作证"
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
             event.subject.fx = undefined;
    event.subject.fy = undefined;
      // Optional: Restart simulation for immediate movement
    simulation.alpha(1).restart();
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
});