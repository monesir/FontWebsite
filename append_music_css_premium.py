import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove old Zolitune CSS if exists
start_comment = "/* =========================================\n   ZOLITUNE (MUSIC APP) STYLES"
end_comment = "/* =========================================\n   END OF ZOLITUNE STYLES"

if start_comment in css:
    start_idx = css.find(start_comment)
    # find the end of the block
    end_idx = css.find(end_comment, start_idx)
    if end_idx != -1:
        css = css[:start_idx] + css[end_idx + len(end_comment) + 40:] # +40 to cover the dashes

premium_css = """
/* =========================================
   ZOLITUNE PREMIUM (MUSIC APP) STYLES
   ========================================= */

#app-music {
  background: #000000 !important;
  color: #ffffff;
  overflow: hidden;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Base Screen */
.zoli-screen {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000;
  z-index: 1;
}
.zoli-screen.active {
  display: block;
}

/* Background Blob for Depth */
.zoli-bg-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(142, 45, 226, 0.3), transparent 60%);
  top: -50px;
  left: -50px;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
  pointer-events: none;
}

/* Headers */
.zoli-header-premium {
  position: relative;
  z-index: 10;
  padding: 50px 24px 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.zoli-greeting {
  font-size: 13px;
  color: #a0a0a0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.zoli-logo-premium {
  font-size: 28px;
  font-weight: 800;
  margin: 4px 0 0;
  background: linear-gradient(to right, #ffffff, #b3b3b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.zoli-avatar-header img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

/* Scroll Area */
.zoli-scroll-premium {
  height: calc(100% - 100px);
  overflow-y: auto;
  position: relative;
  z-index: 10;
  padding: 0 24px 120px;
}
.zoli-scroll-premium::-webkit-scrollbar { display: none; }

/* Chips */
.zoli-chips-container {
  display: flex;
  gap: 12px;
  margin-top: 15px;
  overflow-x: auto;
  padding-bottom: 5px;
}
.zoli-chips-container::-webkit-scrollbar { display: none; }
.zoli-chip {
  background: rgba(255, 255, 255, 0.08);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #e0e0e0;
  white-space: nowrap;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}
.zoli-chip.active {
  background: #ffffff;
  color: #000000;
  font-weight: 600;
}

/* Section Titles */
.zoli-section-header-premium {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 15px;
}
.zoli-section-title-premium {
  font-size: 20px;
  font-weight: 700;
  margin: 25px 0 15px;
  color: #ffffff;
}

/* Recent Grid (Spotify style 2-col) */
.zoli-recent-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.zoli-recent-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: background 0.2s;
  cursor: pointer;
}
.zoli-recent-card:active {
  background: rgba(255, 255, 255, 0.15);
}
.zoli-recent-card img {
  width: 55px;
  height: 55px;
  object-fit: cover;
  box-shadow: 2px 0 8px rgba(0,0,0,0.3);
}
.zoli-recent-info {
  padding: 0 10px;
}
.zoli-recent-info h4 {
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Horizontal Featured Cards (Apple Music Style) */
.zoli-horizontal-scroll {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 20px;
  margin: 0 -24px;
  padding: 0 24px 20px;
}
.zoli-horizontal-scroll::-webkit-scrollbar { display: none; }
.zoli-featured-card {
  min-width: 280px;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  cursor: pointer;
}
.zoli-featured-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
.zoli-featured-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
}
.zoli-tag {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #a0a0a0;
  font-weight: 600;
}
.zoli-featured-content h3 {
  font-size: 22px;
  font-weight: 800;
  margin: 5px 0 2px;
}
.zoli-featured-content p {
  font-size: 14px;
  color: #ccc;
  margin: 0;
}
.zoli-play-circle {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
}

/* Track List */
.zoli-track-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.zoli-track-item {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}
.zoli-track-num {
  font-size: 14px;
  font-weight: 600;
  color: #888;
  width: 15px;
}
.zoli-track-item img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
.zoli-track-info {
  flex-grow: 1;
}
.zoli-track-info h4 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px;
}
.zoli-track-info p {
  font-size: 13px;
  color: #888;
  margin: 0;
}
.zoli-track-more {
  color: #888;
  font-size: 18px;
}

/* Glass Bottom Nav + Mini Player Wrapper */
.zoli-glass-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

/* Mini Player Premium */
.zoli-mini-player-premium {
  margin: 0 10px 10px;
  background: rgba(40, 40, 40, 0.7);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-radius: 12px;
  padding: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.05);
  cursor: pointer;
}
.zoli-mini-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: rgba(255,255,255,0.2);
  width: 100%;
}
.zoli-mini-progress::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 35%;
  background: #fff;
  border-radius: 2px;
}
.zoli-mini-content {
  display: flex;
  align-items: center;
  gap: 12px;
}
.zoli-mini-content img {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
.zoli-mini-text {
  flex-grow: 1;
}
.zoli-mini-text h4 {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}
.zoli-mini-text p {
  font-size: 12px;
  color: #aaa;
  margin: 0;
}
.zoli-mini-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-right: 8px;
}
.zoli-mini-actions i {
  font-size: 18px;
  color: #fff;
}

/* Glass Bottom Nav */
.zoli-nav-premium {
  display: flex;
  justify-content: space-around;
  padding: 15px 10px 30px;
  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: saturate(180%) blur(30px);
  -webkit-backdrop-filter: saturate(180%) blur(30px);
  border-top: 1px solid rgba(255,255,255,0.05);
}
.zoli-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #888;
  cursor: pointer;
  transition: color 0.2s;
}
.zoli-nav-item.active {
  color: #fff;
}
.zoli-nav-item i {
  font-size: 22px;
}
.zoli-nav-item span {
  font-size: 10px;
  font-weight: 500;
}

/* SEARCH SCREEN */
.zoli-search-box-premium {
  background: #242424;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-top: 15px;
}
.zoli-search-box-premium i {
  color: #000;
  font-size: 18px;
}
.zoli-search-box-premium input {
  background: transparent;
  border: none;
  outline: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  width: 100%;
}
.zoli-search-box-premium {
  background: #ffffff;
}

/* Browse Grid */
.zoli-browse-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.zoli-browse-card {
  border-radius: 12px;
  padding: 15px;
  height: 100px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.zoli-browse-card h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  position: relative;
  z-index: 2;
}
.zoli-browse-img {
  position: absolute;
  right: -15px;
  bottom: -10px;
  width: 70px;
  height: 70px;
  transform: rotate(25deg);
  border-radius: 8px;
  box-shadow: -5px 5px 15px rgba(0,0,0,0.3);
}

/* NOW PLAYING SCREEN */
.zoli-player-blur-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(60px) saturate(200%);
  transform: scale(1.2);
  z-index: 0;
}
.zoli-player-gradient-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%);
  z-index: 1;
}
.zoli-player-topbar {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 24px 10px;
}
.zoli-player-close {
  font-size: 22px;
  cursor: pointer;
  padding: 10px;
  margin-left: -10px;
}
.zoli-player-context {
  text-align: center;
}
.zoli-player-context span {
  display: block;
  font-size: 10px;
  letter-spacing: 1px;
  color: #ccc;
  font-weight: 600;
}
.zoli-player-context strong {
  font-size: 12px;
  font-weight: 700;
}

.zoli-player-content {
  position: relative;
  z-index: 10;
  padding: 20px 24px 100px;
  height: calc(100% - 90px);
}
.zoli-artwork-wrapper {
  margin: 30px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  aspect-ratio: 1/1;
}
.zoli-artwork-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.zoli-player-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.zoli-player-titles h2 {
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 5px;
}
.zoli-player-titles p {
  font-size: 16px;
  color: #b3b3b3;
  margin: 0;
}
.zoli-player-heart {
  font-size: 24px;
  color: #fff;
}

/* Premium Progress */
.zoli-progress-premium {
  margin-bottom: 30px;
}
.zoli-progress-bar {
  height: 4px;
  background: rgba(255,255,255,0.2);
  border-radius: 2px;
  position: relative;
}
.zoli-progress-fill {
  height: 100%;
  background: #fff;
  border-radius: 2px;
  position: relative;
}
.zoli-progress-fill::after {
  content: '';
  position: absolute;
  right: -4px;
  top: -4px;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}
.zoli-progress-times {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 12px;
  color: #a0a0a0;
  font-weight: 500;
}

/* Controls */
.zoli-controls-premium {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.zoli-controls-premium i {
  font-size: 22px;
  color: #fff;
}
.zoli-controls-premium i.fa-shuffle, .zoli-controls-premium i.fa-repeat {
  color: #888;
  font-size: 18px;
}
.zoli-play-massive {
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
.zoli-play-massive i {
  color: #000;
  font-size: 28px;
}

/* Lyrics Card */
.zoli-lyrics-card-premium {
  background: rgba(142, 45, 226, 0.2);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(20px);
}
.zoli-lyrics-card-premium h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 10px;
}
.zoli-lyrics-card-premium p {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  color: #fff;
}

/* =========================================
   END OF ZOLITUNE PREMIUM STYLES
   ========================================= */
"""

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css + "\n\n" + premium_css)

print("Premium CSS appended successfully.")
