import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_music_html = """              <!-- Music App Content (Zolitune Premium) -->
              <div class="ios-app" id="app-music" style="background: #000000;">
                
                <!-- PREMIUM HOME SCREEN -->
                <div class="zoli-screen active" id="zoli-home">
                  <!-- Blurry background blob for depth -->
                  <div class="zoli-bg-blob"></div>
                  
                  <div class="zoli-header-premium">
                    <div>
                      <span class="zoli-greeting">Good Evening</span>
                      <h1 class="zoli-logo-premium">Zolitune</h1>
                    </div>
                    <div class="zoli-avatar-header">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="User">
                    </div>
                  </div>
                  
                  <div class="iphone-scroll zoli-scroll-premium">
                    
                    <div class="zoli-chips-container">
                      <span class="zoli-chip active">For You</span>
                      <span class="zoli-chip">Relax</span>
                      <span class="zoli-chip">Workout</span>
                      <span class="zoli-chip">Focus</span>
                    </div>

                    <h2 class="zoli-section-title-premium">Recently Played</h2>
                    <div class="zoli-recent-grid">
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4>Midnight City</h4>
                        </div>
                      </div>
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4>Starboy</h4>
                        </div>
                      </div>
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4>Daily Mix 1</h4>
                        </div>
                      </div>
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5f52814?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4>Chill Vibes</h4>
                        </div>
                      </div>
                    </div>

                    <div class="zoli-section-header-premium">
                      <h2 class="zoli-section-title-premium">Made For You</h2>
                    </div>
                    
                    <div class="zoli-horizontal-scroll">
                      <div class="zoli-featured-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop">
                        <div class="zoli-featured-content">
                          <span class="zoli-tag">New Release</span>
                          <h3>Neon Nights</h3>
                          <p>The Weeknd</p>
                        </div>
                        <div class="zoli-play-circle"><i class="fa-solid fa-play"></i></div>
                      </div>
                      <div class="zoli-featured-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop">
                        <div class="zoli-featured-content">
                          <span class="zoli-tag">Podcast</span>
                          <h3>Deep Design</h3>
                          <p>UI/UX Masters</p>
                        </div>
                        <div class="zoli-play-circle"><i class="fa-solid fa-play"></i></div>
                      </div>
                    </div>

                    <div class="zoli-section-header-premium" style="margin-top: 25px;">
                      <h2 class="zoli-section-title-premium">Trending Top 50</h2>
                    </div>
                    
                    <div class="zoli-track-list">
                      <div class="zoli-track-item" onclick="openZoliScreen('player')">
                        <span class="zoli-track-num">1</span>
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80">
                        <div class="zoli-track-info">
                          <h4>Blinding Lights</h4>
                          <p>The Weeknd</p>
                        </div>
                        <i class="fa-solid fa-ellipsis zoli-track-more"></i>
                      </div>
                      <div class="zoli-track-item" onclick="openZoliScreen('player')">
                        <span class="zoli-track-num">2</span>
                        <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5f52814?w=100&q=80">
                        <div class="zoli-track-info">
                          <h4>As It Was</h4>
                          <p>Harry Styles</p>
                        </div>
                        <i class="fa-solid fa-ellipsis zoli-track-more"></i>
                      </div>
                      <div class="zoli-track-item" onclick="openZoliScreen('player')">
                        <span class="zoli-track-num">3</span>
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&q=80">
                        <div class="zoli-track-info">
                          <h4>Save Your Tears</h4>
                          <p>The Weeknd</p>
                        </div>
                        <i class="fa-solid fa-ellipsis zoli-track-more"></i>
                      </div>
                    </div>
                    
                    <div style="height: 120px;"></div>
                  </div>
                </div>

                <!-- PREMIUM SEARCH/LIBRARY SCREEN -->
                <div class="zoli-screen" id="zoli-search">
                  <div class="zoli-bg-blob" style="left: 60%; top: -10%; background: radial-gradient(circle, rgba(67, 233, 123, 0.4), transparent 60%);"></div>
                  
                  <div class="zoli-header-premium">
                    <h1 class="zoli-logo-premium" style="font-size: 32px;">Search</h1>
                  </div>
                  
                  <div class="iphone-scroll zoli-scroll-premium">
                    
                    <div class="zoli-search-box-premium">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Artists, songs, or podcasts">
                    </div>

                    <h2 class="zoli-section-title-premium" style="margin-top: 30px;">Browse All</h2>
                    <div class="zoli-browse-grid">
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #FF0076, #590FB7);">
                        <h3>Pop</h3>
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&q=80" class="zoli-browse-img">
                      </div>
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #FF8008, #FFC837);">
                        <h3>Hip-Hop</h3>
                        <img src="https://images.unsplash.com/photo-1605664188200-3604f32658b4?w=100&q=80" class="zoli-browse-img">
                      </div>
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #11998E, #38EF7D);">
                        <h3>Rock</h3>
                        <img src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=100&q=80" class="zoli-browse-img">
                      </div>
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #4A00E0, #8E2DE2);">
                        <h3>Electronic</h3>
                        <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=100&q=80" class="zoli-browse-img">
                      </div>
                    </div>
                    
                    <div style="height: 120px;"></div>
                  </div>
                </div>

                <!-- PREMIUM NOW PLAYING SCREEN -->
                <div class="zoli-screen" id="zoli-player">
                  <!-- Blurred album background -->
                  <div class="zoli-player-blur-bg" style="background-image: url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop');"></div>
                  <div class="zoli-player-gradient-overlay"></div>
                  
                  <div class="zoli-player-topbar">
                    <i class="fa-solid fa-chevron-down zoli-player-close" onclick="openZoliScreen('home')"></i>
                    <div class="zoli-player-context">
                      <span>PLAYING FROM PLAYLIST</span>
                      <strong>Neon Nights</strong>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                  
                  <div class="iphone-scroll zoli-player-content">
                    <div class="zoli-artwork-wrapper">
                      <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop" class="zoli-artwork-img">
                    </div>
                    
                    <div class="zoli-player-meta">
                      <div class="zoli-player-titles">
                        <h2>Neon Nights</h2>
                        <p>The Weeknd</p>
                      </div>
                      <i class="fa-regular fa-heart zoli-player-heart"></i>
                    </div>

                    <div class="zoli-progress-premium">
                      <div class="zoli-progress-bar">
                        <div class="zoli-progress-fill" style="width: 35%;"></div>
                      </div>
                      <div class="zoli-progress-times">
                        <span>1:04</span>
                        <span>-2:45</span>
                      </div>
                    </div>

                    <div class="zoli-controls-premium">
                      <i class="fa-solid fa-shuffle"></i>
                      <i class="fa-solid fa-backward-step"></i>
                      <div class="zoli-play-massive"><i class="fa-solid fa-pause"></i></div>
                      <i class="fa-solid fa-forward-step"></i>
                      <i class="fa-solid fa-repeat"></i>
                    </div>

                    <div class="zoli-lyrics-card-premium">
                      <h4>Lyrics</h4>
                      <p>I said, ooh, I'm blinded by the lights<br>No, I can't sleep until I feel your touch...</p>
                    </div>
                  </div>
                </div>

                <!-- PREMIUM MINI PLAYER & GLASS NAV -->
                <div class="zoli-glass-bottom" id="zoliBottomContainer">
                  <!-- Mini Player -->
                  <div class="zoli-mini-player-premium" onclick="openZoliScreen('player')">
                    <div class="zoli-mini-progress"></div>
                    <div class="zoli-mini-content">
                      <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=100&auto=format&fit=crop">
                      <div class="zoli-mini-text">
                        <h4>Neon Nights</h4>
                        <p>The Weeknd</p>
                      </div>
                      <div class="zoli-mini-actions" onclick="event.stopPropagation()">
                        <i class="fa-solid fa-computer"></i>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-play"></i>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Bottom Nav -->
                  <div class="zoli-nav-premium">
                    <div class="zoli-nav-item active" onclick="openZoliScreen('home')">
                      <i class="fa-solid fa-house"></i>
                      <span>Home</span>
                    </div>
                    <div class="zoli-nav-item" onclick="openZoliScreen('search')">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <span>Search</span>
                    </div>
                    <div class="zoli-nav-item" onclick="openZoliScreen('home')">
                      <i class="fa-solid fa-book-open"></i>
                      <span>Library</span>
                    </div>
                    <div class="zoli-nav-item" onclick="closeMobileApp()">
                      <i class="fa-solid fa-arrow-right-from-bracket" style="color: #ff3b30;"></i>
                      <span style="color: #ff3b30;">Exit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> <!-- /ios-apps-container -->"""

start_str = "<!-- Music App Content (Zolitune) -->"
end_str = "</div> <!-- /ios-apps-container -->"

start_idx = html.find(start_str)
end_idx = html.find(end_str)

if start_idx != -1 and end_idx != -1:
    html = html[:start_idx] + new_music_html + html[end_idx + len(end_str):]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("HTML rewrite successful.")
else:
    print("Failed to find exact boundaries.")
