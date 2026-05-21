import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

wrapper_start_pattern = r'<div class="mobile-preview-wrapper.*?>'
wrapper_match = re.search(wrapper_start_pattern, html)
if not wrapper_match:
    print('Could not find wrapper start')
    exit()

start_idx = wrapper_match.start()
end_marker = '<!-- FAQ & SEO Section -->'
end_idx = html.find(end_marker)

if end_idx == -1:
    print('Could not find wrapper end')
    exit()

new_html = '''<div class="mobile-preview-wrapper mobile-tpl-settings mobile-theme-light" id="mobilePreviewWrapper">
        <div class="iphone-frame">
          <div class="iphone-notch">
            <div class="notch-sensor"></div>
            <div class="notch-camera"></div>
          </div>
          
          <div class="iphone-screen">
            <div class="iphone-statusbar">
              <span class="statusbar-time" contenteditable="true" spellcheck="false">9:41</span>
              <div class="statusbar-icons">
                <i class="fa-solid fa-signal"></i>
                <i class="fa-solid fa-wifi"></i>
                <i class="fa-solid fa-battery-full"></i>
              </div>
            </div>

            <!-- HOME SCREEN -->
            <div class="ios-home-screen active" id="iosHomeScreen">
              <div class="ios-apps-grid">
                <!-- Settings App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('settings')">
                  <div class="ios-app-icon settings-icon">
                    <i class="fa-solid fa-gear"></i>
                  </div>
                  <span class="ios-app-name">الإعدادات</span>
                </div>
                <!-- Chat App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('chat')">
                  <div class="ios-app-icon chat-icon">
                    <i class="fa-solid fa-message"></i>
                  </div>
                  <span class="ios-app-name">الرسائل</span>
                </div>
                <!-- Social App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('social')">
                  <div class="ios-app-icon social-icon">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                  <span class="ios-app-name">تواصل</span>
                </div>
                <!-- Music App Icon -->
                <div class="ios-app-icon-wrapper" onclick="openMobileApp('music')">
                  <div class="ios-app-icon music-icon">
                    <i class="fa-solid fa-music"></i>
                  </div>
                  <span class="ios-app-name">موسيقى</span>
                </div>
              </div>
              
              <!-- iOS Dock -->
              <div class="ios-dock">
                <div class="ios-app-icon-wrapper">
                  <div class="ios-app-icon phone-icon"><i class="fa-solid fa-phone"></i></div>
                </div>
                <div class="ios-app-icon-wrapper">
                  <div class="ios-app-icon safari-icon"><i class="fa-brands fa-safari"></i></div>
                </div>
                <div class="ios-app-icon-wrapper">
                  <div class="ios-app-icon camera-icon"><i class="fa-solid fa-camera"></i></div>
                </div>
              </div>
            </div>

            <!-- APPS CONTAINER -->
            <div class="ios-apps-container" id="iosAppsContainer">
              
              <!-- Settings App Content -->
              <div class="ios-app" id="app-settings">
                <div class="iphone-app-header">
                  <h1 class="ios-large-title" contenteditable="true" data-i18n="mobile_profile">الإعدادات</h1>
                </div>
                <div class="iphone-scroll">
                  <!-- iOS Settings List -->
                  <div class="ios-list">
                    <div class="ios-list-item ios-profile-card">
                      <div class="ios-profile-avatar" contenteditable="true" style="background-color: var(--primary-color);">مج</div>
                      <div class="ios-profile-info">
                        <h3 contenteditable="true">مجد الدين</h3>
                        <p contenteditable="true">+Apple Account, iCloud</p>
                      </div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                  </div>
                  
                  <div class="ios-list">
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #ff9500;"><i class="fa-solid fa-plane"></i></div>
                      <div class="ios-item-text" contenteditable="true" data-i18n="mobile_settings_1">نمط الطيران</div>
                      <div class="ios-toggle"><div class="toggle-knob"></div></div>
                    </div>
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #007aff;"><i class="fa-solid fa-wifi"></i></div>
                      <div class="ios-item-text" contenteditable="true">Wi-Fi</div>
                      <div class="ios-item-value" contenteditable="true">Home Network</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #007aff;"><i class="fa-brands fa-bluetooth-b"></i></div>
                      <div class="ios-item-text" contenteditable="true">البلوتوث</div>
                      <div class="ios-item-value" contenteditable="true">متصل</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #34c759;"><i class="fa-solid fa-signal"></i></div>
                      <div class="ios-item-text" contenteditable="true">خلوي</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                  </div>

                  <div class="ios-list">
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #ff3b30;"><i class="fa-solid fa-bell"></i></div>
                      <div class="ios-item-text" contenteditable="true">الإشعارات</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #ff3b30;"><i class="fa-solid fa-volume-high"></i></div>
                      <div class="ios-item-text" contenteditable="true">الأصوات والحس اللمسي</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #5856d6;"><i class="fa-solid fa-moon"></i></div>
                      <div class="ios-item-text" contenteditable="true">التركيز</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #007aff;"><i class="fa-solid fa-hourglass-half"></i></div>
                      <div class="ios-item-text" contenteditable="true">مدة استخدام الجهاز</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                  </div>

                  <div class="ios-list">
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #8e8e93;"><i class="fa-solid fa-gear"></i></div>
                      <div class="ios-item-text" contenteditable="true">عام</div>
                      <div class="ios-badge">1</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                    <div class="ios-list-item">
                      <div class="ios-icon" style="background: #007aff;"><i class="fa-solid fa-text-height"></i></div>
                      <div class="ios-item-text" contenteditable="true">الخطوط والتخصيص</div>
                      <i class="fa-solid fa-chevron-left ios-chevron"></i>
                    </div>
                  </div>
                  
                </div>
              </div>

              <!-- Chat App Content -->
              <div class="ios-app" id="app-chat">
                <div class="iphone-app-header">
                  <div class="ios-header-nav">
                    <div class="ios-back-btn" onclick="closeMobileApp()"><i class="fa-solid fa-chevron-right"></i> رجوع</div>
                    <div class="ios-contact-info">
                      <div class="ios-contact-avatar">س</div>
                      <span contenteditable="true" data-i18n="mobile_chat_1">سارة</span>
                    </div>
                    <div class="ios-header-action"><i class="fa-solid fa-video"></i></div>
                  </div>
                </div>
                <div class="iphone-scroll chat-scroll" style="background: var(--bg-primary);">
                  <div class="chat-bubbles">
                    <div class="chat-bubble incoming">
                      <p contenteditable="true">مرحباً! كيف حالك اليوم؟</p>
                      <span class="chat-time">10:15 ص</span>
                    </div>
                    <div class="chat-bubble outgoing" style="background-color: var(--primary-color);">
                      <p contenteditable="true">أهلاً! أنا بخير، ما رأيك بالخط الجديد؟</p>
                      <span class="chat-time">10:16 ص <i class="fa-solid fa-check-double"></i></span>
                    </div>
                    <div class="chat-bubble incoming">
                      <p contenteditable="true">إنه مذهل! القراءة به مريحة جداً، والأوزان رائعة للتصميم.</p>
                      <span class="chat-time">10:18 ص</span>
                    </div>
                    <div class="chat-bubble outgoing" style="background-color: var(--primary-color);">
                      <p contenteditable="true">شكراً! سأقوم بإطلاقه قريباً.</p>
                      <span class="chat-time">10:20 ص <i class="fa-solid fa-check-double"></i></span>
                    </div>
                  </div>
                  <div class="chat-input-bar">
                    <i class="fa-solid fa-plus"></i>
                    <div class="chat-input-field" contenteditable="true">رسالة...</div>
                    <i class="fa-solid fa-microphone" style="color: var(--primary-color);"></i>
                  </div>
                </div>
              </div>

              <!-- Social App Content -->
              <div class="ios-app" id="app-social">
                <div class="iphone-app-header social-header">
                  <h2 class="social-logo" contenteditable="true">Typography</h2>
                  <div class="social-actions">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                  </div>
                </div>
                <div class="iphone-scroll">
                  <div class="social-post">
                    <div class="social-post-header">
                      <div class="social-post-user">
                        <div class="social-avatar" style="background-color: var(--primary-color);">م</div>
                        <span contenteditable="true" data-i18n="mobile_social_1">مجد الدين</span>
                      </div>
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    <div class="social-post-image">
                      <div class="typography-showcase" style="background: var(--bg-tertiary); display:flex; align-items:center; justify-content:center; height: 100%;">
                        <h1 contenteditable="true" style="color: var(--primary-color); font-size: 2.5rem; text-align: center; font-weight: 800; line-height: 1.2;">الجمال<br>في التفاصيل</h1>
                      </div>
                    </div>
                    <div class="social-post-actions">
                      <div class="actions-left">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                      </div>
                      <i class="fa-regular fa-bookmark"></i>
                    </div>
                    <div class="social-post-likes"><strong contenteditable="true">١,٢٣٤ إعجاب</strong></div>
                    <div class="social-post-caption">
                      <strong contenteditable="true">مجد الدين</strong> <span contenteditable="true">تم إطلاق خطنا الجديد! استمتعوا بتجربة قراءة لا مثيل لها عبر الويب وتطبيقات الهاتف. 🚀✨</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Music App Content -->
              <div class="ios-app" id="app-music">
                <div class="iphone-app-header transparent-header">
                  <i class="fa-solid fa-chevron-down" onclick="closeMobileApp()"></i>
                  <div class="now-playing-title" contenteditable="true">قيد التشغيل</div>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div class="iphone-scroll music-scroll" style="background: linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%);">
                  <div class="music-cover-container">
                    <div class="music-cover" style="background-color: var(--primary-color);">
                      <i class="fa-solid fa-music cover-icon"></i>
                    </div>
                  </div>
                  <div class="music-info">
                    <h2 class="music-title" contenteditable="true" data-i18n="mobile_music_1">سيمفونية الخطوط</h2>
                    <p class="music-artist" contenteditable="true">مجد الدين</p>
                  </div>
                  <div class="music-progress">
                    <div class="progress-bar-container">
                      <div class="progress-bar-fill" style="width: 45%; background-color: var(--primary-color);"></div>
                    </div>
                    <div class="progress-time">
                      <span>1:20</span>
                      <span>-2:45</span>
                    </div>
                  </div>
                  <div class="music-controls">
                    <i class="fa-solid fa-shuffle"></i>
                    <i class="fa-solid fa-backward-step"></i>
                    <div class="play-btn"><i class="fa-solid fa-play"></i></div>
                    <i class="fa-solid fa-forward-step"></i>
                    <i class="fa-solid fa-repeat"></i>
                  </div>
                  <div class="music-volume">
                    <i class="fa-solid fa-volume-low"></i>
                    <div class="progress-bar-container volume-bar">
                      <div class="progress-bar-fill" style="width: 80%; background-color: var(--primary-color);"></div>
                    </div>
                    <i class="fa-solid fa-volume-high"></i>
                  </div>
                </div>
              </div>

            </div> <!-- /ios-apps-container -->

            <div class="iphone-home-bar" onclick="closeMobileApp()"></div>
          </div> <!-- /iphone-screen -->
        </div> <!-- /iphone-frame -->
      </div>
\n      '''

new_content = html[:start_idx] + new_html + html[end_idx:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated index.html successfully')
