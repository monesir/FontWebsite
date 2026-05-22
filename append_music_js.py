js_content = """

// ==========================================
// ZOLITUNE (MUSIC APP) INTERNAL NAVIGATION
// ==========================================

function openZoliScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.zoli-screen');
  screens.forEach(s => s.classList.remove('active'));

  // Show requested screen
  const target = document.getElementById('zoli-' + screenId);
  if(target) {
    target.classList.add('active');
  }

  // Handle Bottom Container visibility
  const bottomContainer = document.getElementById('zoliBottomContainer');
  if(screenId === 'player') {
    // Hide bottom nav and mini player on full player screen
    if(bottomContainer) bottomContainer.style.display = 'none';
  } else {
    // Show on home, search, library
    if(bottomContainer) bottomContainer.style.display = 'block';
  }

  // Update Nav Pills (Home vs Search/Library)
  const navHomePill = document.getElementById('nav-home-pill');
  const navSearchPill = document.getElementById('nav-search-pill');
  
  if(navHomePill && navSearchPill) {
    if(screenId === 'home') {
      navHomePill.style.background = '#3b28cc';
      navHomePill.style.color = 'white';
      navHomePill.querySelector('span').style.display = 'inline-block';
      
      navSearchPill.style.background = 'transparent';
      navSearchPill.style.color = '#888';
      navSearchPill.querySelector('span').style.display = 'none';
    } else if(screenId === 'search' || screenId === 'library') {
      navSearchPill.style.background = '#3b28cc';
      navSearchPill.style.color = 'white';
      navSearchPill.querySelector('span').style.display = 'inline-block';
      
      navHomePill.style.background = 'transparent';
      navHomePill.style.color = '#888';
      navHomePill.querySelector('span').style.display = 'none';
    }
  }
}
"""

with open('script.js', 'a', encoding='utf-8') as f:
    f.write(js_content)
