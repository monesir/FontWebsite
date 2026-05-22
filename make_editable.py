import re
import json

html_file = 'index.html'
js_file = 'script.js'

with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

new_app_music = """<div class="ios-app" id="app-music" style="background: #000000;" dir="ltr">
                
                <!-- PREMIUM HOME SCREEN -->
                <div class="zoli-screen active" id="zoli-home">
                  <!-- Blurry background blob for depth -->
                  <div class="zoli-bg-blob"></div>
                  
                  <div class="zoli-header-premium">
                    <div>
                      <span class="zoli-greeting" contenteditable="true" spellcheck="false" data-i18n="music_greeting">Good Evening</span>
                      <h1 class="zoli-logo-premium" contenteditable="true" spellcheck="false" data-i18n="music_logo">Zolitune</h1>
                    </div>
                    <div class="zoli-avatar-header">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="User">
                    </div>
                  </div>
                  
                  <div class="iphone-scroll zoli-scroll-premium">
                    
                    <div class="zoli-chips-container">
                      <span class="zoli-chip active" contenteditable="true" spellcheck="false" data-i18n="music_chip_1">For You</span>
                      <span class="zoli-chip" contenteditable="true" spellcheck="false" data-i18n="music_chip_2">Relax</span>
                      <span class="zoli-chip" contenteditable="true" spellcheck="false" data-i18n="music_chip_3">Workout</span>
                      <span class="zoli-chip" contenteditable="true" spellcheck="false" data-i18n="music_chip_4">Focus</span>
                    </div>

                    <h2 class="zoli-section-title-premium" contenteditable="true" spellcheck="false" data-i18n="music_sec_recent">Recently Played</h2>
                    <div class="zoli-recent-grid">
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4 contenteditable="true" spellcheck="false" data-i18n="music_recent_1">Midnight City</h4>
                        </div>
                      </div>
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4 contenteditable="true" spellcheck="false" data-i18n="music_recent_2">Starboy</h4>
                        </div>
                      </div>
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4 contenteditable="true" spellcheck="false" data-i18n="music_recent_3">Daily Mix 1</h4>
                        </div>
                      </div>
                      <div class="zoli-recent-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop">
                        <div class="zoli-recent-info">
                          <h4 contenteditable="true" spellcheck="false" data-i18n="music_recent_4">Chill Vibes</h4>
                        </div>
                      </div>
                    </div>

                    <div class="zoli-section-header-premium">
                      <h2 class="zoli-section-title-premium" contenteditable="true" spellcheck="false" data-i18n="music_sec_made">Made For You</h2>
                    </div>
                    
                    <div class="zoli-horizontal-scroll">
                      <div class="zoli-featured-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop">
                        <div class="zoli-featured-content">
                          <span class="zoli-tag" contenteditable="true" spellcheck="false" data-i18n="music_tag_1">New Release</span>
                          <h3 contenteditable="true" spellcheck="false" data-i18n="music_made_title_1">Neon Nights</h3>
                          <p contenteditable="true" spellcheck="false" data-i18n="music_made_artist_1">The Weeknd</p>
                        </div>
                        <div class="zoli-play-circle"><i class="fa-solid fa-play"></i></div>
                      </div>
                      <div class="zoli-featured-card" onclick="openZoliScreen('player')">
                        <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop">
                        <div class="zoli-featured-content">
                          <span class="zoli-tag" contenteditable="true" spellcheck="false" data-i18n="music_tag_2">Podcast</span>
                          <h3 contenteditable="true" spellcheck="false" data-i18n="music_made_title_2">Deep Design</h3>
                          <p contenteditable="true" spellcheck="false" data-i18n="music_made_artist_2">UI/UX Masters</p>
                        </div>
                        <div class="zoli-play-circle"><i class="fa-solid fa-play"></i></div>
                      </div>
                    </div>

                    <div class="zoli-section-header-premium" style="margin-top: 25px;">
                      <h2 class="zoli-section-title-premium" contenteditable="true" spellcheck="false" data-i18n="music_sec_trend">Trending Top 50</h2>
                    </div>
                    
                    <div class="zoli-track-list">
                      <div class="zoli-track-item" onclick="openZoliScreen('player')">
                        <span class="zoli-track-num">1</span>
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80">
                        <div class="zoli-track-info">
                          <h4 contenteditable="true" spellcheck="false" data-i18n="music_trend_title_1">Blinding Lights</h4>
                          <p contenteditable="true" spellcheck="false" data-i18n="music_trend_artist_1">The Weeknd</p>
                        </div>
                        <i class="fa-solid fa-ellipsis zoli-track-more"></i>
                      </div>
                      <div class="zoli-track-item" onclick="openZoliScreen('player')">
                        <span class="zoli-track-num">2</span>
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&q=80">
                        <div class="zoli-track-info">
                          <h4 contenteditable="true" spellcheck="false" data-i18n="music_trend_title_2">As It Was</h4>
                          <p contenteditable="true" spellcheck="false" data-i18n="music_trend_artist_2">Harry Styles</p>
                        </div>
                        <i class="fa-solid fa-ellipsis zoli-track-more"></i>
                      </div>
                      <div class="zoli-track-item" onclick="openZoliScreen('player')">
                        <span class="zoli-track-num">3</span>
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&q=80">
                        <div class="zoli-track-info">
                          <h4 contenteditable="true" spellcheck="false" data-i18n="music_trend_title_3">Save Your Tears</h4>
                          <p contenteditable="true" spellcheck="false" data-i18n="music_trend_artist_3">The Weeknd</p>
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
                    <h1 class="zoli-logo-premium" style="font-size: 32px;" contenteditable="true" spellcheck="false" data-i18n="music_search_title">Search</h1>
                  </div>
                  
                  <div class="iphone-scroll zoli-scroll-premium">
                    
                    <div class="zoli-search-box-premium">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Artists, songs, or podcasts" data-i18n-placeholder="music_search_placeholder">
                    </div>

                    <h2 class="zoli-section-title-premium" style="margin-top: 30px;" contenteditable="true" spellcheck="false" data-i18n="music_sec_browse">Browse All</h2>
                    <div class="zoli-browse-grid">
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #FF0076, #590FB7);">
                        <h3 contenteditable="true" spellcheck="false" data-i18n="music_browse_1">Pop</h3>
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&q=80" class="zoli-browse-img">
                      </div>
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #FF8008, #FFC837);">
                        <h3 contenteditable="true" spellcheck="false" data-i18n="music_browse_2">Hip-Hop</h3>
                        <img src="https://images.unsplash.com/photo-1605664188200-3604f32658b4?w=100&q=80" class="zoli-browse-img">
                      </div>
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #11998E, #38EF7D);">
                        <h3 contenteditable="true" spellcheck="false" data-i18n="music_browse_3">Rock</h3>
                        <img src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=100&q=80" class="zoli-browse-img">
                      </div>
                      <div class="zoli-browse-card" style="background: linear-gradient(135deg, #4A00E0, #8E2DE2);">
                        <h3 contenteditable="true" spellcheck="false" data-i18n="music_browse_4">Electronic</h3>
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
                      <span contenteditable="true" spellcheck="false" data-i18n="music_player_context">PLAYING FROM PLAYLIST</span>
                      <strong contenteditable="true" spellcheck="false" data-i18n="music_player_context_strong">Neon Nights</strong>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                  
                  <div class="iphone-scroll zoli-player-content">
                    <div class="zoli-artwork-wrapper">
                      <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop" class="zoli-artwork-img">
                    </div>
                    
                    <div class="zoli-player-meta">
                      <div class="zoli-player-titles">
                        <h2 contenteditable="true" spellcheck="false" data-i18n="music_player_title">Neon Nights</h2>
                        <p contenteditable="true" spellcheck="false" data-i18n="music_player_artist">The Weeknd</p>
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
                      <h4 contenteditable="true" spellcheck="false" data-i18n="music_lyrics_title">Lyrics</h4>
                      <p contenteditable="true" spellcheck="false" data-i18n-html="music_lyrics_text">I said, ooh, I'm blinded by the lights<br>No, I can't sleep until I feel your touch...</p>
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
                        <h4 contenteditable="true" spellcheck="false" data-i18n="music_mini_title">Neon Nights</h4>
                        <p contenteditable="true" spellcheck="false" data-i18n="music_mini_artist">The Weeknd</p>
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
                      <span contenteditable="true" spellcheck="false" data-i18n="music_nav_home">Home</span>
                    </div>
                    <div class="zoli-nav-item" onclick="openZoliScreen('search')">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <span contenteditable="true" spellcheck="false" data-i18n="music_nav_search">Search</span>
                    </div>
                    <div class="zoli-nav-item" onclick="openZoliScreen('library')">
                      <i class="fa-solid fa-book-open"></i>
                      <span contenteditable="true" spellcheck="false" data-i18n="music_nav_library">Library</span>
                    </div>
                    <div class="zoli-nav-item" onclick="closeMobileApp()">
                      <i class="fa-solid fa-arrow-right-from-bracket" style="color: #ff3b30;"></i>
                      <span style="color: #ff3b30;" contenteditable="true" spellcheck="false" data-i18n="music_nav_exit">Exit</span>
                    </div>
                  </div>
                </div>
              </div>"""

