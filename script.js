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
const tabWebMode = document.getElementById('tabWebMode');
const tabMobileMode = document.getElementById('tabMobileMode');
const mobilePreviewWrapper = document.getElementById('mobilePreviewWrapper');
const designCanvasContainer = document.getElementById('designCanvasContainer');
const previewModal = document.getElementById('previewModal');

// --- Mobile Preview Mode Elements ---

const tabMobileTemplateSettings = document.getElementById('tabMobileTemplateSettings');
const tabMobileTemplateSocial = document.getElementById('tabMobileTemplateSocial');
const tabMobileTemplateChat = document.getElementById('tabMobileTemplateChat');
const tabMobileTemplateMusic = document.getElementById('tabMobileTemplateMusic');

const btnMobileThemeDark = document.getElementById('btnMobileThemeDark');
const btnMobileThemeLight = document.getElementById('btnMobileThemeLight');
const btnMobileThemeAmber = document.getElementById('btnMobileThemeAmber');

const mobileContentSettings = document.getElementById('mobileContentSettings');
const mobileContentHome = document.getElementById('mobileContentHome');
const mobileContentSocial = document.getElementById('mobileContentSocial');
const mobileContentChat = document.getElementById('mobileContentChat');
const mobileContentMusic = document.getElementById('mobileContentMusic');

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

// Web Mode settings buttons
const btnWebTemplateSaas = document.getElementById('btnWebTemplateSaas');
const btnWebTemplateStore = document.getElementById('btnWebTemplateStore');
const tabWebTemplateSaas = document.getElementById('tabWebTemplateSaas');
const tabWebTemplateStore = document.getElementById('tabWebTemplateStore');
const tabWebTemplateDashboard = document.getElementById('tabWebTemplateDashboard');
const tabWebTemplateNotion = document.getElementById('tabWebTemplateNotion');
const tabWebTemplateChat = document.getElementById('tabWebTemplateChat');
const tabWebTemplateMobile = document.getElementById('tabWebTemplateMobile');

const btnWebThemeDark = document.getElementById('btnWebThemeDark');
const btnWebThemeLight = document.getElementById('btnWebThemeLight');
const btnWebThemeAmber = document.getElementById('btnWebThemeAmber');
const btnWebTargetAll = document.getElementById('btnWebTargetAll');
const btnWebTargetHeadings = document.getElementById('btnWebTargetHeadings');
const btnWebTargetButtons = document.getElementById('btnWebTargetButtons');
const btnWebTargetNone = document.getElementById('btnWebTargetNone');
const chkWebMultipleFonts = document.getElementById('chkWebMultipleFonts');
const selectWebFontSingle = document.getElementById('selectWebFontSingle');
const selectWebFontHeadings = document.getElementById('selectWebFontHeadings');
const selectWebFontBody = document.getElementById('selectWebFontBody');
const selectWebFontButtons = document.getElementById('selectWebFontButtons');
const ctxFontSelect = document.getElementById('ctxFontSelect');
const webPreviewWrapper = document.getElementById('webPreviewWrapper');
const btnWebZoomIn = document.getElementById('btnWebZoomIn');
const btnWebZoomOut = document.getElementById('btnWebZoomOut');
const btnWebZoomReset = document.getElementById('btnWebZoomReset');

// Web Custom Font Uploader elements
const btnWebUploadFonts = document.getElementById('btnWebUploadFonts');
const webFontFileInput = document.getElementById('webFontFileInput');
const webUploadedFontsList = document.getElementById('webUploadedFontsList');
const webFontCountBadge = document.getElementById('webFontCountBadge');
const btnWebUploadFontsText = document.getElementById('btnWebUploadFontsText');


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

// Custom History Undo/Redo Manager
const HistoryManager = {
  undoStack: [],
  redoStack: [],
  maxStates: 50,
  isApplyingState: false,

  getCurrentState: function() {
    const activeMode = document.body.classList.contains('view-mode-web') ? 'web' :
                       document.body.classList.contains('view-mode-mobile') ? 'mobile' :
                       document.body.classList.contains('view-mode-document') ? 'document' : 'design';
    
    const state = {
      mode: activeMode,
      timestamp: Date.now()
    };

    if (activeMode === 'design') {
      const poetryCard = document.getElementById('poetryCard');
      state.carouselPages = JSON.parse(JSON.stringify(carouselPages));
      state.currentPageIndex = currentPageIndex;
      state.cardHTML = document.getElementById('editableText') ? document.getElementById('editableText').innerHTML : '';
      if (poetryCard) {
        state.cardStyles = poetryCard.getAttribute('style') || '';
        state.cardClasses = poetryCard.className;
      }
      
      const cardBgImage = document.getElementById('cardBgImage');
      const bgControlsGroup = document.getElementById('bgControlsGroup');
      const bgUploadText = document.getElementById('bgUploadText');
      state.bgImage = {
        src: cardBgImage ? cardBgImage.src : '',
        display: cardBgImage ? cardBgImage.style.display : 'none',
        controlsDisplay: bgControlsGroup ? bgControlsGroup.style.display : 'none',
        dropzoneText: bgUploadText ? bgUploadText.innerHTML : ''
      };

      const inputWatermark = document.getElementById('inputWatermark');
      const cardWatermark = document.getElementById('cardWatermark');
      state.watermark = {
        value: inputWatermark ? inputWatermark.value : '',
        text: cardWatermark ? cardWatermark.innerHTML : '',
        display: cardWatermark ? cardWatermark.style.display : 'none'
      };

      const inputTopOrnament = document.getElementById('inputTopOrnament');
      const inputBottomOrnament = document.getElementById('inputBottomOrnament');
      const cardTopOrnament = document.getElementById('cardTopOrnament');
      const cardBottomOrnament = document.getElementById('cardBottomOrnament');
      state.ornaments = {
        topVal: inputTopOrnament ? inputTopOrnament.value : '',
        bottomVal: inputBottomOrnament ? inputBottomOrnament.value : '',
        topHTML: cardTopOrnament ? cardTopOrnament.innerHTML : '',
        bottomHTML: cardBottomOrnament ? cardBottomOrnament.innerHTML : '',
        topDisplay: cardTopOrnament ? cardTopOrnament.style.display : 'none',
        bottomDisplay: cardBottomOrnament ? cardBottomOrnament.style.display : 'none'
      };
    } else if (activeMode === 'document') {
      const docBody = document.querySelector('.document-body');
      state.docHTML = docBody ? docBody.innerHTML : '';
    } else if (activeMode === 'web') {
      const webContent = document.querySelector('.web-preview-content');
      state.webHTML = webContent ? webContent.innerHTML : '';
    }

    // Save global CSS variables
    const STYLE_VARIABLES = [
      '--haraka-color',
      '--card-font-size',
      '--card-line-height',
      '--card-letter-spacing',
      '--card-text-color',
      '--card-bg-color',
      '--card-ornament-color',
      '--card-border-color',
      '--overlay-opacity',
      '--bg-blur',
      '--bg-scale',
      '--bg-pos-y',
      '--bg-pos-x',
      '--texture-opacity',
      '--verse-divider-size',
      '--font-poetry',
      '--card-font-weight',
      '--doc-text-color',
      '--card-text-align',
      '--font-web-headings',
      '--font-web-body',
      '--font-web-buttons'
    ];
    state.styles = {};
    STYLE_VARIABLES.forEach(v => {
      state.styles[v] = document.documentElement.style.getPropertyValue(v) || "";
    });

    return state;
  },

  saveState: function() {
    if (this.isApplyingState) return;

    const state = this.getCurrentState();
    
    // Check if state is identical to the top of the stack to avoid duplicates
    if (this.undoStack.length > 0) {
      const lastState = this.undoStack[this.undoStack.length - 1];
      if (JSON.stringify(lastState) === JSON.stringify(state)) {
        return;
      }
    }

    this.undoStack.push(state);
    if (this.undoStack.length > this.maxStates) {
      this.undoStack.shift();
    }
    
    // Clear redo stack on new action
    this.redoStack = [];
  },

  applyState: function(state) {
    if (!state) return;
    this.isApplyingState = true;

    try {
      // Restore view mode class but don't call full switchViewMode as it scrolls/mutates extra things
      document.body.classList.remove('view-mode-web', 'view-mode-document', 'view-mode-design');
      document.body.classList.add(`view-mode-${state.mode}`);
      
      const tabWebMode = document.getElementById('tabWebMode');
      const tabDesignMode = document.getElementById('tabDesignMode');
      const tabDocMode = document.getElementById('tabDocMode');
      const webPreviewWrapper = document.getElementById('webPreviewWrapper');
      const canvasWrapper = document.getElementById('canvasWrapper');
      const documentWrapper = document.getElementById('documentWrapper');

      if (state.mode === 'web') {
        if (tabWebMode) tabWebMode.classList.add('active');
        if (tabDesignMode) tabDesignMode.classList.remove('active');
        if (tabDocMode) tabDocMode.classList.remove('active');
        if (webPreviewWrapper) webPreviewWrapper.style.display = 'flex';
        if (canvasWrapper) canvasWrapper.style.display = 'none';
        if (documentWrapper) documentWrapper.style.display = 'none';
        
        const webContent = document.querySelector('.web-preview-content');
        if (webContent && state.webHTML !== undefined) {
          webContent.innerHTML = state.webHTML;
        }
      } else if (state.mode === 'document') {
        if (tabMobileMode) tabMobileMode.classList.remove('active');
    if (tabMobileMode) tabMobileMode.classList.remove('active');
    if (tabWebMode) tabWebMode.classList.remove('active');
        if (tabDesignMode) tabDesignMode.classList.remove('active');
        if (tabDocMode) tabDocMode.classList.add('active');
        if (webPreviewWrapper) webPreviewWrapper.style.display = 'none';
        if (canvasWrapper) canvasWrapper.style.display = 'none';
        if (documentWrapper) documentWrapper.style.display = 'block';

        const docBody = document.querySelector('.document-body');
        if (docBody && state.docHTML !== undefined) {
          docBody.innerHTML = state.docHTML;
        }
      } else if (state.mode === 'design') {
        if (tabMobileMode) tabMobileMode.classList.remove('active');
    if (tabWebMode) tabWebMode.classList.remove('active');
        if (tabDesignMode) tabDesignMode.classList.add('active');
        if (tabDocMode) tabDocMode.classList.remove('active');
        if (webPreviewWrapper) webPreviewWrapper.style.display = 'none';
        if (canvasWrapper) canvasWrapper.style.display = 'flex';
        if (documentWrapper) documentWrapper.style.display = 'none';

        if (state.carouselPages) {
          carouselPages = JSON.parse(JSON.stringify(state.carouselPages));
        }
        currentPageIndex = state.currentPageIndex;
        
        const editableText = document.getElementById('editableText');
        if (editableText && state.cardHTML !== undefined) {
          editableText.innerHTML = state.cardHTML;
        }
        
        const poetryCard = document.getElementById('poetryCard');
        if (poetryCard) {
          if (state.cardStyles !== undefined) {
            poetryCard.setAttribute('style', state.cardStyles);
          }
          if (state.cardClasses !== undefined) {
            poetryCard.className = state.cardClasses;
          }
        }
        
        if (state.bgImage) {
          const cardBgImage = document.getElementById('cardBgImage');
          const bgControlsGroup = document.getElementById('bgControlsGroup');
          const bgUploadText = document.getElementById('bgUploadText');
          if (cardBgImage) {
            cardBgImage.src = state.bgImage.src;
            cardBgImage.style.display = state.bgImage.display;
          }
          if (bgControlsGroup) {
            bgControlsGroup.style.display = state.bgImage.controlsDisplay;
          }
          if (bgUploadText) {
            bgUploadText.innerHTML = state.bgImage.dropzoneText;
          }
        }

        if (state.watermark) {
          const inputWatermark = document.getElementById('inputWatermark');
          const cardWatermark = document.getElementById('cardWatermark');
          if (inputWatermark) inputWatermark.value = state.watermark.value;
          if (cardWatermark) {
            cardWatermark.innerHTML = state.watermark.text;
            cardWatermark.style.display = state.watermark.display;
          }
        }

        if (state.ornaments) {
          const inputTopOrnament = document.getElementById('inputTopOrnament');
          const inputBottomOrnament = document.getElementById('inputBottomOrnament');
          const cardTopOrnament = document.getElementById('cardTopOrnament');
          const cardBottomOrnament = document.getElementById('cardBottomOrnament');
          if (inputTopOrnament) inputTopOrnament.value = state.ornaments.topVal;
          if (inputBottomOrnament) inputBottomOrnament.value = state.ornaments.bottomVal;
          if (cardTopOrnament) {
            cardTopOrnament.innerHTML = state.ornaments.topHTML;
            cardTopOrnament.style.display = state.ornaments.topDisplay;
          }
          if (cardBottomOrnament) {
            cardBottomOrnament.innerHTML = state.ornaments.bottomHTML;
            cardBottomOrnament.style.display = state.ornaments.bottomDisplay;
          }
        }

        renderCarouselControls();
        updateCardPageIndicator();
        updateWordCount();
      }

      // Restore CSS styles
      if (state.styles) {
        Object.keys(state.styles).forEach(v => {
          if (state.styles[v]) {
            document.documentElement.style.setProperty(v, state.styles[v]);
          } else {
            document.documentElement.style.removeProperty(v);
          }
        });
        syncSidebarControls();
      }
    } catch (err) {
      console.error("Error applying history state:", err);
    } finally {
      this.isApplyingState = false;
    }
  },

  undo: function() {
    if (this.undoStack.length <= 1) return;
    const currentState = this.undoStack.pop();
    this.redoStack.push(currentState);
    const prevState = this.undoStack[this.undoStack.length - 1];
    this.applyState(prevState);
  },

  redo: function() {
    if (this.redoStack.length === 0) return;
    const state = this.redoStack.pop();
    this.undoStack.push(state);
    this.applyState(state);
  }
};

