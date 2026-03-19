(function() {
    // 1. Create the Styles
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@900&display=swap');
        #rl-widget-container {
            --rl-red: #ED553B; --rl-blue: #636EF8; --rl-speed: 0.6s; --rl-ease: cubic-bezier(0.19, 1, 0.22, 1);
            width: 100%; max-width: 800px; margin: 10px auto; 
            font-family: 'Noto Sans HK', sans-serif; clear: both;
        }
        #rl-widget-container .chart-container {
            width: 100%; aspect-ratio: 8 / 5; display: grid; 
            grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        #rl-widget-container .column { display: flex; flex-direction: column; height: 100%; gap: 12px; }
        #rl-widget-container .bar {
            position: relative; display: flex; align-items: center; justify-content: center;
            transition: all var(--rl-speed) var(--rl-ease); overflow: hidden;
            container-type: size; padding: 4px; border-radius: 0;
        }
        #rl-widget-container .bar-top { background-color: var(--rl-red); }
        #rl-widget-container .bar-bottom { background-color: var(--rl-blue); }
        #rl-widget-container .col-1 .bar-top { flex: 140; }
        #rl-widget-container .col-1 .bar-bottom { flex: 56; }
        #rl-widget-container .col-2 .bar-top { flex: 151; }
        #rl-widget-container .col-2 .bar-bottom { flex: 45; }
        #rl-widget-container .col-3 .bar-top { flex: 128; }
        #rl-widget-container .col-3 .bar-bottom { flex: 68; }
        @media (hover: hover) { #rl-widget-container .bar:hover { flex: 800 !important; z-index: 10; filter: brightness(1.05); } }
        #rl-widget-container .main-text {
            color: black; font-weight: 900; text-align: center; line-height: 1; 
            font-size: 26cqh; width: 95cqi; display: flex; flex-direction: column; justify-content: center;
        }
        #rl-widget-container .sub-text {
            color: black; font-weight: 900; text-align: center; line-height: 1.1;
            text-transform: uppercase; font-size: clamp(8px, 14cqi, 20px); width: 100%; display: flex; flex-direction: column; align-items: center;
        }
        @container (min-height: 120px) { #rl-widget-container .sub-text { font-size: clamp(10px, 14cqh, 24px); } }
        @media (max-width: 600px) {
            #rl-widget-container .chart-container { aspect-ratio: 3 / 4; min-height: 400px; }
        }
    `;
    document.head.appendChild(style);

    // 2. Create the HTML Structure
    const container = document.getElementById('rl-infographic-embed');
    if (container) {
        container.innerHTML = `
            <div id="rl-widget-container">
                <div class="chart-container">
                    <div class="column col-1">
                        <div class="bar bar-top"><div class="main-text"><span>在</span><span>香</span><span>港</span></div></div>
                        <div class="bar bar-bottom"><div class="sub-text">NUMBERS:</div></div>
                    </div>
                    <div class="column col-2">
                        <div class="bar bar-top"><div class="main-text"><span>性</span><span>暴</span><span>力</span></div></div>
                        <div class="bar bar-bottom"><div class="sub-text"><span>SEXUAL</span><span>VIOLENCE</span></div></div>
                    </div>
                    <div class="column col-3">
                        <div class="bar bar-top"><div class="main-text"><span>數</span><span>字</span><span>：</span></div></div>
                        <div class="bar bar-bottom"><div class="sub-text"><span>IN</span><span>HONG</span><span>KONG</span></div></div>
                    </div>
                </div>
            </div>
        `;
    }
})();
