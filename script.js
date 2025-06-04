document.addEventListener('DOMContentLoaded', function() {
    // 花瓣动画增强功能
    const petalsContainer = document.querySelector('.petals-container');
    const petalImages = ['花瓣-00.png',  '花瓣01.png', '花瓣02.png', '花瓣04.png', '花瓣05.png', '花瓣06.png'];
    
    // 创建额外的花瓣元素
    function createExtraPetals(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const petal = document.createElement('img');
                const randomPetalIndex = Math.floor(Math.random() * petalImages.length);
                petal.src = petalImages[randomPetalIndex];
                petal.className = 'petal extra-petal';
                petal.alt = '花瓣';
                
                // 随机初始位置（左上角区域）
                const startX = -100 + Math.random() * 50;
                const startY = -100 + Math.random() * 150;
                
                // 获取标题部分的位置
                const header = document.querySelector('header');
                const headerRect = header.getBoundingClientRect();
                
                // 随机结束位置（标题部分底部）
                const endX = window.innerWidth - 200 + Math.random() * 150;
                const endY = headerRect.bottom + window.scrollY;
                
                // 随机旋转角度
                const startRotate = Math.random() * 180;
                const endRotate = startRotate + 180 + Math.random() * 180;
                
                // 随机动画持续时间
                const duration = 15 + Math.random() * 10;
                
                // 随机大小（调整为更小的尺寸）
                const size = 30 + Math.random() * 20;
                
                // 设置样式
                petal.style.width = `${size}px`;
                petal.style.position = 'absolute';
                petal.style.opacity = '0';
                petal.style.transform = `translate(${startX}px, ${startY}px) rotate(${startRotate}deg)`;
                petal.style.transition = `transform ${duration}s ease-in-out, opacity ${duration * 0.2}s ease-in-out`;
                
                // 添加到容器
                petalsContainer.appendChild(petal);
                
                // 开始动画
                setTimeout(() => {
                    petal.style.opacity = '1';
                }, 10);
                
                setTimeout(() => {
                    petal.style.transform = `translate(${endX}px, ${endY}px) rotate(${endRotate}deg)`;
                }, 100);
                
                // 动画结束后移除元素
                setTimeout(() => {
                    petal.style.opacity = '0';
                    setTimeout(() => {
                        petal.remove();
                    }, duration * 200);
                }, duration * 1000 * 0.8);
                
            }, i * 3000); // 每3秒创建一个新花瓣
        }
    }
    
    // 初始创建5个额外花瓣
    createExtraPetals(5);
    
    // 每15秒再创建一批花瓣
    setInterval(() => {
        createExtraPetals(3);
    }, 15000);
    
    // 气泡点击交互功能
    const bubbles = document.querySelectorAll('.bubble');
    
    bubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            // 获取气泡的详细信息
            const info = this.getAttribute('data-info');
            
            // 检查是否已经有信息框
            let infoBox = document.querySelector('.info-box');
            
            // 如果已经有信息框，则移除它
            if (infoBox) {
                infoBox.remove();
            }
            
            // 创建新的信息框
            infoBox = document.createElement('div');
            infoBox.className = 'info-box';
            infoBox.innerHTML = `
                <div class="info-content">${info}</div>
                <button class="close-btn">关闭</button>
            `;
            
            // 设置信息框样式
            infoBox.style.position = 'absolute';
            infoBox.style.backgroundColor = '#fff';
            infoBox.style.border = '2px solid #d4b95e';
            infoBox.style.borderRadius = '5px';
            infoBox.style.padding = '15px';
            infoBox.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            infoBox.style.zIndex = '1000';
            infoBox.style.maxWidth = '300px';
            
            // 获取气泡的位置
            const rect = this.getBoundingClientRect();
            
            // 将信息框添加到文档中
            document.body.appendChild(infoBox);
            
            // 计算信息框的位置
            const infoBoxRect = infoBox.getBoundingClientRect();
            
            // 设置信息框的位置（在气泡上方）
            infoBox.style.left = rect.left + (rect.width / 2) - (infoBoxRect.width / 2) + 'px';
            infoBox.style.top = rect.top - infoBoxRect.height - 10 + window.scrollY + 'px';
            
            // 如果信息框超出了视口顶部，则将其放在气泡下方
            if (parseFloat(infoBox.style.top) < window.scrollY) {
                infoBox.style.top = rect.bottom + 10 + window.scrollY + 'px';
            }
            
            // 添加关闭按钮的点击事件
            const closeBtn = infoBox.querySelector('.close-btn');
            closeBtn.style.backgroundColor = '#d4b95e';
            closeBtn.style.border = 'none';
            closeBtn.style.padding = '5px 10px';
            closeBtn.style.marginTop = '10px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.borderRadius = '3px';
            
            closeBtn.addEventListener('click', function() {
                infoBox.remove();
            });
            
            // 点击文档其他地方关闭信息框
            document.addEventListener('click', function closeInfoBox(e) {
                if (!infoBox.contains(e.target) && e.target !== bubble) {
                    infoBox.remove();
                    document.removeEventListener('click', closeInfoBox);
                }
            });
        });
    });
    
    // 添加页面滚动动画效果
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }
    
    // 初始检查
    checkScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
    
    // 为section添加淡入效果的CSS
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // 创建难民收容人数柱状图
    function createRefugeeChart() {
        const chartContainer = document.getElementById('refugee-chart');
        if (!chartContainer) return;
        
        // 难民收容人数数据（日期和人数）- 根据表格数据
        const refugeeData = [
            { date: '1937.12.14', jnFactory: null, qxTemple: 10000, label: '12.14', timestamp: new Date('1937-12-14').getTime() },
            { date: '1937.12.23', jnFactory: null, qxTemple: 17000, label: '12.23', timestamp: new Date('1937-12-23').getTime() },
            { date: '1937.12.28', jnFactory: 4000, qxTemple: null, label: '12.28', timestamp: new Date('1937-12-28').getTime() },
            { date: '1938.01.11', jnFactory: 3500, qxTemple: null, label: '1.11', timestamp: new Date('1938-01-11').getTime() },
            { date: '1938.01.12', jnFactory: 4000, qxTemple: null, label: '1.12', timestamp: new Date('1938-01-12').getTime() },
            { date: '1938.01.25', jnFactory: null, qxTemple: 20400, label: '1.25', timestamp: new Date('1938-01-25').getTime() },
            { date: '1938.02.03', jnFactory: 6000, qxTemple: 22000, label: '2.3', timestamp: new Date('1938-02-03').getTime() },
            { date: '1938.02.09', jnFactory: 5000, qxTemple: null, label: '2.9', timestamp: new Date('1938-02-09').getTime() },
            { date: '1938.02.11', jnFactory: null, qxTemple: 23500, label: '2.11', timestamp: new Date('1938-02-11').getTime() },
            { date: '1938.02.12', jnFactory: null, qxTemple: 23000, label: '2.12', timestamp: new Date('1938-02-12').getTime() },
            { date: '1938.02.16', jnFactory: 13500, qxTemple: 1000, label: '2.16', timestamp: new Date('1938-02-16').getTime() },
            { date: '1938.03.01', jnFactory: 16500, qxTemple: null, label: '3月初', timestamp: new Date('1938-03-01').getTime() },
            { date: '1938.03.13', jnFactory: 20000, qxTemple: null, label: '3.13', timestamp: new Date('1938-03-13').getTime() },
            { date: '1938.03.20', jnFactory: 15000, qxTemple: null, label: '3下旬', timestamp: new Date('1938-03-20').getTime() },
            { date: '1938.03.27', jnFactory: 9000, qxTemple: null, label: '3.27', timestamp: new Date('1938-03-27').getTime() },
            { date: '1938.03.30', jnFactory: 4000, qxTemple: null, label: '3.30', timestamp: new Date('1938-03-30').getTime() },
            { date: '1938.04.15', jnFactory: 250, qxTemple: null, label: '4.15', timestamp: new Date('1938-04-15').getTime() },
            { date: '1938.04.22', jnFactory: 100, qxTemple: null, label: '4.22', timestamp: new Date('1938-04-22').getTime() },
            { date: '1938.05.12', jnFactory: 30, qxTemple: null, label: '5.12', timestamp: new Date('1938-05-12').getTime() }
        ];
        
        // 对数据进行排序，确保按时间顺序绘制线图
        refugeeData.sort((a, b) => a.timestamp - b.timestamp);
        
        // 计算最大值用于比例尺
        let maxCount = 0;
        refugeeData.forEach(data => {
            // 处理江南水泥厂数据
            if (data.jnFactory && data.jnFactory > maxCount) {
                maxCount = data.jnFactory;
            }
            // 处理栖霞寺数据
            if (data.qxTemple && data.qxTemple > maxCount) {
                maxCount = data.qxTemple;
            }
        });
        
        // 获取容器宽度
        const containerWidth = chartContainer.offsetWidth;
        
        // 创建图例
        const legendContainer = document.createElement('div');
        legendContainer.className = 'chart-legend';
        
        // 江南水泥厂图例
        const jnFactoryLegend = document.createElement('div');
        jnFactoryLegend.className = 'legend-item';
        const jnFactoryColor = document.createElement('span');
        jnFactoryColor.className = 'legend-color';
        jnFactoryColor.style.backgroundColor = '#d4b95e';
        const jnFactoryText = document.createElement('span');
        jnFactoryText.textContent = '江南水泥厂';
        jnFactoryLegend.appendChild(jnFactoryColor);
        jnFactoryLegend.appendChild(jnFactoryText);
        
        // 栖霞寺图例
        const qxTempleLegend = document.createElement('div');
        qxTempleLegend.className = 'legend-item';
        const qxTempleColor = document.createElement('span');
        qxTempleColor.className = 'legend-color';
        qxTempleColor.style.backgroundColor = '#8b4513';
        const qxTempleText = document.createElement('span');
        qxTempleText.textContent = '栖霞寺佛教难民收容所';
        qxTempleLegend.appendChild(qxTempleColor);
        qxTempleLegend.appendChild(qxTempleText);
        
        // 添加图例到容器
        legendContainer.appendChild(jnFactoryLegend);
        legendContainer.appendChild(qxTempleLegend);
        chartContainer.parentNode.insertBefore(legendContainer, chartContainer);
        
        // 创建图表区域
        const chartArea = document.createElement('div');
        chartArea.className = 'chart-area';
        chartArea.style.position = 'relative';
        chartArea.style.height = '250px';
        chartArea.style.marginLeft = '50px';
        chartArea.style.marginBottom = '50px';
        chartContainer.appendChild(chartArea);
        
        // 创建Y轴
        const yAxis = document.createElement('div');
        yAxis.className = 'y-axis';
        yAxis.style.position = 'absolute';
        yAxis.style.left = '0';
        yAxis.style.bottom = '0';
        yAxis.style.width = '1px';
        yAxis.style.height = '250px';
        yAxis.style.backgroundColor = '#ccc';
        chartArea.appendChild(yAxis);
        
        // 添加Y轴刻度和标签
        const yTicksCount = 5;
        for (let i = 0; i <= yTicksCount; i++) {
            const yValue = Math.round(maxCount / yTicksCount * i);
            const yPos = 250 - (i / yTicksCount * 250);
            
            // 添加刻度线
            const tick = document.createElement('div');
            tick.style.position = 'absolute';
            tick.style.left = '-5px';
            tick.style.bottom = `${yPos}px`;
            tick.style.width = '5px';
            tick.style.height = '1px';
            tick.style.backgroundColor = '#ccc';
            chartArea.appendChild(tick);
            
            // 添加刻度值
            const label = document.createElement('div');
            label.style.position = 'absolute';
            label.style.left = '-40px';
            label.style.bottom = `${yPos - 5}px`;
            label.style.fontSize = '10px';
            label.style.color = '#666';
            label.style.width = '35px';
            label.style.textAlign = 'right';
            label.textContent = yValue.toLocaleString();
            chartArea.appendChild(label);
            
            // 添加网格线
            const gridLine = document.createElement('div');
            gridLine.style.position = 'absolute';
            gridLine.style.left = '0';
            gridLine.style.bottom = `${yPos}px`;
            gridLine.style.width = `${containerWidth - 60}px`;
            gridLine.style.height = '1px';
            gridLine.style.backgroundColor = '#f0f0f0';
            gridLine.style.zIndex = '1';
            chartArea.appendChild(gridLine);
        }
        
        // 添加Y轴标题
        const yAxisTitle = document.createElement('div');
        yAxisTitle.style.position = 'absolute';
        yAxisTitle.style.left = '-45px';
        yAxisTitle.style.bottom = '125px';
        yAxisTitle.style.transform = 'rotate(-90deg)';
        yAxisTitle.style.transformOrigin = 'left bottom';
        yAxisTitle.style.fontSize = '12px';
        yAxisTitle.style.color = '#666';
        yAxisTitle.textContent = '人数';
        chartArea.appendChild(yAxisTitle);
        
        // 添加X轴
        const xAxis = document.createElement('div');
        xAxis.style.position = 'absolute';
        xAxis.style.bottom = '0';
        xAxis.style.left = '0';
        xAxis.style.width = `${containerWidth - 60}px`;
        xAxis.style.height = '1px';
        xAxis.style.backgroundColor = '#ccc';
        chartArea.appendChild(xAxis);
        
        // 计算X轴刻度位置
        const chartWidth = containerWidth - 60;
        const xStep = chartWidth / (refugeeData.length - 1);
        
        // 添加X轴刻度和标签
        refugeeData.forEach((item, index) => {
            const xPos = index * xStep;
            
            // 添加刻度线
            const tick = document.createElement('div');
            tick.style.position = 'absolute';
            tick.style.left = `${xPos}px`;
            tick.style.bottom = '-3px';
            tick.style.width = '1px';
            tick.style.height = '3px';
            tick.style.backgroundColor = '#ccc';
            chartArea.appendChild(tick);
            
            // 添加日期标签
            const label = document.createElement('div');
            label.style.position = 'absolute';
            label.style.left = `${xPos}px`;
            label.style.bottom = '-25px';
            label.style.transform = 'translateX(-50%) rotate(-45deg)';
            label.style.transformOrigin = 'center top';
            label.style.fontSize = '10px';
            label.style.color = '#666';
            label.style.whiteSpace = 'nowrap';
            label.textContent = item.label;
            chartArea.appendChild(label);
        });
        
        // 创建SVG元素用于绘制线图
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', containerWidth - 60);
        svg.setAttribute('height', 250);
        svg.style.position = 'absolute';
        svg.style.left = '0';
        svg.style.bottom = '0';
        svg.style.zIndex = '2';
        chartArea.appendChild(svg);
        
        // 创建线图路径
        const createLinePath = (dataPoints, color) => {
            if (dataPoints.length < 2) return null;
            
            let pathD = `M ${dataPoints[0].x} ${dataPoints[0].y}`;
            
            for (let i = 1; i < dataPoints.length; i++) {
                // 使用贝塞尔曲线使线条更平滑
                const xc = (dataPoints[i].x + dataPoints[i-1].x) / 2;
                const yc = (dataPoints[i].y + dataPoints[i-1].y) / 2;
                pathD += ` Q ${dataPoints[i-1].x} ${dataPoints[i-1].y}, ${xc} ${yc}`;
                
                // 如果是最后一个点，添加到终点
                if (i === dataPoints.length - 1) {
                    pathD += ` Q ${xc} ${yc}, ${dataPoints[i].x} ${dataPoints[i].y}`;
                }
            }
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathD);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', color);
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('stroke-linecap', 'round');
            
            return path;
        };
        
        // 创建数据点
        const createDataPoint = (x, y, value, color) => {
            const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            point.setAttribute('cx', x);
            point.setAttribute('cy', y);
            point.setAttribute('r', '4');
            point.setAttribute('fill', color);
            point.setAttribute('stroke', '#fff');
            point.setAttribute('stroke-width', '1');
            
            // 创建数据标签
            const tooltip = document.createElement('div');
            tooltip.className = 'data-tooltip';
            tooltip.textContent = `${value.toLocaleString()}人`;
            tooltip.style.position = 'absolute';
            tooltip.style.left = `${x}px`;
            tooltip.style.bottom = `${y + 15}px`;
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.backgroundColor = 'rgba(0,0,0,0.7)';
            tooltip.style.color = '#fff';
            tooltip.style.padding = '3px 6px';
            tooltip.style.borderRadius = '3px';
            tooltip.style.fontSize = '10px';
            tooltip.style.pointerEvents = 'none';
            tooltip.style.opacity = '0';
            tooltip.style.transition = 'opacity 0.2s';
            tooltip.style.zIndex = '10';
            chartArea.appendChild(tooltip);
            
            // 添加鼠标事件
            point.addEventListener('mouseover', () => {
                tooltip.style.opacity = '1';
                point.setAttribute('r', '6');
            });
            
            point.addEventListener('mouseout', () => {
                tooltip.style.opacity = '0';
                point.setAttribute('r', '4');
            });
            
            return point;
        };
        
        // 准备数据点
        const factoryDataPoints = [];
        const templeDataPoints = [];
        
        refugeeData.forEach((item, index) => {
            const xPos = index * xStep;
            
            // 江南水泥厂数据点
            if (item.jnFactory !== null) {
                const yPos = 250 - ((item.jnFactory / maxCount) * 250);
                factoryDataPoints.push({
                    x: xPos,
                    y: yPos,
                    value: item.jnFactory
                });
            }
            
            // 栖霞寺数据点
            if (item.qxTemple !== null) {
                const yPos = 250 - ((item.qxTemple / maxCount) * 250);
                templeDataPoints.push({
                    x: xPos,
                    y: yPos,
                    value: item.qxTemple
                });
            }
        });
        
        // 绘制线条
        const factoryPath = createLinePath(factoryDataPoints, '#d4b95e');
        const templePath = createLinePath(templeDataPoints, '#8b4513');
        
        if (factoryPath) svg.appendChild(factoryPath);
        if (templePath) svg.appendChild(templePath);
        
        // 添加数据点
        factoryDataPoints.forEach(point => {
            svg.appendChild(createDataPoint(point.x, point.y, point.value, '#d4b95e'));
        });
        
        templeDataPoints.forEach(point => {
            svg.appendChild(createDataPoint(point.x, point.y, point.value, '#8b4513'));
        });
    }
    
    // 初始化柱状图
    createRefugeeChart();
});