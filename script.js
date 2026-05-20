import * as htmlToImage from 'html-to-image';
import html2pdf from 'html2pdf.js';
import JSZip from 'jszip';

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
const btnBold = document.getElementById('btnBold');
const btnItalic = document.getElementById('btnItalic');
const btnUnderline = document.getElementById('btnUnderline');
const toggleShadow = document.getElementById('toggleShadow');

// Card Border Style Selector
const selectBorderPattern = document.getElementById('selectBorderPattern');

// Aspect Ratio Selectors
const ratioButtons = document.querySelectorAll('.ratio-btn[data-ratio]');

// Color Pickers
const pickerTextColor = document.getElementById('pickerTextColor');
const pickerBgColor = document.getElementById('pickerBgColor');
const pickerOrnamentColor = document.getElementById('pickerOrnamentColor');
const pickerOrnamentColor2 = document.getElementById('pickerOrnamentColor2');
const pickerDocTextColor = document.getElementById('pickerDocTextColor');
const hexTextColor = document.getElementById('hexTextColor');
const hexBgColor = document.getElementById('hexBgColor');
const hexOrnamentColor = document.getElementById('hexOrnamentColor');
const hexOrnamentColor2 = document.getElementById('hexOrnamentColor2');
const hexDocTextColor = document.getElementById('hexDocTextColor');

// Arabic Diacritics Controls
const toggleHarakatColor = document.getElementById('toggleHarakatColor');
const harakatColorPickerGroup = document.getElementById('harakatColorPickerGroup');
const pickerHarakatColor = document.getElementById('pickerHarakatColor');
const hexHarakatColor = document.getElementById('hexHarakatColor');
const toggleHideHarakat = document.getElementById('toggleHideHarakat');

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
const btnSidebarClose = document.getElementById('btnSidebarClose');
const sidebarPanel = document.getElementById('sidebarPanel');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const btnMoreActions = document.getElementById('btnMoreActions');
const headerActions = document.querySelector('.header-actions');

// Content and Actions
const sampleButtons = document.querySelectorAll('.sample-btn');
const editableText = document.getElementById('editableText');
const poetryCard = document.getElementById('poetryCard');
const canvasWrapper = document.getElementById('canvasWrapper');
const cardResizeHandle = document.getElementById('cardResizeHandle');
const btnExport = document.getElementById('btnExport');
const btnExportDropdownTrigger = document.getElementById('btnExportDropdownTrigger');
const exportCardDropdown = document.getElementById('exportCardDropdown');
const btnClear = document.getElementById('btnClear');
const btnReset = document.getElementById('btnReset');

// Document Mode & Grid controls
const tabDesignMode = document.getElementById('tabDesignMode');
const tabDocMode = document.getElementById('tabDocMode');
const btnToggleGrid = document.getElementById('btnToggleGrid');
const btnSaveDocAsBtn = document.getElementById('btnSaveDocAsBtn');
const btnSaveDocDropdownTrigger = document.getElementById('btnSaveDocDropdownTrigger');
const saveDocDropdown = document.getElementById('saveDocDropdown');
const saveDocModal = document.getElementById('saveDocModal');
const btnSaveModalClose = document.getElementById('btnSaveModalClose');
const btnExportPDF = document.getElementById('btnExportPDF');
const btnExportDocPNG = document.getElementById('btnExportDocPNG');
const btnExportTXT = document.getElementById('btnExportTXT');
const btnExportHTML = document.getElementById('btnExportHTML');
const btnPaperBlank = document.getElementById('btnPaperBlank');
const btnPaperLined = document.getElementById('btnPaperLined');
const btnPaperGrid = document.getElementById('btnPaperGrid');
const btnPaperThemeWhite = document.getElementById('btnPaperThemeWhite');
const btnPaperThemeCream = document.getElementById('btnPaperThemeCream');
const btnPaperThemeDark = document.getElementById('btnPaperThemeDark');

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
const selectFontWeight = document.getElementById('selectFontWeight');
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

function getActiveFontFileName() {
  if (!selectFontStyle) return 'file';
  let fontText = selectFontStyle.options[selectFontStyle.selectedIndex]?.text || 'file';
  let name = fontText.split('(')[0].trim();
  name = name.replace(/^مخصص:\s*/, '').replace(/^Custom:\s*/, '').trim();
  name = name.replace(/[\/\\:*?"<>|%]/g, '').trim();
  return name || 'file';
}

/* ==========================================================
   Arabic Diacritics (Harakat) Highlighter
   ========================================== */

function getCaretOffsetDOM(element) {
  const sel = window.getSelection();
  if (sel.rangeCount === 0) return 0;
  const range = sel.getRangeAt(0);
  const targetNode = range.startContainer;
  const targetOffset = range.startOffset;
  
  let offset = 0;
  let found = false;
  
  function walk(node) {
    if (found) return;
    if (node === targetNode) {
      if (node.nodeType === Node.TEXT_NODE) {
        const sub = node.nodeValue.substring(0, targetOffset);
        offset += sub.replace(/\u200D/g, '').length;
      } else {
        for (let i = 0; i < targetOffset && i < node.childNodes.length; i++) {
          walkTextNodesOnly(node.childNodes[i]);
        }
      }
      found = true;
      return;
    }
    
    if (node.nodeType === Node.TEXT_NODE) {
      offset += node.nodeValue.replace(/\u200D/g, '').length;
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        walk(node.childNodes[i]);
        if (found) return;
      }
    }
  }
  
  function walkTextNodesOnly(n) {
    if (n.nodeType === Node.TEXT_NODE) {
      offset += n.nodeValue.replace(/\u200D/g, '').length;
    } else {
      for (let i = 0; i < n.childNodes.length; i++) {
        walkTextNodesOnly(n.childNodes[i]);
      }
    }
  }
  
  walk(element);
  return offset;
}

function setCaretOffsetDOM(element, offset) {
  const sel = window.getSelection();
  const range = document.createRange();
  let currentOffset = 0;
  let found = false;
  
  function walk(node) {
    if (found) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const val = node.nodeValue;
      const cleanLen = val.replace(/\u200D/g, '').length;
      if (currentOffset + cleanLen >= offset) {
        let targetRelativeOffset = offset - currentOffset;
        let originalIndex = 0;
        let nonZwjCount = 0;
        while (originalIndex < val.length && nonZwjCount < targetRelativeOffset) {
          if (val[originalIndex] !== '\u200D') {
            nonZwjCount++;
          }
          originalIndex++;
        }
        while (originalIndex < val.length && val[originalIndex] === '\u200D') {
          originalIndex++;
        }
        
        range.setStart(node, originalIndex);
        range.collapse(true);
        found = true;
        return;
      }
      currentOffset += cleanLen;
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        walk(node.childNodes[i]);
        if (found) return;
      }
    }
  }
  
  walk(element);
  if (!found) {
    try {
      range.selectNodeContents(element);
      range.collapse(false);
      found = true;
    } catch (e) {
      console.warn('Failed to restore caret fallback:', e);
    }
  }
  
  if (found) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

function cleanAllZWJs(element) {
  const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  let node;
  while (node = walk.nextNode()) {
    textNodes.push(node);
  }
  textNodes.forEach(node => {
    if (node.nodeValue.includes('\u200D')) {
      node.nodeValue = node.nodeValue.replace(/\u200D/g, '');
    }
  });
}

function unwrapTashkeel(element) {
  const spans = element.querySelectorAll('.haraka');
  if (spans.length === 0) {
    const hasZWJ = element.textContent.includes('\u200D');
    if (hasZWJ) {
      cleanAllZWJs(element);
    }
    return;
  }
  
  let caretOffset = null;
  const isActive = (document.activeElement === element);
  if (isActive) {
    caretOffset = getCaretOffsetDOM(element);
  }
  
  spans.forEach(span => {
    const parent = span.parentNode;
    while (span.firstChild) {
      parent.insertBefore(span.firstChild, span);
    }
    parent.removeChild(span);
  });
  
  cleanAllZWJs(element);
  element.normalize();
  
  if (isActive && caretOffset !== null) {
    setCaretOffsetDOM(element, caretOffset);
  }
}