const syncSidebarControls = () => {
  const rootStyle = document.documentElement.style;
  const computedStyle = window.getComputedStyle(document.documentElement);

  const getVar = (name) => {
    return (rootStyle.getPropertyValue(name) || computedStyle.getPropertyValue(name)).trim();
  };

  if (sliderFontSize && valFontSize) {
    const fs = parseFloat(getVar('--card-font-size')) || 24;
    sliderFontSize.value = fs;
    valFontSize.textContent = `${fs}px`;
  }
  if (sliderLineHeight && valLineHeight) {
    const lh = parseFloat(getVar('--card-line-height')) || 1.8;
    sliderLineHeight.value = lh;
    valLineHeight.textContent = lh;
  }
  if (sliderLetterSpacing && valLetterSpacing) {
    const ls = parseFloat(getVar('--card-letter-spacing')) || 0;
    sliderLetterSpacing.value = ls;
    valLetterSpacing.textContent = `${ls}px`;
  }
  if (pickerTextColor && hexTextColor) {
    const color = getVar('--card-text-color') || '#ffffff';
    pickerTextColor.value = color;
    hexTextColor.textContent = color.toUpperCase();
  }
  if (pickerBgColor && hexBgColor) {
    const color = getVar('--card-bg-color') || '#111111';
    pickerBgColor.value = color;
    hexBgColor.textContent = color.toUpperCase();
  }
  if (pickerOrnamentColor && hexOrnamentColor) {
    const color = getVar('--card-ornament-color') || '#d4af37';
    pickerOrnamentColor.value = color;
    hexOrnamentColor.textContent = color.toUpperCase();
  }
  if (pickerHarakatColor && hexHarakatColor) {
    const color = getVar('--haraka-color') || '#ff4a4a';
    pickerHarakatColor.value = color;
    hexHarakatColor.textContent = color.toUpperCase();
  }
  if (sliderOverlayOpacity && valOverlayOpacity) {
    const val = Math.round((parseFloat(getVar('--overlay-opacity')) || 0.4) * 100);
    sliderOverlayOpacity.value = val;
    valOverlayOpacity.textContent = `${val}%`;
  }
  if (sliderBgBlur && valBgBlur) {
    const val = parseFloat(getVar('--bg-blur')) || 0;
    sliderBgBlur.value = val;
    valBgBlur.textContent = `${val}px`;
  }
  if (sliderBgScale && valBgScale) {
    const val = parseFloat(getVar('--bg-scale')) || 1;
    sliderBgScale.value = val;
    valBgScale.textContent = val;
  }
  if (sliderBgPosY && valBgPosY) {
    const val = parseFloat(getVar('--bg-pos-y')) || 50;
    sliderBgPosY.value = val;
    valBgPosY.textContent = `${val}%`;
  }
  if (sliderBgPosX && valBgPosX) {
    const val = parseFloat(getVar('--bg-pos-x')) || 50;
    sliderBgPosX.value = val;
    valBgPosX.textContent = `${val}%`;
  }

  const selectCardTexture = document.getElementById('selectCardTexture');
  const sliderTextureOpacity = document.getElementById('sliderTextureOpacity');
  const valTextureOpacity = document.getElementById('valTextureOpacity');
  if (sliderTextureOpacity && valTextureOpacity) {
    const val = Math.round((parseFloat(getVar('--texture-opacity')) || 1.0) * 100);
    sliderTextureOpacity.value = val;
    valTextureOpacity.textContent = `${val}%`;
  }

  if (selectCardTexture && poetryCard) {
    if (poetryCard.classList.contains('texture-parchment')) {
      selectCardTexture.value = 'parchment';
    } else if (poetryCard.classList.contains('texture-silk')) {
      selectCardTexture.value = 'silk';
    } else if (poetryCard.classList.contains('texture-islamic')) {
      selectCardTexture.value = 'islamic';
    } else {
      selectCardTexture.value = 'none';
    }
    const textureOpacityGroup = document.getElementById('textureOpacityGroup');
    if (textureOpacityGroup) {
      textureOpacityGroup.style.display = selectCardTexture.value !== 'none' ? 'block' : 'none';
    }
  }

  if (selectBorderPattern && poetryCard) {
    if (poetryCard.classList.contains('has-border-classic')) {
      selectBorderPattern.value = 'classic';
    } else if (poetryCard.classList.contains('has-border-double')) {
      selectBorderPattern.value = 'double';
    } else if (poetryCard.classList.contains('has-border-ornate')) {
      selectBorderPattern.value = 'ornate';
    } else {
      selectBorderPattern.value = 'none';
    }
  }

  const selectFontStyle = document.getElementById('selectFontStyle');
  const selectFontWeight = document.getElementById('selectFontWeight');
  if (selectFontStyle) {
    const fontPoetry = getVar('--font-poetry');
    const match = fontPoetry.match(/"([^"]+)"|'([^']+)'/);
    if (match) {
      const family = match[1] || match[2];
      selectFontStyle.value = family;
      if (selectWebFontSingle) selectWebFontSingle.value = family;
    }
  }
  if (selectWebFontHeadings) {
    const font = getVar('--font-web-headings');
    const match = font.match(/"([^"]+)"|'([^']+)'/);
    if (match) selectWebFontHeadings.value = match[1] || match[2];
  }
  if (selectWebFontBody) {
    const font = getVar('--font-web-body');
    const match = font.match(/"([^"]+)"|'([^']+)'/);
    if (match) selectWebFontBody.value = match[1] || match[2];
  }
  if (selectWebFontButtons) {
    const font = getVar('--font-web-buttons');
    const match = font.match(/"([^"]+)"|'([^']+)'/);
    if (match) selectWebFontButtons.value = match[1] || match[2];
  }
  if (chkWebMultipleFonts) {
    const savedMulti = localStorage.getItem('diwan-web-multiple-fonts');
    const isMulti = savedMulti !== null ? savedMulti === 'true' : true;
    chkWebMultipleFonts.checked = isMulti;
    const grpWebFontSingle = document.getElementById('grpWebFontSingle');
    const grpWebTarget = document.getElementById('grpWebTarget');
    const webMultiFontsControls = document.getElementById('webMultiFontsControls');
    if (webPreviewWrapper) {
      if (isMulti) {
        webPreviewWrapper.classList.add('web-multi-fonts-active');
        webPreviewWrapper.classList.remove('web-target-all', 'web-target-headings', 'web-target-buttons', 'web-target-none');
        if (grpWebFontSingle) grpWebFontSingle.style.display = 'none';
        if (grpWebTarget) grpWebTarget.style.display = 'none';
        if (webMultiFontsControls) webMultiFontsControls.style.display = 'flex';
      } else {
        webPreviewWrapper.classList.remove('web-multi-fonts-active');
        if (grpWebFontSingle) grpWebFontSingle.style.display = 'block';
        if (grpWebTarget) grpWebTarget.style.display = 'block';
        if (webMultiFontsControls) webMultiFontsControls.style.display = 'none';
        const savedTarget = localStorage.getItem('diwan-web-target') || 'all';
        webPreviewWrapper.classList.add(`web-target-${savedTarget}`);
      }
    }
  }
  if (selectFontWeight) {
    selectFontWeight.value = getVar('--card-font-weight') || '400';
  }

  if (ratioButtons && poetryCard) {
    ratioButtons.forEach(btn => {
      const ratio = btn.getAttribute('data-ratio');
      if (poetryCard.classList.contains(`ratio-${ratio}`)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
};

// Multilingual & Font Select state variables
let currentLang = 'ar'; // 'ar' or 'en'
let currentSiteLang = 'ar'; // UI Language: 'ar' or 'en'

function getActiveSiteLang() {
  return currentSiteLang || localStorage.getItem('diwan-site-lang') || 'ar';
}
let customFontLoaded = false;
let customFontName = '';
const webCustomFonts = []; // Array of { value: string, name: string, displayName: string }

const arabicFonts = [
  { value: 'ArabicPoetry', name: 'خط الديوان (الافتراضي)' },
  { value: 'ThmanyahSans', name: 'ثمانية Sans (حديث)' },
  { value: 'ThmanyahSerifDisplay', name: 'ثمانية Serif للعناوين' },
  { value: 'ThmanyahSerifText', name: 'ثمانية Serif للنصوص' }
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
  
  // Save initial history state
  setTimeout(() => {
    HistoryManager.saveState();
  }, 100);
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
      HistoryManager.saveState();
    });
  });

  if (btnBold) {
    btnBold.addEventListener('click', () => {
      if (editableText) editableText.focus();
      document.execCommand('bold', false, null);
      updateFormatButtonsState();
      HistoryManager.saveState();
    });
  }
  if (btnItalic) {
    btnItalic.addEventListener('click', () => {
      if (editableText) editableText.focus();
      document.execCommand('italic', false, null);
      updateFormatButtonsState();
      HistoryManager.saveState();
    });
  }
  if (btnUnderline) {
    btnUnderline.addEventListener('click', () => {
      if (editableText) editableText.focus();
      document.execCommand('underline', false, null);
      updateFormatButtonsState();
      HistoryManager.saveState();
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

  btnClear.addEventListener('click', () => {
    setEditableTextHTML('');
    carouselPages[currentPageIndex] = '';
    updateCardPageIndicator();
    editableText.focus();
    HistoryManager.saveState();
  });

  btnReset.addEventListener('click', () => {
    const msg = uiTranslations[currentSiteLang]?.confirm_reset || "هل تريد بالتأكيد استعادة الإعدادات الافتراضية؟";
    if(confirm(msg)) {
      applyDefaults();
      removeBackgroundImage();
      HistoryManager.saveState();
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
      HistoryManager.saveState();
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
        HistoryManager.saveState();
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
      if (selectWebFontSingle) selectWebFontSingle.value = font;
      document.documentElement.style.setProperty('--font-poetry', `"${font}", var(--font-poetry-fallback)`);
      localStorage.setItem('diwan-poetry-font', font);
      if (activeFontName) {
        activeFontName.textContent = selectFontStyle.options[selectFontStyle.selectedIndex]?.text || '';
      }
      HistoryManager.saveState();
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
  if (tabWebMode) {
    tabWebMode.addEventListener('click', () => switchViewMode('web'));
  }
  if (tabMobileMode) {
    tabMobileMode.addEventListener('click', () => switchViewMode('mobile'));
  }

  
  if (tabMobileTemplateSettings) {
    tabMobileTemplateSettings.addEventListener('click', () => setMobileTemplate('settings'));
  }
  if (tabMobileTemplateSocial) {
    tabMobileTemplateSocial.addEventListener('click', () => setMobileTemplate('social'));
  }
  if (tabMobileTemplateChat) {
    tabMobileTemplateChat.addEventListener('click', () => setMobileTemplate('chat'));
  }
  if (tabMobileTemplateMusic) {
    tabMobileTemplateMusic.addEventListener('click', () => setMobileTemplate('music'));
  }
  
  // Set up Home Indicator listeners
  document.querySelectorAll('.iphone-home-bar, .iphone-home-indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
      setMobileTemplate('home');
    });
    // Add interactive class to indicate it's clickable when not on home screen
    indicator.classList.add('interactive');
  });

  if (btnMobileThemeDark) {
    btnMobileThemeDark.addEventListener('click', () => setMobileTheme('dark'));
  }
  if (btnMobileThemeLight) {
    btnMobileThemeLight.addEventListener('click', () => setMobileTheme('light'));
  }
  if (btnMobileThemeAmber) {
    btnMobileThemeAmber.addEventListener('click', () => setMobileTheme('amber'));
  }

  // Web Mode Template Event Listeners
  if (btnWebTemplateSaas) btnWebTemplateSaas.addEventListener('click', () => setWebTemplate('saas'));
  if (btnWebTemplateStore) btnWebTemplateStore.addEventListener('click', () => setWebTemplate('store'));
  if (tabWebTemplateSaas) tabWebTemplateSaas.addEventListener('click', () => setWebTemplate('saas'));
  if (tabWebTemplateStore) tabWebTemplateStore.addEventListener('click', () => setWebTemplate('store'));
  if (tabWebTemplateDashboard) tabWebTemplateDashboard.addEventListener('click', () => setWebTemplate('dashboard'));
  if (tabWebTemplateNotion) tabWebTemplateNotion.addEventListener('click', () => setWebTemplate('notion'));
  if (tabWebTemplateChat) tabWebTemplateChat.addEventListener('click', () => setWebTemplate('chat'));
  if (tabWebTemplateMobile) tabWebTemplateMobile.addEventListener('click', () => setWebTemplate('mobile'));


  // Web Mode Theme Event Listeners
  if (btnWebThemeDark) btnWebThemeDark.addEventListener('click', () => setWebTheme('dark'));
  if (btnWebThemeLight) btnWebThemeLight.addEventListener('click', () => setWebTheme('light'));
  if (btnWebThemeAmber) btnWebThemeAmber.addEventListener('click', () => setWebTheme('amber'));

  // Web Mode Target Event Listeners
  if (btnWebTargetAll) btnWebTargetAll.addEventListener('click', () => setWebTarget('all'));
  if (btnWebTargetHeadings) btnWebTargetHeadings.addEventListener('click', () => setWebTarget('headings'));
  if (btnWebTargetButtons) btnWebTargetButtons.addEventListener('click', () => setWebTarget('buttons'));
  if (btnWebTargetNone) btnWebTargetNone.addEventListener('click', () => setWebTarget('none'));

  // Web Mode Multiple Fonts Event Listeners
  if (chkWebMultipleFonts) {
    chkWebMultipleFonts.addEventListener('change', () => {
      if (chkWebMultipleFonts.checked) {
        const lang = currentLang || 'ar';
        const defaultHeadings = lang === 'ar' ? 'ThmanyahSerifDisplay' : 'Lora';
        const defaultBody = lang === 'ar' ? 'ThmanyahSerifText' : 'Montserrat';
        const defaultButtons = lang === 'ar' ? 'ThmanyahSans' : 'Montserrat';
        
        if (selectWebFontHeadings) {
          selectWebFontHeadings.value = defaultHeadings;
          localStorage.setItem('diwan-web-headings-font', defaultHeadings);
        }
        if (selectWebFontBody) {
          selectWebFontBody.value = defaultBody;
          localStorage.setItem('diwan-web-body-font', defaultBody);
        }
        if (selectWebFontButtons) {
          selectWebFontButtons.value = defaultButtons;
          localStorage.setItem('diwan-web-buttons-font', defaultButtons);
        }
      }
      updateWebMultipleFontsMode();
      HistoryManager.saveState();
    });
  }

  // Web Custom Font Uploader Event Listeners
  if (webFontFileInput) {
    webFontFileInput.addEventListener('change', handleWebFontFileInputChange);
  }

  if (btnWebUploadFonts) {
    btnWebUploadFonts.addEventListener('click', () => {
      if (webFontFileInput) webFontFileInput.click();
    });

    btnWebUploadFonts.addEventListener('dragover', (e) => {
      e.preventDefault();
      btnWebUploadFonts.style.borderColor = 'var(--accent-gold)';
      btnWebUploadFonts.style.background = 'rgba(212, 175, 55, 0.1)';
    });

    btnWebUploadFonts.addEventListener('dragleave', () => {
      btnWebUploadFonts.style.borderColor = 'rgba(212, 175, 55, 0.4)';
      btnWebUploadFonts.style.background = 'rgba(212, 175, 55, 0.03)';
    });

    btnWebUploadFonts.addEventListener('drop', async (e) => {
      e.preventDefault();
      btnWebUploadFonts.style.borderColor = 'rgba(212, 175, 55, 0.4)';
      btnWebUploadFonts.style.background = 'rgba(212, 175, 55, 0.03)';

      if (e.dataTransfer.files.length > 0 && webFontFileInput) {
        webFontFileInput.files = e.dataTransfer.files;
        await handleWebFontFileInputChange();
      }
    });
  }

  if (selectWebFontSingle) {
    selectWebFontSingle.addEventListener('change', () => {
      const font = selectWebFontSingle.value;
      if (selectFontStyle) {
        const hasOption = Array.from(selectFontStyle.options).some(opt => opt.value === font);
        if (hasOption) {
          selectFontStyle.value = font;
          if (activeFontName) {
            activeFontName.textContent = selectFontStyle.options[selectFontStyle.selectedIndex]?.text || '';
          }
        }
      }
      document.documentElement.style.setProperty('--font-poetry', `"${font}", var(--font-poetry-fallback)`);
      localStorage.setItem('diwan-poetry-font', font);
      updateWebMultipleFontsMode();
      HistoryManager.saveState();
    });
  }

  if (selectWebFontHeadings) {
    selectWebFontHeadings.addEventListener('change', () => {
      applyWebFont('headings', selectWebFontHeadings.value);
      HistoryManager.saveState();
    });
  }

  if (selectWebFontBody) {
    selectWebFontBody.addEventListener('change', () => {
      applyWebFont('body', selectWebFontBody.value);
      HistoryManager.saveState();
    });
  }

  if (selectWebFontButtons) {
    selectWebFontButtons.addEventListener('change', () => {
      applyWebFont('buttons', selectWebFontButtons.value);
      HistoryManager.saveState();
    });
  }

  // Web Preview Zoom Event Listeners
  if (btnWebZoomIn) {
    btnWebZoomIn.addEventListener('click', () => {
      setWebPreviewZoom(webPreviewZoom + 0.05);
    });
  }
  if (btnWebZoomOut) {
    btnWebZoomOut.addEventListener('click', () => {
      setWebPreviewZoom(webPreviewZoom - 0.05);
    });
  }
  if (btnWebZoomReset) {
    btnWebZoomReset.addEventListener('click', () => {
      setWebPreviewZoom(1.0);
    });
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

  // FAQ Scroll Reveal Logic
  const faqSection = document.querySelector('.faq-section');
  if (canvasWrapper && faqSection) {
    const checkFaqReveal = () => {
      if (canvasWrapper.scrollTop > 50) {
        faqSection.classList.add('faq-visible');
      } else {
        faqSection.classList.remove('faq-visible');
      }
    };
    canvasWrapper.addEventListener('scroll', checkFaqReveal);
    // Initial check in case of scroll restoration
    checkFaqReveal();
  }

  // Custom Context Menu for Web Preview Text Scaling
  const previewContextMenu = document.getElementById('previewContextMenu');
  const ctxDecSize = document.getElementById('ctxDecSize');
  const ctxIncSize = document.getElementById('ctxIncSize');
  const ctxFontSizeInput = document.getElementById('ctxFontSizeInput');
  const ctxResetFont = document.getElementById('ctxResetFont');
  // ctxFontSelect is declared globally
  let activeContextElement = null;

  const hideContextMenu = () => {
    if (previewContextMenu) {
      previewContextMenu.style.display = 'none';
    }
  };

  const rgbToHex = (rgbStr) => {
    if (!rgbStr) return '#ffffff';
    const match = rgbStr.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
    if (!match) return rgbStr;
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex.toLowerCase();
  };

  const updateContextMenuOptions = (target) => {
    const ctxCurrentSizeText = document.getElementById('ctxCurrentSizeText');
    const ctxFontSizeInput = document.getElementById('ctxFontSizeInput');
    const ctxResetText = document.getElementById('ctxResetText');
    const ctxBoldToggle = document.getElementById('ctxBoldToggle');

    if (!target) return;

    const isAr = (currentSiteLang === 'ar');
    const computedStyle = window.getComputedStyle(target);
    const sizeInPx = Math.round(parseFloat(computedStyle.fontSize));

    if (ctxCurrentSizeText) {
      ctxCurrentSizeText.textContent = isAr ? `الحجم الحالي: ${sizeInPx}px` : `Current Size: ${sizeInPx}px`;
    }
    if (ctxFontSizeInput) {
      ctxFontSizeInput.value = sizeInPx;
    }
    if (ctxResetText) {
      let defaultSizeText = "";
      if (target.dataset.originalFontSize) {
        const origSize = parseFloat(target.dataset.originalFontSize);
        defaultSizeText = `${Math.round(origSize)}px`;
      } else {
        defaultSizeText = `${sizeInPx}px`;
      }
      ctxResetText.textContent = isAr ? `إعادة تعيين (${defaultSizeText})` : `Reset Size (${defaultSizeText})`;
    }

    // Bold status
    if (ctxBoldToggle) {
      const computedWeight = computedStyle.fontWeight;
      const isBold = computedWeight === 'bold' || parseInt(computedWeight) >= 700 || target.style.fontWeight === 'bold';
      if (isBold) {
        ctxBoldToggle.classList.add('active');
      } else {
        ctxBoldToggle.classList.remove('active');
      }
    }

    // Color status
    const hasInlineColor = !!target.style.color;
    const ctxResetColor = document.getElementById('ctxResetColor');
    if (ctxResetColor) {
      if (!hasInlineColor) {
        ctxResetColor.classList.add('active');
      } else {
        ctxResetColor.classList.remove('active');
      }
    }

    const targetColorHex = rgbToHex(computedStyle.color);
    const colorDots = document.querySelectorAll('.ctx-color-dot:not(.ctx-color-reset)');
    colorDots.forEach(dot => {
      const dotColor = dot.dataset.color.toLowerCase();
      if (hasInlineColor && dotColor === targetColorHex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    const ctxColorInput = document.getElementById('ctxColorInput');
    if (ctxColorInput) {
      ctxColorInput.value = targetColorHex;
    }

    // Font family override status
    if (ctxFontSelect) {
      const inlineFont = target.style.fontFamily;
      if (!inlineFont) {
        ctxFontSelect.value = 'inherit';
      } else {
        const match = inlineFont.match(/"([^"]+)"|'([^']+)'|([^,]+)/);
        if (match) {
          const family = (match[1] || match[2] || match[3] || '').trim();
          let found = false;
          for (let i = 0; i < ctxFontSelect.options.length; i++) {
            if (ctxFontSelect.options[i].value === family) {
              ctxFontSelect.value = family;
              found = true;
              break;
            }
          }
          if (!found) {
            ctxFontSelect.value = 'inherit';
          }
        } else {
          ctxFontSelect.value = 'inherit';
        }
      }
    }
  };

  const isValidTextTarget = (el) => {
    if (!el) return false;
    
    // Must be inside .web-preview-content
    if (!el.closest('.web-preview-content')) return false;
    
    // List of layout containers to exclude
    const containerClasses = [
      'web-preview-content', 'web-template-content', 'web-hero', 'web-hero-content', 'web-hero-visual',
      'web-hero-stats', 'web-stat-item', 'web-hero-buttons', 'visual-card',
      'main-card-header', 'user-info-block', 'user-contact-row', 'main-card-body',
      'cv-section-header', 'cv-item', 'cv-item-header', 'cv-skills-grid',
      'score-circle-container', 'score-circle-svg-wrapper', 'score-details',
      'web-brands-list', 'web-section-header', 'web-features-grid', 'web-features',
      'web-testimonial-content', 'web-footer-top', 'web-footer-links', 'web-links-column',
      'web-header-actions', 'web-nav', 'web-header', 'web-footer', 'web-brands-row',
      'web-footer-brand', 'score-circle-svg', 'user-avatar-circle', 'floating-header',
      'floating-meta', 'progress-bar-mini', 'progress-fill', 'score-circle-svg-wrapper'
    ];
    
    // Check if the element or any of its classes is in containerClasses
    const hasContainerClass = Array.from(el.classList).some(cls => containerClasses.includes(cls));
    if (hasContainerClass) return false;
    
    // Ignore SVGs, paths, icons, lines
    const tagName = el.tagName.toLowerCase();
    if (tagName === 'svg' || tagName === 'path' || tagName === 'hr' || tagName === 'i') return false;
    
    return true;
  };

  // Event delegation for right-clicks on editable and non-editable text elements in preview or main editors
  document.addEventListener('contextmenu', (e) => {
    if (!previewContextMenu) return;
    
    let target = e.target;
    
    // Check if we are inside the main text editor (Design/Document mode)
    const mainEditor = target.closest('#editableText') || (target.id === 'editableText' ? target : null);
    if (mainEditor) {
      target = mainEditor;
    } else {
      // Check if there is a contenteditable="true" ancestor within the web preview
      const editableAncestor = target.closest('.web-preview-content [contenteditable="true"]');
      if (editableAncestor) {
        target = editableAncestor;
      } else {
        // If no editable ancestor, check if the clicked element (or its parent) is a valid text target
        if (!isValidTextTarget(target)) {
          if (target.parentElement && isValidTextTarget(target.parentElement)) {
            target = target.parentElement;
          } else {
            return; // Ignore right-clicks on structural layouts
          }
        }
      }
    }
    
    e.preventDefault();
    activeContextElement = target;
    
    // Store original font size on target if not already saved
    if (!target.dataset.originalFontSize) {
      const computedStyle = window.getComputedStyle(target);
      target.dataset.originalFontSize = computedStyle.fontSize;
    }
    
    // Update dynamic size texts
    updateContextMenuOptions(target);
    
    // Show context menu
    previewContextMenu.style.display = 'flex';
    
    // Positioning details
    const menuWidth = previewContextMenu.offsetWidth || 190;
    const menuHeight = previewContextMenu.offsetHeight || 135;
    
    let left = e.clientX;
    let top = e.clientY;
    
    // Adjust for viewport boundaries
    if (left + menuWidth > window.innerWidth) {
      left = window.innerWidth - menuWidth - 10;
    }
    if (top + menuHeight > window.innerHeight) {
      top = window.innerHeight - menuHeight - 10;
    }
    
    previewContextMenu.style.left = `${left}px`;
    previewContextMenu.style.top = `${top}px`;
  });

  const applyFontSize = (sizePx) => {
    if (activeContextElement) {
      activeContextElement.dataset.customizedFontSize = "true";
      activeContextElement.dataset.customizedFontSizeVal = sizePx;
      
      const isMainEditor = activeContextElement.id === 'editableText';
      
      if (isMainEditor) {
        // Update CSS variable and sidebar slider, don't set inline style
        document.documentElement.style.setProperty('--card-font-size', `${sizePx}px`);
        if (sliderFontSize && valFontSize) {
          sliderFontSize.value = sizePx;
          valFontSize.textContent = `${sizePx}px`;
        }
        activeContextElement.style.removeProperty('font-size');
      } else {
        const zoomFactor = webPreviewZoom;
        const scaledSize = Math.round(sizePx * zoomFactor);
        activeContextElement.style.setProperty('font-size', `${scaledSize}px`, 'important');
      }
      
      // Update info text
      const ctxCurrentSizeText = document.getElementById('ctxCurrentSizeText');
      const isAr = (currentSiteLang === 'ar');
      if (ctxCurrentSizeText) {
        ctxCurrentSizeText.textContent = isAr ? `الحجم الحالي: ${sizePx}px` : `Current Size: ${sizePx}px`;
      }
    }
  };

  // Handle Font Size Operations
  if (ctxDecSize) {
    ctxDecSize.addEventListener('click', (e) => {
      e.stopPropagation();
      if (ctxFontSizeInput) {
        let val = parseFloat(ctxFontSizeInput.value) || 16;
        val = Math.max(8, val - 2);
        ctxFontSizeInput.value = val;
        applyFontSize(val);
      }
    });
  }

  if (ctxIncSize) {
    ctxIncSize.addEventListener('click', (e) => {
      e.stopPropagation();
      if (ctxFontSizeInput) {
        let val = parseFloat(ctxFontSizeInput.value) || 16;
        val = Math.min(150, val + 2);
        ctxFontSizeInput.value = val;
        applyFontSize(val);
      }
    });
  }

  if (ctxFontSizeInput) {
    ctxFontSizeInput.addEventListener('input', (e) => {
      let val = parseFloat(ctxFontSizeInput.value);
      if (!isNaN(val)) {
        val = Math.max(8, Math.min(150, val));
        applyFontSize(val);
      }
    });
    ctxFontSizeInput.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  if (ctxResetFont) {
    ctxResetFont.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeContextElement) {
        const isMainEditor = activeContextElement.id === 'editableText';
        
        activeContextElement.style.removeProperty('font-size');
        activeContextElement.style.removeProperty('font-weight');
        activeContextElement.style.removeProperty('color');
        activeContextElement.style.removeProperty('font-family');
        
        delete activeContextElement.dataset.customizedFontSize;
        delete activeContextElement.dataset.customizedFontSizeVal;
        delete activeContextElement.dataset.originalFontSize;
        
        if (isMainEditor) {
          if (sliderFontSize && valFontSize) {
            sliderFontSize.value = DEFAULTS.fontSize;
            valFontSize.textContent = `${DEFAULTS.fontSize}px`;
          }
          document.documentElement.style.setProperty('--card-font-size', `${DEFAULTS.fontSize}px`);
          
          document.documentElement.style.setProperty('--card-text-color', DEFAULTS.textColor);
          if (pickerTextColor) pickerTextColor.value = DEFAULTS.textColor;
          if (hexTextColor) hexTextColor.textContent = DEFAULTS.textColor.toUpperCase();
          
          document.documentElement.style.removeProperty('--card-font-weight');
          if (selectFontWeight) selectFontWeight.value = '400';
          
          document.documentElement.style.setProperty('--font-poetry', `"ArabicPoetry", sans-serif`);
          
          const selectFontStyle = document.getElementById('selectFontStyle');
          if (selectFontStyle) selectFontStyle.value = 'ArabicPoetry';
          const selectWebFontSingle = document.getElementById('selectWebFontSingle');
          if (selectWebFontSingle) selectWebFontSingle.value = 'ArabicPoetry';
          
          localStorage.removeItem('diwan-poetry-font');
        } else {
          // Reapply global zoom to it if necessary
          if (webPreviewZoom !== 1.0) {
            const computedStyle = window.getComputedStyle(activeContextElement);
            const computedFontSize = computedStyle.fontSize;
            const baseSize = computedFontSize ? parseFloat(computedFontSize) : 16;
            activeContextElement.dataset.originalFontSize = baseSize;
            const newSize = Math.round(baseSize * webPreviewZoom);
            activeContextElement.style.setProperty('font-size', `${newSize}px`, 'important');
          }
        }
        
        setTimeout(() => {
          updateContextMenuOptions(activeContextElement);
        }, 10);
        HistoryManager.saveState();
      }
      hideContextMenu();
    });
  }

  // Handle Bold Toggle
  const ctxBoldToggle = document.getElementById('ctxBoldToggle');
  if (ctxBoldToggle) {
    ctxBoldToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeContextElement) {
        const isMainEditor = activeContextElement.id === 'editableText';
        const computedStyle = window.getComputedStyle(activeContextElement);
        const computedWeight = computedStyle.fontWeight;
        const isBold = computedWeight === 'bold' || parseInt(computedWeight) >= 700 || activeContextElement.style.fontWeight === 'bold';
        
        if (isBold) {
          if (isMainEditor) {
            document.documentElement.style.setProperty('--card-font-weight', '400');
            if (selectFontWeight) selectFontWeight.value = '400';
            activeContextElement.style.removeProperty('font-weight');
          } else {
            activeContextElement.style.setProperty('font-weight', 'normal', 'important');
          }
          ctxBoldToggle.classList.remove('active');
        } else {
          if (isMainEditor) {
            document.documentElement.style.setProperty('--card-font-weight', '700');
            if (selectFontWeight) selectFontWeight.value = '700';
            activeContextElement.style.removeProperty('font-weight');
          } else {
            activeContextElement.style.setProperty('font-weight', 'bold', 'important');
          }
          ctxBoldToggle.classList.add('active');
        }
        HistoryManager.saveState();
      }
      hideContextMenu();
    });
  }

  // Handle Color Reset Click
  const ctxResetColor = document.getElementById('ctxResetColor');
  if (ctxResetColor) {
    ctxResetColor.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeContextElement) {
        const isMainEditor = activeContextElement.id === 'editableText';
        if (isMainEditor) {
          document.documentElement.style.setProperty('--card-text-color', DEFAULTS.textColor);
          if (pickerTextColor) pickerTextColor.value = DEFAULTS.textColor;
          if (hexTextColor) hexTextColor.textContent = DEFAULTS.textColor.toUpperCase();
          activeContextElement.style.removeProperty('color');
        } else {
          activeContextElement.style.removeProperty('color');
        }
        
        const presetDots = document.querySelectorAll('.ctx-color-dot:not(.ctx-color-reset)');
        presetDots.forEach(d => d.classList.remove('active'));
        ctxResetColor.classList.add('active');
        
        HistoryManager.saveState();
      }
      hideContextMenu();
    });
  }

  // Handle Color Dot Presets Click
  const colorDots = document.querySelectorAll('.ctx-color-dot:not(.ctx-color-reset)');
  colorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeContextElement) {
        const selectedColor = dot.dataset.color;
        const isMainEditor = activeContextElement.id === 'editableText';
        
        if (isMainEditor) {
          document.documentElement.style.setProperty('--card-text-color', selectedColor);
          if (pickerTextColor) pickerTextColor.value = selectedColor;
          if (hexTextColor) hexTextColor.textContent = selectedColor.toUpperCase();
          activeContextElement.style.removeProperty('color');
        } else {
          activeContextElement.style.setProperty('color', selectedColor, 'important');
        }
        
        colorDots.forEach(d => d.classList.remove('active'));
        if (ctxResetColor) ctxResetColor.classList.remove('active');
        dot.classList.add('active');
        
        const ctxColorInput = document.getElementById('ctxColorInput');
        if (ctxColorInput) {
          ctxColorInput.value = selectedColor;
        }
        
        HistoryManager.saveState();
      }
      hideContextMenu();
    });
  });

  // Handle Custom Color Input Picker
  const ctxColorInput = document.getElementById('ctxColorInput');
  if (ctxColorInput) {
    ctxColorInput.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    ctxColorInput.addEventListener('input', (e) => {
      if (activeContextElement) {
        const selectedColor = e.target.value;
        const isMainEditor = activeContextElement.id === 'editableText';
        
        if (isMainEditor) {
          document.documentElement.style.setProperty('--card-text-color', selectedColor);
          if (pickerTextColor) pickerTextColor.value = selectedColor;
          if (hexTextColor) hexTextColor.textContent = selectedColor.toUpperCase();
          activeContextElement.style.removeProperty('color');
        } else {
          activeContextElement.style.setProperty('color', selectedColor, 'important');
        }
        
        if (ctxResetColor) ctxResetColor.classList.remove('active');
        colorDots.forEach(dot => {
          if (dot.dataset.color.toLowerCase() === selectedColor.toLowerCase()) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    });

    ctxColorInput.addEventListener('change', (e) => {
      HistoryManager.saveState();
    });
  }

  // Handle Font Family Swapping via Dropdown
  if (ctxFontSelect) {
    ctxFontSelect.addEventListener('change', (e) => {
      e.stopPropagation();
      if (activeContextElement) {
        const val = ctxFontSelect.value;
        const isMainEditor = activeContextElement.id === 'editableText';
        
        if (isMainEditor) {
          activeContextElement.style.removeProperty('font-family');
          if (val !== 'inherit') {
            document.documentElement.style.setProperty('--font-poetry', `"${val}", sans-serif`);
            const selectFontStyle = document.getElementById('selectFontStyle');
            if (selectFontStyle) {
              selectFontStyle.value = val;
            }
            const selectWebFontSingle = document.getElementById('selectWebFontSingle');
            if (selectWebFontSingle) {
              selectWebFontSingle.value = val;
            }
            localStorage.setItem('diwan-poetry-font', val);
          } else {
            document.documentElement.style.setProperty('--font-poetry', `"ArabicPoetry", sans-serif`);
            localStorage.removeItem('diwan-poetry-font');
          }
        } else {
          if (val === 'inherit') {
            activeContextElement.style.removeProperty('font-family');
          } else {
            activeContextElement.style.setProperty('font-family', `"${val}", sans-serif`, 'important');
          }
        }
        HistoryManager.saveState();
      }
      hideContextMenu();
    });
  }

  // Dismiss listeners
  document.addEventListener('click', (e) => {
    if (previewContextMenu && !previewContextMenu.contains(e.target)) {
      hideContextMenu();
    }
  });

  if (canvasWrapper) {
    canvasWrapper.addEventListener('scroll', hideContextMenu);
  }
  window.addEventListener('scroll', hideContextMenu);
  window.addEventListener('resize', hideContextMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideContextMenu();
    }
    
    // Custom History Undo/Redo Shortcuts (Ctrl+Z, Ctrl+Y, Ctrl+Shift+Z)
    const isCtrl = e.ctrlKey || e.metaKey;
    if (isCtrl && !e.altKey) {
      const key = e.key.toLowerCase();
      if (key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          HistoryManager.redo();
        } else {
          HistoryManager.undo();
        }
      } else if (key === 'y') {
        e.preventDefault();
        HistoryManager.redo();
      }
    }
  });

  // Global listeners to save history state on input edits (debounced) and option changes
  let globalInputTimeout;
  document.addEventListener('input', (e) => {
    clearTimeout(globalInputTimeout);
    globalInputTimeout = setTimeout(() => {
      HistoryManager.saveState();
    }, 800);
  });

  document.addEventListener('change', (e) => {
    HistoryManager.saveState();
  });

  // Initialize premium storefront interactive logic
  initStorefrontEvents();
}

