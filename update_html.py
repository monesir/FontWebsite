import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<div class="mobile-preview-wrapper mobile-tpl-settings mobile-theme-light" id="mobilePreviewWrapper">'
end_marker = '<!-- FAQ & SEO Section -->'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_html = '''<div class="mobile-preview-wrapper" id="mobilePreviewWrapper">
        <div class="iphone-frame">
          <div class="iphone-notch">
            <div class="notch-sensor"></div>
            <div class="notch-camera"></div>
          </div>
          <div class="iphone-screen">
            <div class="phone-screen-text" contenteditable="true" style="color: #fff; font-size: 1.2rem; font-weight: 500; font-family: var(--font-web-headings), sans-serif;">شاشة الهاتف</div>
            <div class="iphone-home-bar" style="position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); width: 120px; height: 4px; background: #fff; border-radius: 100px; opacity: 0.8;"></div>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      '''
    
    content = content[:start_idx] + new_html + content[end_idx:]
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('HTML updated successfully.')
else:
    print('Could not find markers.')