function wrapTashkeel(element) {
  if (!element) return;
  
  unwrapTashkeel(element);
  
  const coloringEnabled = toggleHarakatColor && toggleHarakatColor.checked;
  const hidingEnabled = toggleHideHarakat && toggleHideHarakat.checked;
  
  if (!coloringEnabled && !hidingEnabled) {
    return;
  }
  
  let caretOffset = null;
  const isActive = (document.activeElement === element);
  if (isActive) {
    caretOffset = getCaretOffsetDOM(element);
  }
  
  const HAS_TASHKEEL_REGEX = /[\u064B-\u0652\u0653\u0670]/;
  const TASHKEEL_REGEX = /([\u064B-\u0652\u0653\u0670])/g;
  
  const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  let node;
  while (node = walk.nextNode()) {
    textNodes.push(node);
  }
  
  for (let i = textNodes.length - 1; i >= 0; i--) {
    const textNode = textNodes[i];
    const text = textNode.nodeValue;
    if (HAS_TASHKEEL_REGEX.test(text)) {
      const parent = textNode.parentNode;
      const fragments = document.createDocumentFragment();
      let lastIndex = 0;
      
      TASHKEEL_REGEX.lastIndex = 0;
      let match;
      while ((match = TASHKEEL_REGEX.exec(text)) !== null) {
        const matchIndex = match.index;
        if (matchIndex > lastIndex) {
          fragments.appendChild(document.createTextNode(text.substring(lastIndex, matchIndex)));
        }
        
        fragments.appendChild(document.createTextNode('\u200D'));
        
        const span = document.createElement('span');
        span.className = 'haraka';
        span.textContent = match[0];
        fragments.appendChild(span);
        
        fragments.appendChild(document.createTextNode('\u200D'));
        
        lastIndex = TASHKEEL_REGEX.lastIndex;
      }
      
      if (lastIndex < text.length) {
        fragments.appendChild(document.createTextNode(text.substring(lastIndex)));
      }
      
      parent.replaceChild(fragments, textNode);
    }
  }
  
  if (isActive && caretOffset !== null) {
    setCaretOffsetDOM(element, caretOffset);
  }
}

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
  
  if (document.body.classList.contains('view-mode-document')) {
    return;
  }
  
  const symbol = getDividerSymbol();
  if (!symbol) return;
  
  const size = sliderDividerSize ? sliderDividerSize.value : 16;
  const dividerHTML = `<div class="verse-divider" contenteditable="false" style="--verse-divider-size: ${size}px;">${symbol}</div>`;
  
  const children = Array.from(editableText.childNodes);
  if (children.length === 0) return;
  
  const isBlock = node => {
    if (node.nodeType !== Node.ELEMENT_NODE) return false;
    const display = window.getComputedStyle(node).display;
    return display === 'block' || display === 'flex' || display === 'grid' || node.tagName === 'DIV' || node.tagName === 'P';
  };
  
  const hasBlocks = children.some(isBlock);
  
  if (!hasBlocks) {
    // Inline text with <br> tags
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
        const prev = children[i - 1];
        const next = children[i + 1];
        const isPrevBr = prev && prev.nodeType === Node.ELEMENT_NODE && prev.tagName === 'BR';
        const isNextBr = next && next.nodeType === Node.ELEMENT_NODE && next.tagName === 'BR';
        
        if (!isPrevBr && !isNextBr) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = dividerHTML;
          const dividerNode = tempDiv.firstChild;
          node.parentNode.replaceChild(dividerNode, node);
        }
      }
    }
  } else {
    // Block elements (like <div> or <p>)
    const newChildren = [];
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      newChildren.push(node);
      
      if (i < children.length - 1) {
        const nextNode = children[i + 1];
        if (isBlock(node) && isBlock(nextNode)) {
          const text1 = node.textContent.trim();
          const text2 = nextNode.textContent.trim();
          
          if (text1.length > 0 && text2.length > 0) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = dividerHTML;
            const dividerNode = tempDiv.firstChild;
            newChildren.push(dividerNode);
          }
        }
      }
    }
    editableText.innerHTML = '';
    newChildren.forEach(child => editableText.appendChild(child));
  }
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

function getCleanHTML() {
  if (!editableText) return '';
  const temp = document.createElement('div');
  temp.innerHTML = editableText.innerHTML;
  
  // Clean verse dividers
  const dividers = temp.querySelectorAll('.verse-divider');
  dividers.forEach(div => {
    const br = document.createElement('br');
    div.parentNode.replaceChild(br, div);
  });
  
  // Clean haraka wrappers
  const harakas = temp.querySelectorAll('.haraka');
  harakas.forEach(span => {
    const parent = span.parentNode;
    while (span.firstChild) {
      parent.insertBefore(span.firstChild, span);
    }
    parent.removeChild(span);
  });
  
  // Clean Zero-Width Joiners (ZWJs)
  let html = temp.innerHTML;
  html = html.replace(/\u200D/g, '');
  return html;
}

function updateWordCount() {
  if (!editableText) return;
  const text = editableText.innerText || editableText.textContent || '';
  const cleanText = text.trim();
  if (!cleanText) {
    const countEl = document.getElementById('wordCount');
    if (countEl) countEl.textContent = '0';
    return;
  }
  const words = cleanText.split(/\s+/);
  const count = words.filter(word => word.length > 0).length;
  const countEl = document.getElementById('wordCount');
  if (countEl) countEl.textContent = count;
}

function setEditableTextHTML(text) {
  if (!editableText) return;
  if (!text) {
    editableText.innerHTML = '';
    updateWordCount();
    return;
  }
  if (/<[a-z][\s\S]*>/i.test(text)) {
    editableText.innerHTML = text;
  } else {
    editableText.innerHTML = text.replace(/\n/g, '<br>');
  }
  wrapTashkeel(editableText);
  updateWordCount();
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
  carouselPages[currentPageIndex] = getCleanHTML();
  
  // Switch
  currentPageIndex = targetIndex;
  
  // Load target text
  const targetText = carouselPages[currentPageIndex];
  setEditableTextHTML(targetText);
  
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
  watermark: 'محرر الخطوط',
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
  
  // Detect language from URL parameter (?lang=en or ?lang=ar), fallback to localStorage, fallback to 'ar'
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  
  let savedSiteLang = 'ar';
  if (urlLang === 'ar' || urlLang === 'en') {
    savedSiteLang = urlLang;
    localStorage.setItem('diwan-site-lang', urlLang);
  } else {
    savedSiteLang = localStorage.getItem('diwan-site-lang') || 'ar';
  }
  
  updateUISiteLanguage(savedSiteLang);
  switchLanguage(savedSiteLang);

  // Restore grid background state
  if (localStorage.getItem('diwan-canvas-grid') === 'true') {
    if (canvasWrapper) canvasWrapper.classList.add('has-grid');
    if (btnToggleGrid) btnToggleGrid.classList.add('active');
  }

  // Restore Arabic Diacritics settings
  const harakatColorEnabled = localStorage.getItem('diwan-harakat-color-enabled') === 'true';
  const harakatColor = localStorage.getItem('diwan-harakat-color') || '#ff4a4a';
  const harakatHideEnabled = localStorage.getItem('diwan-harakat-hide-enabled') === 'true';

  if (toggleHarakatColor) {
    toggleHarakatColor.checked = harakatColorEnabled;
    if (harakatColorPickerGroup) {
      harakatColorPickerGroup.style.display = harakatColorEnabled ? 'flex' : 'none';
    }
  }
  if (pickerHarakatColor) {
    pickerHarakatColor.value = harakatColor;
    if (hexHarakatColor) hexHarakatColor.textContent = harakatColor;
    document.documentElement.style.setProperty('--haraka-color', harakatColor);
  }
  if (toggleHideHarakat) {
    toggleHideHarakat.checked = harakatHideEnabled;
    if (harakatHideEnabled) {
      document.body.classList.add('hide-harakat');
    } else {
      document.body.classList.remove('hide-harakat');
    }
  }
  wrapTashkeel(editableText);

  // Restore saved document text color
  const savedDocTextColor = localStorage.getItem('diwan-doc-text-color');
  if (savedDocTextColor) {
    updateDocTextColor(savedDocTextColor, false);
  } else {
    const savedTheme = localStorage.getItem('diwan-paper-theme') || 'dark';
    let defaultColor = '#111111';
    if (savedTheme === 'cream') defaultColor = '#2e261a';
    else if (savedTheme === 'dark') defaultColor = '#f4f4f5';
    updateDocTextColor(defaultColor, false);
  }

  // Restore saved view mode
  const savedMode = localStorage.getItem('diwan-view-mode') || 'design';
  switchViewMode(savedMode);
  updateWordCount();
});

