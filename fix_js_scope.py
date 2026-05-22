import re

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Make sure openZoliScreen is accessible globally
if 'function openZoliScreen' in js and 'window.openZoliScreen = openZoliScreen;' not in js:
    js = js.replace('function openZoliScreen(screenId) {', 'window.openZoliScreen = openZoliScreen;\nfunction openZoliScreen(screenId) {')

# Let's also make sure openMobileApp and closeMobileApp are accessible globally just in case
if 'function openMobileApp' in js and 'window.openMobileApp = openMobileApp;' not in js:
    js = js.replace('function openMobileApp(appId) {', 'window.openMobileApp = openMobileApp;\nfunction openMobileApp(appId) {')

if 'function closeMobileApp' in js and 'window.closeMobileApp = closeMobileApp;' not in js:
    js = js.replace('function closeMobileApp() {', 'window.closeMobileApp = closeMobileApp;\nfunction closeMobileApp() {')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
