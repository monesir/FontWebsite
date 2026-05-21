import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove old custom theme blocks we added
css = re.sub(r'/\* === User Custom Theme Styles === \*/.*', '', css, flags=re.DOTALL)

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
  /* Rich, premium opaque burgundy gradient */
  background: linear-gradient(135deg, rgba(118, 29, 34, 0.85), rgba(46, 7, 10, 0.95));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: #fff;
  /* Premium 3D glass bevel */
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.4), 
    inset 0 -2px 6px rgba(0, 0, 0, 0.6), 
    0 8px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-top: 1.5px solid rgba(255, 255, 255, 0.35);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
}

/* App name text */
.ios-app-name {
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0.2px;
}

/* Notification Badges (TOP LEFT like the reference) */
.ios-icon-badge {
  position: absolute;
  top: -6px;
  left: -8px; /* Top Left! */
  background: #ed342a; /* Vibrant Red */
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 6px;
  min-width: 18px;
  text-align: center;
  border-radius: 12px;
  border: 2px solid #1a0406; /* Dark stroke around the badge */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  z-index: 5;
}

/* Search Pill */
.ios-search-pill-container {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.ios-search-pill {
  background: rgba(255, 255, 255, 0.15); /* Frosted white glass */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 22px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse; /* Magnifying glass on the right */
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* iOS Dock (Frosted glass shelf) */
.ios-dock {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.15));
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 30px;
  padding: 16px 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1.5px solid rgba(255, 255, 255, 0.3); /* Shelf highlight */
}

/* Dock icons tweak */
.ios-dock .ios-app-name { display: none; }
.ios-dock .ios-app-icon {
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.3), 
    inset 0 -2px 6px rgba(0, 0, 0, 0.6), 
    0 5px 12px rgba(0, 0, 0, 0.4);
}
'''

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css + '\n' + premium_styles)

# Update index.html to make the search icon align properly
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the search pill in HTML
old_pill = '<div class="ios-search-pill">\n                  بحث <i class="fa-solid fa-magnifying-glass" style="font-size: 10px;"></i>\n                </div>'
new_pill = '<div class="ios-search-pill">\n                  <i class="fa-solid fa-magnifying-glass" style="font-size: 11px; opacity: 0.8;"></i> بحث\n                </div>'
html = html.replace(old_pill, new_pill)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Premium theme applied')
