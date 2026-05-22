import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Change DLTiktok icon to Zolitune
old_icon_block = '''                <!-- Music App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('music')">
                  <div class="ios-app-icon">
                    <i class="fa-brands fa-tiktok"></i>
                  </div>
                  <span class="ios-app-name">DLTikTok</span>
                </div>'''

new_icon_block = '''                <!-- Music App Icon (Zolitune) -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('music')">
                  <div class="ios-app-icon" style="background: linear-gradient(135deg, #1db954, #000000);">
                    <i class="fa-solid fa-music"></i>
                  </div>
                  <span class="ios-app-name">Zolitune</span>
                </div>'''

if old_icon_block in html:
    html = html.replace(old_icon_block, new_icon_block)
else:
    print("Warning: Could not find DLTiktok icon block.")

# 2. Replace the entire #app-music container
# We will use regex to find <div class="ios-app" id="app-music"> and everything up to the next </div> <!-- /ios-apps-container -->
# Since regex across huge blocks can be risky, we will use string manipulation

start_marker = '              <!-- Music App Content -->'
end_marker = '            </div> <!-- /ios-apps-container -->'

start_idx = html.find(start_marker)
end_idx = html.find(end_marker)

new_app_music = '''              <!-- Music App Content (Zolitune) -->
              <div class="ios-app" id="app-music" style="background: #000000;">
                
                <!-- HOME SCREEN -->
                <div class="zoli-screen active" id="zoli-home">
                  <div class="zoli-header" style="margin-top: 45px;">
                    <h1 class="zoli-logo">Zolitune</h1>
                    <div class="zoli-header-icons">
                      <i class="fa-solid fa-music"></i>
                      <i class="fa-regular fa-bell"></i>
                      <i class="fa-solid fa-gear"></i>
                    </div>
                  </div>
                  <div class="iphone-scroll zoli-scroll">
                    <!-- Search Bar fake -->
                    <div class="zoli-search-bar" onclick="openZoliScreen('search')">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <span>Search Music</span>
                    </div>

                    <h2 class="zoli-section-title">Popular now</h2>
                    <div class="zoli-pills">
                      <span class="zoli-pill active">All</span>
                      <span class="zoli-pill">Rock</span>
                      <span class="zoli-pill">Pop</span>
                      <span class="zoli-pill">Hindi</span>
                    </div>

                    <div class="zoli-grid">
                      <div class="zoli-card">
                        <div class="zoli-card-img" style="background-image: url('https://images.unsplash.com/photo-1493225457124-a1a2a5f52814?q=80&w=300&auto=format&fit=crop');">
                          <span class="zoli-badge"><span class="badge-dot"></span> 32.7m</span>
                        </div>
                        <h3>Thats Not You</h3>
                        <p>Proxima Rock Band</p>
                      </div>
                      <div class="zoli-card">
                        <div class="zoli-card-img" style="background-image: url('https://images.unsplash.com/photo-1516280440503-62f929314412?q=80&w=300&auto=format&fit=crop');">
                          <span class="zoli-badge"><span class="badge-dot"></span> 15.2m</span>
                        </div>
                        <h3>I Can Breathe</h3>
                        <p>Duff Mockgan's Song</p>
                      </div>
                      <div class="zoli-card">
                        <div class="zoli-card-img" style="background-image: url('https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=300&auto=format&fit=crop');">
                          <span class="zoli-badge"><span class="badge-dot"></span> 22m</span>
                        </div>
                        <h3>The Looming</h3>
                        <p>Live Performance</p>
                      </div>
                      <div class="zoli-card">
                        <div class="zoli-card-img" style="background-image: url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop');">
                          <span class="zoli-badge"><span class="badge-dot"></span> 11.9m</span>
                        </div>
                        <h3>Sean Paul</h3>
                        <p>Electric Castle Festival</p>
                      </div>
                    </div>

                    <div class="zoli-section-header">
                      <h2 class="zoli-section-title">Top Musics</h2>
                      <span class="zoli-see-all">See All</span>
                    </div>
                    
                    <div class="zoli-list">
                      <div class="zoli-list-item" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=100&q=80" alt="Reason">
                        <div class="zoli-list-info">
                          <h4>Reason</h4>
                          <p>Omah Lay</p>
                        </div>
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                      <div class="zoli-list-item" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&q=80" alt="On My Way">
                        <div class="zoli-list-info">
                          <h4>On My Way</h4>
                          <p>Alan Walker</p>
                        </div>
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </div>

                    <div class="zoli-section-header" style="margin-top: 15px;">
                      <h2 class="zoli-section-title">Top Artists</h2>
                      <span class="zoli-see-all">See All</span>
                    </div>
                    <div class="zoli-artists">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80">
                      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80">
                      <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80">
                    </div>
                    <div style="height: 100px;"></div>
                  </div>
                </div>

                <!-- SEARCH/LIBRARY SCREEN -->
                <div class="zoli-screen" id="zoli-search">
                  <div class="zoli-header" style="margin-top: 45px;">
                    <h1 class="zoli-logo">Library</h1>
                    <div class="zoli-header-icons">
                      <i class="fa-solid fa-music"></i>
                      <i class="fa-regular fa-bell"></i>
                      <i class="fa-solid fa-gear"></i>
                    </div>
                  </div>
                  <div class="iphone-scroll zoli-scroll">
                    <div class="zoli-search-bar active">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Search Music" class="zoli-search-input">
                    </div>

                    <div class="zoli-pills" style="margin-top:20px;">
                      <span class="zoli-pill active">Recent</span>
                      <span class="zoli-pill">Albums</span>
                      <span class="zoli-pill">Artists</span>
                      <span class="zoli-pill">Likes</span>
                    </div>

                    <div class="zoli-library-list" style="margin-top:20px;">
                      <div class="zoli-lib-item">
                        <div class="zoli-lib-icon" style="background: linear-gradient(135deg, #ff7eb3, #ff758c);"><i class="fa-solid fa-heart"></i></div>
                        <span>My Favourite Songs</span>
                      </div>
                      <div class="zoli-lib-item">
                        <div class="zoli-lib-icon" style="background: linear-gradient(135deg, #4facfe, #00f2fe);"><i class="fa-solid fa-download"></i></div>
                        <span>Downloads & Local Music</span>
                      </div>
                      <div class="zoli-lib-item">
                        <div class="zoli-lib-icon" style="background: linear-gradient(135deg, #43e97b, #38f9d7);"><i class="fa-solid fa-podcast"></i></div>
                        <span>My Podcasts</span>
                      </div>
                    </div>

                    <div class="zoli-section-header" style="margin-top: 30px;">
                      <h2 class="zoli-section-title"><i class="fa-solid fa-list-ul"></i> Playlist</h2>
                      <span class="zoli-add-btn"><i class="fa-solid fa-plus"></i> Add New</span>
                    </div>

                    <div class="zoli-playlist-card" onclick="openZoliScreen('player')">
                      <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop" class="zoli-playlist-bg">
                      <div class="zoli-playlist-overlay">
                        <i class="fa-solid fa-plus add-icon"></i>
                      </div>
                    </div>
                    <div style="height: 100px;"></div>
                  </div>
                </div>

                <!-- NOW PLAYING SCREEN -->
                <div class="zoli-screen" id="zoli-player">
                  <div class="iphone-app-header zoli-player-header" style="margin-top: 45px;">
                    <i class="fa-solid fa-chevron-down" onclick="openZoliScreen('home')"></i>
                    <div class="now-playing-title">Top playlist</div>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                  <div class="iphone-scroll zoli-scroll">
                    <div class="zoli-player-artwork-container">
                      <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop" class="zoli-player-artwork">
                    </div>
                    
                    <div class="zoli-player-info">
                      <div class="zoli-player-text">
                        <h2>Derniere Danse</h2>
                        <p>New york</p>
                      </div>
                    </div>

                    <div class="music-progress" style="margin-top: 30px;">
                      <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: 25%; background-color: #fff;"></div>
                        <div class="progress-thumb" style="left: 25%;"></div>
                      </div>
                      <div class="progress-time">
                        <span>00:20</span>
                        <span>03:20</span>
                      </div>
                    </div>

                    <div class="zoli-player-controls">
                      <i class="fa-solid fa-shuffle"></i>
                      <i class="fa-solid fa-backward-step"></i>
                      <div class="play-btn-large"><i class="fa-solid fa-pause"></i></div>
                      <i class="fa-solid fa-forward-step"></i>
                      <i class="fa-regular fa-heart"></i>
                    </div>

                    <div class="zoli-player-bottom-actions">
                      <i class="fa-solid fa-laptop-medical"></i>
                      <div class="lyrics-pill">Lyrics</div>
                      <i class="fa-solid fa-list-ul"></i>
                    </div>
                  </div>
                </div>

                <!-- MINI PLAYER & BOTTOM NAV -->
                <div class="zoli-bottom-container" id="zoliBottomContainer">
                  <!-- Mini Player -->
                  <div class="zoli-mini-player" onclick="openZoliScreen('player')">
                    <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=100&auto=format&fit=crop">
                    <div class="mini-info">
                      <h4>City Boys</h4>
                      <p>Burna Boy</p>
                    </div>
                    <div class="mini-controls" onclick="event.stopPropagation()">
                      <i class="fa-solid fa-backward-step"></i>
                      <i class="fa-solid fa-play"></i>
                      <i class="fa-solid fa-forward-step"></i>
                    </div>
                  </div>
                  
                  <!-- Bottom Nav -->
                  <div class="zoli-bottom-nav">
                    <div class="zoli-nav-item active" onclick="openZoliScreen('home')">
                      <div class="nav-pill" id="nav-home-pill"><i class="fa-solid fa-house"></i> <span>Home</span></div>
                    </div>
                    <div class="zoli-nav-item" onclick="openZoliScreen('search')">
                      <div class="nav-pill" id="nav-search-pill" style="background: transparent; color: #888;"><i class="fa-solid fa-magnifying-glass"></i> <span style="display:none;">Library</span></div>
                    </div>
                    <div class="zoli-nav-item" onclick="openZoliScreen('home')">
                      <div class="nav-pill" style="background: transparent; color: #888;"><i class="fa-regular fa-compass"></i></div>
                    </div>
                    <div class="zoli-nav-item" onclick="closeMobileApp()">
                      <div class="nav-pill" style="background: transparent; color: #888;"><i class="fa-solid fa-layer-group"></i></div>
                    </div>
                  </div>
                </div>

              </div>
\n'''

if start_idx != -1 and end_idx != -1:
    html = html[:start_idx] + new_app_music + html[end_idx:]
else:
    print("Warning: Could not find music app block.")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
