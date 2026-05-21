import re

# Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# We need to replace the ios-home-screen and icon styles.
# First, let's remove the old specific color icons
css = re.sub(r'\.settings-icon \{.*?\}', '', css)
css = re.sub(r'\.chat-icon \{.*?\}', '', css)
css = re.sub(r'\.social-icon \{.*?\}', '', css)
css = re.sub(r'\.music-icon \{.*?\}', '', css)
css = re.sub(r'\.ios-dock \.phone-icon \{.*?\}', '', css)
css = re.sub(r'\.ios-dock \.safari-icon \{.*?\}', '', css)
css = re.sub(r'\.ios-dock \.camera-icon \{.*?\}', '', css)

# Now, replace the generic ios-app-icon and ios-home-screen
new_styles = '''
/* === User Custom Theme Styles === */
.ios-home-screen {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url("/assets/wallpaper.jpg") center/cover no-repeat;
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

.ios-app-icon-wrapper {
  position: relative;
}

.ios-app-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  /* Deep burgundy gradient matching the user screenshot */
  background: linear-gradient(160deg, #6b1f23, #2d0a0d);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #fff;
  /* Soft inner glow and outer shadow for 3D effect */
  box-shadow: 
    inset 0 1px 1px rgba(255,255,255,0.2), 
    inset 0 -1px 2px rgba(0,0,0,0.8), 
    0 5px 15px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.05);
}

/* Notification Badges */
.ios-icon-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff3b30;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  border: 1.5px solid #2d0a0d; /* Border to separate from icon */
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  z-index: 5;
}

/* Search Pill */
.ios-search-pill-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.ios-search-pill {
  background: rgba(40, 10, 12, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.1);
}

/* iOS Dock */
.ios-dock {
  background: rgba(20, 5, 5, 0.5); /* Darker tinted blur */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid rgba(255,255,255,0.08);
}
.ios-dock .ios-app-icon {
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.8);
}
'''

# Replace the block of old css with the new styles
# It's easier to just append it and let it override, but let's replace the .ios-home-screen block to keep it clean.
css = re.sub(r'\.ios-home-screen \{.*?transform: scale\(0\.95\);\n\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.ios-home-screen\.active \{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.ios-app-icon \{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.ios-dock \{.*?\}', '', css, flags=re.DOTALL)
css += '\n' + new_styles

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)


# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the home screen inner HTML
home_screen_start = html.find('<!-- HOME SCREEN -->')
home_screen_end = html.find('<!-- APPS CONTAINER -->')

new_home_screen = '''<!-- HOME SCREEN -->
            <div class="ios-home-screen active" id="iosHomeScreen">
              <div class="ios-apps-grid">
                <!-- Settings App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('settings')">
                  <div class="ios-icon-badge">2</div>
                  <div class="ios-app-icon">
                    <i class="fa-solid fa-gear"></i>
                  </div>
                  <span class="ios-app-name">الإعدادات</span>
                </div>
                <!-- Chat App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('chat')">
                  <div class="ios-icon-badge">67</div>
                  <div class="ios-app-icon">
                    <i class="fa-brands fa-whatsapp"></i>
                  </div>
                  <span class="ios-app-name">واتساب</span>
                </div>
                <!-- Social App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('social')">
                  <div class="ios-icon-badge">8</div>
                  <div class="ios-app-icon">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                  <span class="ios-app-name">InstaLRD</span>
                </div>
                <!-- Music App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('music')">
                  <div class="ios-app-icon">
                    <i class="fa-brands fa-tiktok"></i>
                  </div>
                  <span class="ios-app-name">DLTikTok</span>
                </div>
              </div>
              
              <div style="flex-grow: 1;"></div>
              
              <!-- Search Pill -->
              <div class="ios-search-pill-container">
                <div class="ios-search-pill">
                  بحث <i class="fa-solid fa-magnifying-glass" style="font-size: 10px;"></i>
                </div>
              </div>

              <!-- iOS Dock -->
              <div class="ios-dock">
                <div class="ios-app-icon-wrapper">
                  <div class="ios-icon-badge">216</div>
                  <div class="ios-app-icon"><i class="fa-solid fa-comment"></i></div>
                </div>
                <div class="ios-app-icon-wrapper">
                  <div class="ios-app-icon"><i class="fa-solid fa-camera"></i></div>
                </div>
                <div class="ios-app-icon-wrapper">
                  <div class="ios-app-icon"><i class="fa-brands fa-safari"></i></div>
                </div>
                <div class="ios-app-icon-wrapper">
                  <div class="ios-icon-badge">4</div>
                  <div class="ios-app-icon"><i class="fa-solid fa-phone"></i></div>
                </div>
              </div>
            </div>

            '''

if home_screen_start != -1 and home_screen_end != -1:
    html = html[:home_screen_start] + new_home_screen + html[home_screen_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Updated theme successfully')
