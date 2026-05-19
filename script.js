import * as htmlToImage from 'html-to-image';

/* ==========================================================================
   Arabic Poetry Font Playground - Production JavaScript Controller
   ========================================================================== */

// DOM Elements
const fontDropzone = document.getElementById('fontDropzone');
const fontFileInput = document.getElementById('fontFileInput');
const fontStatus = document.getElementById('fontStatus');
const activeFontName = document.getElementById('activeFontName');

// Typography Controls
const sliderFontSize = document.getElementById('sliderFontSize');
const sliderLineHeight = document.getElementById('sliderLineHeight');
const sliderLetterSpacing = document.getElementById('sliderLetterSpacing');
const valFontSize = document.getElementById('valFontSize');
const valLineHeight = document.getElementById('valLineHeight');
const valLetterSpacing = document.getElementById('valLetterSpacing');
const alignButtons = document.querySelectorAll('.btn-align');
const toggleShadow = document.getElementById('toggleShadow');

// Card Border Style Selector
const selectBorderPattern = document.getElementById('selectBorderPattern');

// Aspect Ratio Selectors
const ratioButtons = document.querySelectorAll('.ratio-btn');

// Color Pickers
const pickerTextColor = document.getElementById('pickerTextColor');
const pickerBgColor = document.getElementById('pickerBgColor');
const pickerOrnamentColor = document.getElementById('pickerOrnamentColor');
const pickerOrnamentColor2 = document.getElementById('pickerOrnamentColor2');
const hexTextColor = document.getElementById('hexTextColor');
const hexBgColor = document.getElementById('hexBgColor');
const hexOrnamentColor = document.getElementById('hexOrnamentColor');
const hexOrnamentColor2 = document.getElementById('hexOrnamentColor2');
const themeButtons = document.querySelectorAll('.theme-lib-card');

// Custom Background Image
const bgDropzone = document.getElementById('bgDropzone');
const bgFileInput = document.getElementById('bgFileInput');
const bgUploadText = document.getElementById('bgUploadText');
const bgControlsGroup = document.getElementById('bgControlsGroup');
const sliderOverlayOpacity = document.getElementById('sliderOverlayOpacity');
const sliderBgBlur = document.getElementById('sliderBgBlur');
const sliderBgScale = document.getElementById('sliderBgScale');
const sliderBgPosY = document.getElementById('sliderBgPosY');
const sliderBgPosX = document.getElementById('sliderBgPosX');
const valOverlayOpacity = document.getElementById('valOverlayOpacity');
const valBgBlur = document.getElementById('valBgBlur');
const valBgScale = document.getElementById('valBgScale');
const valBgPosY = document.getElementById('valBgPosY');
const valBgPosX = document.getElementById('valBgPosX');
const btnRemoveBg = document.getElementById('btnRemoveBg');
const cardBgImage = document.getElementById('cardBgImage');
const cardOverlay = document.getElementById('cardOverlay');

// Watermark
const inputWatermark = document.getElementById('inputWatermark');
const cardWatermark = document.getElementById('cardWatermark');

// Mobile UI elements
const btnMobileToggle = document.getElementById('btnMobileToggle');
const btnMobileClose = document.getElementById('btnMobileClose');
const sidebarPanel = document.getElementById('sidebarPanel');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Content and Actions
const sampleButtons = document.querySelectorAll('.sample-btn');
const editableText = document.getElementById('editableText');
const poetryCard = document.getElementById('poetryCard');
const cardResizeHandle = document.getElementById('cardResizeHandle');
const btnExport = document.getElementById('btnExport');
const btnClear = document.getElementById('btnClear');
const btnReset = document.getElementById('btnReset');

// Advanced Mode Selector and Controls
const btnModeSimple = document.getElementById('btnModeSimple');
const btnModeAdvanced = document.getElementById('btnModeAdvanced');

// Verse Divider Controls
const selectVerseDivider = document.getElementById('selectVerseDivider');
const sliderDividerSize = document.getElementById('sliderDividerSize');
const valDividerSize = document.getElementById('valDividerSize');

// Carousel Controls
const carouselPageList = document.getElementById('carouselPageList');
const btnAddPage = document.getElementById('btnAddPage');
const btnDeletePage = document.getElementById('btnDeletePage');

// Multilingual support
const btnLangAr = document.getElementById('btnLangAr');
const btnLangEn = document.getElementById('btnLangEn');
const selectFontStyle = document.getElementById('selectFontStyle');
const grpFontStyle = document.getElementById('grpFontStyle');
const samplesListAr = document.getElementById('samplesListAr');
const samplesListEn = document.getElementById('samplesListEn');
const titleSamples = document.getElementById('titleSamples');
const togglePageIndicator = document.getElementById('togglePageIndicator');
const cardPageIndicator = document.getElementById('cardPageIndicator');
const selectCardTexture = document.getElementById('selectCardTexture');
const cardTextureOverlay = document.getElementById('cardTextureOverlay');
const textureOpacityGroup = document.getElementById('textureOpacityGroup');
const sliderTextureOpacity = document.getElementById('sliderTextureOpacity');
const valTextureOpacity = document.getElementById('valTextureOpacity');
const inputTopOrnament = document.getElementById('inputTopOrnament');
const inputBottomOrnament = document.getElementById('inputBottomOrnament');
const cardTopOrnament = document.getElementById('cardTopOrnament');
const cardBottomOrnament = document.getElementById('cardBottomOrnament');