// Switch View Mode (Design Card vs Word Document vs Web Landing Page Preview)
function switchViewMode(mode) {
  localStorage.setItem('diwan-view-mode', mode);

  if (canvasWrapper) {
    canvasWrapper.scrollTop = 0;
    const faqSection = document.querySelector('.faq-section');
    if (faqSection) faqSection.classList.remove('faq-visible');
  }

  // Remove active classes
  if (tabDesignMode) tabDesignMode.classList.remove('active');
  if (tabDocMode) tabDocMode.classList.remove('active');
  if (tabWebMode) if (tabWebMode) tabWebMode.classList.remove('active');
  if (tabMobileMode) tabMobileMode.classList.remove('active');

  // Hide all wrappers
  if (designCanvasContainer) designCanvasContainer.style.display = 'none';
  if (previewModal) previewModal.style.display = 'none';
  if (webPreviewWrapper) webPreviewWrapper.style.display = 'none';
  if (mobilePreviewWrapper) mobilePreviewWrapper.style.display = 'none';

  document.body.classList.remove('view-mode-document', 'view-mode-design', 'view-mode-web', 'view-mode-mobile');

  if (mode === 'mobile') {
    document.body.classList.add('view-mode-mobile');
    if (tabMobileMode) tabMobileMode.classList.add('active');
    if (mobilePreviewWrapper) mobilePreviewWrapper.style.display = 'flex';

    // Auto-load template and theme from localStorage
    const savedTemplate = localStorage.getItem('diwan-mobile-template') || 'settings';
    const savedTheme = localStorage.getItem('diwan-mobile-theme') || 'light';
    
    if (typeof setMobileTemplate === 'function') setMobileTemplate(savedTemplate);
    if (typeof setMobileTheme === 'function') setMobileTheme(savedTheme);
  } 
  else if (mode === 'web') {
    document.body.classList.add('view-mode-web');
    if (tabWebMode) tabWebMode.classList.add('active');
    if (webPreviewWrapper) webPreviewWrapper.style.display = 'flex';
    
    const savedTemplate = localStorage.getItem('diwan-web-template') || 'saas';
    const savedTheme = localStorage.getItem('diwan-web-theme') || 'dark';
    const savedTarget = localStorage.getItem('diwan-web-target') || 'all';
    
    if (typeof setWebTemplate === 'function') setWebTemplate(savedTemplate);
    if (typeof setWebTheme === 'function') setWebTheme(savedTheme);
    if (typeof setWebTarget === 'function') setWebTarget(savedTarget);
    if (typeof setWebPreviewZoom === 'function' && typeof webPreviewZoom !== 'undefined') setWebPreviewZoom(webPreviewZoom);
    
  } 
  else if (mode === 'document') {
    document.body.classList.add('view-mode-document');
    if (tabDocMode) tabDocMode.classList.add('active');
    if (previewModal) previewModal.style.display = 'flex';
  } 
  else { // design
    document.body.classList.add('view-mode-design');
    if (tabDesignMode) tabDesignMode.classList.add('active');
    if (designCanvasContainer) designCanvasContainer.style.display = 'flex';
  }
}


