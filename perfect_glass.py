import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the ios-app-icon
new_icon = '''
.ios-app-icon {
  width: 62px;
  height: 62px;
  border-radius: 16px;
  
  /* 1. Deep translucent red base + Glossy gradient overlay */
  background: rgba(75, 10, 15, 0.45);
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.3) 100%);
  
  /* 2. Heavy blur + Saturation boost (The Apple Glass Secret) */
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: #fff;
  
  /* 3. True Glass Edges (Specular Highlights) */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1.5px solid rgba(255, 255, 255, 0.5); /* Strong light from above */
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  
  /* 4. 3D Depth (Inner gloss + Outer drop shadow) */
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.4), 
    inset 0 -2px 6px rgba(0, 0, 0, 0.5), 
    0 10px 25px rgba(0, 0, 0, 0.4);
}
'''

new_dock = '''
/* iOS Dock (Frosted glass shelf) */
.ios-dock {
  /* Almost transparent, relying purely on blur */
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border-radius: 30px;
  padding: 16px 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2px;
  
  /* Dock shadows and shelf edge */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1.5px solid rgba(255, 255, 255, 0.45); /* Shelf highlight */
}
'''

new_search = '''
.ios-search-pill {
  /* Deep glass pill */
  background: rgba(40, 5, 8, 0.4);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 22px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}
'''

css = re.sub(r'\.ios-app-icon \{.*?\}', new_icon.strip(), css, flags=re.DOTALL)
css = re.sub(r'/\* iOS Dock.*?\.ios-dock \{.*?\}', new_dock.strip(), css, flags=re.DOTALL)
css = re.sub(r'\.ios-search-pill \{.*?\}', new_search.strip(), css, flags=re.DOTALL)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print('Perfect glassmorphism applied')
