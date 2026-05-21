import os

premium_styles = '''
/* === User Custom Theme Styles === */
.ios-home-screen {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url("/assets/wallpaper.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 55px 18px 15px;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: scale(0.95);
}

.ios-home-screen.active {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.ios-apps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  column-gap: 12px;
  justify-items: center;
  margin-top: 10px;
}

.ios-app-icon-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s;
}
.ios-app-icon-wrapper:active {
  transform: scale(0.9);
}

.ios-app-icon {
  width: 62px;
  height: 62px;
  border-radius: 16px;
  
  /* Deep translucent red base + Glossy gradient overlay */
  background: rgba(75, 10, 15, 0.45);
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.3) 100%);
  
  /* Heavy blur + Saturation boost */
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: #fff;
  
  /* True Glass Edges */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1.5px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  
  /* 3D Depth */
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.4), 
    inset 0 -2px 6px rgba(0, 0, 0, 0.5), 
    0 10px 25px rgba(0, 0, 0, 0.4);
}

.ios-app-name {
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0.2px;
}

.ios-icon-badge {
  position: absolute;
  top: -6px;
  left: -8px; 
  background: #ed342a;
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 6px;
  min-width: 18px;
  text-align: center;
  border-radius: 12px;
  border: 2px solid #1a0406;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  z-index: 5;
}

.ios-search-pill-container {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.ios-search-pill {
  background: rgba(40, 5, 8, 0.4);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 22px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.ios-dock {
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border-radius: 30px;
  padding: 16px 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1.5px solid rgba(255, 255, 255, 0.45);
}

.ios-dock .ios-app-name { display: none; }
.ios-dock .ios-app-icon {
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.3), 
    inset 0 -2px 6px rgba(0, 0, 0, 0.6), 
    0 5px 12px rgba(0, 0, 0, 0.4);
}

.ios-apps-container {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 20;
  pointer-events: none;
}

.ios-app {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: var(--bg-primary, #f2f2f7);
  display: flex;
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: scale(1.1);
}

.ios-app.active {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.iphone-statusbar, .iphone-notch, .iphone-home-bar {
  z-index: 100;
}

.iphone-home-bar {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 5px;
  background: rgba(0,0,0,0.3);
  border-radius: 100px;
  cursor: pointer;
  z-index: 100;
  transition: background 0.3s;
}
.iphone-home-bar:hover {
  background: rgba(0,0,0,0.6);
}
.ios-home-screen.active ~ .iphone-home-bar {
  background: rgba(255,255,255,0.7);
}
.ios-home-screen.active ~ .iphone-home-bar:hover {
  background: rgba(255,255,255,1);
}
.ios-home-screen.active ~ .iphone-statusbar {
  color: white; 
}

.mobile-tpl-content { display: none; }
'''

with open('style.css', 'a', encoding='utf-8') as f:
    f.write('\n' + premium_styles)

print('Premium styles injected cleanly')