function clearWebPreviewFonts() {
  const previewContent = document.querySelector('.web-preview-content');
  if (previewContent) {
    const elements = previewContent.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, label, .web-logo, [contenteditable="true"]');
    elements.forEach(el => {
      if (el.dataset.customizedFontSize === "true") return; // Preserve custom context menu sizes!
      el.style.removeProperty('font-size');
      delete el.dataset.originalFontSize;
    });
    // Force a synchronous style recalculation/reflow so subsequent getComputedStyle reads are accurate
    void previewContent.offsetHeight;
  }
}

// Set Web Preview Template
function setWebTemplate(template) {
  if (!webPreviewWrapper) return;
  if (template === 'mobile') {
    template = 'saas';
  }
  if (webPreviewWrapper.classList.contains(`web-tpl-${template}`)) return;
  clearWebPreviewFonts();
  webPreviewWrapper.classList.remove('web-tpl-saas', 'web-tpl-store', 'web-tpl-dashboard', 'web-tpl-notion', 'web-tpl-chat', 'web-tpl-mobile');
  webPreviewWrapper.classList.add(`web-tpl-${template}`);
  
  // Update active state on template toggle buttons
  document.querySelectorAll('.control-section.web-only .ratio-btn[id^="btnWebTemplate"]').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btnWebTemplate${template.charAt(0).toUpperCase() + template.slice(1)}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Update active state on browser tabs
  document.querySelectorAll('.browser-tab').forEach(tab => tab.classList.remove('active'));
  const activeTab = document.getElementById(`tabWebTemplate${template.charAt(0).toUpperCase() + template.slice(1)}`);
  if (activeTab) activeTab.classList.add('active');

  localStorage.setItem('diwan-web-template', template);
  setWebPreviewZoom(webPreviewZoom);
}

// Set Web Preview Theme
function setWebTheme(theme) {
  if (!webPreviewWrapper) return;
  webPreviewWrapper.classList.remove('web-theme-dark', 'web-theme-light', 'web-theme-amber');
  webPreviewWrapper.classList.add(`web-theme-${theme}`);
  
  // Keep mobile mirroring theme synchronized
  webPreviewWrapper.classList.remove('mobile-theme-dark', 'mobile-theme-light', 'mobile-theme-amber');
  webPreviewWrapper.classList.add(`mobile-theme-${theme}`);
  
  // Update active state on theme toggle buttons
  document.querySelectorAll('.chrome-theme-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btnWebTheme${theme.charAt(0).toUpperCase() + theme.slice(1)}`);
  if (activeBtn) activeBtn.classList.add('active');
  localStorage.setItem('diwan-web-theme', theme);
  setWebPreviewZoom(webPreviewZoom);
}

// Set Web Preview Zoom (Accessibility - Font Size Scale Only)
let webPreviewZoom = parseFloat(localStorage.getItem('diwan-web-preview-zoom')) || 1.0;
function setWebPreviewZoom(zoomVal) {
  webPreviewZoom = Math.min(1.4, Math.max(0.75, zoomVal));
  localStorage.setItem('diwan-web-preview-zoom', webPreviewZoom);
  
  const previewContent = document.querySelector('.web-preview-content');
  if (!previewContent) return;
  
  previewContent.classList.add('no-transition');
  void previewContent.offsetHeight;

  const elements = previewContent.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, label, .web-logo, [contenteditable="true"]');
  elements.forEach(el => {
    // If the element is individually customized via context menu
    if (el.dataset.customizedFontSize === "true") {
      const baseCustomSize = parseFloat(el.dataset.customizedFontSizeVal) || 16;
      if (webPreviewZoom === 1.0) {
        el.style.setProperty('font-size', `${baseCustomSize}px`, 'important');
      } else {
        const newSize = Math.round(baseCustomSize * webPreviewZoom);
        el.style.setProperty('font-size', `${newSize}px`, 'important');
      }
      return;
    }

    // If the zoom is default (1.0), remove the inline property so it falls back to stylesheet
    if (webPreviewZoom === 1.0) {
      el.style.removeProperty('font-size');
      delete el.dataset.originalFontSize;
      return;
    }
    
    // Cache the original stylesheet font size if not cached
    if (!el.dataset.originalFontSize) {
      const computedStyle = window.getComputedStyle(el);
      const computedFontSize = computedStyle.fontSize;
      if (computedFontSize) {
        el.dataset.originalFontSize = parseFloat(computedFontSize);
      } else {
        el.dataset.originalFontSize = 16;
      }
    }
    
    const origSize = parseFloat(el.dataset.originalFontSize);
    const newSize = Math.round(origSize * webPreviewZoom);
    el.style.setProperty('font-size', `${newSize}px`, 'important');
  });

  previewContent.classList.remove('no-transition');
}

function updateWebFontProperties(headingsFont, bodyFont, buttonsFont) {
  document.documentElement.style.setProperty('--font-web-headings', `"${headingsFont}", sans-serif`);
  document.documentElement.style.setProperty('--font-web-body', `"${bodyFont}", sans-serif`);
  document.documentElement.style.setProperty('--font-web-buttons', `"${buttonsFont}", sans-serif`);
}

function applyWebFont(target, fontValue) {
  if (!fontValue) return;
  if (target === 'headings') {
    document.documentElement.style.setProperty('--font-web-headings', `"${fontValue}", sans-serif`);
    localStorage.setItem('diwan-web-headings-font', fontValue);
  } else if (target === 'body') {
    document.documentElement.style.setProperty('--font-web-body', `"${fontValue}", sans-serif`);
    localStorage.setItem('diwan-web-body-font', fontValue);
  } else if (target === 'buttons') {
    document.documentElement.style.setProperty('--font-web-buttons', `"${fontValue}", sans-serif`);
    localStorage.setItem('diwan-web-buttons-font', fontValue);
  }
}

function updateWebMultipleFontsMode() {
  const grpWebFontSingle = document.getElementById('grpWebFontSingle');
  const grpWebTarget = document.getElementById('grpWebTarget');
  const webMultiFontsControls = document.getElementById('webMultiFontsControls');

  if (!chkWebMultipleFonts || !webPreviewWrapper) return;

  const isMulti = chkWebMultipleFonts.checked;
  localStorage.setItem('diwan-web-multiple-fonts', isMulti ? 'true' : 'false');

  const lang = currentLang || 'ar';
  const defaultHeadings = lang === 'ar' ? 'ThmanyahSerifDisplay' : 'Lora';
  const defaultBody = lang === 'ar' ? 'ThmanyahSerifText' : 'Montserrat';
  const defaultButtons = lang === 'ar' ? 'ThmanyahSans' : 'Montserrat';

  if (isMulti) {
    webPreviewWrapper.classList.add('web-multi-fonts-active');
    webPreviewWrapper.classList.remove('web-target-all', 'web-target-headings', 'web-target-buttons', 'web-target-none');
    if (grpWebFontSingle) grpWebFontSingle.style.display = 'none';
    if (grpWebTarget) grpWebTarget.style.display = 'none';
    if (webMultiFontsControls) webMultiFontsControls.style.display = 'flex';
    
    const headFont = selectWebFontHeadings ? selectWebFontHeadings.value : defaultHeadings;
    const bodyFont = selectWebFontBody ? selectWebFontBody.value : defaultBody;
    const btnFont = selectWebFontButtons ? selectWebFontButtons.value : defaultButtons;

    updateWebFontProperties(headFont, bodyFont, btnFont);

    // Save multi-font values to localStorage
    if (selectWebFontHeadings) localStorage.setItem('diwan-web-headings-font', selectWebFontHeadings.value);
    if (selectWebFontBody) localStorage.setItem('diwan-web-body-font', selectWebFontBody.value);
    if (selectWebFontButtons) localStorage.setItem('diwan-web-buttons-font', selectWebFontButtons.value);
  } else {
    webPreviewWrapper.classList.remove('web-multi-fonts-active');
    if (grpWebFontSingle) grpWebFontSingle.style.display = 'block';
    if (grpWebTarget) grpWebTarget.style.display = 'block';
    if (webMultiFontsControls) webMultiFontsControls.style.display = 'none';
    
    const savedTarget = localStorage.getItem('diwan-web-target') || 'all';
    webPreviewWrapper.classList.add(`web-target-${savedTarget}`);
    
    if (selectWebFontSingle) {
      const font = selectWebFontSingle.value;
      if (selectFontStyle) {
        const hasOption = Array.from(selectFontStyle.options).some(opt => opt.value === font);
        if (hasOption) {
          selectFontStyle.value = font;
          if (activeFontName) {
            activeFontName.textContent = selectFontStyle.options[selectFontStyle.selectedIndex]?.text || '';
          }
        }
      }
      document.documentElement.style.setProperty('--font-poetry', `"${font}", var(--font-poetry-fallback)`);
      localStorage.setItem('diwan-poetry-font', font);

      // Now determine the variables based on the font and active target:
      if (font === 'ArabicPoetry') {
        // Default fonts applied:
        updateWebFontProperties(defaultHeadings, defaultBody, defaultButtons);
      } else {
        // A custom font or other font is selected/uploaded
        if (savedTarget === 'all') {
          updateWebFontProperties(font, font, font);
        } else if (savedTarget === 'headings') {
          updateWebFontProperties(font, defaultBody, defaultButtons);
        } else if (savedTarget === 'buttons') {
          updateWebFontProperties(defaultHeadings, defaultBody, font);
        } else if (savedTarget === 'none') {
          updateWebFontProperties(defaultHeadings, defaultBody, defaultButtons);
        }
      }
    }
  }
  
  setWebPreviewZoom(webPreviewZoom);
}

// Set Web Preview Font Target
function setWebTarget(target) {
  if (!webPreviewWrapper) return;
  webPreviewWrapper.classList.remove('web-target-all', 'web-target-headings', 'web-target-buttons', 'web-target-none');
  webPreviewWrapper.classList.add(`web-target-${target}`);
  
  // Update active state on font target buttons
  document.querySelectorAll('.control-section.web-only .ratio-btn[id^="btnWebTarget"]').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btnWebTarget${target.charAt(0).toUpperCase() + target.slice(1)}`);
  if (activeBtn) activeBtn.classList.add('active');
  localStorage.setItem('diwan-web-target', target);
  updateWebMultipleFontsMode();
  setWebPreviewZoom(webPreviewZoom);
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
      
      // Automatically switch web preview to use this custom font
      if (chkWebMultipleFonts) {
        chkWebMultipleFonts.checked = false;
        localStorage.setItem('diwan-web-multiple-fonts', 'false');
      }
      setWebTarget('all');
      if (selectWebFontSingle) {
        selectWebFontSingle.value = 'ArabicPoetryCustomUpload';
      }
      updateWebMultipleFontsMode();
      
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

// Custom Website Preview Font Uploader helpers
async function loadFontFileWeb(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async function(e) {
      const arrayBuffer = e.target.result;
      try {
        const fontName = 'WebCustom_' + (file.name.substring(0, file.name.lastIndexOf('.')) || file.name).replace(/[^a-zA-Z0-9_-]/g, '');
        
        // Register in browser
        const font = new FontFace(fontName, arrayBuffer, {
          weight: '100 900',
          style: 'normal'
        });
        const loaded = await font.load();
        document.fonts.add(loaded);

        // Inject dynamic style block for base64 persistence
        const base64Reader = new FileReader();
        base64Reader.onload = function(evt) {
          const base64DataUrl = evt.target.result;
          let styleEl = document.getElementById(`style-${fontName}`);
          if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = `style-${fontName}`;
            document.head.appendChild(styleEl);
          }
          styleEl.innerHTML = `
            @font-face {
              font-family: '${fontName}';
              src: url('${base64DataUrl}') format('woff2'), url('${base64DataUrl}') format('woff'), url('${base64DataUrl}') format('truetype');
              font-weight: 100 900;
              font-style: normal;
            }
          `;
        };
        base64Reader.readAsDataURL(file);

        // Add to our list
        const exists = webCustomFonts.some(f => f.value === fontName);
        if (!exists) {
          webCustomFonts.push({
            value: fontName,
            displayName: file.name.substring(0, file.name.lastIndexOf('.')) || file.name,
            name: file.name
          });
        }

        resolve();
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("File reading failed."));
    reader.readAsArrayBuffer(file);
  });
}

async function handleWebFontFileInputChange() {
  const files = Array.from(webFontFileInput.files);
  if (files.length === 0) return;

  if (btnWebUploadFontsText) {
    btnWebUploadFontsText.textContent = currentSiteLang === 'ar' ? 'جاري تحميل الخطوط...' : 'Uploading fonts...';
  }

  const promises = files.map(file => loadFontFileWeb(file).catch(err => console.error("Error loading web font file:", file.name, err)));
  await Promise.all(promises);

  if (btnWebUploadFontsText) {
    btnWebUploadFontsText.textContent = currentSiteLang === 'ar' ? 'اختر ملفات الخطوط (.ttf, .otf, .woff)' : 'Choose Font Files (.ttf, .otf, .woff)';
  }

  updateWebUploadedFontsList();
  if (webCustomFonts.length > 0) {
    const lastFont = webCustomFonts[webCustomFonts.length - 1];
    populateFontStyles(currentLang, lastFont.value);
    
    if (chkWebMultipleFonts) {
      chkWebMultipleFonts.checked = false;
      localStorage.setItem('diwan-web-multiple-fonts', 'false');
    }
    setWebTarget('all');
    if (selectWebFontSingle) selectWebFontSingle.value = lastFont.value;
    if (selectWebFontHeadings) selectWebFontHeadings.value = lastFont.value;
    if (selectWebFontBody) selectWebFontBody.value = lastFont.value;
    if (selectWebFontButtons) selectWebFontButtons.value = lastFont.value;
    
    updateWebMultipleFontsMode();
  } else {
    populateFontStyles(currentLang);
  }
  
  // Force a redraw of the preview wrapper to apply fonts
  const webContent = document.querySelector('.web-preview-content');
  if (webContent) {
    webContent.style.display = 'none';
    webContent.offsetHeight;
    webContent.style.display = '';
  }

  webFontFileInput.value = '';
  HistoryManager.saveState();
}

function updateWebUploadedFontsList() {
  if (!webUploadedFontsList) return;
  webUploadedFontsList.innerHTML = '';
  
  if (webFontCountBadge) {
    if (webCustomFonts.length > 0) {
      webFontCountBadge.style.display = 'inline-block';
      webFontCountBadge.textContent = webCustomFonts.length;
    } else {
      webFontCountBadge.style.display = 'none';
    }
  }

  webCustomFonts.forEach((f, idx) => {
    const item = document.createElement('div');
    item.className = 'web-uploaded-font-item';
    item.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 12px;
      color: #e0e0e0;
      transition: all 0.2s ease;
    `;

    const span = document.createElement('span');
    span.style.cssText = `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 80%;
      direction: ltr;
      display: flex;
      align-items: center;
      gap: 6px;
    `;
    span.innerHTML = `<i class="fa-solid fa-font" style="color: var(--accent-gold);"></i> ${f.displayName}`;
    item.appendChild(span);

    const delBtn = document.createElement('button');
    delBtn.style.cssText = `
      background: none;
      border: none;
      color: #ff5c5c;
      cursor: pointer;
      padding: 2px 6px;
      font-size: 14px;
      transition: color 0.2s;
    `;
    delBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeWebCustomFont(idx);
    });
    
    // Hover effect
    delBtn.addEventListener('mouseenter', () => { delBtn.style.color = '#ff3333'; });
    delBtn.addEventListener('mouseleave', () => { delBtn.style.color = '#ff5c5c'; });

    item.appendChild(delBtn);
    webUploadedFontsList.appendChild(item);
  });
}