start_tag = '<div class="ios-app" id="app-music" style="background: #000000;" dir="ltr">'
end_tag = '</div> <!-- /ios-apps-container -->'
start_idx = html.find(start_tag)
end_idx = html.find(end_tag, start_idx)

if start_idx != -1 and end_idx != -1:
    new_html = html[:start_idx] + new_app_music + '\\n            ' + html[end_idx:]
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("HTML updated successfully!")
else:
    print("Could not find boundaries in HTML!")

# Update JS Translations
with open(js_file, 'r', encoding='utf-8') as f:
    js = f.read()

en_trans = """    music_greeting: "Good Evening",
    music_logo: "Zolitune",
    music_chip_1: "For You",
    music_chip_2: "Relax",
    music_chip_3: "Workout",
    music_chip_4: "Focus",
    music_sec_recent: "Recently Played",
    music_recent_1: "Midnight City",
    music_recent_2: "Starboy",
    music_recent_3: "Daily Mix 1",
    music_recent_4: "Chill Vibes",
    music_sec_made: "Made For You",
    music_tag_1: "New Release",
    music_made_title_1: "Neon Nights",
    music_made_artist_1: "The Weeknd",
    music_tag_2: "Podcast",
    music_made_title_2: "Deep Design",
    music_made_artist_2: "UI/UX Masters",
    music_sec_trend: "Trending Top 50",
    music_trend_title_1: "Blinding Lights",
    music_trend_artist_1: "The Weeknd",
    music_trend_title_2: "As It Was",
    music_trend_artist_2: "Harry Styles",
    music_trend_title_3: "Save Your Tears",
    music_trend_artist_3: "The Weeknd",
    music_search_title: "Search",
    music_search_placeholder: "Artists, songs, or podcasts",
    music_sec_browse: "Browse All",
    music_browse_1: "Pop",
    music_browse_2: "Hip-Hop",
    music_browse_3: "Rock",
    music_browse_4: "Electronic",
    music_player_context: "PLAYING FROM PLAYLIST",
    music_player_context_strong: "Neon Nights",
    music_player_title: "Neon Nights",
    music_player_artist: "The Weeknd",
    music_lyrics_title: "Lyrics",
    music_lyrics_text: "I said, ooh, I'm blinded by the lights<br>No, I can't sleep until I feel your touch...",
    music_mini_title: "Neon Nights",
    music_mini_artist: "The Weeknd",
    music_nav_home: "Home",
    music_nav_search: "Search",
    music_nav_library: "Library",
    music_nav_exit: "Exit",
"""

