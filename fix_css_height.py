import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the specific block
old_css = """#app-music {
  background: #000000 !important;
  color: #ffffff;
  overflow: hidden;
  position: relative;
}"""

new_css = """#app-music {
  background: #000000 !important;
  color: #ffffff;
  overflow: hidden;
}"""

if old_css in css:
    css = css.replace(old_css, new_css)
else:
    # Fallback if there are whitespace differences
    css = re.sub(r'#app-music\s*\{[^}]*position:\s*relative;[^}]*\}', new_css, css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