function removeWebCustomFont(index) {
  const fontObj = webCustomFonts[index];
  if (!fontObj) return;

  // Remove from the array
  webCustomFonts.splice(index, 1);
  
  // Remove the CSS from the dynamic style tag if applicable
  const styleEl = document.getElementById(`style-${fontObj.value}`);
  if (styleEl) styleEl.remove();

  // Re-render and re-populate
  updateWebUploadedFontsList();
  populateFontStyles(currentLang);
  HistoryManager.saveState();
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
  localStorage.removeItem('diwan-poetry-font');
  localStorage.removeItem('diwan-web-headings-font');
  localStorage.removeItem('diwan-web-body-font');
  localStorage.removeItem('diwan-web-buttons-font');
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
  
  // Remove dynamic style block for uploaded custom font
  const styleEl = document.getElementById('custom-font-style');
  if (styleEl) {
    styleEl.remove();
  }
  if (fontFileInput) {
    fontFileInput.value = '';
  }

  const isAr = (currentSiteLang === 'ar');
  updateFontStatus(true, isAr ? "تم تحميل الخط الافتراضي تلقائياً" : "Default font loaded successfully");

  if (activeFontName) {
    activeFontName.textContent = isAr ? 'خط الشعر العربي (الافتراضي)' : 'Arabic Poetry (Default Loaded)';
  }

  if (btnLangAr) btnLangAr.classList.add('active');
  if (btnLangEn) btnLangEn.classList.remove('active');
  updateWritingLangButtonText();
  if (samplesListAr) samplesListAr.style.display = 'flex';
  if (samplesListEn) samplesListEn.style.display = 'none';
  if (titleSamples) titleSamples.textContent = 'نماذج من الشعر العربي';
  populateFontStyles('ar');
  if (selectWebFontHeadings) applyWebFont('headings', selectWebFontHeadings.value);
  if (selectWebFontBody) applyWebFont('body', selectWebFontBody.value);
  if (selectWebFontButtons) applyWebFont('buttons', selectWebFontButtons.value);

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
// Populate font options dynamically
function populateFontStyles(lang, selectedValue = null) {
  if (!selectFontStyle) return;
  
  const targetSelects = [
    selectFontStyle,
    selectWebFontSingle,
    selectWebFontHeadings,
    selectWebFontBody,
    selectWebFontButtons,
    ctxFontSelect
  ];

  targetSelects.forEach(sel => {
    if (sel) sel.innerHTML = '';
  });

  const fonts = lang === 'ar' ? arabicFonts : englishFonts;
  
  // For context menu selector, add "inherit" first
  if (ctxFontSelect) {
    const optInherit = document.createElement('option');
    optInherit.value = 'inherit';
    optInherit.textContent = currentSiteLang === 'ar' ? 'الخط الافتراضي للقسم (ترشيح)' : 'Default Section Font (Inherit)';
    ctxFontSelect.appendChild(optInherit);
  }

  // Helper to append option to all applicable select elements
  function addOption(val, text, isWebOnly = false) {
    targetSelects.forEach(sel => {
      if (!sel) return;
      // Skip web-only fonts for the card font select
      if (sel === selectFontStyle && isWebOnly) return;
      // Skip appending inherit to non-context-menu dropdowns
      if (sel === ctxFontSelect && val === 'inherit') return;
      const opt = document.createElement('option');
      opt.value = val;
      opt.textContent = text;
      sel.appendChild(opt);
    });
  }

  // If we have custom web-only uploaded fonts, append them
  webCustomFonts.forEach(f => {
    const prefix = currentSiteLang === 'ar' ? 'مرفوع: ' : 'Uploaded: ';
    addOption(f.value, prefix + f.displayName, true);
  });

  // If we have a custom uploaded font, prepend/append it
  if (customFontLoaded && customFontName) {
    const customText = currentSiteLang === 'ar' ? `مخصص: ${customFontName}` : `Custom: ${customFontName}`;
    addOption('ArabicPoetryCustomUpload', customText);
  }
  
  fonts.forEach(f => {
    let text = f.name;
    if (f.value === 'ArabicPoetry') {
      text = currentSiteLang === 'ar' ? 'خط الشعر العربي (الافتراضي)' : 'Arabic Poetry (Default)';
    }
    addOption(f.value, text);
  });
  
  // Hide dropdown for Arabic if there is only 1 option (default, no custom uploaded font)
  if (grpFontStyle) {
    const showDropdown = (lang === 'en' || (customFontLoaded && customFontName));
    grpFontStyle.style.display = showDropdown ? 'block' : 'none';
  }
  
  // Set values
  let valToSet = selectedValue;
  if (!valToSet) {
    if (customFontLoaded) {
      valToSet = 'ArabicPoetryCustomUpload';
    } else {
      valToSet = fonts[0].value;
    }
  }

  const savedSingle = localStorage.getItem('diwan-poetry-font');
  const resolvedVal = savedSingle || valToSet;

  if (selectFontStyle) selectFontStyle.value = resolvedVal;
  if (selectWebFontSingle) {
    selectWebFontSingle.value = resolvedVal;
  }
  if (selectWebFontHeadings) {
    const savedHead = localStorage.getItem('diwan-web-headings-font');
    if (savedHead) {
      selectWebFontHeadings.value = savedHead;
    } else {
      selectWebFontHeadings.value = lang === 'ar' ? 'ThmanyahSerifDisplay' : 'Lora';
    }
  }
  if (selectWebFontBody) {
    const savedBody = localStorage.getItem('diwan-web-body-font');
    if (savedBody) {
      selectWebFontBody.value = savedBody;
    } else {
      selectWebFontBody.value = lang === 'ar' ? 'ThmanyahSerifText' : 'Montserrat';
    }
  }
  if (selectWebFontButtons) {
    const savedButtons = localStorage.getItem('diwan-web-buttons-font');
    if (savedButtons) {
      selectWebFontButtons.value = savedButtons;
    } else {
      selectWebFontButtons.value = lang === 'ar' ? 'ThmanyahSans' : 'Montserrat';
    }
  }
  
  // Apply font CSS
  const fontValue = selectFontStyle.value;
  document.documentElement.style.setProperty('--font-poetry', `"${fontValue}", var(--font-poetry-fallback)`);
  if (activeFontName) {
    activeFontName.textContent = selectFontStyle.options[selectFontStyle.selectedIndex]?.text || '';
  }
  updateWebMultipleFontsMode();
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
    doc_text_color_lbl: "لون النص",
    tab_web_mode: "معاينة موقع (Web)",
    web_page_settings: "تنسيق خطوط قالب الموقع",
    web_page_settings_desc: "تعديل وتنسيق الخطوط الخاصة بقوالب المواقع الإلكترونية.",
    web_template_lbl: "قالب الموقع",
    web_template_saas: "سيرة",
    web_template_store: "متجر",
    web_theme_lbl: "مظهر الألوان",
    web_theme_dark: "داكن فاخر",
    web_theme_light: "فاتح نظيف",
    web_theme_amber: "عنبري ملكي",
    web_multi_fonts_lbl: "تفعيل خطوط متعددة للموقع",
    web_upload_fonts_lbl: "تحميل خطوط مخصصة للموقع",
    web_upload_fonts_btn: "اختر ملفات الخطوط (.ttf, .otf, .woff)",
    web_font_lbl: "خط الموقع الأساسي",
    web_font_headings: "خط العناوين",
    web_font_body: "خط النصوص والفقرات",
    web_font_buttons: "خط الأزرار والقوائم",
    web_target_lbl: "تطبيق الخط المخصص على",
    web_target_all: "الموقع بأكمله",
    web_target_headings: "العناوين فقط",
    web_target_buttons: "الأزرار والقوائم",
    web_target_none: "لا شيء",
    web_logo_text: "منشئ سيرتي الذاتية الذكية",
    web_nav_home: "المميزات",
    web_nav_about: "آلية العمل",
    web_nav_templates: "نماذج",
    web_nav_features: "الأسعار",
    web_nav_contact: "الأسئلة الشائعة",
    web_btn_login: "تسجيل الدخول",
    web_btn_start: "انطلق الآن",
    web_hero_badge: "الجيل الجديد من الذكاء الاصطناعي ✨",
    web_hero_title: "سيرة مهنية تصنع مستقبلك الذكي",
    web_hero_desc: "ارفع سيرتك الذاتية واحصل على تقييم فوري من الذكاء الاصطناعي، ثم حسّنها بمقترحات مخصصة بناءً على الوصف الوظيفي — خلال دقيقة تقريباً.",
    web_btn_primary: "ابدأ مجاناً ←",
    web_btn_secondary: "اكتشف طريقتنا",
    web_stat1_num: "94%",
    web_stat1_lbl: "فرصة مقابلة أكثر في كبرى الشركات",
    web_stat2_num: "50%-",
    web_stat2_lbl: "الوقت اللازم لبناء سيرة جديدة",
    web_stat3_num: "0",
    web_stat3_lbl: "ريال تكلفة البداية المجانية",
    web_visual_card1_title: "المستند النشط: سيرة مهنية",
    web_visual_card1_score: "حالة التحسين: ممتاز",
    web_visual_card1_time: "آخر تعديل: قبل دقيقتين",
    web_visual_main_name: "حمزة صالح",
    web_visual_main_title: "مهندس برمجيات أول / Software Engineer",
    web_visual_main_email: "hamza@example.com",
    web_visual_main_phone: "+966 50 555 1234",
    web_visual_main_location: "الرياض، السعودية",
    web_visual_main_sec1: "الخبرة المهنية / Professional Experience",
    web_visual_main_role: "مطور واجهات أول - منصة تبيّن",
    web_visual_main_desc: "تطوير وتحسين كفاءة المنصات الرقمية بنسبة 40٪ وزيادة سرعة استجابة الواجهات بأسلوب تقني متطور.",
    web_visual_main_sec2: "المهارات والقدرات / Technical Skills",
    web_visual_card2_title: "تطابق متطلبات الوظيفة",
    web_visual_card2_desc: "السيرة الذاتية متوافقة بشكل ممتاز!",
    web_brands_title: "انضم إلى أكثر من ٥٠,٠٠٠ مستخدم حصلوا على وظائف أحلامهم في:",
    web_features_title: "ميزات منشئ السير الذاتية بالذكاء الاصطناعي",
    web_features_desc: "كل ما تحتاجه لإنشاء سيرة ذاتية احترافية تتوافق مع متطلبات الوظائف وأنظمة الفرز في مكان واحد.",
    web_feat1_title: "التخصيص الذكي للوظيفة",
    web_feat1_desc: "تقوم خوارزمياتنا بتحليل وصف الوظيفة وضبط سيرتك الذاتية تلقائيًا لتسليط الضوء على المهارات المطلوبة.",
    web_feat2_title: "توافق تام مع أنظمة ATS",
    web_feat2_desc: "قوالب مصممة بعناية خالية من الجداول المعقدة لضمان قراءتها بنجاح بواسطة خوارزميات الفرز والتوظيف.",
    web_feat3_title: "تصدير فوري بنسق PDF",
    web_feat3_desc: "حمّل سيرتك الذاتية بصيغة PDF جاهزة تماماً للطباعة والإرسال بضغطة زر واحدة وتنسيق فائق الدقة.",
    web_testimonial_text: "«بفضل هذا المنشئ الذكي، استطعت مواءمة سيرتي الذاتية مع وصف الوظيفة في أقل من دقيقة. تم استدعائي للمقابلة الشخصية في اليوم التالي مباشرة وحصلت على الوظيفة!»",
    web_testimonial_author: "سارة العتيبي",
    web_testimonial_title: "مهندسة برمجيات في أرامكو",
    web_brand_desc: "المنصة الذكية الأسرع لتصميم وسرد سيرتك الذاتية بمواءمة تامة مع وصف الوظيفة المستهدفة.",
    web_footer_col1_title: "المنتجات",
    web_footer_col1_link1: "منشئ السير الذاتية",
    web_footer_col1_link2: "أدوات مواءمة الوظائف",
    web_footer_col2_title: "المصادر",
    web_footer_col2_link1: "مدونة التوظيف والوظائف",
    web_footer_col2_link2: "دليل كتابة السيرة",
    web_copyright: "حقوق النشر © 2026 منشئ السيرة الذاتية الذكية. جميع الحقوق محفوظة.",
    
    // Store translation keys
    store_logo: "ديوان إلكترونكس",
    store_nav_home: "الرئيسية",
    store_nav_phones: "الهواتف والأجهزة",
    store_nav_audio: "الصوتيات الراقية",
    store_nav_accessories: "ملحقات التصميم",
    store_nav_contact: "تواصل معنا",
    store_cart_btn: "سلة المشتريات (3)",
    store_hero_title: "بوابة الابتكار الرقمي بين يديك",
    store_hero_desc: "اكتشف الجيل الجديد من الأجهزة الذكية والملحقات المصممة خصيصاً للارتقاء بإنتاجيتك وأسلوب حياتك العصري بأعلى معايير الجودة.",
    store_hero_cta_primary: "تسوق العروض الحصرية",
    store_hero_cta_secondary: "شاهد الفيديو الترويجي",
    store_grid_title: "أحدث التقنيات المختارة",
    store_grid_desc: "منتجات حائزة على جوائز تجمع بين متعة الاستخدام وأناقة التصميم العصري الفخم",
    store_prod1_cat: "صوتيات راقية",
    store_prod1_title: "سماعات رأس ديوان اللاسلكية بنقاء فائق",
    store_prod1_price: "$299",
    store_prod1_btn: "أضف إلى السلة",
    store_prod2_cat: "ملحقات مكتبية",
    store_prod2_title: "لوحة مفاتيح ميكانيكية مخصصة للمصممين",
    store_prod2_price: "$189",
    store_prod2_btn: "أضف إلى السلة",
    store_prod3_cat: "أجهزة ذكية",
    store_prod3_title: "ساعة ديوان الرياضية الذكية الجيل الخامس",
    store_prod3_price: "$249",
    store_prod3_btn: "أضف إلى السلة",
    store_prod4_cat: "شاشات احترافية",
    store_prod4_title: "شاشة منحنية احترافية فائقة الدقة 34 بوصة",
    store_prod4_price: "$549",
    store_prod4_btn: "أضف إلى السلة",
    store_quote_text: "«لقد غيرت سماعات ديوان اللاسلكية تجربتي اليومية بالكامل، عزل الضوضاء فائق الذكاء وجودة الصوت لا تقارن بأي سماعات أخرى جربتها سابقاً.»",
    store_quote_author: "سارة عبد الرحمن",
    store_quote_title: "مهندسة برمجيات وصانعة محتوى رقمي",
    store_footer_desc: "متجرك التقني الأول لأحدث الابتكارات والأجهزة الإلكترونية الذكية بأعلى مواصفات الجودة وخدمة عملاء فائقة التميز.",
    store_foot_col1_title: "التسوق",
    store_foot_col1_link1: "عروض مميزة",
    store_foot_col1_link2: "أحدث الملحقات",
    store_foot_col2_title: "المساعدة",
    store_foot_col2_link1: "سياسة الضمان",
    store_foot_col2_link2: "تتبع الشحنة",
    store_copyright: "حقوق النشر © 2026 ديوان إلكترونكس. جميع الحقوق محفوظة.",
    store_hero_badge: "عرض إطلاق خاص - خصم 15٪ لفترة محدودة",
    store_hero_starts_at: "تبدأ الأسعار من",
    store_hero_starts_price: "$189",
    store_filter_all: "الكل",
    store_filter_audio: "الصوتيات",
    store_filter_keyboards: "ملحقات مكتبية",
    store_filter_watches: "ساعات ذكية",
    store_filter_displays: "الشاشات",
    store_badge_bestseller: "الأكثر مبيعاً",
    store_prod1_spec1: "عزل نشط للضوضاء ANC",
    store_prod1_spec2: "صوت محيطي ثلاثي الأبعاد",
    store_prod1_spec3: "شحن سريع (5 دقائق = 5 ساعات)",
    store_badge_new: "جديد بالكامل",
    store_prod2_spec1: "مفاتيح خطية صامتة ومريحة",
    store_prod2_spec2: "هيكل ألومنيوم مؤكسد متين",
    store_prod2_spec3: "اتصال لاسلكي ثلاثي الأوضاع",
    store_badge_hot: "الأكثر طلباً",
    store_prod3_spec1: "مراقبة مستمرة لنبض القلب والدم",
    store_prod3_spec2: "شاشة Retina AMOLED ساطعة",
    store_prod3_spec3: "عمر بطارية يصل إلى 7 أيام كاملة",
    store_badge_discount: "وفر 100$",
    store_prod4_spec1: "معدل تحديث فائق السرعة 144Hz",
    store_prod4_spec2: "انحناء مثالي 1500R لراحة العين",
    store_prod4_spec3: "ألوان حيوية 99٪ sRGB و DCI-P3",
    store_bento1_title: "شحن فائق السرعة مجاني",
    store_bento1_desc: "شحن وتوصيل مجاني سريع لجميع الطلبات التي تتجاوز قيمتها 150 دولارًا أمريكيًا شامل التغطية الكاملة والتأمين.",
    store_bento2_title: "ضمان معتمد لمدة سنتين",
    store_bento2_desc: "نقدم ضمانًا محليًا وعالميًا شاملاً لمدة 24 شهرًا ضد جميع العيوب المصنعية مع دعم فني متكامل.",
    store_bento3_title: "إرجاع مرن وسلس",
    store_bento3_desc: "سياسة استرجاع واستبدال مرنة لمدة 14 يومًا بضمان استرداد الأموال بالكامل بدون أي تعقيدات.",
    store_news_title: "كن أول من يعرف بالمنتجات الجديدة",
    store_news_desc: "اشترك في نشرتنا البريدية لتلقي تحديثات الإصدارات الجديدة، العروض الحصرية، وقسائم الحسم الشهرية الخاصة.",
    store_news_placeholder: "عنوان بريدك الإلكتروني",
    store_news_btn: "اشترك الآن",
    store_news_success: "✨ تم تسجيل اشتراكك بنجاح! شكرًا لانضمامك إلينا.",
    cart_drawer_title: "<i class=\"fa-solid fa-basket-shopping\"></i> <span contenteditable=\"true\" spellcheck=\"false\">سلة التسوق الخاصة بك</span>",
    cart_empty_msg: "<i class=\"fa-solid fa-bag-shopping empty-icon\"></i><p contenteditable=\"true\" spellcheck=\"false\">السلة فارغة حالياً. أضف بعض المنتجات الرائعة للبدء!</p>",
    cart_subtotal: "المجموع الفرعي:",
    cart_shipping: "الشحن والتسليم:",
    cart_shipping_free: "مجاني",
    cart_total: "الإجمالي الكلي:",
    cart_checkout_btn: "إتمام عملية الشراء",
    cart_continue_btn: "مواصلة التسوق",
    store_search_placeholder: "ابحث عن منتج...",

    web_hint_lbl: "💡 نصيحة: يمكنك النقر فوق أي نص في الموقع وتعديله مباشرة لتجربة الخط عليه!",
    ctx_enlarge_font: "تكبير الخط (+)",
    ctx_shrink_font: "تصغير الخط (-)",
    ctx_reset_font: "إعادة تعيين الحجم",
    ctx_bold: "نص عريض (Bold)",
    ctx_color: "لون النص",
    web_target_none: "لا شيء",
    ctx_font_header: "نوع الخط",
    ctx_font_custom: "الخط المخصص",
    ctx_font_default: "الخط الافتراضي للموقع",
    ctx_font_serif: "خط كلاسيكي (Serif)",
    ctx_font_mono: "خط متباعد (Monospace)",
    web_zoom_lbl: "تغيير حجم خطوط المعاينة",
    web_zoom_in: "تكبير",
    web_zoom_out: "تصغير",
    web_zoom_reset: "افتراضي",
    web_template_dashboard: "لوحة",
    db_menu_title_general: "عام",
    db_menu_home: "الصفحة الرئيسية",
    db_menu_tasks: "المهام",
    db_menu_analytics: "التحاليل والأرقام",
    db_menu_finance: "الطلبات المالية",
    db_menu_support: "طلبات الدعم",
    db_menu_title_people: "الأشخاص والتقارير",
    db_menu_employees: "الموظفون",
    db_menu_reports: "التقارير",
    db_menu_messages: "الرسائل",
    db_menu_title_support: "الدعم",
    db_menu_settings: "الإعدادات",
    db_menu_help: "الدعم والمساعدة",
    db_platform_title: "المنصة الرقمية الموحدة",
    db_nav_home: "الرئيسية",
    db_nav_tasks: "المهام",
    db_nav_finance: "الطلبات المالية",
    db_nav_help: "الدعم والمساعدة",
    db_nav_activity: "الالتحاق والنشاط",
    db_nav_analytics: "التحاليل والأرقام",
    db_menu_finance_full: "الالتحاق والنشاط",
    db_team_financial: "الفريق المالي",
    db_user_initials: "عم",
    db_user_name: "عبدالمجيد مؤنس",
    db_user_role: "المدير التقني",
    db_kpi_total_requests: "مجموع الطلبات",
    db_kpi_current_requests: "الطلبات الحالية",
    db_kpi_cancelled_requests: "الطلبات الملغية",
    db_kpi_total_requests_sub: "+20% أكثر من الشهر السابق",
    db_kpi_current_requests_sub: "-5.8% أقل من الشهر السابق",
    db_kpi_cancelled_requests_sub: "+12.5% أكثر من الشهر السابق",
    db_devices_title: "الأجهزة المستخدمة",
    db_devices_mobile: "الهواتف المحمولة",
    db_devices_desktop: "أجهزة الحاسوب",
    db_devices_tablet: "الأجهزة اللوحية",
    db_members_title: "مجموعة الأعضاء",
    db_members_male: "ذكور 82%",
    db_members_female: "إناث 18%",
    db_heatmap_title: "الطلبات حسب الوقت",
    db_heatmap_sub: "+1.4% أكثر من الشهر السابق",
    db_heatmap_sun: "الأحد",
    db_heatmap_mon: "الإثنين",
    db_heatmap_tue: "الثلاثاء",
    db_heatmap_wed: "الأربعاء",
    db_heatmap_thu: "الخميس",
    db_heatmap_fri: "الجمعة",
    db_heatmap_sat: "السبت",
    db_performance_title: "مؤشر الأداء",
    db_performance_tasks: "عدد المهام",
    db_performance_personal: "المهام الشخصية",
    db_performance_dept: "مهام القسم",
    db_performance_btn: "إضافة المزيد من المؤشرات",
    db_table_title: "المهام",
    db_th_details: "الطلب بتفاصيله",
    db_th_assigned: "تم تعيينها إلى",
    db_th_dept: "القسم",
    db_th_time: "التوقيت",
    db_th_status: "حالة الطلب",
    db_status_completed: "COMPLETED",
    db_status_cancelled: "CANCELLED",
    db_dept_tech: "التقني",
    db_dept_finance: "المالي",
    db_dept_sales: "المبيعات",
    db_user2_initials: "رغ",
    db_user2_name: "رشيد الغالي محمد",
    db_user3_initials: "مب",
    db_user3_name: "مصطفى البنوني",
    db_user4_initials: "جب",
    db_user4_name: "جلهارير بارياكوساد",
    db_row1_title: "إنشاء استبيان للمستخدمين للبحث عن مدى رضاهم عن خدماتنا الم...",
    db_row2_title: "إحصاء عدد المستخدمين للمنصة منذ تاريخ 1 يونيو 2024...",
    db_row3_title: "إصلاح مشكلة التحقق الثنائي لمستخدمي أندرويد من طراز 6.2...",
    db_row4_title: "إنشاء استبيان للمستخدمين للبحث عن مدى رضاهم عن خدماتنا الم...",
    web_template_notion: "مستندات",
    web_template_chat: "ديسكورد",
    chat_server_title: "مجتمع سبيكترم",
    chat_search_placeholder: "ابحث عن محادثة...",
    chat_category_text: "القنوات النصية",
    chat_channel_general: "العام",
    chat_channel_announcements: "الإعلانات",
    chat_channel_feedback: "الآراء والملاحظات",
    chat_channel_questions: "الأسئلة الشائعة",
    chat_user_name: "أحمد محمد",
    chat_user_tag: "#2026",
    chat_members_online: "نشط الآن — ٤",
    chat_members_offline: "غير متصل — ٦",
    chat_member_admin: "طاقم الإدارة",
    chat_member_bot: "بوت سبيكترم",
    chat_message_1_user: "خالد",
    chat_message_1_text: "أهلاً بالجميع! مرحباً بكم في واجهة محادثة سبيكترم الجديدة.",
    chat_message_2_user: "سارة",
    chat_message_2_text: "تبدو رائعة جداً! الخطوط المخصصة تظهر بوضوح ممتاز في هذا التصميم.",
    chat_message_3_user: "نورة",
    chat_message_3_text: "بالتأكيد. هل جربتم تغيير سمة المعاينة إلى الداكن الفاخر أو الكهرماني؟",
    chat_message_input_placeholder: "اكتب رسالة في #العام",
    notion_brand: "نوشن",
    notion_workspace_label: "مساحة العمل",
    notion_workspace_name: "سبيكترم",
    notion_search_placeholder: "بحث...",
    notion_favorites_label: "المفضلة",
    notion_nav_strategy_icon: "♟️",
    notion_nav_strategy: "الاستراتيجية",
    notion_nav_metrics_icon: "📊",
    notion_nav_metrics: "المؤشرات",
    notion_nav_brand_icon: "⬡",
    notion_nav_brand: "العلامة التجارية",
    notion_pages_label: "الصفحات",
    notion_page_overview_icon: "📋",
    notion_page_overview: "نظرة عامة",
    notion_page_release_icon: "🚀",
    notion_page_release: "الإصدارات",
    notion_page_styleguide_icon: "🎨",
    notion_page_styleguide: "دليل الأسلوب",
    notion_page_archive_icon: "📦",
    notion_page_archive: "الأرشيف",
    notion_breadcrumb_workspace: "مساحة العمل",
    notion_breadcrumb_docs: "المستندات",
    notion_breadcrumb_current: "الحالي",
    notion_action_share: "مشاركة",
    notion_action_comment: "تعليق",
    notion_action_updated: "تم التحديث منذ 3 ساعات",
    notion_doc_title: "عنوان المستند",
    notion_meta_last_edit: "آخر تعديل: 12 مايو 2026",
    notion_meta_owner: "المالك: أحمد محمد",
    notion_meta_version: "الإصدار v2.1.4",
    notion_doc_summary: "يغطي هذا المستند Product Roadmap Q4 ويتضمن 14 مبادرة رئيسية موزعة على 3 فرق. آخر تحديث رئيسي كان في 8 مايو 2026 بعد مراجعة Team Alpha للجدول الزمني.",
    notion_callout_icon: "💡",
    notion_callout_title: "ملاحظة هامة",
    notion_callout_body: "هذا النص تجريبي يُستخدم لاختبار مظهر الخط وتناسق التنسيق في واجهة المستخدم. يمكن استبداله لاحقًا بأي محتوى آخر.",
    notion_checklist_title: "قائمة المهام",
    notion_check_1: "مراجعة خطة العمل للربع الثالث",
    notion_check_2: "تجهيز العرض التقديمي لاجتماع مجلس الإدارة القادم",
    notion_check_3: "تدقيق الحسابات",
    notion_check_4: "قراءة التقارير",
    notion_table_title: "ملفات المشروع",
    notion_table_col_name: "الملف",
    notion_table_col_owner: "المالك",
    notion_table_col_status: "الحالة",
    notion_table_col_eta: "التسليم المتوقع",
    notion_row_1_name: "إعادة تصميم لوحة التحكم",
    notion_row_1_owner: "نورة",
    notion_row_1_status: "قيد المراجعة",
    notion_row_1_eta: "١٢ يونيو",
    notion_row_2_name: "توثيق واجهة API",
    notion_row_2_owner: "خالد",
    notion_row_2_status: "قيد التنفيذ",
    notion_row_2_eta: "٥ أغسطس",
    notion_row_3_name: "ترقية حزمة التصميم",
    notion_row_3_owner: "سارة",
    notion_row_3_status: "مكتمل",
    notion_row_3_eta: "١٨ مايو",
    notion_rail_heading: "روابط سريعة",
    notion_rail_link_1: "سجل التغييرات",
    notion_rail_link_2: "دليل الأسلوب",
    notion_rail_link_3: "مكتبة المكونات",
    notion_rail_link_4: "سجلات الإصدارات",
    notion_rail_link_5: "قاعدة المعرفة",
    notion_rail_link_6: "إعدادات الفريق"
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
    export_compressing: "Compressing page",
    tab_web_mode: "Website Preview (Web)",
    web_page_settings: "Website Template Fonts",
    web_page_settings_desc: "Modify and format the fonts of the website templates.",
    web_template_lbl: "Website Template",
    web_template_saas: "Resume",
    web_template_store: "Store",
    web_theme_lbl: "Color Theme",
    web_theme_dark: "Premium Dark",
    web_theme_light: "Clean Light",
    web_theme_amber: "Royal Amber",
    web_multi_fonts_lbl: "Enable Multiple Website Fonts",
    web_upload_fonts_lbl: "Upload Custom Website Fonts",
    web_upload_fonts_btn: "Choose Font Files (.ttf, .otf, .woff)",
    web_font_lbl: "Primary Website Font",
    web_font_headings: "Headings Font",
    web_font_body: "Body & Paragraphs Font",
    web_font_buttons: "Buttons & Navigation Font",
    web_target_lbl: "Apply Custom Font To",
    web_target_all: "Entire Website",
    web_target_headings: "Headings Only",
    web_target_buttons: "Buttons & Nav Only",
    web_target_none: "None",
    web_logo_text: "Smart Resume Builder",
    web_nav_home: "Features",
    web_nav_about: "How It Works",
    web_nav_templates: "Templates",
    web_nav_features: "Pricing",
    web_nav_contact: "FAQ",
    web_btn_login: "Login",
    web_btn_start: "Launch Now",
    web_hero_badge: "Next-Gen AI Resume Builder ✨",
    web_hero_title: "A Professional Resume Built For Your Future",
    web_hero_desc: "Upload your resume, get an instant AI score, and optimize it with tailored suggestions based on the job description — in under a minute.",
    web_btn_primary: "Start Free →",
    web_btn_secondary: "Discover Our Method",
    web_stat1_num: "94%",
    web_stat1_lbl: "More interview callbacks at top companies",
    web_stat2_num: "-50%",
    web_stat2_lbl: "Time to build a resume from scratch",
    web_stat3_num: "$0",
    web_stat3_lbl: "Cost to get started for free",
    web_visual_card1_title: "Active Resume: Software Engineer",
    web_visual_card1_score: "Status: Excellent",
    web_visual_card1_time: "Last edited: 2 mins ago",
    web_visual_main_name: "Hamza Saleh",
    web_visual_main_title: "Lead Software Engineer",
    web_visual_main_email: "hamza@example.com",
    web_visual_main_phone: "+966 50 555 1234",
    web_visual_main_location: "Riyadh, KSA",
    web_visual_main_sec1: "Professional Experience",
    web_visual_main_role: "Lead Frontend Developer - Tabyeen",
    web_visual_main_desc: "Optimized digital platform performance by 40% and improved interface responsiveness using state-of-the-art architectures.",
    web_visual_main_sec2: "Key Technical Skills",
    web_visual_card2_title: "Job Description Match Score",
    web_visual_card2_desc: "Your resume is highly optimized!",
    web_brands_title: "Join over 50,000 successful users hired at top companies:",
    web_features_title: "AI Resume Builder Features",
    web_features_desc: "Everything you need to create a professional resume matching job requirements and ATS sorting systems in one place.",
    web_feat1_title: "Smart Job Customization",
    web_feat1_desc: "Our algorithms analyze the job description and automatically adjust your resume to highlight the required skills.",
    web_feat2_title: "Full ATS Compatibility",
    web_feat2_desc: "Carefully designed templates free of complex tables to ensure successful parsing by recruitment filtering systems.",
    web_feat3_title: "Instant PDF Export",
    web_feat3_desc: "Download your resume as a print-ready, high-resolution PDF file with a single click.",
    web_testimonial_text: "\"Thanks to this smart builder, I aligned my resume with the job description in less than a minute. I got called for an interview the very next day and got hired!\"",
    web_testimonial_author: "Sara Al-Otaibi",
    web_testimonial_title: "Software Engineer at Aramco",
    web_brand_desc: "The fastest smart platform to design and customize your resume for target job descriptions.",
    web_footer_col1_title: "Products",
    web_footer_col1_link1: "Resume Builder",
    web_footer_col1_link2: "Job Matching Tools",
    web_footer_col2_title: "Resources",
    web_footer_col2_link1: "Careers Blog",
    web_footer_col2_link2: "Resume Guide",
    web_copyright: "Copyright © 2026 Smart Resume Builder. All rights reserved.",

    // Store translation keys
    store_logo: "Diwan Electronics",
    store_nav_home: "Home",
    store_nav_phones: "Phones & Devices",
    store_nav_audio: "Premium Audio",
    store_nav_accessories: "Designer Accessories",
    store_nav_contact: "Contact Us",
    store_cart_btn: "Shopping Cart (3)",
    store_hero_title: "Your Gateway to Digital Innovation",
    store_hero_desc: "Discover the next generation of smart devices and accessories, meticulously crafted to elevate your productivity and modern lifestyle with the highest quality standards.",
    store_hero_cta_primary: "Shop Exclusive Deals",
    store_hero_cta_secondary: "Watch Promo Video",
    store_grid_title: "Handpicked Premium Technologies",
    store_grid_desc: "Award-winning products combining delightful usability with luxurious modern design aesthetics",
    store_prod1_cat: "Premium Audio",
    store_prod1_title: "Diwan Ultra-Clarity Wireless Headphones",
    store_prod1_price: "$299",
    store_prod1_btn: "Add to Cart",
    store_prod2_cat: "Desk Accessories",
    store_prod2_title: "Mechanical Designer Keyboard",
    store_prod2_price: "$189",
    store_prod2_btn: "Add to Cart",
    store_prod3_cat: "Smart Devices",
    store_prod3_title: "Diwan Smart Sports Watch Series 5",
    store_prod3_price: "$249",
    store_prod3_btn: "Add to Cart",
    store_prod4_cat: "Pro Displays",
    store_prod4_title: "34-inch Ultra-Wide Curved Pro Monitor",
    store_prod4_price: "$549",
    store_prod4_btn: "Add to Cart",
    store_quote_text: "\"The Diwan Wireless Headphones completely transformed my daily listening experience. The active noise cancellation and unmatched sound quality are second to none.\"",
    store_quote_author: "Sarah Abdulrahman",
    store_quote_title: "Software Engineer & Content Creator",
    store_footer_desc: "Your premier tech storefront for cutting-edge smart innovations and high-performance electronics with exceptional customer service.",
    store_foot_col1_title: "Shop",
    store_foot_col1_link1: "Special Offers",
    store_foot_col1_link2: "Latest Accessories",
    store_foot_col2_title: "Support",
    store_foot_col2_link1: "Warranty Policy",
    store_foot_col2_link2: "Track Order",
    store_copyright: "Copyright © 2026 Diwan Electronics. All rights reserved.",
    store_hero_badge: "Special Launch Offer - 15% Off Limited Time",
    store_hero_starts_at: "Starts at",
    store_hero_starts_price: "$189",
    store_filter_all: "All",
    store_filter_audio: "Audio",
    store_filter_keyboards: "Desk Accessories",
    store_filter_watches: "Smartwatches",
    store_filter_displays: "Displays",
    store_badge_bestseller: "Bestseller",
    store_prod1_spec1: "Active Noise Cancelling (ANC)",
    store_prod1_spec2: "3D Spatial Surround Sound",
    store_prod1_spec3: "Fast Charging (5m charge = 5h play)",
    store_badge_new: "Brand New",
    store_prod2_spec1: "Silent Linear Mechanical Switches",
    store_prod2_spec2: "Anodized Aluminum Solid Case",
    store_prod2_spec3: "Triple-Mode Wireless Connectivity",
    store_badge_hot: "Hot Product",
    store_prod3_spec1: "Continuous HR & Blood Oxygen Tracking",
    store_prod3_spec2: "Ultra-Bright Retina AMOLED Screen",
    store_prod3_spec3: "Up to 7 Days Battery Life",
    store_badge_discount: "Save $100",
    store_prod4_spec1: "144Hz Ultra-Fast Refresh Rate",
    store_prod4_spec2: "1500R Ergonomic Curve Radius",
    store_prod4_spec3: "99% sRGB & DCI-P3 Color Gamut",
    store_bento1_title: "Free Express Shipping",
    store_bento1_desc: "Free fast shipping and transit insurance on all orders over $150 worldwide.",
    store_bento2_title: "2-Year Authorized Warranty",
    store_bento2_desc: "Enjoy 24 months of local and global certified warranty against manufacturing defects.",
    store_bento3_title: "Hassle-Free 14-Day Returns",
    store_bento3_desc: "Flexible, no-questions-asked return policy within 14 days with 100% money back guarantee.",
    store_news_title: "Be the First to Know About New Releases",
    store_news_desc: "Subscribe to our tech newsletter for new product launches, special member codes, and exclusive benefits.",
    store_news_placeholder: "Your email address",
    store_news_btn: "Subscribe Now",
    store_news_success: "✨ Subscribed successfully! Thank you for joining us.",
    cart_drawer_title: "<i class=\"fa-solid fa-basket-shopping\"></i> <span contenteditable=\"true\" spellcheck=\"false\">Your Shopping Cart</span>",
    cart_empty_msg: "<i class=\"fa-solid fa-bag-shopping empty-icon\"></i><p contenteditable=\"true\" spellcheck=\"false\">Your cart is empty. Add some amazing products to start shopping!</p>",
    cart_subtotal: "Subtotal:",
    cart_shipping: "Shipping & Handling:",
    cart_shipping_free: "Free",
    cart_total: "Grand Total:",
    cart_checkout_btn: "Proceed to Checkout",
    cart_continue_btn: "Continue Shopping",
    store_search_placeholder: "Search for products...",

    web_hint_lbl: "💡 Tip: You can click on any text in the website mock-up and edit it directly to test your font!",
    ctx_enlarge_font: "Enlarge Font (+)",
    ctx_shrink_font: "Shrink Font (-)",
    ctx_reset_font: "Reset Font Size",
    ctx_bold: "Bold Text",
    ctx_color: "Text Color",
    web_target_none: "None",
    ctx_font_header: "Font Family",
    ctx_font_custom: "Custom Font",
    ctx_font_default: "Default Website Font",
    ctx_font_serif: "Classic Serif",
    ctx_font_mono: "Monospace",
    web_zoom_lbl: "Preview Font Scale",
    web_zoom_in: "Enlarge",
    web_zoom_out: "Shrink",
    web_zoom_reset: "Reset",
    web_template_dashboard: "Dashboard",
    db_menu_title_general: "General",
    db_menu_home: "Dashboard Home",
    db_menu_tasks: "Tasks",
    db_menu_analytics: "Analytics",
    db_menu_finance: "Finance Requests",
    db_menu_support: "Support Tickets",
    db_menu_title_people: "People & Reports",
    db_menu_employees: "Employees",
    db_menu_reports: "Reports",
    db_menu_messages: "Messages",
    db_menu_title_support: "Support",
    db_menu_settings: "Settings",
    db_menu_help: "Help & FAQ",
    db_platform_title: "Unified Digital Platform",
    db_nav_home: "Home",
    db_nav_tasks: "Tasks",
    db_nav_finance: "Finance",
    db_nav_help: "Support",
    db_nav_activity: "Admissions",
    db_nav_analytics: "Analytics",
    db_menu_finance_full: "Admissions & Activity",
    db_team_financial: "Finance Team",
    db_user_initials: "AM",
    db_user_name: "Abdulmajeed Mounes",
    db_user_role: "Technical Director",
    db_kpi_total_requests: "Total Requests",
    db_kpi_current_requests: "Current Requests",
    db_kpi_cancelled_requests: "Cancelled Requests",
    db_kpi_total_requests_sub: "+20% from last month",
    db_kpi_current_requests_sub: "-5.8% from last month",
    db_kpi_cancelled_requests_sub: "+12.5% from last month",
    db_devices_title: "Devices Used",
    db_devices_mobile: "Mobile Phones",
    db_devices_desktop: "Desktop PCs",
    db_devices_tablet: "Tablet Devices",
    db_members_title: "Members Group",
    db_members_male: "Male 82%",
    db_members_female: "Female 18%",
    db_heatmap_title: "Requests by Time",
    db_heatmap_sub: "+1.4% from last month",
    db_heatmap_sun: "Sunday",
    db_heatmap_mon: "Monday",
    db_heatmap_tue: "Tuesday",
    db_heatmap_wed: "Wednesday",
    db_heatmap_thu: "Thursday",
    db_heatmap_fri: "Friday",
    db_heatmap_sat: "Saturday",
    db_performance_title: "Performance Index",
    db_performance_tasks: "Tasks Count",
    db_performance_personal: "Personal Tasks",
    db_performance_dept: "Department Tasks",
    db_performance_btn: "Add More Indices",
    db_table_title: "Tasks List",
    db_th_details: "Request Details",
    db_th_assigned: "Assigned To",
    db_th_dept: "Department",
    db_th_time: "Time",
    db_th_status: "Status",
    db_status_completed: "COMPLETED",
    db_status_cancelled: "CANCELLED",
    db_dept_tech: "Tech",
    db_dept_finance: "Finance",
    db_dept_sales: "Sales",
    db_user2_initials: "RG",
    db_user2_name: "Rashed Al-Ghali Mohammed",
    db_user3_initials: "MB",
    db_user3_name: "Mustafa Al-Banouni",
    db_user4_initials: "JB",
    db_user4_name: "Jalhareer Bariaxosad",
    db_row1_title: "Create a user satisfaction survey to evaluate our digital services...",
    db_row2_title: "Audit the total platform user count starting from June 1st, 2024...",
    db_row3_title: "Fix the 2FA issue for Android users running model version 6.2...",
    db_row4_title: "Create a user satisfaction survey to evaluate our digital services...",
    web_template_notion: "Docs",
    web_template_chat: "Chat",
    chat_server_title: "Spectrum Community",
    chat_search_placeholder: "Find or start a conversation...",
    chat_category_text: "Text Channels",
    chat_channel_general: "general",
    chat_channel_announcements: "announcements",
    chat_channel_feedback: "feedback",
    chat_channel_questions: "questions",
    chat_user_name: "Ahmed Mohammed",
    chat_user_tag: "#2026",
    chat_members_online: "Online — 4",
    chat_members_offline: "Offline — 6",
    chat_member_admin: "Admin Team",
    chat_member_bot: "Spectrum Bot",
    chat_message_1_user: "Khalid",
    chat_message_1_text: "Hello everyone! Welcome to our brand new Spectrum Chat interface.",
    chat_message_2_user: "Sara",
    chat_message_2_text: "This looks super cool! The custom fonts look incredibly crisp in this layout.",
    chat_message_3_user: "Noura",
    chat_message_3_text: "Indeed. Have you guys tried switching the preview theme to Premium Dark or Amber?",
    chat_message_input_placeholder: "Message #general",
    notion_brand: "Notion",
    notion_workspace_label: "Workspace",
    notion_workspace_name: "Spectrum",
    notion_search_placeholder: "Search...",
    notion_favorites_label: "Favorites",
    notion_nav_strategy_icon: "♟️",
    notion_nav_strategy: "Strategy",
    notion_nav_metrics_icon: "📊",
    notion_nav_metrics: "Metrics",
    notion_nav_brand_icon: "⬡",
    notion_nav_brand: "Brand",
    notion_pages_label: "Pages",
    notion_page_overview_icon: "📋",
    notion_page_overview: "Overview",
    notion_page_release_icon: "🚀",
    notion_page_release: "Releases",
    notion_page_styleguide_icon: "🎨",
    notion_page_styleguide: "Style Guide",
    notion_page_archive_icon: "📦",
    notion_page_archive: "Archive",
    notion_breadcrumb_workspace: "Workspace",
    notion_breadcrumb_docs: "Docs",
    notion_breadcrumb_current: "Current",
    notion_action_share: "Share",
    notion_action_comment: "Comment",
    notion_action_updated: "Updated 3h ago",
    notion_doc_title: "Document Title",
    notion_meta_last_edit: "Last edit: May 12, 2026",
    notion_meta_owner: "Owner: Ahmed Mohammed",
    notion_meta_version: "Version v2.1.4",
    notion_doc_summary: "This document covers the Product Roadmap Q4 with 14 key initiatives across 3 squads. The last major revision was on May 8, 2026 following Team Alpha's timeline review.",
    notion_callout_icon: "💡",
    notion_callout_title: "Important Note",
    notion_callout_body: "This is sample placeholder text used for testing typography, alignment, and rendering consistency in the UI.",
    notion_checklist_title: "Task Checklist",
    notion_check_1: "Review Q3 strategic plan",
    notion_check_2: "Prepare slides for upcoming board meeting",
    notion_check_3: "Audit expense reports",
    notion_check_4: "Read quarterly brief",
    notion_table_title: "Project Files",
    notion_table_col_name: "File",
    notion_table_col_owner: "Owner",
    notion_table_col_status: "Status",
    notion_table_col_eta: "ETA",
    notion_row_1_name: "Dashboard redesign",
    notion_row_1_owner: "Noura",
    notion_row_1_status: "In review",
    notion_row_1_eta: "Jun 12",
    notion_row_2_name: "API documentation",
    notion_row_2_owner: "Khalid",
    notion_row_2_status: "In progress",
    notion_row_2_eta: "Aug 5",
    notion_row_3_name: "Design system upgrade",
    notion_row_3_owner: "Sara",
    notion_row_3_status: "Done",
    notion_row_3_eta: "May 18",
    notion_rail_heading: "Quick links",
    notion_rail_link_1: "Changelog",
    notion_rail_link_2: "Style guide",
    notion_rail_link_3: "Component library",
    notion_rail_link_4: "Release notes",
    notion_rail_link_5: "Knowledge base",
    notion_rail_link_6: "Team settings"
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

  // 7. Storefront cart rendering sync
  if (typeof renderCart === 'function') {
    renderCart();
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

// ============================================================================
// PREMIUM STOREFRONT INTERACTIVE LOGIC
// ============================================================================

// Store Product Data Mapping (Fallbacks)
const storeProducts = {
  headphones: {
    titleAr: "سماعات رأس ديوان اللاسلكية بنقاء فائق",
    titleEn: "Diwan Ultra-Clarity Wireless Headphones",
    price: 299
  },
  keyboard: {
    titleAr: "لوحة مفاتيح ميكانيكية مخصصة للمصممين",
    titleEn: "Mechanical Designer Keyboard",
    price: 189
  },
  watch: {
    titleAr: "ساعة ديوان الرياضية الذكية الجيل الخامس",
    titleEn: "Diwan Smart Sports Watch Series 5",
    price: 249
  },
  display: {
    titleAr: "شاشة منحنية احترافية فائقة الدقة 34 بوصة",
    titleEn: "34-inch Ultra-Wide Curved Pro Monitor",
    price: 549
  }
};

// Global Store Cart State
let storeCart = [];

// Initialize Storefront Interactive Logic
function initStorefrontEvents() {
  const webContentStore = document.getElementById('webContentStore');
  if (!webContentStore) return;

  const cartDrawer = document.getElementById('storeCartDrawer');
  const cartBackdrop = document.getElementById('storeCartBackdrop');

  const openCart = () => {
    if (cartDrawer) cartDrawer.classList.add('active');
    if (cartBackdrop) cartBackdrop.classList.add('active');
  };

  const closeCart = () => {
    if (cartDrawer) cartDrawer.classList.remove('active');
    if (cartBackdrop) cartBackdrop.classList.remove('active');
  };

  // Toggle Cart Drawer
  const btnCartToggle = document.querySelector('.store-cart-toggle-btn');
  const btnCloseDrawer = document.querySelector('.cart-drawer-close-btn');
  const btnContinueShopping = document.querySelector('.cart-continue-btn');

  if (btnCartToggle) {
    btnCartToggle.addEventListener('click', openCart);
  }
  if (btnCloseDrawer) {
    btnCloseDrawer.addEventListener('click', closeCart);
  }
  if (btnContinueShopping) {
    btnContinueShopping.addEventListener('click', closeCart);
  }
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', closeCart);
  }

  // Scoped Event Delegation for Store interactions
  webContentStore.addEventListener('click', (e) => {
    // 1. Add to Cart button (DISABLED - Non-interactive)
    const addBtn = e.target.closest('.store-add-cart-btn');
    if (addBtn) {
      // Disabled to prevent adding to cart / interactive state change
    }

    // 2. Quantity Plus button (DISABLED)
    const plusBtn = e.target.closest('.qty-plus-btn');
    if (plusBtn) {
      // Disabled
    }

    // 3. Quantity Minus button (DISABLED)
    const minusBtn = e.target.closest('.qty-minus-btn');
    if (minusBtn) {
      // Disabled
    }

    // 4. Remove Item button (DISABLED)
    const removeBtn = e.target.closest('.cart-item-remove-btn');
    if (removeBtn) {
      // Disabled
    }

    // 5. Category filter tab clicks (DISABLED - Non-interactive)
    const filterTab = e.target.closest('.store-filter-tab');
    if (filterTab) {
      // Disabled category switching to allow text editing without state change
    }

    // 6. Navigation link clicks (DISABLED - Non-interactive)
    const navLink = e.target.closest('.store-nav-link');
    if (navLink) {
      // Disabled
    }
  });

  // Newsletter Submit Listener (DISABLED - Non-interactive)
  const newsForm = document.querySelector('.store-news-form');
  const newsSuccess = document.querySelector('.store-news-success-msg');
  if (newsForm && newsSuccess) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Disabled form submission action
    });
  }

  // Checkout Button Listener (DISABLED - Non-interactive)
  const btnCheckout = document.querySelector('.cart-checkout-btn');
  if (btnCheckout) {
    btnCheckout.addEventListener('click', (e) => {
      // Disabled alert prompt and clearing of cart
      e.preventDefault();
    });
  }

  // Initial cart rendering
  renderCart();
}

