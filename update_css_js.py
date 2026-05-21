import re

# Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add iOS Home Screen styles
new_css = '''
/* === iOS Home Screen === */
.ios-home-screen {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop") center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 20px 20px;
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
  gap: 15px;
  justify-items: center;
}

.ios-app-icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: transform 0.1s;
}
.ios-app-icon-wrapper:active {
  transform: scale(0.9);
}

.ios-app-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.settings-icon { background: linear-gradient(135deg, #d2d2d7, #8e8e93); color: white; }
.chat-icon { background: linear-gradient(135deg, #34c759, #30b04f); color: white; }
.social-icon { background: linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888); color: white; }
.music-icon { background: linear-gradient(135deg, #ff2d55, #ff375f); color: white; }

.ios-dock .phone-icon { background: linear-gradient(135deg, #34c759, #30b04f); color: white; }
.ios-dock .safari-icon { background: linear-gradient(135deg, #007aff, #005bb5); color: white; }
.ios-dock .camera-icon { background: linear-gradient(135deg, #d2d2d7, #8e8e93); color: white; }

.ios-app-name {
  color: white;
  font-size: 11px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0,0,0,0.6);
}

/* iOS Dock */
.ios-dock {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}
.ios-dock .ios-app-name { display: none; }
.ios-dock .ios-app-icon { box-shadow: none; }

/* === iOS Apps Container === */
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
  transform: scale(1.1); /* Zooms in from home screen */
}

.ios-app.active {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

/* Ensure the statusbar and notch and home bar are ABOVE the home screen and apps */
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
/* When home screen is active, home bar should be white */
.ios-home-screen.active ~ .iphone-home-bar {
  background: rgba(255,255,255,0.7);
}
.ios-home-screen.active ~ .iphone-home-bar:hover {
  background: rgba(255,255,255,1);
}
.ios-home-screen.active ~ .iphone-statusbar {
  color: white; /* Status bar text becomes white on dark wallpaper */
}

/* Remove old mobile-tpl-content logic to avoid conflicts */
.mobile-tpl-content { display: none; }

'''

# Append the new css at the end
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css + '\n' + new_css)


# Update script.js
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Add iOS functions
new_js = '''

// === iOS Home Screen Navigation ===
function openMobileApp(appId) {
  // Hide home screen
  document.getElementById('iosHomeScreen').classList.remove('active');
  
  // Hide all apps
  const apps = document.querySelectorAll('.ios-app');
  apps.forEach(app => app.classList.remove('active'));
  
  // Show target app
  const targetApp = document.getElementById('app-' + appId);
  if (targetApp) {
    targetApp.classList.add('active');
  }
}

function closeMobileApp() {
  // Hide all apps
  const apps = document.querySelectorAll('.ios-app');
  apps.forEach(app => app.classList.remove('active'));
  
  // Show home screen
  document.getElementById('iosHomeScreen').classList.add('active');
}

// Intercept existing sidebar buttons to work with new logic
document.addEventListener('DOMContentLoaded', () => {
  const tplButtons = document.querySelectorAll('[data-action="setMobileTemplate"]');
  tplButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Prevent default logic if possible or just piggyback
      const target = btn.getAttribute('data-target');
      if(target) {
        openMobileApp(target);
      }
    });
  });
});
'''

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js + '\n' + new_js)

print('Updated css and js successfully')