// Poetry samples mapping
const POETRY_SAMPLES = {
  mutanabbi: `الخَيْلُ وَاللّيْلُ وَالبَيْدَاءُ تَعْرِفُني
وَالسّيْفُ وَالرّمْحُ وَالقِرْطَاسُ وَالقَلَمُ

أَنَا الَّذِي نَظَرَ الْأَعْمَى إِلَى أَدَبِي
وَأَسْمَعَتْ كَلِمَاتِي مَنْ بِهِ صَمَمُ`,

  shawqi: `قُم لِلمُعَلِّمِ وَفِّهِ التَبجيلا
كادَ المُعَلِّمُ أَن يَكونَ رَسولا

أَعَلِمتَ أَشرَفَ أَو أَجَلَّ مِنَ الَّذي
يَبني وَيُنشِئُ أَنفُساً وَعُقولا`,

  antara: `هَل غادَرَ الشُعَراءُ مِن مُتَرَدَّمِ
أَم هَل عَرَفتَ الدارَ بَعدَ تَوَهُّمِ

يا دارَ عَبلَةَ بِالجَواءِ تَكَلَّمي
وَعِمي صَباحاً دارَ عَبلَةَ وَاِسلَمي`,

  imru: `قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ
بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ

فَتُوضِحَ فَالمِقْراةِ لَمْ يَعْفُ رَسْمُها
لِمَا هَبَّتْ مِنْ شَمَالٍ وَجَنُوبِ`,

  'custom-poetry': `سأحمل روحي على راحتي
وألقي بها في مهاوي الردى

فإما حياة تسر الصديق
وإما ممات يغيظ العدى`,

  // English / Other language poetry samples
  shakespeare: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:

Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:`,

  poe: `Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—

While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.`,

  byron: `She walks in beauty, like the night
Of cloudless climes and starry skies;

And all that’s best of dark and bright
Meet in her aspect and her eyes;`,

  frost: `Two roads diverged in a yellow wood,
And sorry I could not travel both

And be one traveler, long I stood
And looked down one as far as I could`
};

// Carousel & Divider State variables
let carouselPages = [];
let currentPageIndex = 0;

// Multilingual & Font Select state variables
let currentLang = 'ar'; // 'ar' or 'en'
let currentSiteLang = 'ar'; // UI Language: 'ar' or 'en'
let customFontLoaded = false;
let customFontName = '';

const arabicFonts = [
  { value: 'ArabicPoetry', name: 'خط الديوان (الافتراضي)' }
];

const englishFonts = [
  { value: 'Caveat', name: 'Caveat (Casual Handwriting)' },
  { value: 'EB Garamond', name: 'EB Garamond (Classical Book)' },
  { value: 'Lora', name: 'Lora (Premium Literary)' },
  { value: 'Playfair Display', name: 'Playfair Display (Elegant Serif)' },
  { value: 'Cinzel', name: 'Cinzel (Roman Calligraphy)' },
  { value: 'Montserrat', name: 'Montserrat (Modern Minimalist)' }
];

/* ==========================================
   Verse Segment Dividers Feature
   ========================================== */

function getDividerSymbol() {
  if (!selectVerseDivider) return '';
  const val = selectVerseDivider.value;
  switch (val) {
    case 'diamond': return '❖';
    case 'fan': return '❈';
    case 'star': return '★';
    case 'dot': return '•';
    case 'dash': return '—';
    default: return '';
  }
}

function removeDividers() {
  if (!editableText) return;
  const dividers = editableText.querySelectorAll('.verse-divider');
  dividers.forEach(div => {
    const br = document.createElement('br');
    div.parentNode.replaceChild(br, div);
  });
}

function applyDividers() {
  if (!editableText) return;
  
  removeDividers();
  
  const symbol = getDividerSymbol();
  if (!symbol) return;
  
  const rawText = getRawPoetryText();
  if (!rawText) return;
  
  const lines = rawText.split('\n');
  if (lines.length <= 1) return;
  
  const size = sliderDividerSize ? sliderDividerSize.value : 16;
  const dividerHTML = `<div class="verse-divider" contenteditable="false" style="--verse-divider-size: ${size}px;">${symbol}</div>`;
  
  let html = '';
  for (let i = 0; i < lines.length; i++) {
    html += lines[i];
    if (i < lines.length - 1) {
      if (lines[i] === '' || lines[i+1] === '') {
        html += '<br>';
      } else {
        html += dividerHTML;
      }
    }
  }
  
  editableText.innerHTML = html;
}

/* ==========================================
   Multi-Card Carousel Feature
   ========================================== */

function getRawPoetryText() {
  if (!editableText) return '';
  
  const temp = document.createElement('div');
  temp.innerHTML = editableText.innerHTML;
  
  const dividers = temp.querySelectorAll('.verse-divider');
  dividers.forEach(div => {
    const br = document.createElement('br');
    div.parentNode.replaceChild(br, div);
  });
  
  let text = temp.innerHTML
    .replace(/<div[^>]*>/gi, '\n')
    .replace(/<\/div>/gi, '')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n');
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  let cleanText = doc.body.textContent || '';
  
  const lines = cleanText.split('\n').map(l => l.trim());
  return lines.join('\n');
}

function renderCarouselControls() {
  if (!carouselPageList) return;
  
  carouselPageList.innerHTML = '';
  
  carouselPages.forEach((pageText, idx) => {
    const btn = document.createElement('button');
    btn.className = `carousel-btn-page ${idx === currentPageIndex ? 'active' : ''}`;
    btn.textContent = idx + 1;
    btn.title = `الصفحة ${idx + 1}`;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage(idx);
    });
    carouselPageList.appendChild(btn);
  });
  
  if (btnDeletePage) {
    btnDeletePage.disabled = carouselPages.length <= 1;
  }
}

function switchPage(targetIndex) {
  if (targetIndex < 0 || targetIndex >= carouselPages.length) return;
  
  // Save current page text first
  carouselPages[currentPageIndex] = getRawPoetryText();
  
  // Switch
  currentPageIndex = targetIndex;
  
  // Load target text
  const targetText = carouselPages[currentPageIndex];
  editableText.innerHTML = targetText.replace(/\n/g, '<br>');
  
  renderCarouselControls();
  updateCardPageIndicator();
  applyDividers();
}

function updateCardPageIndicator() {
  if (!cardPageIndicator) return;
  
  if (carouselPages.length > 1 && togglePageIndicator && togglePageIndicator.checked) {
    cardPageIndicator.style.display = 'block';
    cardPageIndicator.textContent = `${currentPageIndex + 1} / ${carouselPages.length}`;
  } else {
    cardPageIndicator.style.display = 'none';
  }
}


// Default Theme / Variables values
const DEFAULTS = {
  fontSize: 42,
  lineHeight: 1.8,
  letterSpacing: 0,
  align: 'center',
  shadow: true,
  borderPattern: 'double',
  ratio: 'auto',
  textColor: '#c5a880',
  bgColor: '#141416',
  ornamentColor: '#c5a880',
  watermark: 'ديوان الخط العربي',
  bgScale: 1,
  bgPosY: 0,
  bgPosX: 0,
  sampleText: POETRY_SAMPLES.mutanabbi
};

// Selection preservation system for editableText
let savedRange = null;

function saveSelection() {
  if (!editableText) return;
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    if (editableText.contains(range.commonAncestorContainer)) {
      savedRange = range.cloneRange();
    }
  }
}

function restoreSelection() {
  if (savedRange && editableText) {
    editableText.focus();
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(savedRange);
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  checkAutoloadedFont();
  applyDefaults();
  
  // Load saved site language (default to 'ar')
  const savedSiteLang = localStorage.getItem('diwan-site-lang') || 'ar';
  updateUISiteLanguage(savedSiteLang);
  switchLanguage(savedSiteLang);
});

// Setup Event Listeners
function setupEventListeners() {
  
  // 1. Mobile Sidebar Controls Toggle
  btnMobileToggle.addEventListener('click', openSidebar);
  btnMobileClose.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // 2. Custom OTF Font File Uploader (Supports Drag and Drop)
  fontDropzone.addEventListener('click', () => fontFileInput.click());
  fontFileInput.addEventListener('change', handleFontFileSelect);
  
  fontDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    fontDropzone.classList.add('dragover');
  });
  
  fontDropzone.addEventListener('dragleave', () => {
    fontDropzone.classList.remove('dragover');
  });
  
  fontDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    fontDropzone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      fontFileInput.files = e.dataTransfer.files;
      handleFontFileSelect();
    }
  });

  // 3. Aspect Ratio Selection
  ratioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      ratioButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const ratio = btn.dataset.ratio;
      // Clear current ratio classes
      poetryCard.classList.remove('ratio-auto', 'ratio-1-1', 'ratio-9-16', 'ratio-16-9');
      poetryCard.classList.add(`ratio-${ratio}`);

      // Clear custom dragged size overrides
      if (poetryCard) {
        poetryCard.style.removeProperty('width');
        poetryCard.style.removeProperty('height');
        poetryCard.style.removeProperty('max-width');
        poetryCard.style.removeProperty('max-height');
        poetryCard.style.removeProperty('aspect-ratio');
        poetryCard.style.width = '';
        poetryCard.style.height = '';
        poetryCard.style.maxWidth = '';
        poetryCard.style.maxHeight = '';
        poetryCard.style.aspectRatio = '';
      }
    });
  });

  // 4. Typography Sliders
  sliderFontSize.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--card-font-size', `${val}px`);
    valFontSize.textContent = `${val}px`;
  });

  sliderLineHeight.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--card-line-height', val);
    valLineHeight.textContent = val;
  });

  sliderLetterSpacing.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--card-letter-spacing', `${val}px`);
    valLetterSpacing.textContent = `${val}px`;
  });

  // 5. Text Alignment Buttons
  alignButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alignButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const align = btn.dataset.align;
      document.documentElement.style.setProperty('--card-text-align', align);
    });
  });

  // 6. Visual Shadow Toggles
  toggleShadow.addEventListener('change', (e) => {
    if (e.target.checked) {
      poetryCard.classList.add('has-shadow');
    } else {
      poetryCard.classList.remove('has-shadow');
    }
  });

  // 7. Card Decorative Borders
  selectBorderPattern.addEventListener('change', (e) => {
    const pattern = e.target.value;
    poetryCard.classList.remove('has-border-none', 'has-border-classic', 'has-border-double', 'has-border-ornate');
    poetryCard.classList.add(`has-border-${pattern}`);
  });

  // 8. Color Pickers Binding
  pickerTextColor.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--card-text-color', val);
    hexTextColor.textContent = val.toUpperCase();
    removeActiveThemeState();
  });

  pickerBgColor.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--card-bg-color', val);
    hexBgColor.textContent = val.toUpperCase();
    removeActiveThemeState();
  });

  pickerOrnamentColor.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--card-ornament-color', val);
    document.documentElement.style.setProperty('--card-border-color', hexToRgbA(val, 0.45));
    hexOrnamentColor.textContent = val.toUpperCase();
    if (pickerOrnamentColor2) {
      pickerOrnamentColor2.value = val;
      hexOrnamentColor2.textContent = val.toUpperCase();
    }
    removeActiveThemeState();
  });

  if (pickerOrnamentColor2) {
    pickerOrnamentColor2.addEventListener('input', (e) => {
      const val = e.target.value;
      document.documentElement.style.setProperty('--card-ornament-color', val);
      document.documentElement.style.setProperty('--card-border-color', hexToRgbA(val, 0.45));
      hexOrnamentColor2.textContent = val.toUpperCase();
      pickerOrnamentColor.value = val;
      hexOrnamentColor.textContent = val.toUpperCase();
      removeActiveThemeState();
    });
  }

  // 9. Preset Themes Buttons
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const theme = btn.dataset.theme;
      const txt = btn.dataset.txt;
      const bg = btn.dataset.bg;
      const orn = btn.dataset.orn;
      
      // Update theme classes on card
      poetryCard.classList.remove(
        'royal-charcoal', 'ancient-papyrus', 'imperial-emerald', 
        'luxurious-ruby', 'midnight-blue', 'najdi-lavender', 
        'vintage-gold', 'damascene-indigo', 'antique-turquoise', 'minimal-dark'
      );
      poetryCard.classList.add(theme);
      
      // Update color pickers input values
      pickerTextColor.value = txt;
      pickerBgColor.value = bg;
      pickerOrnamentColor.value = orn;
      if (pickerOrnamentColor2) pickerOrnamentColor2.value = orn;
      
      // Update hex labels
      hexTextColor.textContent = txt.toUpperCase();
      hexBgColor.textContent = bg.toUpperCase();
      hexOrnamentColor.textContent = orn.toUpperCase();
      if (hexOrnamentColor2) hexOrnamentColor2.textContent = orn.toUpperCase();
      
      // Set CSS Properties
      document.documentElement.style.setProperty('--card-text-color', txt);
      document.documentElement.style.setProperty('--card-bg-color', bg);
      document.documentElement.style.setProperty('--card-ornament-color', orn);
      document.documentElement.style.setProperty('--card-border-color', hexToRgbA(orn, 0.45));
    });
  });

  // 10. Background Image Custom Upload
  bgDropzone.addEventListener('click', () => bgFileInput.click());
  bgFileInput.addEventListener('change', handleBgImageSelect);
  
  bgDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  bgDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      bgFileInput.files = e.dataTransfer.files;
      handleBgImageSelect();
    }
  });

  // Background Image Overlay & Blur adjusters
  sliderOverlayOpacity.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--overlay-opacity', val / 100);
    valOverlayOpacity.textContent = `${val}%`;
  });

  sliderBgBlur.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--bg-blur', `${val}px`);
    valBgBlur.textContent = `${val}px`;
  });

  sliderBgScale.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--bg-scale', val);
    valBgScale.textContent = `${val}x`;
  });

  sliderBgPosY.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--bg-pos-y', `${val}%`);
    valBgPosY.textContent = `${val}%`;
  });

  sliderBgPosX.addEventListener('input', (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty('--bg-pos-x', `${val}%`);
    valBgPosX.textContent = `${val}%`;
  });

  btnRemoveBg.addEventListener('click', removeBackgroundImage);

  // 11. Watermark Text Input Sync
  if (inputWatermark && cardWatermark) {
    inputWatermark.addEventListener('input', (e) => {
      cardWatermark.textContent = e.target.value;
    });
  }

  // Plain Text Paste Handler (Strips rich formatting/fonts from copied text)
  if (editableText) {
    editableText.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text/plain');
      document.execCommand('insertText', false, text);
    });
  }

  // 12. Poetry Preset Samples Injection
  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sampleKey = btn.dataset.sample;
      if (POETRY_SAMPLES[sampleKey]) {
        editableText.innerHTML = POETRY_SAMPLES[sampleKey].replace(/\n/g, '<br>');
        carouselPages[currentPageIndex] = POETRY_SAMPLES[sampleKey];
        applyDividers();
        closeSidebar(); // auto-close sidebar on mobile for better focus
      }
    });
  });

  // 13. General Canvas Actions
  btnClear.addEventListener('click', () => {
    editableText.innerHTML = '';
    carouselPages[currentPageIndex] = '';
    updateCardPageIndicator();
    editableText.focus();
  });

  btnReset.addEventListener('click', () => {
    const msg = uiTranslations[currentSiteLang]?.confirm_reset || "هل تريد بالتأكيد استعادة الإعدادات الافتراضية؟";
    if(confirm(msg)) {
      applyDefaults();
      removeBackgroundImage();
    }
  });

  btnExport.addEventListener('click', exportPoetryCard);

  // Custom Card Resizing Init
  initCardResize();

  // 14. Text Selection and Cursor Caret Preservation System
  if (editableText) {
    editableText.addEventListener('keyup', saveSelection);
    editableText.addEventListener('mouseup', saveSelection);
    editableText.addEventListener('focus', saveSelection);
    editableText.addEventListener('blur', saveSelection);
  }

  // Disable text selection and cursor movements globally when dragging sliders or resizing
  const handleStartAdjusting = () => {
    document.body.classList.add('is-adjusting');
  };
  const handleStopAdjusting = () => {
    document.body.classList.remove('is-adjusting');
  };

  const allSliders = document.querySelectorAll('.range-slider');
  allSliders.forEach(slider => {
    slider.addEventListener('pointerdown', handleStartAdjusting);
  });

  if (cardResizeHandle) {
    cardResizeHandle.addEventListener('pointerdown', handleStartAdjusting);
  }

  document.addEventListener('pointerup', handleStopAdjusting);

  // Restore selection after interacting with sidebar controls
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.addEventListener('pointerup', (e) => {
      // Don't restore if they clicked on an input that requires keyboard focus (like watermark input or select elements)
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'TEXTAREA') {
        // Small timeout to let the action finish and restore focus/selection
        setTimeout(restoreSelection, 50);
      }
    });
  }

  // --- UI Control Mode Toggling (Simple vs Advanced) ---
  const setSidebarMode = (mode) => {
    if (mode === 'advanced') {
      sidebarPanel.classList.remove('mode-simple');
      sidebarPanel.classList.add('mode-advanced');
      btnModeSimple.classList.remove('active');
      btnModeAdvanced.classList.add('active');
    } else {
      sidebarPanel.classList.remove('mode-advanced');
      sidebarPanel.classList.add('mode-simple');
      btnModeAdvanced.classList.remove('active');
      btnModeSimple.classList.add('active');
    }
    localStorage.setItem('diwan-sidebar-mode', mode);
  };

  if (btnModeSimple && btnModeAdvanced) {
    btnModeSimple.addEventListener('click', () => setSidebarMode('simple'));
    btnModeAdvanced.addEventListener('click', () => setSidebarMode('advanced'));
    
    // Load saved sidebar mode if exists
    const savedSidebarMode = localStorage.getItem('diwan-sidebar-mode') || 'simple';
    setSidebarMode(savedSidebarMode);
  }


  // --- Card Texture selection dropdown ---
  if (selectCardTexture) {
    selectCardTexture.addEventListener('change', (e) => {
      const texture = e.target.value;
      // Remove any existing texture classes
      poetryCard.classList.remove('texture-parchment', 'texture-silk', 'texture-islamic');
      
      if (texture !== 'none') {
        poetryCard.classList.add(`texture-${texture}`);
        if (textureOpacityGroup) textureOpacityGroup.style.display = 'block';
        if (sliderTextureOpacity) {
          const val = sliderTextureOpacity.value;
          document.documentElement.style.setProperty('--texture-opacity', val / 100);
        }
      } else {
        if (textureOpacityGroup) textureOpacityGroup.style.display = 'none';
      }
    });
  }

  // --- Texture Opacity Control ---
  if (sliderTextureOpacity) {
    sliderTextureOpacity.addEventListener('input', (e) => {
      const val = e.target.value;
      if (valTextureOpacity) valTextureOpacity.textContent = `${val}%`;
      document.documentElement.style.setProperty('--texture-opacity', val / 100);
    });
  }


  // --- Custom Top/Bottom Card Ornaments Edit ---
  const updateOrnaments = () => {
    if (inputTopOrnament && cardTopOrnament) {
      const topVal = inputTopOrnament.value.trim();
      const topShape = cardTopOrnament.querySelector('.ornament-shape');
      if (topShape) {
        topShape.textContent = topVal;
      }
      if (topVal === '') {
        cardTopOrnament.style.display = 'none';
      } else {
        cardTopOrnament.style.display = '';
      }
    }

    if (inputBottomOrnament && cardBottomOrnament) {
      const bottomVal = inputBottomOrnament.value.trim();
      const bottomShape = cardBottomOrnament.querySelector('.ornament-shape');
      if (bottomShape) {
        bottomShape.textContent = bottomVal;
      }
      if (bottomVal === '') {
        cardBottomOrnament.style.display = 'none';
      } else {
        cardBottomOrnament.style.display = '';
      }
    }
  };

  if (inputTopOrnament) {
    inputTopOrnament.addEventListener('input', updateOrnaments);
  }
  if (inputBottomOrnament) {
    inputBottomOrnament.addEventListener('input', updateOrnaments);
  }

  // --- Ornament Presets click handler ---
  document.querySelectorAll('.orn-preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const presetVal = btn.dataset.preset;
      
      if (inputTopOrnament) inputTopOrnament.value = presetVal;
      if (inputBottomOrnament) inputBottomOrnament.value = presetVal;
      
      updateOrnaments();
    });
  });
  
  // --- Verse Segment Dividers Selection & Sizing ---
  if (selectVerseDivider) {
    selectVerseDivider.addEventListener('change', () => {
      applyDividers();
    });
  }
  if (sliderDividerSize) {
    sliderDividerSize.addEventListener('input', (e) => {
      const val = e.target.value;
      if (valDividerSize) valDividerSize.textContent = `${val}px`;
      document.documentElement.style.setProperty('--verse-divider-size', `${val}px`);
      applyDividers();
    });
  }

  // --- Carousel Controls ---
  if (btnAddPage) {
    btnAddPage.addEventListener('click', (e) => {
      e.preventDefault();
      // Save current text first
      carouselPages[currentPageIndex] = getRawPoetryText();
      
      // Add page
      carouselPages.push('');
      currentPageIndex = carouselPages.length - 1;
      
      // Load empty page
      editableText.innerHTML = '';
      renderCarouselControls();
      updateCardPageIndicator();
      
      editableText.focus();
    });
  }

  if (btnDeletePage) {
    btnDeletePage.addEventListener('click', (e) => {
      e.preventDefault();
      if (carouselPages.length <= 1) return;
      
      const msg = uiTranslations[currentSiteLang]?.confirm_delete_page || "هل تريد بالتأكيد حذف هذه الصفحة؟";
      if (confirm(msg)) {
        carouselPages.splice(currentPageIndex, 1);
        if (currentPageIndex >= carouselPages.length) {
          currentPageIndex = carouselPages.length - 1;
        }
        
        const targetText = carouselPages[currentPageIndex];
        editableText.innerHTML = targetText.replace(/\n/g, '<br>');
        
        renderCarouselControls();
        updateCardPageIndicator();
        applyDividers();
      }
    });
  }

  if (togglePageIndicator) {
    togglePageIndicator.addEventListener('change', () => {
      updateCardPageIndicator();
    });
  }

  // Editable text Focus/Blur hooks for safe dividers
  if (editableText) {
    editableText.addEventListener('input', () => {
      carouselPages[currentPageIndex] = getRawPoetryText();
    });
    editableText.addEventListener('focus', () => {
      removeDividers();
    });
    editableText.addEventListener('blur', () => {
      carouselPages[currentPageIndex] = getRawPoetryText();
      applyDividers();
    });
  }

  // --- Multilingual Mode and Font Style Dropdown listeners ---
  if (btnLangAr) {
    btnLangAr.addEventListener('click', () => switchLanguage('ar'));
  }
  if (btnLangEn) {
    btnLangEn.addEventListener('click', () => switchLanguage('en'));
  }
  const btnToggleSiteLang = document.getElementById('btnToggleSiteLang');
  if (btnToggleSiteLang) {
    btnToggleSiteLang.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = currentSiteLang === 'ar' ? 'en' : 'ar';
      updateUISiteLanguage(nextLang);
      switchLanguage(nextLang);
    });
  }
  if (selectFontStyle) {
    selectFontStyle.addEventListener('change', () => {
      const font = selectFontStyle.value;
      document.documentElement.style.setProperty('--font-poetry', `"${font}", var(--font-poetry-fallback)`);
      if (activeFontName) {
        activeFontName.textContent = selectFontStyle.options[selectFontStyle.selectedIndex]?.text || '';
      }
    });
  }

  // Expose updateOrnaments helper to the window scope for access by other functions (like applyDefaults)
  window.updateOrnaments = updateOrnaments;
}

// Custom drag-to-resize logic for the poetry card
function initCardResize() {
  if (!cardResizeHandle || !poetryCard) return;

  let isResizing = false;
  let startWidth = 0;
  let startHeight = 0;
  let startX = 0;
  let startY = 0;

  function onMouseDown(e) {
    isResizing = true;
    
    // Get current dimensions
    const rect = poetryCard.getBoundingClientRect();
    startWidth = rect.width;
    startHeight = rect.height;
    
    // Support touch events
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    startY = e.clientY || (e.touches && e.touches[0].clientY);

    poetryCard.classList.add('resizing');
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
    
    e.preventDefault();
  }

  function onMouseMove(e) {
    if (!isResizing) return;
    
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    if (clientX === undefined || clientY === undefined) return;

    const dx = clientX - startX;
    const dy = clientY - startY;

    // Calculate new width & height
    let newWidth = startWidth + dx;
    let newHeight = startHeight + dy;

    // Constrain dimensions
    const minWidth = 280;
    const minHeight = 200;
    const maxWidth = 1200;
    const maxHeight = 1200;

    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
    newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

    // Clear active preset classes in sidebar
    ratioButtons.forEach(b => b.classList.remove('active'));
    poetryCard.classList.remove('ratio-auto', 'ratio-1-1', 'ratio-9-16', 'ratio-16-9');
    poetryCard.classList.add('ratio-auto');

    // Force layouts inline
    poetryCard.style.setProperty('width', `${newWidth}px`, 'important');
    poetryCard.style.setProperty('height', `${newHeight}px`, 'important');
    poetryCard.style.setProperty('max-width', 'none', 'important');
    poetryCard.style.setProperty('max-height', 'none', 'important');
    poetryCard.style.setProperty('aspect-ratio', 'auto', 'important');
  }

  function onTouchMove(e) {
    if (!isResizing) return;
    onMouseMove(e);
    if (e.cancelable) {
      e.preventDefault();
    }
  }

  function onMouseUp() {
    isResizing = false;
    poetryCard.classList.remove('resizing');
    
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  }

  function onTouchEnd() {
    onMouseUp();
  }

  cardResizeHandle.addEventListener('mousedown', onMouseDown);
  cardResizeHandle.addEventListener('touchstart', onMouseDown, { passive: false });
}

// Check if bundled ArabicPoetry font loaded successfully
function checkAutoloadedFont() {
  if (document.fonts) {
    // Check if the ArabicPoetry font is ready
    document.fonts.ready.then(() => {
      if (document.fonts.check('12px ArabicPoetry')) {
        updateFontStatus(true, "تم تحميل خط الشعر العربي الافتراضي");
        activeFontName.textContent = "Arabic Poetry (مدمج بالخادم)";
      } else {
        updateFontStatus(false, "فشل تحميل الخط المدمج، يرجى الرفع يدوياً");
      }
    }).catch(err => {
      console.warn("Font loading detection error: ", err);
    });
  }
}

// Open / Close Mobile Sidebar Drawer
function openSidebar() {
  sidebarPanel.classList.add('active');
  sidebarOverlay.classList.add('active');
  btnMobileToggle.style.display = 'none';
  btnMobileClose.style.display = 'flex';
}

function closeSidebar() {
  sidebarPanel.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  btnMobileToggle.style.display = 'flex';
  btnMobileClose.style.display = 'none';
}

// Convert Hex colors to RGBA for alpha borders (aesthetic)
function hexToRgbA(hex, alpha) {
  let c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c = hex.substring(1).split('');
    if(c.length === 3){
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
  }
  return hex;
}

// Remove active theme highlights when colors are customized
function removeActiveThemeState() {
  themeButtons.forEach(b => b.classList.remove('active'));
  poetryCard.classList.remove(
    'royal-charcoal', 'ancient-papyrus', 'imperial-emerald', 
    'luxurious-ruby', 'midnight-blue', 'najdi-lavender', 
    'vintage-gold', 'damascene-indigo', 'antique-turquoise', 'minimal-dark'
  );
}

// Load a custom OTF / TTF file uploaded by user
function handleFontFileSelect() {
  const file = fontFileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  updateFontStatus(null, "جاري رفع وقراءة الخط المخصص...");
  
  reader.onload = async function(e) {
    const arrayBuffer = e.target.result;
    
    try {
      const customName = 'ArabicPoetryCustomUpload';
      const font = new FontFace(customName, arrayBuffer);
      
      updateFontStatus(null, "جاري تسجيل الخط بالمتصفح...");
      const loaded = await font.load();
      document.fonts.add(loaded);
      
      customFontLoaded = true;
      customFontName = file.name;
      populateFontStyles(currentLang, 'ArabicPoetryCustomUpload');
      updateFontStatus(true, `الخط النشط: ${file.name}`);
      
      // Force repaint
      editableText.style.display = 'none';
      editableText.offsetHeight;
      editableText.style.display = '';
      
    } catch (err) {
      console.error(err);
      updateFontStatus(false, "خطأ في قراءة ملف الخط. يرجى رفع ملف صالح.");
    }
  };
  
  reader.readAsArrayBuffer(file);
}

// Load background image
function handleBgImageSelect() {
  const file = bgFileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  bgUploadText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري قراءة الصورة...';
  
  reader.onload = function(e) {
    cardBgImage.style.backgroundImage = `url('${e.target.result}')`;
    poetryCard.classList.add('has-bg-image');
    bgControlsGroup.style.display = 'block';
    bgUploadText.textContent = `تم تحميل: ${file.name.substring(0, 15)}...`;
  };
  
  reader.readAsDataURL(file);
}

// Remove background image
function removeBackgroundImage() {
  cardBgImage.style.backgroundImage = 'none';
  poetryCard.classList.remove('has-bg-image');
  bgControlsGroup.style.display = 'none';
  bgFileInput.value = '';
  bgUploadText.textContent = "اختر صورة أو اسحبها هنا";

  // Reset sliders and CSS custom properties
  sliderOverlayOpacity.value = 40;
  valOverlayOpacity.textContent = "40%";
  document.documentElement.style.setProperty('--overlay-opacity', 0.40);
  
  sliderBgBlur.value = 0;
  valBgBlur.textContent = "0px";
  document.documentElement.style.setProperty('--bg-blur', "0px");

  sliderBgScale.value = 1;
  valBgScale.textContent = "1x";
  document.documentElement.style.setProperty('--bg-scale', 1);

  sliderBgPosY.value = 50;
  valBgPosY.textContent = "50%";
  document.documentElement.style.setProperty('--bg-pos-y', "50%");

  sliderBgPosX.value = 50;
  valBgPosX.textContent = "50%";
  document.documentElement.style.setProperty('--bg-pos-x', "50%");
}

// Reset values to defaults
function applyDefaults() {
  if (poetryCard) {
    poetryCard.style.removeProperty('width');
    poetryCard.style.removeProperty('height');
    poetryCard.style.removeProperty('max-width');
    poetryCard.style.removeProperty('max-height');
    poetryCard.style.removeProperty('aspect-ratio');
    poetryCard.style.width = '';
    poetryCard.style.height = '';
    poetryCard.style.maxWidth = '';
    poetryCard.style.maxHeight = '';
    poetryCard.style.aspectRatio = '';
  }

  sliderFontSize.value = DEFAULTS.fontSize;
  document.documentElement.style.setProperty('--card-font-size', `${DEFAULTS.fontSize}px`);
  valFontSize.textContent = `${DEFAULTS.fontSize}px`;

  sliderLineHeight.value = DEFAULTS.lineHeight;
  document.documentElement.style.setProperty('--card-line-height', DEFAULTS.lineHeight);
  valLineHeight.textContent = DEFAULTS.lineHeight;

  sliderLetterSpacing.value = DEFAULTS.letterSpacing;
  document.documentElement.style.setProperty('--card-letter-spacing', `${DEFAULTS.letterSpacing}px`);
  valLetterSpacing.textContent = `${DEFAULTS.letterSpacing}px`;

  alignButtons.forEach(btn => {
    if (btn.dataset.align === DEFAULTS.align) {
      btn.classList.add('active');
      document.documentElement.style.setProperty('--card-text-align', DEFAULTS.align);
    } else {
      btn.classList.remove('active');
    }
  });

  toggleShadow.checked = DEFAULTS.shadow;
  if(DEFAULTS.shadow) poetryCard.classList.add('has-shadow');
  else poetryCard.classList.remove('has-shadow');

  // Borders
  selectBorderPattern.value = DEFAULTS.borderPattern;
  poetryCard.className = 'poetry-card'; // reset classes
  poetryCard.classList.add('royal-charcoal'); // set default theme class
  poetryCard.classList.add(`has-border-${DEFAULTS.borderPattern}`);
  if(DEFAULTS.shadow) poetryCard.classList.add('has-shadow');
  
  // Ratio
  ratioButtons.forEach(btn => {
    if (btn.dataset.ratio === DEFAULTS.ratio) {
      btn.classList.add('active');
      poetryCard.classList.add(`ratio-${DEFAULTS.ratio}`);
    } else {
      btn.classList.remove('active');
    }
  });

  // Colors
  pickerTextColor.value = DEFAULTS.textColor;
  pickerBgColor.value = DEFAULTS.bgColor;
  pickerOrnamentColor.value = DEFAULTS.ornamentColor;
  if (pickerOrnamentColor2) pickerOrnamentColor2.value = DEFAULTS.ornamentColor;
  
  hexTextColor.textContent = DEFAULTS.textColor.toUpperCase();
  hexBgColor.textContent = DEFAULTS.bgColor.toUpperCase();
  hexOrnamentColor.textContent = DEFAULTS.ornamentColor.toUpperCase();
  if (hexOrnamentColor2) hexOrnamentColor2.textContent = DEFAULTS.ornamentColor.toUpperCase();
  
  document.documentElement.style.setProperty('--card-text-color', DEFAULTS.textColor);
  document.documentElement.style.setProperty('--card-bg-color', DEFAULTS.bgColor);
  document.documentElement.style.setProperty('--card-ornament-color', DEFAULTS.ornamentColor);
  document.documentElement.style.setProperty('--card-border-color', hexToRgbA(DEFAULTS.ornamentColor, 0.45));

  // Active theme
  themeButtons.forEach(btn => {
    if(btn.dataset.theme === 'royal-charcoal') btn.classList.add('active');
    else btn.classList.remove('active');
  });

  // Watermark
  if (inputWatermark) inputWatermark.value = DEFAULTS.watermark;
  if (cardWatermark) cardWatermark.textContent = DEFAULTS.watermark;

  // Background defaults
  sliderOverlayOpacity.value = 40;
  valOverlayOpacity.textContent = "40%";
  document.documentElement.style.setProperty('--overlay-opacity', 0.40);
  
  sliderBgBlur.value = 0;
  valBgBlur.textContent = "0px";
  document.documentElement.style.setProperty('--bg-blur', "0px");

  sliderBgScale.value = 1;
  valBgScale.textContent = "1x";
  document.documentElement.style.setProperty('--bg-scale', 1);

  sliderBgPosY.value = 50;
  valBgPosY.textContent = "50%";
  document.documentElement.style.setProperty('--bg-pos-y', "50%");

  sliderBgPosX.value = 50;
  valBgPosX.textContent = "50%";
  document.documentElement.style.setProperty('--bg-pos-x', "50%");

  cardBgImage.style.backgroundImage = 'none';
  bgControlsGroup.style.display = 'none';
  bgFileInput.value = '';
  bgUploadText.textContent = "اختر صورة أو اسحبها هنا";

  // Reset Dividers Settings
  if (selectVerseDivider) {
    selectVerseDivider.value = 'none';
  }
  if (sliderDividerSize) {
    sliderDividerSize.value = 16;
    if (valDividerSize) valDividerSize.textContent = '16px';
    document.documentElement.style.setProperty('--verse-divider-size', '16px');
  }

  // Reset Carousel State
  carouselPages = [DEFAULTS.sampleText];
  currentPageIndex = 0;
  if (togglePageIndicator) {
    togglePageIndicator.checked = true;
  }

  // Text
  editableText.innerHTML = DEFAULTS.sampleText.replace(/\n/g, '<br>');

  // Update Carousel Controls & Card
  renderCarouselControls();
  updateCardPageIndicator();
  removeDividers();

  // Reset Font Selection and Language
  currentLang = 'ar';
  customFontLoaded = false;
  customFontName = '';
  if (btnLangAr) btnLangAr.classList.add('active');
  if (btnLangEn) btnLangEn.classList.remove('active');
  if (samplesListAr) samplesListAr.style.display = 'flex';
  if (samplesListEn) samplesListEn.style.display = 'none';
  if (titleSamples) titleSamples.textContent = 'نماذج من الشعر العربي';
  populateFontStyles('ar');

  poetryCard.setAttribute('dir', 'rtl');
  poetryCard.style.direction = 'rtl';
  editableText.setAttribute('dir', 'rtl');
  editableText.style.direction = 'rtl';

  // Reset Textures
  if (selectCardTexture) {
    selectCardTexture.value = 'none';
  }
  poetryCard.classList.remove('texture-parchment', 'texture-silk', 'texture-islamic');
  if (sliderTextureOpacity) {
    sliderTextureOpacity.value = 100;
  }
  if (valTextureOpacity) {
    valTextureOpacity.textContent = "100%";
  }
  document.documentElement.style.setProperty('--texture-opacity', 1.0);
  if (textureOpacityGroup) {
    textureOpacityGroup.style.display = 'none';
  }


  // Reset Ornaments
  if (inputTopOrnament) {
    inputTopOrnament.value = '❈ ❖ ❈';
  }
  if (inputBottomOrnament) {
    inputBottomOrnament.value = '❈ ❖ ❈';
  }
  if (window.updateOrnaments) {
    window.updateOrnaments();
  }

  closeSidebar();
}

// Update font loading status UI
function updateFontStatus(success, message) {
  const indicator = fontStatus.querySelector('.status-indicator');
  const text = fontStatus.querySelector('.status-text');
  
  indicator.className = 'status-indicator';
  text.className = 'status-text';
  
  if (success === true) {
    indicator.classList.add('success');
    text.classList.add('highlight');
  } else if (success === false) {
    indicator.classList.add('error');
  } else {
    indicator.classList.add('warning');
  }
  text.textContent = message;
}

// Export Card as Image (PNG)
// Helper to capture poetryCard at a specific scale and restore styling afterwards
function capturePage() {
  return new Promise((resolve, reject) => {
    // 1. Save original inline styling and their priorities to restore perfectly after rendering
    const originalWidth = poetryCard.style.width;
    const originalHeight = poetryCard.style.height;
    const originalAspectRatio = poetryCard.style.aspectRatio;
    const originalMaxWidth = poetryCard.style.maxWidth;
    const originalMaxHeight = poetryCard.style.maxHeight;
    const originalBorderRadius = poetryCard.style.borderRadius;

    const widthPriority = poetryCard.style.getPropertyPriority('width');
    const heightPriority = poetryCard.style.getPropertyPriority('height');
    const aspectPriority = poetryCard.style.getPropertyPriority('aspect-ratio');
    const maxWPriority = poetryCard.style.getPropertyPriority('max-width');
    const maxHPriority = poetryCard.style.getPropertyPriority('max-height');
    const radiusPriority = poetryCard.style.getPropertyPriority('border-radius');

    // 2. Explicitly force dimensions in pixels during snapshot to bypass html2canvas aspect-ratio rendering bugs
    const rect = poetryCard.getBoundingClientRect();
    let exportWidth = rect.width;
    let exportHeight = rect.height;

    // Standard base sizes for consistent high-resolution outputs:
    if (poetryCard.classList.contains('ratio-1-1')) {
      exportWidth = 800;
      exportHeight = 800;
    } else if (poetryCard.classList.contains('ratio-9-16')) {
      exportWidth = 720;
      exportHeight = 1280;
    } else if (poetryCard.classList.contains('ratio-16-9')) {
      exportWidth = 1200;
      exportHeight = 675;
    } else {
      const scaleFactor = 800 / rect.width;
      exportWidth = 800;
      exportHeight = rect.height * scaleFactor;
    }

    // Force the dimensions on the element temporarily with !important to bypass CSS rules
    poetryCard.style.setProperty('width', `${exportWidth}px`, 'important');
    poetryCard.style.setProperty('height', `${exportHeight}px`, 'important');
    poetryCard.style.setProperty('max-width', 'none', 'important');
    poetryCard.style.setProperty('max-height', 'none', 'important');
    poetryCard.style.setProperty('aspect-ratio', 'auto', 'important');
    poetryCard.style.setProperty('border-radius', '0', 'important');

    function restoreStyles() {
      if (originalWidth) poetryCard.style.setProperty('width', originalWidth, widthPriority); else { poetryCard.style.removeProperty('width'); poetryCard.style.width = ''; }
      if (originalHeight) poetryCard.style.setProperty('height', originalHeight, heightPriority); else { poetryCard.style.removeProperty('height'); poetryCard.style.height = ''; }
      if (originalAspectRatio) poetryCard.style.setProperty('aspect-ratio', originalAspectRatio, aspectPriority); else { poetryCard.style.removeProperty('aspect-ratio'); poetryCard.style.aspectRatio = ''; }
      if (originalMaxWidth) poetryCard.style.setProperty('max-width', originalMaxWidth, maxWPriority); else { poetryCard.style.removeProperty('max-width'); poetryCard.style.maxWidth = ''; }
      if (originalMaxHeight) poetryCard.style.setProperty('max-height', originalMaxHeight, maxHPriority); else { poetryCard.style.removeProperty('max-height'); poetryCard.style.maxHeight = ''; }
      if (originalBorderRadius) poetryCard.style.setProperty('border-radius', originalBorderRadius, radiusPriority); else { poetryCard.style.removeProperty('border-radius'); poetryCard.style.borderRadius = ''; }
    }

    // Wait for fonts to ensure proper rendering inside the canvas context
    document.fonts.ready.then(() => {
      // Wait a brief tick to ensure layout recalculation by browser
      setTimeout(() => {
        htmlToImage.toPng(poetryCard, {
          width: exportWidth,
          height: exportHeight,
          pixelRatio: 2.5, // Crisp retina-like scaling (output width is ~2000px, premium quality)
          cacheBust: true,
          filter: (node) => {
            if (node.classList && node.classList.contains('card-resize-handle')) {
              return false;
            }
            return true;
          },
          style: {
            width: `${exportWidth}px`,
            height: `${exportHeight}px`,
            maxWidth: 'none',
            maxHeight: 'none',
            aspectRatio: 'auto',
            borderRadius: '0'
          }
        }).then(dataUrl => {
          restoreStyles();
          resolve(dataUrl);
        }).catch(err => {
          restoreStyles();
          reject(err);
        });
      }, 100);
    });
  });
}

// Asynchronous multi-page batch export
async function exportPoetryCard() {
  btnExport.disabled = true;
  const originalHTML = btnExport.innerHTML;
  btnExport.innerHTML = '<i class="fa-solid fa-spinner fa-spin icon"></i> جاري الحفظ...';

  // Save active page's current text
  carouselPages[currentPageIndex] = getRawPoetryText();

  // Close mobile sidebar to clean viewport just in case
  closeSidebar();

  const originalPageIndex = currentPageIndex;

  try {
    if (carouselPages.length <= 1) {
      // Single page standard export
      const dataUrl = await capturePage();
      const downloadLink = document.createElement('a');
      const date = new Date();
      const timeStr = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
      downloadLink.download = `ديوان_الخط_${timeStr}.png`;
      downloadLink.href = dataUrl;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      // Multi-page export
      for (let i = 0; i < carouselPages.length; i++) {
        btnExport.innerHTML = `<i class="fa-solid fa-spinner fa-spin icon"></i> تصدير صفحة ${i + 1}/${carouselPages.length}...`;
        
        // Temporarily switch page
        currentPageIndex = i;
        const targetText = carouselPages[i];
        editableText.innerHTML = targetText.replace(/\n/g, '<br>');
        updateCardPageIndicator();
        applyDividers();
        
        // Capture
        const dataUrl = await capturePage();
        
        // Download
        const downloadLink = document.createElement('a');
        const date = new Date();
        const timeStr = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
        downloadLink.download = `ديوان_الخط_صفحة_${i + 1}_${timeStr}.png`;
        downloadLink.href = dataUrl;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Wait 300ms to prevent browser download triggers overlapping
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
  } catch (err) {
    console.error(err);
    alert(uiTranslations[currentSiteLang]?.export_error || "حدث خطأ أثناء استخراج الصورة. الرجاء إعادة المحاولة.");
  } finally {
    // Restore original active page
    currentPageIndex = originalPageIndex;
    const targetText = carouselPages[currentPageIndex];
    editableText.innerHTML = targetText.replace(/\n/g, '<br>');
    updateCardPageIndicator();
    applyDividers();
    renderCarouselControls();

    btnExport.disabled = false;
    btnExport.innerHTML = originalHTML;
  }
}

// Populate font options dynamically
function populateFontStyles(lang, selectedValue = null) {
  if (!selectFontStyle) return;
  selectFontStyle.innerHTML = '';
  
  const fonts = lang === 'ar' ? arabicFonts : englishFonts;
  
  // If we have a custom uploaded font, prepend/append it
  if (customFontLoaded && customFontName) {
    const opt = document.createElement('option');
    opt.value = 'ArabicPoetryCustomUpload';
    opt.textContent = currentSiteLang === 'ar' ? `مخصص: ${customFontName}` : `Custom: ${customFontName}`;
    selectFontStyle.appendChild(opt);
  }
  
  fonts.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.value;
    if (f.value === 'ArabicPoetry') {
      opt.textContent = currentSiteLang === 'ar' ? 'خط الشعر العربي (الافتراضي)' : 'Arabic Poetry (Default)';
    } else {
      opt.textContent = f.name;
    }
    selectFontStyle.appendChild(opt);
  });
  
  // Hide dropdown for Arabic if there is only 1 option (default, no custom uploaded font)
  if (grpFontStyle) {
    const showDropdown = (lang === 'en' || (customFontLoaded && customFontName));
    grpFontStyle.style.display = showDropdown ? 'block' : 'none';
  }
  
  if (selectedValue) {
    selectFontStyle.value = selectedValue;
  } else {
    // Default select
    if (customFontLoaded) {
      selectFontStyle.value = 'ArabicPoetryCustomUpload';
    } else {
      selectFontStyle.value = fonts[0].value;
    }
  }
  
  // Apply font CSS
  const fontValue = selectFontStyle.value;
  document.documentElement.style.setProperty('--font-poetry', `"${fontValue}", var(--font-poetry-fallback)`);
  if (activeFontName) {
    activeFontName.textContent = selectFontStyle.options[selectFontStyle.selectedIndex]?.text || '';
  }
}

// Switch languages and adjust settings/presets
function switchLanguage(lang) {
  currentLang = lang;
  
  if (lang === 'en') {
    // Switch to English layout & values
    btnLangAr.classList.remove('active');
    btnLangEn.classList.add('active');
    
    poetryCard.setAttribute('dir', 'ltr');
    poetryCard.style.direction = 'ltr';
    editableText.setAttribute('dir', 'ltr');
    editableText.style.direction = 'ltr';
    
    // Switch default align to left if it was right or justify
    const activeAlign = document.querySelector('.btn-align.active');
    if (activeAlign && (activeAlign.dataset.align === 'right' || activeAlign.dataset.align === 'justify')) {
      alignButtons.forEach(btn => {
        if (btn.dataset.align === 'center') {
          btn.click();
        }
      });
    }
    
    // Show English preset samples and hide Arabic ones
    if (samplesListAr) samplesListAr.style.display = 'none';
    if (samplesListEn) samplesListEn.style.display = 'flex';
    if (titleSamples) {
      titleSamples.textContent = currentSiteLang === 'ar' ? 'نماذج من الشعر الإنجليزي (Samples)' : 'English Poetry Samples';
    }
    
    // Populate font selector with English fonts
    populateFontStyles('en');
    
    // Swap text to Shakespeare sonnet if text is current Mutanabbi sample
    const rawText = getRawPoetryText();
    if (rawText.includes('الخَيْلُ وَاللّيْلُ')) {
      editableText.innerHTML = POETRY_SAMPLES.shakespeare.replace(/\n/g, '<br>');
      carouselPages[currentPageIndex] = POETRY_SAMPLES.shakespeare;
    }
  } else {
    // Switch to Arabic layout
    btnLangEn.classList.remove('active');
    btnLangAr.classList.add('active');
    
    poetryCard.setAttribute('dir', 'rtl');
    poetryCard.style.direction = 'rtl';
    editableText.setAttribute('dir', 'rtl');
    editableText.style.direction = 'rtl';
    
    // Show Arabic preset samples and hide English ones
    if (samplesListAr) samplesListAr.style.display = 'flex';
    if (samplesListEn) samplesListEn.style.display = 'none';
    if (titleSamples) {
      titleSamples.textContent = currentSiteLang === 'ar' ? 'نماذج من الشعر العربي' : 'Arabic Poetry Samples';
    }
    
    // Populate font selector with Arabic fonts
    populateFontStyles('ar');
    
    // Swap text back to Mutanabbi sample if text is currently Shakespeare sample
    const rawText = getRawPoetryText();
    if (rawText.includes('Shall I compare')) {
      editableText.innerHTML = POETRY_SAMPLES.mutanabbi.replace(/\n/g, '<br>');
      carouselPages[currentPageIndex] = POETRY_SAMPLES.mutanabbi;
    }
  }
  
  applyDividers();
}

// Translation mapping for English and Arabic interface
const uiTranslations = {
  ar: {
    logo_title: "ديوان الخط العربي",
    logo_subtitle: "منصة كتابة وتصميم لوحات الخط العربي",
    mode_simple: "الوضع المبسط",
    mode_advanced: "الوضع المتقدم",
    writing_lang_title: "لغة الكتابة",
    writing_lang_ar: "عربي",
    writing_lang_en: "إنجليزي",
    font_loader_title: "تحميل خط مخصص",
    font_loader_desc: "اسحب ملف الخط الخاص بك هنا أو اضغط للاختيار لتخصيص البطاقة تماماً.",
    drag_font_hint: "اختر ملف الخط أو اسحبه هنا",
    font_format_hint: "يدعم ملفات الخطوط بصيغة OTF أو TTF (عربية أو إنجليزية)",
    font_status_default: "لم يتم تحميل خط خارجي بعد",
    card_dimensions: "أبعاد وتناسب البطاقة",
    card_dimensions_desc: "اختر أبعاد البطاقة لتناسب المشاركة عبر وسائل التواصل.",
    ratio_auto: "تلقائي (حسب المحتوى)",
    ratio_square: "مربع (1:1)",
    ratio_story: "طولي (9:16)",
    ratio_landscape: "عرضي (16:9)",
    typography_settings: "تنسيق وحجم الخطوط",
    font_style_label: "نوع ونمط الخط",
    font_size_label: "حجم الخط الأساسي",
    line_height_label: "تباعد الأسطر (ارتفاع السطر)",
    letter_spacing_label: "تباعد الحروف للإنجليزية",
    text_alignment: "محاذاة النص",
    top_ornament_label: "الزخرفة العلوية",
    bottom_ornament_label: "الزخرفة السفلية",
    ornament_presets_label: "زخارف سريعة جاهزة",
    preset_classic: "كلاسيكي",
    preset_royal: "ملكي",
    preset_modern: "حديث",
    preset_flowers: "زهور",
    preset_stars: "النجوم",
    preset_simple: "بسيط",
    preset_clear: "حذف الكل",
    ornament_color_label: "لون الزخارف",
    dividers_label: "الفواصل البينية",
    divider_none: "بدون فاصل (تلقائي)",
    divider_diamond: "❖ معين هندسي",
    divider_fan: "❈ زخرفة مروحية",
    divider_star: "★ نجمة خماسية",
    divider_dot: "• نقطة دائرية",
    divider_dash: "— شرطة عريضة",
    divider_size_label: "حجم الفاصل البيني",
    card_effects_label: "تأثيرات البطاقة",
    shadow_text_label: "إضاءة وظل خفيف للخط",
    card_style_section_title: "إطار ونمط البطاقة",
    card_border_label: "نمط إطار البطاقة",
    border_none: "بدون إطار",
    border_classic: "إطار متقطع كلاسيكي",
    border_double: "إطار مزدوج أنيق",
    border_ornate: "إطار ملكي مع زوايا",
    card_texture_label: "ملمس ونقش البطاقة",
    texture_opacity_label: "وضوح وشدة النقش",
    texture_none: "بدون ملمس ونقش",
    texture_parchment: "ورق البردي العتيق",
    texture_silk: "الحرير الداكن",
    texture_islamic: "النقش الهندسي الإسلامي",
    picker_text_label: "النص",
    picker_bg_label: "الخلفية",
    picker_ornament_label: "الزخرفة",
    themes_library_label: "مكتبة السمات الجاهزة",
    theme_royal_charcoal: "الملكي الكلاسيكي",
    theme_ancient_papyrus: "البردي العتيق",
    theme_imperial_emerald: "الزمردي الإمبراطوري",
    theme_luxurious_ruby: "العقيقي الفاخر",
    theme_najdi_lavender: "الخزامي النجدي",
    theme_damascene_indigo: "الكحلي الدمشقي",
    theme_antique_turquoise: "الفيروزي الأثري",
    theme_minimal_dark: "الداكن المبسط",
    bg_section_title: "خلفية بطاقة مخصصة",
    bg_section_desc: "أضف صورتك الخاصة في الخلفية مع التحكم بالتعتيم والضبابية.",
    bg_upload_hint: "اختر صورة أو اسحبها هنا",
    bg_opacity_label: "تعتيم الصورة",
    bg_blur_label: "تغبيش الصورة",
    bg_zoom_label: "تكبير الخلفية",
    bg_pos_y_label: "تحريك رأسي",
    bg_pos_x_label: "تحريك أفقي",
    remove_bg_btn: "إزالة صورة الخلفية",
    pages_section_title: "صفحات التصميم",
    pages_section_desc: "أضف صفحات متعددة لتوليد ألبوم كامل بنفس التنسيق.",
    delete_page_btn: "حذف الصفحة الحالية",
    show_page_numbers_label: "إظهار أرقام الصفحات على الصورة",
    samples_section_title: "نماذج نصوص جاهزة",
    sample_mutanabbi: "أبو الطيب المتنبي",
    sample_shawqi: "أمير الشعراء أحمد شوقي",
    sample_antara: "عنترة بن شداد",
    sample_imru: "امرؤ القيس",
    sample_custom_poetry: "نص منسق (شطرين)",
    export_btn: "تحميل كصورة",
    active_font_lbl: "الخط النشط: ",
    default_font_name: "الخط العربي الافتراضي",
    clear_btn_text: "مسح",
    reset_btn_text: "ضبط",
    app_footer_desc: "ديوان الخط العربي - صمم بطاقتك ولوحتك الفنية وشاركها مع أصدقائك. انقر في وسط البطاقة لبدء الكتابة.",
    align_center: "محاذاة للوسط",
    align_right: "محاذاة لليمين",
    align_justify: "ضبط الهوامش (موزع)",
    add_page_title: "إضافة صفحة جديدة",
    clear_btn_title: "مسح النص",
    reset_btn_title: "إعادة تعيين الإعدادات",
    top_ornament_placeholder: "مثال: ❈ ❖ ❈",
    bottom_ornament_placeholder: "مثال: ❈ ❖ ❈",
    title_placeholder: "العنوان (اختياري)",
    author_placeholder: "الاسم/التوقيع (اختياري)",
    confirm_reset: "هل تريد بالتأكيد استعادة الإعدادات الافتراضية؟",
    confirm_delete_page: "هل تريد بالتأكيد حذف هذه الصفحة؟",
    export_error: "حدث خطأ أثناء استخراج الصورة. الرجاء إعادة المحاولة."
  },
  en: {
    logo_title: "Diwan Calligraphy",
    logo_subtitle: "Arabic Calligraphy Card & Canvas Designer",
    mode_simple: "Simple Mode",
    mode_advanced: "Advanced Mode",
    writing_lang_title: "Writing Language",
    writing_lang_ar: "Arabic",
    writing_lang_en: "English",
    font_loader_title: "Load Custom Font (OTF / TTF)",
    font_loader_desc: "Drag your font file here or click to browse for custom calligraphy.",
    drag_font_hint: "Choose a font file or drag it here",
    font_format_hint: "Supports OTF/TTF files (either Arabic or English)",
    font_status_default: "No external font loaded yet",
    card_dimensions: "Card Dimensions",
    card_dimensions_desc: "Choose card aspect ratio suitable for social media.",
    ratio_auto: "Auto (Content-fit)",
    ratio_square: "Square (1:1)",
    ratio_story: "Vertical (9:16)",
    ratio_landscape: "Landscape (16:9)",
    typography_settings: "Typography Settings",
    font_style_label: "Font Style",
    font_size_label: "Base Font Size",
    line_height_label: "Line Height",
    letter_spacing_label: "Letter Spacing (English)",
    text_alignment: "Text Alignment",
    top_ornament_label: "Top Ornament",
    bottom_ornament_label: "Bottom Ornament",
    ornament_presets_label: "Quick Ornament Presets",
    preset_classic: "Classic",
    preset_royal: "Royal",
    preset_modern: "Modern",
    preset_flowers: "Flowers",
    preset_stars: "Stars",
    preset_simple: "Simple",
    preset_clear: "Clear All",
    ornament_color_label: "Ornament Color",
    dividers_label: "Segment Dividers",
    divider_none: "No Divider (Auto)",
    divider_diamond: "❖ Diamond",
    divider_fan: "❈ Fan Ornament",
    divider_star: "★ Star",
    divider_dot: "• Dot",
    divider_dash: "— Dash",
    divider_size_label: "Divider Size",
    card_effects_label: "Card Effects",
    shadow_text_label: "Subtle Text Glow & Shadow",
    card_style_section_title: "Card Border & Style",
    card_border_label: "Card Border Pattern",
    border_none: "No Border",
    border_classic: "Classic Dashed Border",
    border_double: "Elegant Double Border",
    border_ornate: "Royal Cornered Border",
    card_texture_label: "Card Texture",
    texture_opacity_label: "Texture Opacity / Intensity",
    texture_none: "No Texture",
    texture_parchment: "Ancient Parchment",
    texture_silk: "Dark Silk Linen",
    texture_islamic: "Islamic Geometric Pattern",
    picker_text_label: "Text",
    picker_bg_label: "Background",
    picker_ornament_label: "Ornament",
    themes_library_label: "Preset Themes Library",
    theme_royal_charcoal: "Royal Charcoal",
    theme_ancient_papyrus: "Ancient Papyrus",
    theme_imperial_emerald: "Imperial Emerald",
    theme_luxurious_ruby: "Luxurious Ruby",
    theme_najdi_lavender: "Najdi Lavender",
    theme_damascene_indigo: "Damascene Indigo",
    theme_antique_turquoise: "Antique Turquoise",
    theme_minimal_dark: "Minimalist Dark",
    bg_section_title: "Custom Background",
    bg_section_desc: "Upload custom background image with opacity & blur control.",
    bg_upload_hint: "Choose image or drag it here",
    bg_opacity_label: "Image Opacity (Overlay)",
    bg_blur_label: "Image Blur",
    bg_zoom_label: "Background Zoom",
    bg_pos_y_label: "Vertical Position (Y)",
    bg_pos_x_label: "Horizontal Position (X)",
    remove_bg_btn: "Remove Background Image",
    pages_section_title: "Design Pages (Album)",
    pages_section_desc: "Add multiple pages to generate a consistent design album.",
    delete_page_btn: "Delete Current Page",
    show_page_numbers_label: "Show Page Numbers on Card",
    samples_section_title: "Text Preset Samples",
    sample_mutanabbi: "Al-Mutanabbi",
    sample_shawqi: "Ahmad Shawqi",
    sample_antara: "Antarah",
    sample_imru: "Imru' al-Qais",
    sample_custom_poetry: "Two-Column Formatted Text",
    export_btn: "Download Card (PNG)",
    active_font_lbl: "Active Font: ",
    default_font_name: "Arabic Calligraphy (Default Loaded)",
    clear_btn_text: "Clear",
    reset_btn_text: "Reset",
    app_footer_desc: "Diwan Arabic Calligraphy - Design your calligraphy card and share it. Click inside the card to start writing.",
    align_center: "Align Center",
    align_right: "Align Right",
    align_justify: "Justify Text",
    add_page_title: "Add New Page",
    clear_btn_title: "Clear Text",
    reset_btn_title: "Reset Settings",
    top_ornament_placeholder: "e.g., ❈ ❖ ❈",
    bottom_ornament_placeholder: "e.g., ❈ ❖ ❈",
    title_placeholder: "Title (Optional)",
    author_placeholder: "Author / Signature (Optional)",
    confirm_reset: "Are you sure you want to restore default settings?",
    confirm_delete_page: "Are you sure you want to delete this page?",
    export_error: "An error occurred during image export. Please try again."
  }
};

// Function to update all UI texts, tooltips, and placeholders based on selected language
function updateUISiteLanguage(lang) {
  currentSiteLang = lang;
  localStorage.setItem('diwan-site-lang', lang);
  
  // Set document level layout attributes
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  
  // 1. Text elements translations
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
      el.textContent = uiTranslations[lang][key];
    }
  });

  // 2. Titles/Tooltips translations
  const titleElements = document.querySelectorAll('[data-i18n-title]');
  titleElements.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
      el.setAttribute('title', uiTranslations[lang][key]);
    }
  });

  // 3. Placeholders translations
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
      el.setAttribute('placeholder', uiTranslations[lang][key]);
    }
  });

  // 4. Toggle button text update
  const btnToggleSiteLang = document.getElementById('btnToggleSiteLang');
  if (btnToggleSiteLang) {
    btnToggleSiteLang.textContent = lang === 'ar' ? 'EN' : 'العربية';
  }

  // 5. Watermark input default sync
  if (inputWatermark) {
    if (inputWatermark.value === 'ديوان الخط العربي' || inputWatermark.value === 'Diwan Calligraphy') {
      inputWatermark.value = lang === 'ar' ? 'ديوان الخط العربي' : 'Diwan Calligraphy';
      if (cardWatermark) cardWatermark.textContent = inputWatermark.value;
    }
  }

  // 6. Font label synchronization
  if (activeFontName) {
    if (!customFontLoaded) {
      activeFontName.textContent = lang === 'ar' ? 'خط الشعر العربي (الافتراضي)' : 'Arabic Poetry (Default Loaded)';
    }
  }
}