function addToCart(productId) {
  const existing = storeCart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    const lang = getActiveSiteLang();
    let price = storeProducts[productId]?.price || 0;
    let title = lang === 'ar' ? storeProducts[productId]?.titleAr : storeProducts[productId]?.titleEn;

    const card = document.querySelector(`.store-product-card[data-id="${productId}"]`);
    if (card) {
      const priceEl = card.querySelector('.store-sale-price');
      if (priceEl) {
        const parsedPrice = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
        if (!isNaN(parsedPrice)) price = parsedPrice;
      }
      const titleEl = card.querySelector('.store-product-title');
      if (titleEl) title = titleEl.textContent.trim();
    }

    storeCart.push({
      id: productId,
      qty: 1,
      price: price,
      title: title
    });
  }
  renderCart();
}

function changeQuantity(productId, amount) {
  const item = storeCart.find(item => item.id === productId);
  if (item) {
    item.qty += amount;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      renderCart();
    }
  }
}

function removeFromCart(productId) {
  storeCart = storeCart.filter(item => item.id !== productId);
  renderCart();
}

function updateCartBadge() {
  const lang = getActiveSiteLang();
  const totalQty = storeCart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  }

  const label = document.querySelector('.cart-btn-label');
  if (label) {
    if (lang === 'ar') {
      label.textContent = `سلة المشتريات (${totalQty})`;
    } else {
      label.textContent = `Shopping Cart (${totalQty})`;
    }
  }
}

