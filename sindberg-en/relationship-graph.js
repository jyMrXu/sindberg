document.addEventListener('DOMContentLoaded', function() {
    // Data processing
    const rawData = [
        [1, "Günther"], [1, "Sindberg"], [1, "Yan Jinghe"], [1, "Xu Xinnong"], [1, "Xia Yuhua"], [1, "Jia Ruilin"],
        [2, "Sindberg"], [2, "Father"],
        [3, "Sindberg"], [3, "Poul Adler Pedersen"],
        [4, "Schürtler"], [4, "Sindberg"],
        [5, "Günther"], [5, "Sindberg"],
        [6, "Günther"], [6, "Sindberg"],
        [7, "Sindberg"], [7, "Former 18th Division soldier"],
        [8, "Chicken-hunting Japanese soldier"], [8, "Child severely injured by grenade"], [8, "Sindberg"], [8, "Dr. Wilson"],
        [9, "Chinese wounded soldier"], [9, "Sindberg"],
        [10, "Young soldier"], [10, "Sindberg"],
        [11, "Chinese soldier"], [11, "Sindberg"],
        [12, "Su Guobao"], [12, "Sindberg"], [12, "Günther"],
        [13, "Sindberg"], [13, "3,000-4,000 refugees"],
        [14, "Sindberg"], [14, "6,000 Chinese farmers"],
        [15, "Refugee representatives from Sheshan District"], [15, "Günther"], [15, "Sindberg"], [15, "Magee"],
        [16, "Christian Kröger"], [16, "Günther"], [16, "Sindberg"],
        [17, "Japanese soldiers"], [17, "Günther"], [17, "Sindberg"], [17, "Yan Jinghe"], [17, "Xu Xinnong"], [17, "Xia Yuhua"], [17, "Jia Ruilin"],
        [18, "Japanese soldiers"], [18, "Günther"], [18, "Sindberg"], [18, "Yan Jinghe"], [18, "Xu Xinnong"], [18, "Xia Yuhua"], [18, "Jia Ruilin"],
        [19, "Monk friends"], [19, "Sindberg"],
        [20, "Injured Chinese"], [20, "Sindberg"],
        [21, "Sindberg"], [21, "Magee"],
        [22, "Sindberg"], [22, "Yan Jinghe"],
        [23, "Sindberg"], [23, "Chinese farmer"],
        [24, "46-year-old Chinese woman and her husband"], [24, "Sindberg"],
        [25, "Chinese old farmer"], [25, "Sindberg"],
        [26, "Young Chinese woman"], [26, "Sindberg"],
        [27, "Chinese old farmer"], [27, "Sindberg"],
        [28, "Chinese youth"], [28, "Sindberg"],
        [29, "Chinese farmer"], [29, "Sindberg"],
        [30, "Chinese merchant"], [30, "Sindberg"],
        [31, "Chinese farmer"], [31, "Sindberg"],
        [32, "Chinese farmer"], [32, "Sindberg"],
        [33, "Chinese refugee"], [33, "Sindberg"],
        [34, "Chinese old woman"], [34, "Sindberg"],
        [35, "Chinese old farmer"], [35, "Sindberg"],
        [36, "Young Chinese farmer"], [36, "Sindberg"],
        [37, "Han Xianglin"], [37, "Sindberg"],
        [38, "Sindberg"], [38, "Kröger"], [38, "Rabe"],
        [39, "Sindberg"], [39, "Rabe"], [39, "Secretary Tanaka"],
        [40, "Sindberg"], [40, "Japanese soldier"],
        [41, "Monk"], [41, "Sindberg"],
        [42, "Sindberg"], [42, "Rabe"],
        [43, "Farmer Wang Yaoshan (75)"], [43, "Mei Yousan (79)"], [43, "Wang Yunkui (63)"], [43, "Xia Mingfen (54)"], [43, "Sindberg"], [43, "Günther"],
        [44, "Refugees"], [44, "Sindberg"], [44, "Günther"], [44, "Magee"],
        [45, "Sindberg"], [45, "Li Yulin"],
        [46, "Sindberg"], [46, "Timperley"],
        [47, "Sindberg"], [47, "Father"], [47, "Zhu Xuefan"], [47, "Chen Baohua"], [47, "Liu Xuanchui"], [47, "Pan Jinan"],
        [48, "Sindberg"], [48, "Father"], [48, "Zhu Xuefan"], [48, "Chen Baohua"], [48, "Liu Xuanchui"], [48, "Pan Jinan"],
        [49, "Sindberg"], [49, "Rabe"], [49, "Smythe"], [49, "Fitch"], [49, "Trimmer"], [49, "Kröger"], [49, "Sperling"], [49, "Members of Nanjing Safety Zone Committee and Nanjing Red Cross Committee"]
    ];

    // Event description data
    const eventDescriptions = {
        1: "December 5, 1937: Günther, Sindberg and 4 others arrived at Jiangnan Cement Plant, facing aggressive Japanese soldiers with Yan Jinghe, Xu Xinnong, Xia Yuhua, Jia Ruilin",
        2: "Late November or early December 1937: Sindberg wrote to his father about being stationed at Nanjing Danish Cement Plant and raising Danish flag",
        3: "February 3, 1938: Sindberg wrote to friend describing creation of 1350m² Danish flag on factory roof",
        4: "German diplomat Schürtler drove Sindberg and purchased supplies to Qixia Mountain",
        5: "Japanese planes bombed near Jiangnan Cement Plant, frightening Günther and Sindberg, shattering factory windows",
        6: "Refugee zone at Jiangnan Cement Plant led by Günther and Sindberg began December 11, 1937",
        7: "December 16, 1937: Former 18th Division soldier escaped massacre by playing dead, sought help from Sindberg",
        8: "January 14, 1938: Japanese grenade thrown at chickens severely injured child, Sindberg risked taking him to hospital where Dr. Wilson treated him",
        9: "February 18: A wounded Chinese soldier arrived and told this story. He was a soldier of Nanjing Model Division. On December 13, he and 8 others surrendered to Japanese, captured for 3 days without food/water. Then with about 200 soldiers/civilians, they were marched outside city near Purple Mountain, lined in 3 rows and machine-gunned. This soldier pretended to be hit and played dead. Japanese poured acid on all corpses then burned them. The soldier's leg was also splashed. As dusk fell when atrocities ended, he crawled away in darkness and came here. Wound still unhealed - acid caused extremely painful, hard-to-treat injury",
        10: "December 23: A young soldier with two wounds, one serious (skull fracture), told this story. He was an orderly for 87th Division company commander. On December 13 during battle, he found himself alone near Taiping Gate, suddenly encountered Japanese. He surrendered, documents confiscated. A soldier stabbed his head/neck multiple times with sword. He lost consciousness, woke alone but able to walk. After hiding 10 days, came here at night",
        11: "January 3: Chinese soldiers came - two from 87th Division, one from 58th Division, two wounded. They reported: On December 15 captured by Japanese, lined with hundreds at Xiaguan riverbank for machine-gun execution. These three escaped bullets, played dead, crawled away at night finding trench with grenades. On New Year's Day, 3 Japanese entered trench - found trapped: they threw grenades, killed two Japanese, escaped and reached here",
        12: "December 6, 1937: Japanese invaded Hushan Village. Su Guobao, villager from Tangshan Community, witnessed and received help from Günther and Sindberg. He was a 10-year-old refugee at Jiangnan Cement Plant",
        13: "January 11, 1938: Sindberg recorded 3,000-4,000 refugees sheltered under factory's Danish flag",
        14: "February 3, 1938: Recorded sheltering 6,000 Chinese farmers (including women/children)",
        15: "Mid-February 1938: Refugee representatives wrote thanking four for saving 10,000 lives",
        16: "December 28, 1937: Foreign presence deterred Japanese atrocities, 4,000 refugees fled to cement plant",
        17: "Jiangnan Cement Plant team spent 300-400 yuan monthly entertaining frequently harassing Japanese soldiers",
        18: "Jiangnan Cement Plant team sometimes stopped Japanese harassment of factory area",
        19: "(February 3, 1938) Two monks from nearby temple, also my personal friends. Hearing I was going to city, wanted ride... The monks wanted visit charities in city... They couldn't return today, I'll fetch them day after tomorrow... I must go Nanjing again day after tomorrow, retrieve Dodge car, bring monks back",
        20: "December 20, 1937: Hearing Nanjing stabilized on radio, Sindberg tried delivering wounded Chinese to Nanjing",
        21: "February 16-17, 1938: Drove Magee to inspect Qixia Mountain refugee camp",
        22: "Co-founded emergency medical station (small hospital) at Jiangnan Cement Plant",
        23: "December 16: A Chinese farmer came, asked if we could go to village 5km away. We went, found young farmer with nearly severed head. Gave first aid, brought here for care. Family told story: December 13, they came to refugee camp for shelter. Two days later, he and others returned to village for grain, met Japanese soldiers searching Chinese soldiers. Accused young farmer being soldier, should die. Tried beheading him, but high/thick collar partly blocked sword. Japanese left him to die. Young man died January 1, 1938",
        24: "January 2, 1938: 46-year-old Chinese woman brought by husband. He told: He and wife had two sons, 16 and 11, home near Ninghang Highway. December 10, husband and eldest son captured by Japanese for labor, wife and younger son stayed home. December 12 night, 4 drunken Japanese came seeking young women. Finding none, furious, shot younger son, bayoneted her left leg near knee, bone damaged, then burned house. She escaped fire, slept outdoors days unable to move until husband returned alone, eldest son whereabouts unknown. Husband couldn't help her, no medical care. Around New Year, hearing help available here, husband got farmers to carry her here. But wound severely infected, we couldn't save her. She died January 19",
        25: "January 10: Chinese old farmer came, shoulder/right hand bayoneted. Said that morning many Japanese came village demanding pigs/chickens. He said already looted, then Japanese behind shot, killing another farmer behind him",
        26: "January 10: Young Chinese woman came. Said while working behind house, heard 'Japanese coming!' shouts, fled but seen by Japanese who fired, bullet wounding hand",
        27: "January 14: Chinese old farmer sought help. Told story: That morning Japanese came demanding women. He offered smoke/alcohol, accepted. But couldn't find women, Japanese insisted; knelt explaining truly unavailable, Japanese shot, two bullets hit - one through lung, one through genitals",
        28: "January 15: Chinese youth with head wound came for help. Said December 12 walking on road captured by Japanese, ordered find women. Unable, beaten by Japanese",
        29: "January 16: Chinese farmer with left arm bullet wound, robbed around January 1",
        30: "January 20: Chinese merchant came. Said that morning two Japanese came home seeking women unfound, bayoneted face multiple times",
        31: "January 21: Chinese farmer brought. Said January 13 returned home from refugee camp for rice. Suddenly shot unreasonably by Japanese 3 miles from village, bullet pierced body from hip through genitals, unable walk. Crawled days/nights toward camp, found by relatives in miserable condition - toes/knees/hands flesh torn exposing bone, apparently from crawling on frozen ground",
        32: "January 23: Chinese farmer sought help. Said January 22 afternoon, Japanese demanded kerosene unfound, ordered him pile firewood inside house, light fire himself. Whole house burned down, Japanese watched laughing. Before leaving, bayoneted face, knocking teeth, cutting face/lips",
        33: "January 24: Chinese refugee with hand wound came. Yesterday Japanese came home demanding chickens, gestured none, Japanese shot him",
        34: "January 25: Japanese arriving by boat January 23 sought young girls. Found 65-year-old woman in house, no young girls found, shot her before leaving. Bullet (fragments) filled right ankle. Preliminary treatment given, said by former Chinese navy sailor, brought here next day",
        35: "January 26: 64-year-old Chinese farmer brought. Shot in right leg by Japanese December 16, bone completely broken",
        36: "January 27: Young Chinese farmer brought. Lived in refugee camp, yesterday returned village for grain, attacked by Japanese for unknown reason, cut by sword, head/arm/hand/left body seriously injured",
        37: "December 21, 1937: Signed IOU borrowing Rabe's Ford car",
        38: "December 21: After visiting Rabe planned borrow car return to Qixia Mountain",
        39: "December 23: Submitted Qixia Mountain refugee petition, Rabe protested atrocities to Japanese embassy",
        40: "Japanese restricted movement, Sindberg needed Japanese escort to enter/exit city gates",
        41: "January 25, 1938: Delivered Qixia Temple 'In Name of Humanity' petition, recording 20,400 refugees",
        42: "February 3, 1938: Delivered German-translated Qixia Temple refugee letter to Rabe",
        43: "January 26, 1938: Four refugees jointly submitted petition to Günther and Sindberg",
        44: "February 16-17, 1938: Sindberg drove assisting Magee's inspection, enabling later Tokyo Trial testimony",
        45: "March 20 or 21, 1938: Sindberg obtained pass from Japanese at Longtan, returned Shanghai with English translator Li Yulin by military vehicle. Longtan was nearest railway station to Jiangnan Cement Plant. Sindberg guarded Qixia Mountain outside Nanjing for 106 or 107 consecutive days - extraordinary period in his life",
        46: "Sindberg went to Edward VII Avenue (now Yan'an East Road) No.9 Shanghai, found British Manchester Guardian correspondent, Asia magazine advisory editor H.J. Timperley. Timperley was compiling What War Means? Japanese Terror in China using Bates and Nanjing Safety Zone Committee materials, nearing completion",
        47: "China sent labor delegation led by Zhu Xuefan. June 2, 1938: Chinese delegation invited Sindberg to enter ILO building",
        48: "June 3, 1938 evening: Sindberg screened film. About 100 League delegates/journalists gathered at China International Library",
        49: "Rabe drove Mills' car to American comrades' home at Pingcang Lane 3 for 'Christmas dinner donated by Dane Sindberg'. Night shrouded, stench of corpses filled air. Rabe encountered several bodies lying on streets 12 days uncollected, passed ruins set ablaze by Japanese. Americans had no Christmas tree like Rabe's - only small red flags by fireplace. Wilson bought 6 poinsettias from University. Smythe, Fitch, Dr. Wilson, Nanjing Safety Zone Committee and Nanjing Red Cross Committee members, University Hospital Dr. Trimmer gathered silently, anxiously close. Invited Germans Kröger and Shanghai insurance clerk, Safety Zone chief inspector Sperling. Rabe gave leather-bound Siemens notebooks as gifts. Dinner was roast pork and potatoes. Wilson opened German embassy wine for German guests and played piano. All sat singing Christmas carols gloomily"
    };

    // Process data, create nodes and links
    const nodes = {};
    const links = [];
    const eventGroups = {};

    // Count occurrences per person
    rawData.forEach(item => {
        const eventId = item[0];
        const person = item[1];
        
        if (!nodes[person]) {
            nodes[person] = { id: person, count: 0, events: [] };
        }
        nodes[person].count++;
        
        // Record event IDs for each person
        if (!nodes[person].events.includes(eventId)) {
            nodes[person].events.push(eventId);
        }
        
        if (!eventGroups[eventId]) {
            eventGroups[eventId] = [];
        }
        eventGroups[eventId].push(person);
    });

    // Create links
    Object.entries(eventGroups).forEach(([eventId, group]) => {
        for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
                links.push({
                    source: group[i],
                    target: group[j],
                    eventId: parseInt(eventId) // Store event ID
                });
            }
        }
    });

    // Convert to D3 array format
    const nodesArray = Object.values(nodes);
    
    // Set initial positions for important nodes
    nodesArray.forEach(node => {
        if (node.id === "Sindberg") {
            // Fix Sindberg node at center
            node.fx = 350;
            node.fy = 250;
        } else if (node.id === "Günther") {
            // Place Günther node on left
            node.x = 250;
            node.y = 200;
        } else if (node.id === "Magee") {
            // Place Magee node on right
            node.x = 450;
            node.y = 200;
        }
    });
    
    // Create SVG
    const width = 700;
    const height = 500;
    
    const svg = d3.select("#relationship-graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    // Create force-directed graph
    const simulation = d3.forceSimulation(nodesArray)
        .force("link", d3.forceLink(links).id(d => d.id).distance(120))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.1))
        .force("y", d3.forceY(height / 2).strength(0.1))
        .force("collision", d3.forceCollide().radius(d => 10 + Math.sqrt(d.count) * 2))
        .alphaDecay(0.01) // Reduce cooling speed
        .alphaTarget(0.3)
        .restart();
        
    // Warm-up simulation for stability
    for (let i = 0; i < 300; i++) {
        simulation.tick();
    }
    
    // Set final cooling target
    simulation.alphaTarget(0);
    
    // Create event info box
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
    
    // Draw links
    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("cursor", "pointer")
        .on("mouseover", function(event, d) {
            d3.select(this).attr("stroke", "#ff6347").attr("stroke-width", 2);
            
            // Show event description
            if (eventDescriptions[d.eventId]) {
                tooltip.html(`<strong>Event ${d.eventId}:</strong><br>${eventDescriptions[d.eventId]}`)
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
            event.stopPropagation(); // Prevent event bubbling
            
            // Show event description
            if (eventDescriptions[d.eventId]) {
                // Create/update fixed info box
                showEventInfo(d.eventId, event.pageX, event.pageY);
            }
        });
    
    // Draw nodes
    const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodesArray)
        .join("circle")
        .attr("r", d => 8 + Math.sqrt(d.count) * 2.5) // Increase node size
        .attr("fill", d => d.id === "Sindberg" ? "#ff6347" : "#1f77b4")
        .attr("cursor", "pointer")
        .call(drag(simulation))
        .on("mouseover", function(event, d) {
            d3.select(this).attr("stroke", "#ff6347").attr("stroke-width", 2);
            
            // Show all events person participated in
            if (d.events && d.events.length > 0) {
                const eventsList = d.events.map(eventId => {
                    return `<li><strong>Event ${eventId}:</strong> ${eventDescriptions[eventId] || "(Event description missing)"}</li>`;
                }).join("");
                
                tooltip.html(`<strong>${d.id}</strong> participated in:<br><ul>${eventsList}</ul>`)
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
            event.stopPropagation(); // Prevent event bubbling
            
            // Show all events person participated in
            if (d.events && d.events.length > 0) {
                // Create/update fixed info box
                showPersonEvents(d, event.pageX, event.pageY);
            }
        });
    
    // Add person names
    const text = svg.append("g")
        .selectAll("text")
        .data(nodesArray)
        .join("text")
        .attr("dx", d => 12) // Increase horizontal offset
        .attr("dy", d => 4)  // Adjust vertical offset
        .text(d => d.id)
        .attr("font-size", d => d.id === "Sindberg" ? "14px" : "12px") // Increase font size, highlight Sindberg
        .attr("font-family", "sans-serif")
        .attr("font-weight", d => d.id === "Sindberg" ? "bold" : "normal") // Bold Sindberg
        .attr("fill", d => d.id === "Sindberg" ? "#d62728" : "#333"); // Adjust text color
    
    // Update force-directed graph
    simulation.on("tick", () => {
        // Add boundary constraints
        nodesArray.forEach(d => {
            // Calculate node radius (based on node size)
            const radius = 8 + Math.sqrt(d.count) * 2.5;
            
            // Limit x coordinate
            d.x = Math.max(radius, Math.min(width - radius, d.x));
            // Limit y coordinate
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
    
    // Function to show event info
    function showEventInfo(eventId, x, y) {
        // Remove existing fixed info box
        d3.select(".fixed-info-box").remove();
        
        // Create new fixed info box
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
        
        // Add event info
        infoBox.append("h3")
            .style("margin-top", "0")
            .style("color", "#8b4513")
            .text(`Event ${eventId}`);
        
        infoBox.append("p")
            .text(eventDescriptions[eventId] || "(Event description missing)");
        
        // Add close button
        infoBox.append("button")
            .attr("class", "close-btn")
            .style("background-color", "#d4b95e")
            .style("border", "none")
            .style("padding", "5px 10px")
            .style("margin-top", "10px")
            .style("cursor", "pointer")
            .style("border-radius", "3px")
            .text("Close")
            .on("click", function() {
                infoBox.remove();
            });
        
        // Close info box when clicking elsewhere
        d3.select("body").on("click.infobox", function(event) {
            if (!infoBox.node().contains(event.target)) {
                infoBox.remove();
                d3.select("body").on("click.infobox", null);
            }
        });
    }
    
    // Function to show events a person participated in
    function showPersonEvents(person, x, y) {
        // Remove existing fixed info box
        d3.select(".fixed-info-box").remove();
        
        // Create new fixed info box
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
        
        // Add person info
        infoBox.append("h3")
            .style("margin-top", "0")
            .style("color", "#8b4513")
            .text(person.id);
        
        // Add event list
        const eventsList = infoBox.append("ul")
            .style("padding-left", "20px")
            .style("margin-bottom", "10px");
        
        person.events.forEach(eventId => {
            eventsList.append("li")
                .style("margin-bottom", "8px")
                .style("cursor", "pointer")
                .style("color", "#1f77b4")
                .text(`Event ${eventId}: ${eventDescriptions[eventId] || "(Event description missing)"}`);
        });
        
        // Add close button
        infoBox.append("button")
            .attr("class", "close-btn")
            .style("background-color", "#d4b95e")
            .style("border", "none")
            .style("padding", "5px 10px")
            .style("margin-top", "10px")
            .style("cursor", "pointer")
            .style("border-radius", "3px")
            .text("Close")
            .on("click", function() {
                infoBox.remove();
            });
        
        // Close info box when clicking elsewhere
        d3.select("body").on("click.infobox", function(event) {
            if (!infoBox.node().contains(event.target)) {
                infoBox.remove();
                d3.select("body").on("click.infobox", null);
            }
        });
    }
    
    // Drag functionality
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
            // Keep node position fixed
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
});