// Setup Event Listeners
function setupEventListeners() {
  
  // 1. Mobile Sidebar Controls Toggle
  if (btnMobileToggle) btnMobileToggle.addEventListener('click', openSidebar);
  if (btnSidebarClose) btnSidebarClose.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  // 1b. Mobile More Actions Kebab Toggle
  if (btnMoreActions && headerActions) {
    btnMoreActions.addEventListener('click', (e) => {
      e.stopPropagation();
      headerActions.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      headerActions.classList.remove('active');
    });
    
    headerActions.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

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

  // 5. Text Alignment & Rich Formatting Buttons (Works like Word globally in all modes)
  const updateFormatButtonsState = () => {
    if (btnBold) {
      if (document.queryCommandState('bold')) {
        btnBold.classList.add('active');
      } else {
        btnBold.classList.remove('active');
      }
    }
    if (btnItalic) {
      if (document.queryCommandState('italic')) {
        btnItalic.classList.add('active');
      } else {
        btnItalic.classList.remove('active');
      }
    }
    if (btnUnderline) {
      if (document.queryCommandState('underline')) {
        btnUnderline.classList.add('active');
      } else {
        btnUnderline.classList.remove('active');
      }
    }
    
    // Also update alignment buttons active state based on command state
    if (alignButtons.length > 0) {
      alignButtons.forEach(btn => {
        const align = btn.dataset.align;
        let state = false;
        if (align === 'center') state = document.queryCommandState('justifyCenter');
        else if (align === 'right') state = document.queryCommandState('justifyRight');
        else if (align === 'left') state = document.queryCommandState('justifyLeft');
        else if (align === 'justify') state = document.queryCommandState('justifyFull');
        
        if (state) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  };

  if (editableText) {
    editableText.addEventListener('keyup', updateFormatButtonsState);
    editableText.addEventListener('mouseup', updateFormatButtonsState);
    editableText.addEventListener('focus', updateFormatButtonsState);
    document.addEventListener('selectionchange', () => {
      if (document.activeElement === editableText) {
        updateFormatButtonsState();
      }
    });
  }

  alignButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const align = btn.dataset.align;
      let cmd = 'justifyCenter';
      if (align === 'right') cmd = 'justifyRight';
      else if (align === 'left') cmd = 'justifyLeft';
      else if (align === 'justify') cmd = 'justifyFull';
      
      if (editableText) editableText.focus();
      document.execCommand(cmd, false, null);
      updateFormatButtonsState();
    });
  });

  if (btnBold) {
    btnBold.addEventListener('click', () => {
      if (editableText) editableText.focus();
      document.execCommand('bold', false, null);
      updateFormatButtonsState();
    });
  }
  if (btnItalic) {
    btnItalic.addEventListener('click', () => {
      if (editableText) editableText.focus();
      document.execCommand('italic', false, null);
      updateFormatButtonsState();
    });
  }
  if (btnUnderline) {
    btnUnderline.addEventListener('click', () => {
      if (editableText) editableText.focus();
      document.execCommand('underline', false, null);
      updateFormatButtonsState();
    });
  }

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
  if (pickerDocTextColor) {
    pickerDocTextColor.addEventListener('input', (e) => {
      updateDocTextColor(e.target.value);
    });
  }

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
        setEditableTextHTML(POETRY_SAMPLES[sampleKey]);
        carouselPages[currentPageIndex] = POETRY_SAMPLES[sampleKey];
        applyDividers();
        closeSidebar(); // auto-close sidebar on mobile for better focus
      }
    });
  });

  // 13. General Canvas Actions
  btnClear.addEventListener('click', () => {
    setEditableTextHTML('');
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

  // 13b. Split Export/Save Buttons & Dropdowns
  if (btnExport) {
    btnExport.addEventListener('click', exportPoetryCard);
  }
  
  if (btnSaveDocAsBtn) {
    btnSaveDocAsBtn.addEventListener('click', () => {
      exportDocAsPDF();
    });
  }

  // Toggle dropdowns
  if (btnExportDropdownTrigger && exportCardDropdown) {
    btnExportDropdownTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      exportCardDropdown.classList.toggle('active');
      if (saveDocDropdown) saveDocDropdown.classList.remove('active');
    });
  }

  if (btnSaveDocDropdownTrigger && saveDocDropdown) {
    btnSaveDocDropdownTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      saveDocDropdown.classList.toggle('active');
      if (exportCardDropdown) exportCardDropdown.classList.remove('active');
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    if (exportCardDropdown) exportCardDropdown.classList.remove('active');
    if (saveDocDropdown) saveDocDropdown.classList.remove('active');
  });

  // Handle Card Export Dropdown Item clicks
  if (exportCardDropdown) {
    exportCardDropdown.querySelectorAll('.split-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const format = e.currentTarget.getAttribute('data-format');
        exportCardDropdown.classList.remove('active');
        if (format === 'png' || format === 'jpeg' || format === 'webp' || format === 'pdf' || format === 'zip') {
          exportPoetryCard(format);
        }
      });
    });
  }

  // Handle Document Save Dropdown Item clicks
  if (saveDocDropdown) {
    saveDocDropdown.querySelectorAll('.split-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const format = e.currentTarget.getAttribute('data-format');
        saveDocDropdown.classList.remove('active');
        if (format === 'pdf') {
          exportDocAsPDF();
        } else if (format === 'docx') {
          exportDocAsDOCX();
        } else if (format === 'txt') {
          exportDocAsTXT();
        } else if (format === 'html') {
          exportDocAsHTML();
        }
      });
    });
  }

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
      carouselPages[currentPageIndex] = getCleanHTML();
      
      // Add page
      carouselPages.push('');
      currentPageIndex = carouselPages.length - 1;
      
      // Load empty page
      setEditableTextHTML('');
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
        setEditableTextHTML(targetText);
        
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

  // Editable text Focus/Blur hooks for safe dividers and diacritics
  if (editableText) {
    let inputDebounceTimeout;
    
    editableText.addEventListener('input', () => {
      carouselPages[currentPageIndex] = getCleanHTML();
      updateWordCount();
      
      const coloringEnabled = toggleHarakatColor && toggleHarakatColor.checked;
      const hidingEnabled = toggleHideHarakat && toggleHideHarakat.checked;
      
      if (coloringEnabled || hidingEnabled) {
        clearTimeout(inputDebounceTimeout);
        inputDebounceTimeout = setTimeout(() => {
          if (document.activeElement === editableText) {
            wrapTashkeel(editableText);
          }
        }, 1500);
      }
    });

    editableText.addEventListener('keydown', () => {
      // If there are still .haraka spans, unwrap them immediately on keypress so browser types on clean text
      if (editableText.querySelector('.haraka')) {
        unwrapTashkeel(editableText);
      }
    });

    editableText.addEventListener('focus', () => {
      removeDividers();
      unwrapTashkeel(editableText);
    });

    editableText.addEventListener('blur', () => {
      carouselPages[currentPageIndex] = getCleanHTML();
      applyDividers();
      wrapTashkeel(editableText);
      updateWordCount();
    });

    // Intercept copy event to sanitize clipboard data
    editableText.addEventListener('copy', (e) => {
      const selection = window.getSelection();
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const container = document.createElement('div');
        container.appendChild(range.cloneContents());
        
        // Clean spans and ZWJs
        const harakas = container.querySelectorAll('.haraka');
        harakas.forEach(span => {
          const parent = span.parentNode;
          while (span.firstChild) {
            parent.insertBefore(span.firstChild, span);
          }
          parent.removeChild(span);
        });
        
        let text = container.textContent;
        text = text.replace(/\u200D/g, ''); // Remove ZWJs
        
        e.clipboardData.setData('text/plain', text);
        e.preventDefault();
      }
    });
  }

  // Arabic Diacritics Event Listeners
  if (toggleHarakatColor) {
    toggleHarakatColor.addEventListener('change', (e) => {
      const checked = e.target.checked;
      localStorage.setItem('diwan-harakat-color-enabled', checked);
      if (checked) {
        if (harakatColorPickerGroup) harakatColorPickerGroup.style.display = 'flex';
      } else {
        if (harakatColorPickerGroup) harakatColorPickerGroup.style.display = 'none';
      }
      wrapTashkeel(editableText);
      carouselPages[currentPageIndex] = getCleanHTML();
    });
  }

  if (pickerHarakatColor) {
    pickerHarakatColor.addEventListener('input', (e) => {
      const val = e.target.value;
      document.documentElement.style.setProperty('--haraka-color', val);
      if (hexHarakatColor) hexHarakatColor.textContent = val;
      localStorage.setItem('diwan-harakat-color', val);
    });
    pickerHarakatColor.addEventListener('change', () => {
      carouselPages[currentPageIndex] = getCleanHTML();
    });
  }

  if (toggleHideHarakat) {
    toggleHideHarakat.addEventListener('change', (e) => {
      const checked = e.target.checked;
      localStorage.setItem('diwan-harakat-hide-enabled', checked);
      if (checked) {
        document.body.classList.add('hide-harakat');
      } else {
        document.body.classList.remove('hide-harakat');
      }
      wrapTashkeel(editableText);
      carouselPages[currentPageIndex] = getCleanHTML();
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
  const btnToggleWritingLang = document.getElementById('btnToggleWritingLang');
  if (btnToggleWritingLang) {
    btnToggleWritingLang.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
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
  if (selectFontWeight) {
    selectFontWeight.addEventListener('change', () => {
      const weight = selectFontWeight.value;
      document.documentElement.style.setProperty('--card-font-weight', weight);
    });
  }

  // Expose updateOrnaments helper to the window scope for access by other functions (like applyDefaults)
  window.updateOrnaments = updateOrnaments;

  // 15. FAQ Accordion Event Listeners
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        // If it wasn't active, open it
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 16. Document Mode View Switcher
  if (tabDesignMode) {
    tabDesignMode.addEventListener('click', () => switchViewMode('design'));
  }
  if (tabDocMode) {
    tabDocMode.addEventListener('click', () => switchViewMode('document'));
  }
  
  // 17. Canvas Background Checkerboard Toggle
  if (btnToggleGrid) {
    btnToggleGrid.addEventListener('click', () => {
      if (canvasWrapper) {
        canvasWrapper.classList.toggle('has-grid');
        btnToggleGrid.classList.toggle('active');
        localStorage.setItem('diwan-canvas-grid', canvasWrapper.classList.contains('has-grid'));
      }
    });
  }

  // 18. Document Paper Styling
  if (btnPaperBlank) btnPaperBlank.addEventListener('click', () => setPaperStyle('blank'));
  if (btnPaperLined) btnPaperLined.addEventListener('click', () => setPaperStyle('lined'));
  if (btnPaperGrid) btnPaperGrid.addEventListener('click', () => setPaperStyle('grid'));

  // 19. Document Paper Color Themes
  if (btnPaperThemeWhite) btnPaperThemeWhite.addEventListener('click', () => {
    setPaperTheme('white');
    updateDocTextColor('#111111');
  });
  if (btnPaperThemeCream) btnPaperThemeCream.addEventListener('click', () => {
    setPaperTheme('cream');
    updateDocTextColor('#2e261a');
  });
  if (btnPaperThemeDark) btnPaperThemeDark.addEventListener('click', () => {
    setPaperTheme('dark');
    updateDocTextColor('#f4f4f5');
  });

  // 20. Save As Modal & Export Actions
  if (saveDocModal) {
    const closeModal = () => {
      saveDocModal.classList.remove('active');
      setTimeout(() => {
        saveDocModal.style.display = 'none';
      }, 300);
    };

    if (btnSaveModalClose) {
      btnSaveModalClose.addEventListener('click', closeModal);
    }

    saveDocModal.addEventListener('click', (e) => {
      if (e.target === saveDocModal) {
        closeModal();
      }
    });

    // Option 1: PDF Export / Print
    if (btnExportPDF) {
      btnExportPDF.addEventListener('click', () => {
        closeModal();
        exportDocAsPDF();
      });
    }

    // Option 2: PNG Image Export
    if (btnExportDocPNG) {
      btnExportDocPNG.addEventListener('click', () => {
        closeModal();
        setTimeout(() => {
          if (btnExport) {
            btnExport.click();
          }
        }, 350);
      });
    }

    // Option 3: Text file (TXT)
    if (btnExportTXT) {
      btnExportTXT.addEventListener('click', () => {
        closeModal();
        const temp = document.createElement('div');
        temp.innerHTML = editableText.innerHTML;
        temp.querySelectorAll('.verse-divider').forEach(el => el.remove());
        let bodyText = temp.innerText.trim();
        const blob = new Blob([bodyText], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${getActiveFontFileName()}.txt`;
        link.click();
        URL.revokeObjectURL(link.href);
      });
    }

    // Option 4: HTML File (Word-compatible)
    if (btnExportHTML) {
      btnExportHTML.addEventListener('click', () => {
        closeModal();
        const temp = document.createElement('div');
        temp.innerHTML = editableText.innerHTML;
        temp.querySelectorAll('.verse-divider').forEach(el => el.remove());
        let bodyHtml = temp.innerHTML;
        const paperTheme = localStorage.getItem('diwan-paper-theme') || 'dark';
        let bgStyle = 'background: #ffffff; color: #111111;';
        if (paperTheme === 'cream') bgStyle = 'background: #fcf8f0; color: #2e261a;';
        else if (paperTheme === 'dark') bgStyle = 'background: #18181b; color: #f4f4f5;';
        const lang = localStorage.getItem('siteLanguage') || 'ar';
        const dir = lang === 'en' ? 'ltr' : 'rtl';

        const fullHtml = `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    body {
      font-family: 'Cairo', 'Amiri', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 50px;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.8;
      ${bgStyle}
    }
    .content {
      white-space: pre-wrap;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="content">${bodyHtml}</div>
</body>
</html>`;

        const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${getActiveFontFileName()}.html`;
        link.click();
        URL.revokeObjectURL(link.href);
      });
    }
  }

  // 21. Document Mode Click-to-Focus
  if (poetryCard && editableText) {
    poetryCard.addEventListener('click', (e) => {
      if (document.body.classList.contains('view-mode-document')) {
        if (e.target.closest('#editableText')) {
          return;
        }
        if (document.activeElement !== editableText) {
          editableText.focus();
          
          const range = document.createRange();
          const sel = window.getSelection();
          range.selectNodeContents(editableText);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    });

    // Word-like "Click and Type" Double-click handler
    poetryCard.addEventListener('dblclick', (e) => {
      if (!document.body.classList.contains('view-mode-document')) return;
      
      const rect = editableText.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const clickX = e.clientX - rect.left;
      const canvasWidth = rect.width;
      
      // If clicked on an existing block child that is empty or has only <br>:
      const target = e.target;
      const targetBlock = target.closest('#editableText > div, #editableText > p');
      
      if (targetBlock && (targetBlock.textContent.trim() === '' || targetBlock.innerHTML === '<br>')) {
        const relativeX = clickX / canvasWidth;
        let align = 'right';
        if (currentLang === 'en') {
          align = relativeX < 0.3 ? 'left' : (relativeX > 0.7 ? 'right' : 'center');
        } else {
          align = relativeX > 0.7 ? 'right' : (relativeX < 0.3 ? 'left' : 'center');
        }
        targetBlock.style.textAlign = align;
        carouselPages[currentPageIndex] = getCleanHTML();
        
        // Update format buttons alignment state
        updateFormatButtonsState();
        
        e.preventDefault();
        return;
      }
      
      // Let's find the bottom of the current text content
      let contentHeight = 0;
      if (editableText.lastChild) {
        try {
          const range = document.createRange();
          range.selectNode(editableText.lastChild);
          const rangeRect = range.getBoundingClientRect();
          contentHeight = rangeRect.bottom - rect.top;
        } catch (err) {
          contentHeight = rect.height;
        }
      }
      
      // If click is below existing text content
      if (clickY > contentHeight + 15) {
        const style = window.getComputedStyle(editableText);
        const fontSize = parseFloat(style.fontSize) || 16;
        const lineHeight = parseFloat(style.lineHeight) || (fontSize * 1.5);
        
        const distance = clickY - contentHeight;
        const linesToAdd = Math.max(1, Math.floor(distance / lineHeight));
        
        removeDividers();
        
        // Ensure editableText is not empty. If it is empty and has no child nodes, create a default block.
        if (editableText.childNodes.length === 0) {
          const firstDiv = document.createElement('div');
          firstDiv.innerHTML = '<br>';
          editableText.appendChild(firstDiv);
        }
        
        for (let i = 0; i < linesToAdd; i++) {
          const div = document.createElement('div');
          div.innerHTML = '<br>';
          editableText.appendChild(div);
        }
        
        const lastDiv = editableText.lastChild;
        if (lastDiv) {
          const relativeX = clickX / canvasWidth;
          let align = 'right'; // default for RTL Arabic
          if (currentLang === 'en') {
            align = relativeX < 0.3 ? 'left' : (relativeX > 0.7 ? 'right' : 'center');
          } else {
            align = relativeX > 0.7 ? 'right' : (relativeX < 0.3 ? 'left' : 'center');
          }
          
          lastDiv.style.textAlign = align;
          
          // Focus the cursor inside the last added line
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(lastDiv);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
          lastDiv.focus();
        }
        
        carouselPages[currentPageIndex] = getCleanHTML();
        applyDividers();
        updateWordCount();
        
        // Update format buttons alignment state
        updateFormatButtonsState();
        
        // Prevent default double click selection behavior
        e.preventDefault();
      }
    });
  }
}

// Switch View Mode (Design Card vs Word Document)
function switchViewMode(mode) {
  if (mode === 'document') {
    document.body.classList.add('view-mode-document');
    document.body.classList.remove('view-mode-design');
    if (tabDocMode) tabDocMode.classList.add('active');
    if (tabDesignMode) tabDesignMode.classList.remove('active');
    
    if (editableText) {
      editableText.setAttribute('placeholder', currentSiteLang === 'ar' ? 'اكتب مستندك هنا مثل الـ Word...' : 'Start typing your document here like Microsoft Word...');
    }

    // Apply default paper class if none are set
    const savedStyle = localStorage.getItem('diwan-paper-style') || 'blank';
    const savedTheme = localStorage.getItem('diwan-paper-theme') || 'dark';
    setPaperStyle(savedStyle);
    setPaperTheme(savedTheme);
  } else {
    document.body.classList.remove('view-mode-document');
    document.body.classList.add('view-mode-design');
    if (tabDesignMode) tabDesignMode.classList.add('active');
    if (tabDocMode) tabDocMode.classList.remove('active');
    
    if (editableText) {
      editableText.removeAttribute('placeholder');
    }

    // Cleanup paper classes from card
    if (poetryCard) {
      poetryCard.classList.remove('paper-white', 'paper-cream', 'paper-dark', 'paper-style-blank', 'paper-style-lined', 'paper-style-grid');
    }
  }
  localStorage.setItem('diwan-view-mode', mode);

  applyDividers();
  wrapTashkeel(editableText);

  // Track event in Google Analytics if loaded
  if (typeof gtag === 'function') {
    gtag('event', 'switch_view_mode', {
      'view_mode': mode
    });
  }
}

// Set Paper Style (Blank / Lined / Grid)
function setPaperStyle(style) {
  if (!poetryCard) return;
  poetryCard.classList.remove('paper-style-blank', 'paper-style-lined', 'paper-style-grid');
  poetryCard.classList.add(`paper-style-${style}`);
  
  document.querySelectorAll('.page-style-grid .ratio-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btnPaper${style.charAt(0).toUpperCase() + style.slice(1)}`);
  if (activeBtn) activeBtn.classList.add('active');
  localStorage.setItem('diwan-paper-style', style);
}

// Set Paper Theme (White / Cream / Dark)
function setPaperTheme(theme) {
  if (!poetryCard) return;
  poetryCard.classList.remove('paper-white', 'paper-cream', 'paper-dark');
  poetryCard.classList.add(`paper-${theme}`);
  
  document.querySelectorAll('.page-theme-grid .ratio-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btnPaperTheme${theme.charAt(0).toUpperCase() + theme.slice(1)}`);
  if (activeBtn) activeBtn.classList.add('active');
  localStorage.setItem('diwan-paper-theme', theme);
}

// Update Document Text Color in DOM and localStorage
function updateDocTextColor(color, saveToLocalStorage = true) {
  if (pickerDocTextColor) pickerDocTextColor.value = color;
  if (hexDocTextColor) hexDocTextColor.textContent = color.toUpperCase();
  document.documentElement.style.setProperty('--doc-text-color', color);
  if (saveToLocalStorage) {
    localStorage.setItem('diwan-doc-text-color', color);
  }
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
}

function closeSidebar() {
  sidebarPanel.classList.remove('active');
  sidebarOverlay.classList.remove('active');
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
      const font = new FontFace(customName, arrayBuffer, {
        weight: '100 900',
        style: 'normal'
      });
      
      updateFontStatus(null, "جاري تسجيل الخط بالمتصفح...");
      const loaded = await font.load();
      document.fonts.add(loaded);
      
      // Also inject a dynamic <style> block with base64 for html-to-image export compatibility
      const base64Reader = new FileReader();
      base64Reader.onload = function(evt) {
        const base64DataUrl = evt.target.result;
        let styleEl = document.getElementById('custom-font-style');
        if (!styleEl) {
          styleEl = document.createElement('style');
          styleEl.id = 'custom-font-style';
          document.head.appendChild(styleEl);
        }
        styleEl.innerHTML = `
          @font-face {
            font-family: 'ArabicPoetryCustomUpload';
            src: url('${base64DataUrl}') format('opentype');
            font-weight: 100 900;
            font-style: normal;
          }
        `;
      };
      base64Reader.readAsDataURL(file);

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

  if (selectFontWeight) {
    selectFontWeight.value = '400';
  }
  document.documentElement.style.setProperty('--card-font-weight', '400');

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
  setEditableTextHTML(DEFAULTS.sampleText);

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
  updateWritingLangButtonText();
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

  // Reset Arabic Diacritics
  if (toggleHarakatColor) {
    toggleHarakatColor.checked = false;
    localStorage.removeItem('diwan-harakat-color-enabled');
    if (harakatColorPickerGroup) harakatColorPickerGroup.style.display = 'none';
  }
  if (pickerHarakatColor) {
    pickerHarakatColor.value = '#ff4a4a';
    if (hexHarakatColor) hexHarakatColor.textContent = '#ff4a4a';
    document.documentElement.style.setProperty('--haraka-color', '#ff4a4a');
    localStorage.removeItem('diwan-harakat-color');
  }
  if (toggleHideHarakat) {
    toggleHideHarakat.checked = false;
    document.body.classList.remove('hide-harakat');
    localStorage.removeItem('diwan-harakat-hide-enabled');
  }
  wrapTashkeel(editableText);

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

// Export Card as Image (PNG/JPEG/WebP)
// Helper to capture poetryCard at a specific scale and restore styling afterwards
function capturePage(format = 'png') {
  return new Promise((resolve, reject) => {
    // 1. Get exact active layout dimensions of the poetry card on screen
    const rect = poetryCard.getBoundingClientRect();
    const exportWidth = rect.width;
    const exportHeight = rect.height;

    // 2. Clone the live element to perform off-screen background rendering without visual shifts
    const clone = poetryCard.cloneNode(true);
    clone.id = 'poetryCardClone';
    clone.classList.add('is-exporting-card');

    // Force the exact layout dimensions on the clone to guarantee matching rendering & wrapping
    clone.style.width = `${exportWidth}px`;
    clone.style.height = `${exportHeight}px`;
    clone.style.minWidth = `${exportWidth}px`;
    clone.style.maxWidth = `${exportWidth}px`;
    clone.style.minHeight = `${exportHeight}px`;
    clone.style.maxHeight = `${exportHeight}px`;

    // Create an off-screen wrapper to compute layout without shifting live DOM
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `position: absolute; left: -9999px; top: -9999px; width: ${exportWidth}px; height: ${exportHeight}px; overflow: hidden; pointer-events: none; z-index: -9999;`;
    wrapper.appendChild(clone);

    // Append to document.body so the browser can calculate its layout/metrics
    document.body.appendChild(wrapper);

    // Wait for fonts to ensure proper rendering inside the canvas context
    document.fonts.ready.then(() => {
      // Wait a brief tick to ensure layout recalculation by browser
      setTimeout(() => {
        const options = {
          width: exportWidth,
          height: exportHeight,
          pixelRatio: 3.0, // High-definition 3x resolution scale (perfect for prints & sharing)
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
            borderRadius: '0',
            position: 'relative', // Override absolute off-screen positioning for render context
            left: '0',
            top: '0'
          }
        };

        if (format === 'jpeg') {
          options.backgroundColor = '#121216';
          htmlToImage.toJpeg(clone, options).then(dataUrl => {
            wrapper.remove();
            resolve(dataUrl);
          }).catch(err => {
            wrapper.remove();
            reject(err);
          });
        } else if (format === 'webp') {
          htmlToImage.toCanvas(clone, options).then(canvas => {
            const dataUrl = canvas.toDataURL('image/webp', 0.95);
            wrapper.remove();
            resolve(dataUrl);
          }).catch(err => {
            wrapper.remove();
            reject(err);
          });
        } else {
          // default is png
          htmlToImage.toPng(clone, options).then(dataUrl => {
            wrapper.remove();
            resolve(dataUrl);
          }).catch(err => {
            wrapper.remove();
            reject(err);
          });
        }
      }, 100);
    });
  });
}

// Asynchronous multi-page batch export
async function exportPoetryCard(format = 'png') {
  if (typeof format !== 'string') {
    format = 'png';
  }
  btnExport.disabled = true;
  const originalHTML = btnExport.innerHTML;
  btnExport.innerHTML = '<i class="fa-solid fa-spinner fa-spin icon"></i> جاري الحفظ...';

  // Save active page's current text
  carouselPages[currentPageIndex] = getCleanHTML();

  // Close mobile sidebar to clean viewport just in case
  closeSidebar();

  const originalPageIndex = currentPageIndex;

  try {
    if (format === 'zip') {
      const zip = new JSZip();
      for (let i = 0; i < carouselPages.length; i++) {
        const compressingText = uiTranslations[currentSiteLang]?.export_compressing || 'جاري ضغط صفحة';
        btnExport.innerHTML = `<i class="fa-solid fa-spinner fa-spin icon"></i> ${compressingText} ${i + 1}/${carouselPages.length}...`;
        
        // Temporarily switch page
        currentPageIndex = i;
        const targetText = carouselPages[i];
        setEditableTextHTML(targetText);
        updateCardPageIndicator();
        applyDividers();
        
        // Capture page as PNG
        const dataUrl = await capturePage('png');
        const base64Data = dataUrl.split(',')[1];
        zip.file(`poetry_card_${i + 1}.png`, base64Data, {base64: true});
      }
      
      const finalCompressingText = currentSiteLang === 'ar' ? 'جاري إنشاء ملف ZIP...' : 'Generating ZIP...';
      btnExport.innerHTML = `<i class="fa-solid fa-spinner fa-spin icon"></i> ${finalCompressingText}`;
      const content = await zip.generateAsync({type: 'blob'});
      
      const downloadLink = document.createElement('a');
      downloadLink.download = `${getActiveFontFileName()}.zip`;
      downloadLink.href = URL.createObjectURL(content);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else if (carouselPages.length <= 1) {
      // Single page standard export
      if (format === 'pdf') {
        const opt = {
          margin: 0,
          filename: `${getActiveFontFileName()}.pdf`,
          image: { type: 'jpeg', quality: 1 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'px', format: [poetryCard.offsetWidth, poetryCard.offsetHeight], orientation: poetryCard.offsetWidth > poetryCard.offsetHeight ? 'landscape' : 'portrait' }
        };
        await html2pdf().set(opt).from(poetryCard).save();
      } else {
        const dataUrl = await capturePage(format);
        const downloadLink = document.createElement('a');
        downloadLink.download = `${getActiveFontFileName()}.${format}`;
        downloadLink.href = dataUrl;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    } else {
      // Multi-page export
      if (format === 'pdf') {
        const opt = {
          margin: 0,
          filename: `${getActiveFontFileName()}.pdf`,
          image: { type: 'jpeg', quality: 1 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'px', format: [poetryCard.offsetWidth, poetryCard.offsetHeight], orientation: poetryCard.offsetWidth > poetryCard.offsetHeight ? 'landscape' : 'portrait' }
        };
        // Multi-page PDF requires a wrapper container for html2pdf
        const pdfWorker = html2pdf().set(opt);
        for (let i = 0; i < carouselPages.length; i++) {
          btnExport.innerHTML = `<i class="fa-solid fa-spinner fa-spin icon"></i> تصدير صفحة ${i + 1}/${carouselPages.length}...`;
          currentPageIndex = i;
          setEditableTextHTML(carouselPages[i]);
          updateCardPageIndicator();
          applyDividers();
          
          if (i === 0) {
            await pdfWorker.from(poetryCard).toPdf().get('pdf');
          } else {
            await pdfWorker.get('pdf').then(pdf => { pdf.addPage(); }).from(poetryCard).toContainer().toCanvas().toPdf().get('pdf');
          }
        }
        await pdfWorker.save();
      } else {
        for (let i = 0; i < carouselPages.length; i++) {
          btnExport.innerHTML = `<i class="fa-solid fa-spinner fa-spin icon"></i> تصدير صفحة ${i + 1}/${carouselPages.length}...`;
          
          // Temporarily switch page
          currentPageIndex = i;
          const targetText = carouselPages[i];
          setEditableTextHTML(targetText);
          updateCardPageIndicator();
          applyDividers();
          
          // Capture
          const dataUrl = await capturePage(format);
          
          // Download
          const downloadLink = document.createElement('a');
          downloadLink.download = `${getActiveFontFileName()}_صفحة_${i + 1}.${format}`;
          downloadLink.href = dataUrl;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          
          // Wait 300ms to prevent browser download triggers overlapping
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
    }
  } catch (err) {
    console.error(err);
    alert(uiTranslations[currentSiteLang]?.export_error || "حدث خطأ أثناء استخراج الملف. الرجاء إعادة المحاولة.");
  } finally {
    // Restore original active page
    currentPageIndex = originalPageIndex;
    const targetText = carouselPages[currentPageIndex];
    setEditableTextHTML(targetText);
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

// Update text content of the writing language button dynamically
function updateWritingLangButtonText() {
  const btnToggleWritingLang = document.getElementById('btnToggleWritingLang');
  if (btnToggleWritingLang) {
    const textSpan = btnToggleWritingLang.querySelector('.writing-lang-text');
    if (textSpan) {
      if (currentSiteLang === 'ar') {
        textSpan.textContent = currentLang === 'ar' ? 'الكتابة: العربية' : 'الكتابة: الإنجليزية';
      } else {
        textSpan.textContent = currentLang === 'ar' ? 'Writing: Arabic' : 'Writing: English';
      }
    }
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
      setEditableTextHTML(POETRY_SAMPLES.shakespeare);
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
    const rawTextIndex = getRawPoetryText();
    if (rawTextIndex.includes('Shall I compare')) {
      setEditableTextHTML(POETRY_SAMPLES.mutanabbi);
      carouselPages[currentPageIndex] = POETRY_SAMPLES.mutanabbi;
    }
  }
  
  updateWritingLangButtonText();
  applyDividers();
}

// Translation mapping for English and Arabic interface
const uiTranslations = {
  ar: {
    logo_title: "مُحَرِّرُ الخُطُوط",
    logo_subtitle: "أداة كتابة واختبار وتصميم الخطوط العربية والإنجليزية",
    mode_simple: "الوضع المبسط",
    mode_advanced: "الوضع المتقدم",
    writing_lang_title: "لغة الكتابة",
    writing_lang_ar: "عربي",
    writing_lang_en: "إنجليزي",
    writing_lang_tooltip: "تغيير لغة الكتابة (عربي / English)",
    font_loader_title: "تحميل خط مخصص",
    font_loader_desc: "اسحب ملف الخط الخاص بك هنا أو اضغط للاختيار لتخصيص البطاقة تماماً.",
    drag_font_hint: "اختر ملف الخط أو اسحبه هنا",
    font_format_hint: "يدعم صيغ OTF, TTF, WOFF, WOFF2",
    font_status_default: "لم يتم تحميل خط خارجي بعد",
    card_dimensions: "أبعاد وتناسب البطاقة",
    card_dimensions_desc: "اختر أبعاد البطاقة لتناسب المشاركة عبر وسائل التواصل.",
    ratio_auto: "تلقائي (حسب المحتوى)",
    ratio_square: "مربع (1:1)",
    ratio_story: "طولي (9:16)",
    ratio_landscape: "عرضي (16:9)",
    typography_settings: "تنسيق وحجم الخطوط",
    font_style_label: "نوع الخط",
    font_weight_label: "سمك الخط",
    weight_light: "خفيف",
    weight_regular: "عادي",
    weight_medium: "متوسط",
    weight_semibold: "شبه سميك",
    weight_bold: "سميك",
    weight_black: "سميك جداً",
    font_size_label: "حجم الخط",
    line_height_label: "تباعد الأسطر",
    letter_spacing_label: "تباعد الحروف للإنجليزية",
    text_alignment: "محاذاة النص",
    text_formatting: "تنسيق النص",
    format_bold: "غامق",
    format_italic: "مائل",
    format_underline: "تحته خط",
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
    delete_page_title: "حذف الصفحة الحالية",
    grid_btn_title: "تشغيل/إيقاف شبكة الخلفية",
    show_page_numbers_label: "إظهار أرقام الصفحات على الصورة",
    samples_section_title: "نماذج نصوص جاهزة",
    sample_mutanabbi: "أبو الطيب المتنبي",
    sample_shawqi: "أمير الشعراء أحمد شوقي",
    sample_antara: "عنترة بن شداد",
    sample_imru: "امرؤ القيس",
    sample_custom_poetry: "نص منسق (شطرين)",
    export_btn: "تحميل كـ PNG",
    active_font_lbl: "الخط النشط: ",
    word_counter_lbl: "عدد الكلمات: ",
    default_font_name: "الخط العربي الافتراضي",
    clear_btn_text: "مسح",
    reset_btn_text: "ضبط",
    app_footer_desc: "محرر الخطوط - أداة تفاعلية لتصميم واختبار الخطوط العربية والإنجليزية. اكتب نصوصك، جرب مختلف الأنماط، ونسق تصاميمك بدقة واحترافية.",
    align_center: "محاذاة للوسط",
    align_left: "محاذاة لليسار",
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
    export_error: "حدث خطأ أثناء استخراج الصورة. الرجاء إعادة المحاولة.",
    faq_title: "الأسئلة الشائعة ودليل الاستخدام",
    faq_subtitle: "كل ما تود معرفته عن كيفية استخدام محرر الخطوط لتحسين وتجربة خطوطك.",
    faq_q1: "ما هو موقع محرر الخطوط؟ وكيف يساعدني؟",
    faq_a1: "محرر الخطوط هو أفضل أداة مجانية تفاعلية لتجربة واختبار الخطوط العربية والإنجليزية أونلاين مباشرة عبر المتصفح. يتيح للمصممين وعشاق التايبوغرافي كتابة النصوص الشعرية بالتشكيل، وتصميم المخطوطات والاقتباسات، وتنسيقها مع تغيير أحجامها وسماكتها وإضافة نقوش وزخارف، ثم تصديرها كصورة عالية الدقة بخلفية شفافة جاهزة لبرامج التصميم.",
    faq_q2: "هل يمكنني رفع خطوطي الخاصة (OTF, TTF, WOFF) واختبارها هنا؟",
    faq_a2: "نعم بالتأكيد! يعتبر موقعنا منصة مثالية لتجربة الخطوط قبل تحميلها واستخدامها. يدعم المحرر سحب وإفلات أي ملف خط مخصص من جهازك بالصيغ الشائعة: <strong>TTF, OTF, WOFF, WOFF2</strong>. يتم استعراض الخط محلياً في متصفحك بشكل آمن 100% لتصميم مخطوطاتك بسرعة ودون الحاجة لتثبيت برامج.",
    faq_q3: "ما هي الأوزان والخطوط المتغيرة (Variable Fonts)؟ وهل يدعمها الموقع؟",
    faq_a3: "الخطوط المتغيرة هي خطوط ويب حديثة تدمج جميع الأوزان وسماكات الحروف في ملف واحد. يدعم موقعنا هذه التقنية بشكل كامل، حيث يتيح لك اختيار سمك الخط بدقة من الخفيف (300) إلى السميك جداً (900) عبر القائمة المنسدلة في الإعدادات المتقدمة.",
    faq_q4: "لماذا تظهر بعض الخطوط العربية مقطوعة أو متداخلة مع الزخارف؟ وكيف أحل ذلك؟",
    faq_a4: "بعض الخطوط العربية الكلاسيكية (مثل الديواني والثلث) تحتوي على حروف صاعدة أو هابطة ممتدة بشكل كبير. لحل تداخلها، يمكنك استخدام خيار <strong>تباعد الأسطر (Line Height)</strong> في قائمة التنسيق لزيادة المسافة الرأسية، أو ضبط حجم الخط ليتناسب تماماً مع أبعاد البطاقة.",
    faq_q5: "هل الخطوط التي أرفعها يتم حفظها أو مشاركتها مع أي جهة؟",
    faq_a5: "خصوصيتك هي أولويتنا القصوى. جميع عمليات معالجة وتحميل الخطوط والملفات التي تقوم برفعها تتم بالكامل <strong>داخل متصفح جهازك فقط (Client-side)</strong>. لا نقوم بحفظ أي ملفات على خوادمنا، مما يضمن أمان وخصوصية ملفاتك وخطوطك التجارية.",
    faq_q6: "هل يمكنني كتابة وتنسيق مستندات أو نصوص طويلة؟",
    faq_a6: "نعم! يحتوي الموقع على <strong>وضع المستند (Word)</strong> والذي يُعد بديلاً ذكياً لكتابة وتنسيق مستندات بالخطوط العربية الجميلة. يمكنك كتابة صفحات كاملة، وتنسيق النص، واختيار نوع الورق، وتصدير الملف بصيغة Word أو مستند PDF جاهز للطباعة.",
    faq_q7: "هل يمكنني عمل أكثر من صورة أو تصميم عدة صفحات معاً؟",
    faq_a7: "نعم، يمكنك استخدام ميزة <strong>الصفحات المتعددة (Carousel)</strong> الموجودة في الشريط العلوي لإضافة عدة بطاقات، وتصميم كل صفحة على حدة، ثم تحميلها دفعة واحدة كملف مضغوط (ZIP) أو دمجها في ملف PDF واحد.",
    faq_q8: "هل يدعم المحرر تغيير لون النص والتشكيل العربي؟",
    faq_a8: "بالتأكيد! من خلال الإعدادات المتقدمة يمكنك التحكم الكامل في التايبوغرافي وتغيير لون النص. كما يمكنك إخفاء الحركات بضغطة زر (لشبك الحروف العربية الكلاسيكية بسلاسة) أو تلوين التشكيل بلون مختلف عن النص الأساسي لإخراج مخطوطة فنية احترافية.",
    tab_design_mode: "بطاقة تصميم",
    tab_doc_mode: "صفحة مستند (Word)",
    doc_page_settings: "تنسيق ورقة الكتابة",
    doc_page_settings_desc: "اختر نمط الورقة المفضل لديك للكتابة والطباعة.",
    paper_style_lbl: "نمط الورقة",
    paper_blank: "بيضاء (سادة)",
    paper_lined: "مسطرة",
    paper_grid: "مربعات",
    paper_theme_lbl: "لون الورقة",
    paper_theme_white: "أبيض",
    paper_theme_cream: "ورق شاموا",
    paper_theme_dark: "داكن",
    print_btn: "طباعة أو حفظ PDF",
    save_doc_as_btn: "حفظ كـ...",
    save_modal_title: "حفظ وتصدير المستند",
    save_modal_desc: "اختر الصيغة المفضلة لتصدير وحفظ مستندك الحالي:",
    save_pdf_title: "تصدير كملف PDF / طباعة",
    save_pdf_desc: "توليد ملف مستند جاهز للطباعة أو الحفظ كـ PDF",
    save_png_title: "حفظ كصورة PNG",
    save_png_desc: "تصدير الصفحة الحالية كصورة رقمية عالية الجودة",
    save_txt_title: "ملف نصي عادي (TXT)",
    save_txt_desc: "حفظ الكلمات كملف نصي بسيط بدون تنسيقات",
    save_html_title: "تصدير كملف صفحة (HTML)",
    save_html_desc: "تصدير بتنسيقات الـ HTML المتوافقة مع برامج النصوص",
    format_png: "صورة PNG",
    format_jpeg: "صورة JPEG",
    format_webp: "صورة WebP",
    format_pdf: "ملف PDF",
    format_zip: "ألبوم صور (ZIP)",
    export_compressing: "جاري ضغط صفحة",
    doc_text_color_lbl: "لون النص"
  },
  en: {
    logo_title: "Font Editor",
    tab_design_mode: "Design Card",
    tab_doc_mode: "Document Page (Word)",
    doc_page_settings: "Paper Sheet Settings",
    doc_page_settings_desc: "Select your preferred paper style for writing and printing.",
    paper_style_lbl: "Paper Style",
    paper_blank: "Blank",
    paper_lined: "Lined",
    paper_grid: "Grid",
    paper_theme_lbl: "Paper Theme",
    paper_theme_white: "White",
    paper_theme_cream: "Cream",
    paper_theme_dark: "Dark",
    doc_text_color_lbl: "Text Color",
    print_btn: "Print or Export PDF",
    save_doc_as_btn: "Save As...",
    save_modal_title: "Save & Export Document",
    save_modal_desc: "Select your preferred format to export and save your current document:",
    save_pdf_title: "Export as PDF / Print",
    save_pdf_desc: "Generate document file ready to print or save as PDF",
    save_png_title: "Save as PNG Image",
    save_png_desc: "Export current page as high-quality digital image",
    save_txt_title: "Plain Text File (TXT)",
    save_txt_desc: "Save words as simple text file without formatting",
    save_html_title: "Export as Page File (HTML)",
    save_html_desc: "Export formatted HTML document compatible with word processors",
    logo_subtitle: "Arabic & English Font Editor & Tester",
    mode_simple: "Simple Mode",
    mode_advanced: "Advanced Mode",
    writing_lang_title: "Writing Language",
    writing_lang_ar: "Arabic",
    writing_lang_en: "English",
    writing_lang_tooltip: "Toggle Writing Language (Arabic / English)",
    font_loader_title: "Load Custom Font",
    font_loader_desc: "Drag your font file here or click to browse to load custom typography.",
    drag_font_hint: "Choose a font file or drag it here",
    font_format_hint: "Supports OTF, TTF, WOFF, WOFF2 formats",
    font_status_default: "No external font loaded yet",
    card_dimensions: "Card Dimensions",
    card_dimensions_desc: "Choose card aspect ratio suitable for social media.",
    ratio_auto: "Auto (Content-fit)",
    ratio_square: "Square (1:1)",
    ratio_story: "Vertical (9:16)",
    ratio_landscape: "Landscape (16:9)",
    typography_settings: "Typography Settings",
    font_style_label: "Font Style",
    font_weight_label: "Font Weight",
    weight_light: "Light (300)",
    weight_regular: "Regular (400)",
    weight_medium: "Medium (500)",
    weight_semibold: "Semi-Bold (600)",
    weight_bold: "Bold (700)",
    weight_black: "Black (900)",
    font_size_label: "Base Font Size",
    line_height_label: "Line Height",
    letter_spacing_label: "Letter Spacing (English)",
    text_alignment: "Text Alignment",
    text_formatting: "Text Formatting",
    format_bold: "Bold",
    format_italic: "Italic",
    format_underline: "Underline",
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
    delete_page_title: "Delete Current Page",
    grid_btn_title: "Toggle Checkerboard Grid",
    show_page_numbers_label: "Show Page Numbers on Card",
    samples_section_title: "Text Preset Samples",
    sample_mutanabbi: "Al-Mutanabbi",
    sample_shawqi: "Ahmad Shawqi",
    sample_antara: "Antarah",
    sample_imru: "Imru' al-Qais",
    sample_custom_poetry: "Two-Column Formatted Text",
    export_btn: "Download Card (PNG)",
    active_font_lbl: "Active Font: ",
    word_counter_lbl: "Word Count: ",
    default_font_name: "Arabic Calligraphy (Default Loaded)",
    clear_btn_text: "Clear",
    reset_btn_text: "Reset",
    app_footer_desc: "Font Editor - Write, test, and style Arabic and English fonts easily.",
    align_center: "Align Center",
    align_left: "Align Left",
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
    export_error: "An error occurred during image export. Please try again.",
    faq_title: "Frequently Asked Questions & Guide",
    faq_subtitle: "Everything you need to know about using Font Editor to test and customize your typography.",
    faq_q1: "What is Font Editor and how does it help me?",
    faq_a1: "Font Editor is a free, interactive, and all-in-one web tool to test and preview Arabic and English fonts directly in your browser. It lets you write poetry, quotes, or phrases, customize font sizes, weights, line heights, add decorative ornaments, color effects, background textures, and then export your creations as high-resolution PNG images.",
    faq_q2: "Can I upload and test my own custom fonts (OTF, TTF, WOFF)?",
    faq_a2: "Yes, absolutely! The editor supports dragging and dropping or selecting custom font files from your device in the most popular formats: <strong>TTF, OTF, WOFF, and WOFF2</strong>. The font file is loaded locally in your browser and is 100% secure, never uploaded to any external servers.",
    faq_q3: "What are Variable Fonts, and are they supported here?",
    faq_a3: "Variable fonts are modern web fonts that contain all weights and styling variations within a single file. Our site fully supports variable fonts, enabling you to select specific weights from Light (300) to Black (900) dynamically using the dropdown in the advanced settings.",
    faq_q4: "Why do some Arabic fonts appear cut off or overlap with ornaments? How do I fix it?",
    faq_a4: "Some classical Arabic calligraphy styles (such as Diwani and Thuluth) have very tall ascenders and deep descenders. To resolve overlaps, increase the <strong>Line Height</strong> slider in the typography settings, or scale down the font size to fit your card's aspect ratio.",
    faq_q5: "Are my uploaded fonts saved or shared with anyone?",
    faq_a5: "Your privacy is our top priority. All font processing and rendering happen entirely <strong>on your device (client-side)</strong>. We do not store or upload any files to our servers, ensuring your commercial and custom fonts remain completely private and secure.",
    faq_q6: "Can I write and format long documents or texts?",
    faq_a6: "Yes! The site features a <strong>Document Mode (Word)</strong>. You can write full pages, format text, choose paper styles, and export your file as Word (DOCX), PDF, or Web Page (HTML).",
    faq_q7: "Can I create multiple images or design several pages together?",
    faq_a7: "Yes, you can use the <strong>Multi-Page (Carousel)</strong> feature in the top bar to add multiple cards, design each page individually, and then download them all at once as a ZIP archive or merge them into a single PDF file.",
    faq_q8: "Does the editor support changing text colors and Arabic diacritics?",
    faq_a8: "Absolutely! In the advanced settings, you can change the entire text color. You can also hide diacritics with one click (to connect letters smoothly) or color them differently from the base text to beautify typography.",
    format_png: "PNG Image",
    format_jpeg: "JPEG Image",
    format_webp: "WebP Image",
    format_pdf: "PDF Document",
    format_zip: "Photo Album (ZIP)",
    export_compressing: "Compressing page"
  }
};

// Function to update all UI texts, tooltips, and placeholders based on selected language
function updateUISiteLanguage(lang) {
  currentSiteLang = lang;
  localStorage.setItem('diwan-site-lang', lang);
  
  // Sync URL search parameters for bilingual SEO indexing (so crawlers see localized pages)
  try {
    const newUrl = new URL(window.location.href);
    if (newUrl.searchParams.get('lang') !== lang) {
      newUrl.searchParams.set('lang', lang);
      window.history.replaceState({}, '', newUrl.toString());
    }
  } catch (e) {
    console.warn("Could not update URL lang param:", e);
  }
  
  // Set document level layout attributes
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  
  // Update Meta Tags for SEO dynamically
  if (lang === 'ar') {
    document.title = "محرر الخطوط | أداة اختبار وتصميم الخطوط العربية والإنجليزية";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "محرر الخطوط: أداة مجانية وتفاعلية لتجربة واختبار الخطوط العربية والإنجليزية اونلاين. اكتب نصوصك، جرب مختلف الأنماط، ونسق تصاميمك بدقة واحترافية عالية.");
  } else {
    document.title = "Font Editor | Test & Design Arabic and English Fonts";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Font Editor: A free interactive web tool to test and preview Arabic and English fonts online. Write your texts, try different styles, and format designs with high precision.");
  }
  
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

  // 3.5 HTML elements translations (safe innerHTML updates)
  const htmlElements = document.querySelectorAll('[data-i18n-html]');
  htmlElements.forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
      el.innerHTML = uiTranslations[lang][key];
    }
  });

  // 4. Toggle button text update
  const btnToggleSiteLang = document.getElementById('btnToggleSiteLang');
  if (btnToggleSiteLang) {
    const langText = btnToggleSiteLang.querySelector('.lang-text');
    if (langText) {
      langText.textContent = lang === 'ar' ? 'English' : 'العربية';
    } else {
      btnToggleSiteLang.textContent = lang === 'ar' ? 'EN' : 'العربية';
    }
  }
  updateWritingLangButtonText();

  // 5. Watermark input default sync
  if (inputWatermark) {
    if (inputWatermark.value === 'محرر الخطوط' || inputWatermark.value === 'Font Editor' || inputWatermark.value === 'ديوان الخط العربي' || inputWatermark.value === 'Diwan Calligraphy') {
      inputWatermark.value = lang === 'ar' ? 'محرر الخطوط' : 'Font Editor';
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

// Export Document as DOCX Word file
function exportDocAsDOCX() {
  const temp = document.createElement('div');
  temp.innerHTML = editableText.innerHTML;
  temp.querySelectorAll('.verse-divider').forEach(el => el.remove());
  let bodyHtml = temp.innerHTML;
  
  const savedDocTextColor = localStorage.getItem('diwan-doc-text-color');
  let textColor = savedDocTextColor;
  if (!textColor) {
    const paperTheme = localStorage.getItem('diwan-paper-theme') || 'dark';
    if (paperTheme === 'white') textColor = '#111111';
    else if (paperTheme === 'cream') textColor = '#2e261a';
    else textColor = '#f4f4f5';
  }

  const docHtml = `
  <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
  <head>
    <meta charset="utf-8">
    <title>Document</title>
    <!--[if gte mso 9]>
    <xml>
      <w:WordDocument>
        <w:View>Print</w:View>
        <w:Zoom>100</w:Zoom>
        <w:DoNotOptimizeForBrowser/>
      </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
      body {
        font-family: 'Cairo', 'Amiri', 'Segoe UI', Arial, sans-serif;
        line-height: 1.6;
        direction: rtl;
        color: ${textColor};
      }
      p, div {
        margin: 0 0 10px 0;
      }
    </style>
  </head>
  <body>
    ${bodyHtml}
  </body>
  </html>`;

  const blob = new Blob(['\ufeff' + docHtml], { type: 'application/msword;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${getActiveFontFileName()}.doc`; // Works perfectly with MS Word natively!
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

// Export Document as TXT plain text
function exportDocAsTXT() {
  const temp = document.createElement('div');
  temp.innerHTML = editableText.innerHTML;
  temp.querySelectorAll('.verse-divider').forEach(el => el.remove());
  let bodyText = temp.innerText.trim();
  const blob = new Blob([bodyText], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${getActiveFontFileName()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

// Export Document as HTML file
function exportDocAsHTML() {
  const temp = document.createElement('div');
  temp.innerHTML = editableText.innerHTML;
  temp.querySelectorAll('.verse-divider').forEach(el => el.remove());
  let bodyHtml = temp.innerHTML;
  const paperTheme = localStorage.getItem('diwan-paper-theme') || 'dark';
  
  const savedDocTextColor = localStorage.getItem('diwan-doc-text-color');
  let textColor = savedDocTextColor;
  if (!textColor) {
    if (paperTheme === 'white') textColor = '#111111';
    else if (paperTheme === 'cream') textColor = '#2e261a';
    else textColor = '#f4f4f5';
  }

  let bgStyle = `background: #ffffff; color: ${textColor};`;
  if (paperTheme === 'cream') bgStyle = `background: #fcf8f0; color: ${textColor};`;
  else if (paperTheme === 'dark') bgStyle = `background: #18181b; color: ${textColor};`;
  const lang = localStorage.getItem('siteLanguage') || 'ar';
  const dir = lang === 'en' ? 'ltr' : 'rtl';

  const fullHtml = `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    body {
      font-family: 'Cairo', 'Amiri', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 50px;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.8;
      ${bgStyle}
    }
    .content {
      white-space: pre-wrap;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="content">${bodyHtml}</div>
</body>
</html>`;

  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${getActiveFontFileName()}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

// Export Document as PDF using html2pdf
function exportDocAsPDF() {
  const originalHTML = btnSaveDocAsBtn.innerHTML;
  btnSaveDocAsBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin icon"></i> جاري التصدير...';
  
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = editableText.innerHTML;
  tempContainer.querySelectorAll('.verse-divider').forEach(el => el.remove());
  
  const printWrapper = document.createElement('div');
  const paperTheme = localStorage.getItem('diwan-paper-theme') || 'dark';
  let bgColor = '#ffffff';
  let textColor = '#111111';
  if (paperTheme === 'cream') { bgColor = '#fcf8f0'; textColor = '#2e261a'; }
  else if (paperTheme === 'dark') { bgColor = '#18181b'; textColor = '#f4f4f5'; }
  
  const savedDocTextColor = localStorage.getItem('diwan-doc-text-color');
  if (savedDocTextColor) {
    textColor = savedDocTextColor;
  }
  
  const computedStyles = window.getComputedStyle(document.documentElement);
  const currentFont = computedStyles.getPropertyValue('--font-poetry').trim() || "'Cairo', sans-serif";
  const currentWeight = computedStyles.getPropertyValue('--card-font-weight').trim() || "500";
  
  printWrapper.style.cssText = `
    font-family: ${currentFont};
    font-weight: ${currentWeight};
    padding: 30px;
    width: 800px;
    min-height: 1131px;
    direction: ${localStorage.getItem('siteLanguage') === 'en' ? 'ltr' : 'rtl'};
    white-space: pre-wrap;
    line-height: 1.8;
    font-size: 18px;
    background-color: ${bgColor};
    color: ${textColor};
  `;
  printWrapper.innerHTML = tempContainer.innerHTML;
  
  const opt = {
    margin:       10,
    filename:     `${getActiveFontFileName()}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, backgroundColor: bgColor },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  html2pdf().set(opt).from(printWrapper).save().then(() => {
    btnSaveDocAsBtn.innerHTML = originalHTML;
  }).catch(() => {
    btnSaveDocAsBtn.innerHTML = originalHTML;
  });
}