function renderCart() {
  const cartItemsList = document.querySelector('.cart-items-list');
  const cartEmptyState = document.querySelector('.cart-empty-state');

  if (!cartItemsList || !cartEmptyState) return;

  const lang = getActiveSiteLang();

  if (storeCart.length === 0) {
    cartItemsList.style.display = 'none';
    cartEmptyState.style.display = 'flex';

    document.querySelectorAll('.subtotal-amount').forEach(el => el.textContent = '$0');
    document.querySelectorAll('.total-amount').forEach(el => el.textContent = '$0');
    const shippingEl = document.querySelector('.shipping-amount');
    if (shippingEl) {
      shippingEl.textContent = lang === 'ar' ? 'مجاني' : 'Free';
      shippingEl.setAttribute('data-i18n', 'cart_shipping_free');
    }

    updateCartBadge();
    return;
  }

  cartItemsList.style.display = 'block';
  cartEmptyState.style.display = 'none';

  let html = '';
  let subtotal = 0;

  storeCart.forEach(item => {
    let displayTitle = item.title;
    const defaultAr = storeProducts[item.id]?.titleAr;
    const defaultEn = storeProducts[item.id]?.titleEn;

    if (lang === 'ar' && displayTitle === defaultEn) {
      displayTitle = defaultAr;
      item.title = defaultAr;
    } else if (lang === 'en' && displayTitle === defaultAr) {
      displayTitle = defaultEn;
      item.title = defaultEn;
    }

    const card = document.querySelector(`.store-product-card[data-id="${item.id}"]`);
    if (card) {
      const priceEl = card.querySelector('.store-sale-price');
      if (priceEl) {
        const parsedPrice = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
        if (!isNaN(parsedPrice)) item.price = parsedPrice;
      }
    }

    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    let graphicHtml = '';
    if (item.id === 'headphones') {
      graphicHtml = `
        <div class="product-graphic-headphones">
          <div class="mini-cup-left"></div>
          <div class="mini-cup-right"></div>
          <div class="mini-band"></div>
        </div>`;
    } else if (item.id === 'keyboard') {
      graphicHtml = `
        <div class="product-graphic-keyboard">
          <div class="kb-chassis">
            <div class="kb-key-row">
              <span class="kb-key key-accent"></span><span class="kb-key"></span><span class="kb-key"></span><span class="kb-key"></span>
              <span class="kb-key"></span><span class="kb-key"></span><span class="kb-key"></span><span class="kb-key key-accent2"></span>
            </div>
            <div class="kb-key-row">
              <span class="kb-key"></span><span class="kb-key"></span><span class="kb-key"></span><span class="kb-key"></span>
              <span class="kb-key"></span><span class="kb-key"></span><span class="kb-key"></span><span class="kb-key"></span>
            </div>
          </div>
        </div>`;
    } else if (item.id === 'watch') {
      graphicHtml = `
        <div class="product-graphic-watch">
          <div class="watch-strap strap-top"></div>
          <div class="watch-case">
            <div class="watch-screen">
              <div class="watch-content">
                <span class="watch-time">10:09</span>
                <span class="watch-ring"></span>
              </div>
            </div>
            <div class="watch-crown"></div>
          </div>
          <div class="watch-strap strap-bottom"></div>
        </div>`;
    } else if (item.id === 'display') {
      graphicHtml = `
        <div class="product-graphic-monitor">
          <div class="monitor-screen-curve">
            <div class="monitor-display-glowing"></div>
          </div>
          <div class="monitor-stand"></div>
          <div class="monitor-base"></div>
        </div>`;
    }

    html += `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img-wrapper">
          ${graphicHtml}
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title" contenteditable="true" spellcheck="false">${displayTitle}</h4>
          <span class="cart-item-price" contenteditable="true" spellcheck="false">$${item.price}</span>
          <div class="cart-item-actions">
            <div class="cart-qty-selector">
              <button class="qty-btn qty-minus-btn" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
              <span class="qty-val" contenteditable="true" spellcheck="false">${item.qty}</span>
              <button class="qty-btn qty-plus-btn" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
            </div>
            <button class="cart-item-remove-btn" data-id="${item.id}" title="${lang === 'ar' ? 'حذف' : 'Remove'}">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>`;
  });

  cartItemsList.innerHTML = html;

  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  document.querySelectorAll('.subtotal-amount').forEach(el => el.textContent = `$${subtotal}`);
  document.querySelectorAll('.total-amount').forEach(el => el.textContent = `$${total}`);

  const shippingEl = document.querySelector('.shipping-amount');
  if (shippingEl) {
    if (shipping === 0) {
      shippingEl.textContent = lang === 'ar' ? 'مجاني' : 'Free';
      shippingEl.setAttribute('data-i18n', 'cart_shipping_free');
    } else {
      shippingEl.textContent = `$${shipping}`;
      shippingEl.removeAttribute('data-i18n');
    }
  }

  updateCartBadge();
}

