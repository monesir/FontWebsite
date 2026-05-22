import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the direction of the music app to LTR since it's an English UI
if '<div class="ios-app" id="app-music" style="background: #000000;">' in html:
    html = html.replace('<div class="ios-app" id="app-music" style="background: #000000;">', '<div class="ios-app" id="app-music" style="background: #000000;" dir="ltr">')

# Fix the broken image in "Chill Vibes"
# Original: https://images.unsplash.com/photo-1493225457124-a1a2a5f52814?q=80&w=200&auto=format&fit=crop
# The photo ID 1493225457124-a1a2a5f52814 might be broken or removed from Unsplash in this specific resolution. Let's use a different one.
html = html.replace("photo-1493225457124-a1a2a5f52814", "photo-1511671782779-c97d3d27a1d4") # duplicate or fallback
# Let's just do a blanket replace for a known working image for that specific broken one if needed. Or just replace the URL.
html = html.replace('url(\'https://images.unsplash.com/photo-1493225457124-a1a2a5f52814?q=80&w=300&auto=format&fit=crop\')', 'url(\'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=300&auto=format&fit=crop\')')
html = html.replace('src="https://images.unsplash.com/photo-1493225457124-a1a2a5f52814?q=80&w=200&auto=format&fit=crop"', 'src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200&auto=format&fit=crop"')
html = html.replace('src="https://images.unsplash.com/photo-1493225457124-a1a2a5f52814?w=100&q=80"', 'src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&q=80"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed RTL issue and broken image in index.html.")
