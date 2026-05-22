import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

search_pill = '''              <!-- Search Pill -->
              <div class="ios-search-pill-container">
                <div class="ios-search-pill">
                  بحث <i class="fa-solid fa-magnifying-glass" style="font-size: 10px;"></i>
                </div>
              </div>'''

if search_pill in html:
    html = html.replace(search_pill, '')
else:
    print("Warning: Could not find exact search pill block.")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