function filterProducts(filter) {
  const cards = document.querySelectorAll('.store-product-card');
  cards.forEach(card => {
    const category = card.dataset.category;
    if (filter === 'all' || category === filter) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px) scale(0.95)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}


// --- Mobile Mode Functions ---

function setMobileTheme(theme) {
  if (!mobilePreviewWrapper) return;
  mobilePreviewWrapper.classList.remove('mobile-theme-dark', 'mobile-theme-light', 'mobile-theme-amber');
  mobilePreviewWrapper.classList.add('mobile-theme-' + theme);
  
  // Update buttons
  [btnMobileThemeDark, btnMobileThemeLight, btnMobileThemeAmber].forEach(btn => {
    if (btn) btn.classList.remove('active');
  });
  
  if (theme === 'dark' && btnMobileThemeDark) btnMobileThemeDark.classList.add('active');
  if (theme === 'light' && btnMobileThemeLight) btnMobileThemeLight.classList.add('active');
  if (theme === 'amber' && btnMobileThemeAmber) btnMobileThemeAmber.classList.add('active');
  
  localStorage.setItem('diwan-mobile-theme', theme);
}

function setMobileTemplate(template) {
  const wrapper = document.getElementById('mobilePreviewWrapper');
  if (!wrapper) return;
  
  // If 'home' is clicked, we return to 'settings'
  const actualTemplate = template === 'home' ? 'settings' : template;
  
  localStorage.setItem('diwan-mobile-template', actualTemplate);
  
  wrapper.classList.remove('mobile-tpl-settings', 'mobile-tpl-social', 'mobile-tpl-chat', 'mobile-tpl-music');
  wrapper.classList.add('mobile-tpl-' + actualTemplate);
  
  const allTemplates = wrapper.querySelectorAll('.mobile-tpl-content');
  allTemplates.forEach(t => t.style.display = 'none');
  
  const targets = {
    'settings': 'mobileContentSettings',
    'chat': 'mobileContentChat',
    'social': 'mobileContentSocial',
    'music': 'mobileContentMusic'
  };
  
  const targetId = targets[actualTemplate];
  if (targetId) {
    const el = document.getElementById(targetId);
    if (el) el.style.display = 'flex';
  }
  
  // Mirror templates inside the web preview (macOS Sequoia)
  const webContentMobile = document.getElementById('webContentMobile');
  if (webContentMobile) {
    const webMirrorTemplates = webContentMobile.querySelectorAll('.mobile-tpl-content');
    webMirrorTemplates.forEach(t => t.style.display = 'none');
    
    const webMirrorTargets = {
      'settings': 'webMobileContentSettings',
      'chat': 'webMobileContentChat',
      'social': 'webMobileContentSocial',
      'music': 'webMobileContentMusic'
    };
    
    const webMirrorTargetId = webMirrorTargets[actualTemplate];
    if (webMirrorTargetId) {
      const el = document.getElementById(webMirrorTargetId);
      if (el) el.style.display = 'flex';
    }
  }
  
  // Update active states on sidebar buttons
  [tabMobileTemplateSettings, tabMobileTemplateChat, tabMobileTemplateSocial, tabMobileTemplateMusic].forEach(btn => {
    if (btn) btn.classList.remove('active');
  });
  
  const activeBtnId = 'tabMobileTemplate' + actualTemplate.charAt(0).toUpperCase() + actualTemplate.slice(1);
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) activeBtn.classList.add('active');
}





// === iOS Home Screen Navigation ===
function openMobileApp(appId) {
  // Hide home screen
  document.getElementById('iosHomeScreen').classList.remove('active');
  
  // Hide all apps
  const apps = document.querySelectorAll('.ios-app');
  apps.forEach(app => app.classList.remove('active'));
  
  // Show target app
  const targetApp = document.getElementById('app-' + appId);
  if (targetApp) {
    targetApp.classList.add('active');
  }
}

function closeMobileApp() {
  // Hide all apps
  const apps = document.querySelectorAll('.ios-app');
  apps.forEach(app => app.classList.remove('active'));
  
  // Show home screen
  document.getElementById('iosHomeScreen').classList.add('active');
}

// Intercept existing sidebar buttons to work with new logic
document.addEventListener('DOMContentLoaded', () => {
  const tplButtons = document.querySelectorAll('[data-action="setMobileTemplate"]');
  tplButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Prevent default logic if possible or just piggyback
      const target = btn.getAttribute('data-target');
      if(target) {
        openMobileApp(target);
      }
    });
  });
});