ar_trans = """    music_greeting: "مساء الخير",
    music_logo: "زوليتيون",
    music_chip_1: "لك",
    music_chip_2: "استرخاء",
    music_chip_3: "تمرين",
    music_chip_4: "تركيز",
    music_sec_recent: "تم تشغيله مؤخراً",
    music_recent_1: "مدينة منتصف الليل",
    music_recent_2: "ستاربوي",
    music_recent_3: "ميكس يومي ١",
    music_recent_4: "أجواء هادئة",
    music_sec_made: "مصمم لك",
    music_tag_1: "إصدار جديد",
    music_made_title_1: "ليالي النيون",
    music_made_artist_1: "ذا ويكند",
    music_tag_2: "بودكاست",
    music_made_title_2: "التصميم العميق",
    music_made_artist_2: "خبراء واجهة المستخدم",
    music_sec_trend: "أفضل ٥٠",
    music_trend_title_1: "أضواء عمياء",
    music_trend_artist_1: "ذا ويكند",
    music_trend_title_2: "كما كان",
    music_trend_artist_2: "هاري ستايلز",
    music_trend_title_3: "وفر دموعك",
    music_trend_artist_3: "ذا ويكند",
    music_search_title: "البحث",
    music_search_placeholder: "فنانين، أغاني، أو بودكاست",
    music_sec_browse: "تصفح الكل",
    music_browse_1: "بوب",
    music_browse_2: "هيب هوب",
    music_browse_3: "روك",
    music_browse_4: "إلكتروني",
    music_player_context: "يتم التشغيل من قائمة",
    music_player_context_strong: "ليالي النيون",
    music_player_title: "ليالي النيون",
    music_player_artist: "ذا ويكند",
    music_lyrics_title: "الكلمات",
    music_lyrics_text: "قلت، أوه، أنا أعمى بالأضواء<br>لا، لا أستطيع النوم حتى أشعر بلمستك...",
    music_mini_title: "ليالي النيون",
    music_mini_artist: "ذا ويكند",
    music_nav_home: "الرئيسية",
    music_nav_search: "بحث",
    music_nav_library: "المكتبة",
    music_nav_exit: "خروج",
"""

