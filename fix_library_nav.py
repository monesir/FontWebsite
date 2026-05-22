import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update the Library button onclick to go to 'library' instead of 'home'
html = html.replace('<div class="zoli-nav-item" onclick="openZoliScreen(\'home\')">\n                      <i class="fa-solid fa-book-open"></i>\n                      <span>Library</span>\n                    </div>',
'<div class="zoli-nav-item" onclick="openZoliScreen(\'library\')">\n                      <i class="fa-solid fa-book-open"></i>\n                      <span>Library</span>\n                    </div>')

# 2. Inject the library screen before the zoli-player screen
library_screen = """
                <!-- LIBRARY SCREEN -->
                <div class="zoli-screen" id="zoli-library">
                  <div class="zoli-header-premium">
                    <div>
                      <h1 class="zoli-logo-premium">Your Library</h1>
                    </div>
                    <div class="zoli-avatar-header">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User">
                    </div>
                  </div>
                  <div class="zoli-scroll-premium">
                    <div class="zoli-chips-container">
                      <div class="zoli-chip active">Playlists</div>
                      <div class="zoli-chip">Artists</div>
                      <div class="zoli-chip">Albums</div>
                      <div class="zoli-chip">Podcasts</div>
                    </div>
                    
                    <div class="zoli-track-list" style="margin-top: 25px;">
                      <div class="zoli-track-item">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop" alt="Liked Songs">
                        <div class="zoli-track-info">
                          <h4>Liked Songs</h4>
                          <p>128 songs</p>
                        </div>
                      </div>
                      <div class="zoli-track-item">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop" alt="Chill Vibes">
                        <div class="zoli-track-info">
                          <h4>Late Night Drive</h4>
                          <p>Playlist • Zolitune</p>
                        </div>
                      </div>
                      <div class="zoli-track-item">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #333; display: flex; align-items: center; justify-content: center; color: #fff;">
                           <i class="fa-solid fa-microphone"></i>
                        </div>
                        <div class="zoli-track-info">
                          <h4>The Weeknd</h4>
                          <p>Artist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
"""

if 'id="zoli-library"' not in html:
    html = html.replace('<!-- PLAYER SCREEN -->', library_screen + '\n                <!-- PLAYER SCREEN -->')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 3. Fix style.css padding for bottom nav
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('padding: 15px 10px 30px;', 'padding: 15px 10px 45px;')
css = css.replace('margin: 0 10px 10px;', 'margin: 0 10px 5px;') # Adjust mini player margin

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# 4. Update script.js to change active class on navigation
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_nav_logic = """
  // Update nav active state
  const navItems = document.querySelectorAll('.zoli-nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('onclick') === `openZoliScreen('${screenId}')`) {
       item.classList.add('active');
    }
  });
"""

if 'navItems.forEach' not in js:
    # insert inside openZoliScreen
    if 'target.classList.add(\'active\');\n  }' in js:
        js = js.replace('target.classList.add(\'active\');\n  }', 'target.classList.add(\'active\');\n  }\n' + new_nav_logic)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Fixed Library screen, Nav active states, and padding.")
