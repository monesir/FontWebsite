css_content = """
/* =========================================
   ZOLITUNE (MUSIC APP) STYLES
   ========================================= */

#app-music {
  background: #000000 !important;
  color: #ffffff;
  overflow: hidden;
  position: relative;
}

.zoli-screen {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000;
}

.zoli-screen.active {
  display: block;
}

.zoli-scroll {
  height: calc(100% - 45px); /* Header height approx */
  padding-bottom: 120px; /* Space for mini player and bottom nav */
}

/* Header */
.zoli-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.zoli-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}
.zoli-header-icons {
  display: flex;
  gap: 15px;
}
.zoli-header-icons i {
  font-size: 1.1rem;
  color: #cccccc;
  background: rgba(255,255,255,0.1);
  padding: 8px;
  border-radius: 50%;
}

/* Search Bar Fake */
.zoli-search-bar {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.1);
  margin: 10px 20px 20px;
  padding: 10px 15px;
  border-radius: 30px;
  color: #888;
  gap: 10px;
}
.zoli-search-bar input {
  background: transparent;
  border: none;
  color: white;
  width: 100%;
  outline: none;
}
.zoli-search-bar.active {
  border: 1px solid #4a00e0;
}

/* Section Title */
.zoli-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 15px;
}
.zoli-section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  padding: 0 20px;
  margin-bottom: 10px;
}
.zoli-section-header .zoli-section-title {
  padding: 0; margin: 0;
}
.zoli-see-all {
  color: #888;
  font-size: 0.8rem;
}

/* Pills */
.zoli-pills {
  display: flex;
  gap: 10px;
  padding: 0 20px;
  overflow-x: auto;
  margin-bottom: 20px;
}
.zoli-pills::-webkit-scrollbar { display: none; }
.zoli-pill {
  padding: 6px 15px;
  border-radius: 20px;
  background: rgba(255,255,255,0.1);
  color: #bbb;
  font-size: 0.85rem;
  white-space: nowrap;
}
.zoli-pill.active {
  background: #3b28cc; /* Purple blue from screenshot */
  color: white;
}

/* Grid */
.zoli-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 0 20px;
  margin-bottom: 25px;
}
.zoli-card {
  border-radius: 12px;
  overflow: hidden;
  background: #111;
  padding-bottom: 10px;
}
.zoli-card-img {
  height: 100px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 12px;
  margin-bottom: 8px;
  border: 1px solid #333;
}
.zoli-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0,0,0,0.6);
  padding: 3px 6px;
  border-radius: 10px;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  gap: 4px;
}
.badge-dot {
  width: 6px; height: 6px;
  background: #00ff88;
  border-radius: 50%;
}
.zoli-card h3 {
  font-size: 0.85rem;
  margin: 0 8px 3px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.zoli-card p {
  font-size: 0.7rem;
  color: #888;
  margin: 0 8px;
}

/* Lists */
.zoli-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
}
.zoli-list-item {
  display: flex;
  align-items: center;
  gap: 15px;
}
.zoli-list-item img {
  width: 50px; height: 50px;
  border-radius: 10px;
  object-fit: cover;
}
.zoli-list-info {
  flex-grow: 1;
}
.zoli-list-info h4 {
  font-size: 0.95rem; margin: 0 0 3px;
}
.zoli-list-info p {
  font-size: 0.75rem; color: #888; margin: 0;
}
.zoli-list-item i {
  color: #666;
  font-size: 1.1rem;
}

/* Artists */
.zoli-artists {
  display: flex;
  gap: 15px;
  padding: 0 20px;
  overflow-x: auto;
}
.zoli-artists::-webkit-scrollbar { display: none; }
.zoli-artists img {
  width: 65px; height: 65px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #222;
}

/* Bottom Container */
.zoli-bottom-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 15px 25px; /* bottom padding for home indicator */
  background: linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
  z-index: 10;
}

/* Mini Player */
.zoli-mini-player {
  background: #111;
  border-radius: 12px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  border: 1px solid #222;
}
.zoli-mini-player img {
  width: 40px; height: 40px;
  border-radius: 8px;
  object-fit: cover;
}
.mini-info {
  flex-grow: 1;
}
.mini-info h4 {
  font-size: 0.85rem; margin: 0 0 2px;
}
.mini-info p {
  font-size: 0.7rem; color: #888; margin: 0;
}
.mini-controls {
  display: flex;
  gap: 15px;
  align-items: center;
  color: white;
}

/* Bottom Nav */
.zoli-bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #111;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #222;
}
.zoli-nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
}
.nav-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3b28cc;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
}
.zoli-nav-item i {
  font-size: 1.1rem;
}

/* Library List */
.zoli-library-list {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.zoli-lib-item {
  display: flex;
  align-items: center;
  gap: 15px;
}
.zoli-lib-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1rem;
}
.zoli-add-btn {
  border: 1px solid white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 5px;
}
.zoli-playlist-card {
  margin: 0 20px;
  height: 120px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}
.zoli-playlist-bg {
  width: 100%; height: 100%;
  object-fit: cover;
}
.zoli-playlist-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-icon {
  font-size: 2rem; color: white;
  border: 2px dashed white;
  padding: 10px;
  border-radius: 50%;
}

/* Player Screen */
.zoli-player-header {
  background: transparent !important;
  color: white !important;
  padding: 10px 20px !important;
}
.zoli-player-artwork-container {
  padding: 20px;
  display: flex;
  justify-content: center;
}
.zoli-player-artwork {
  width: 280px; height: 280px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}
.zoli-player-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  margin-top: 20px;
}
.zoli-player-text h2 {
  margin: 0; font-size: 1.5rem; font-weight: 700;
}
.zoli-player-text p {
  margin: 5px 0 0; color: #aaa; font-size: 0.9rem;
}

/* Progress Thumb */
.progress-thumb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 12px; height: 12px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255,255,255,0.5);
}
.music-progress {
  padding: 0 25px;
}

/* Controls */
.zoli-player-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-top: 40px;
}
.zoli-player-controls i {
  font-size: 1.2rem;
  color: #bbb;
}
.play-btn-large {
  width: 60px; height: 60px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
}

.zoli-player-bottom-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-top: 50px;
  color: #bbb;
}
.lyrics-pill {
  background: rgba(255,255,255,0.1);
  padding: 8px 25px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
}
"""

with open('style.css', 'a', encoding='utf-8') as f:
    f.write(css_content)