# Insert EN
en_anchor = "mobile_social_1: \"مجد الدين\","
if en_anchor in js and "music_greeting" not in js:
    js = js.replace(en_anchor, en_anchor + "\\n" + en_trans)

# Insert AR
ar_anchor = "mobile_social_1: \"مجد الدين\","
# Wait, AR and EN might have different mobile_social_1 or the same?
# Let's check using regex to safely insert at the end of each object

en_start = js.find('en: {')
ar_start = js.find('ar: {')

if en_start != -1 and ar_start != -1:
    # Find the end of 'en' object
    # Just insert before the closing brace of 'en'
    
    # We will just insert right after notion_rail_link_6 for both as it's the last key usually
    # Actually wait, let's just insert before the first '  },' after en_start
    def insert_before_closing_brace(text, start_index, insertion):
        end_brace = text.find('}', start_index)
        if end_brace != -1:
            # check if there's a comma before it, if not, we need to add one?
            # It's safer to just replace a known key like notion_rail_link_6: "Team settings" -> notion_rail_link_6: "Team settings", \n new_keys
            pass
    
    # Let's just do a simple replace on notion_rail_link_6
    if 'notion_rail_link_6: "Team settings"' in js:
        js = js.replace('notion_rail_link_6: "Team settings"', 'notion_rail_link_6: "Team settings",\\n' + en_trans)
        # However AR translation has notion_rail_link_6: "إعدادات الفريق"
    if 'notion_rail_link_6: "إعدادات الفريق"' in js:
        js = js.replace('notion_rail_link_6: "إعدادات الفريق"', 'notion_rail_link_6: "إعدادات الفريق",\\n' + ar_trans)

with open(js_file, 'w', encoding='utf-8') as f:
    f.write(js)
print("JS updated successfully!")
