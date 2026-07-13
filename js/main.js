const currentYear = new Date().getFullYear();

const lifePathData = {
  1: {
    title: "1 號人 — 開創領導者 (行動型人格)",
    desc: "核心能量：獨立、目標感與開創性。你在高頻狀態下自帶強大行動力，能清晰設定目標並勇往直前。然而在低頻時，容易因為過度逞強而陷入孤軍奮戰，或在外表現得獨立、內心卻缺乏安全感。今生課題是學會『從盲目擴張轉向精準聚焦』，在帶領他人的同時，也接納自己的脆弱。",
    color: "紅、橙、紫",
    keyword: "領導 · 行動 · 開創",
    emoji: "🔥"
  },
  2: {
    title: "2 號人 — 溫柔協調者 (關係型人格)",
    desc: "核心能量：情感細膩、合作與深度感知。作為 2 號人，你對周圍的能量、情緒卡點有著極強的直覺。高頻的你擅長人際溝通與資源協調，是完美的團隊潤滑劑；但在低頻或受內在盲點影響時，你極易因為過度迎合他人、害怕衝突而產生嚴重的內在內耗與委屈。今生最需要修煉的學分是『設立心理界線，在陪伴他人的同時不丟失自己』。",
    color: "白、金、銀",
    keyword: "協調 · 感知 · 關係",
    emoji: "🌸"
  },
  3: {
    title: "3 號人 — 熱情社交家 (創造型人格)",
    desc: "核心能量：創意、表達與情緒流動。你天生具備打破常規的藝術感與個人魅力，能透過言語、創作或社交將快樂帶給身邊的人。然而，3 號人的能量源頭來自『起心動念的純粹』，一旦能量走向低頻，容易因為外界評價而陷入情緒大起大落、注意力分散或過度包裝內心的焦慮。學會『讓創意的種子在耐心中落地，活出真實的表達』是你的黃金鑰匙。",
    color: "綠、青",
    keyword: "創意 · 表達 · 社交",
    emoji: "🌿"
  },
  4: {
    title: "4 號人 — 務實穩定者 (穩定感特質)",
    desc: "核心能量：秩序、規劃與責任感。你是物質世界中最可靠的基礎建立者，講求實事求是，擅長將宏大的計畫拆解成清晰的步驟落地執行。當你處於低頻狀態，往往會演變成過度壓抑情緒、害怕改變、甚至因為瘋狂追求安全感而作繭自縛。看清你內在對秩序的執著，學習『在穩固的結構中，允許生命擁有彈性與未知的流動』是今生的靈魂考題。",
    color: "黑、藍、灰",
    keyword: "穩定 · 規劃 · 責任",
    emoji: "🌙"
  },
  5: {
    title: "5 號人 — 自由冒險家 (變化性特質)",
    desc: "核心能量：自由、幽默、高適應力。你擁有極佳的口才與多才多藝的天賦，討厭被任何條條框框束縛，適應新環境的能力極強。然而，5 號人的雙刃劍在於，當你在現實中感到受限或缺乏安全感時，情緒起伏會變得非常劇烈，容易用『逃避或不斷轉換賽道』來掩飾內心的迷茫。只有當你明白『真正的自由來自內心的安定，而非外在的流浪』時，你才能顯化最高頻的豐盛。",
    color: "紅、橙、粉紅",
    keyword: "自由 · 變化 · 冒險",
    emoji: "✨"
  },
  6: {
    title: "6 號人 — 無私奉獻者 (關係導向特質)",
    desc: "核心能量：大愛、責任、照顧與療癒。你天生對家庭、親密關係或身邊的朋友有著強烈的責任感，樂於承擔與照顧。但在低頻顯化時，6 號人極易把所有人的壓力和不快樂都扛在自己肩膀上，演變成『用過度的犧牲來交換愛，最終導致內心失衡與抱怨』。今生最溫柔的提醒：請先學會無條件地滋養自己、拯救自己，才能真正療癒他人。",
    color: "啡、深黃、杏",
    keyword: "奉獻 · 療癒 · 大愛",
    emoji: "💚"
  },
  7: {
    title: "7 號人 — 邏輯分析者 (內在思考傾向)",
    desc: "核心能量：探究本質、質疑、獨立思考。你擁有一個不知疲倦、喜歡挖掘真相的敏銳大腦，觀察力極強，非常享受獨處的精神世界。低頻時的 7 號人，容易因為防備心過重而與外界刻意保持距離，甚至陷入過度理性、用邏輯建構冷漠高牆的自我內耗。你今生的靈魂軌跡，是要『從頭腦的質疑走向心靈的臣服』，將深度的智慧應用於靈性與現實的結合。",
    color: "白、金、銀",
    keyword: "分析 · 智慧 · 探究",
    emoji: "🔮"
  },
  8: {
    title: "8 號人 — 商業權威者 (理想追求特質)",
    desc: "核心能量：成就、掌控力、豐盛與現實顯化。你對物質回報、效率以及經營管理有著天生的敏銳度，企圖心強，格局宏大。但也因為如此，8 號人的起心動念極其關鍵——如果純粹為了證明自己或出於對匱乏的恐懼（低頻狀態），你在職場與感情中都會展現出過強的控制欲與批判性。當你學會『順應豐盛的宇宙流動，用財富與力量去賦能他人』時，你將會登上真正的巔峰。",
    color: "綠、青",
    keyword: "豐盛 · 成就 · 領導",
    emoji: "💫"
  },
  9: {
    title: "9 號人 — 博愛夢想家 (精神追求傾向)",
    desc: "核心能量：同理心、大愛、理想主義。你就像一個活了很久的老靈魂，情感敏銳，極易對他人的痛苦產生強烈共感，天生帶有療癒和服務人群的基因。然而低頻時的 9 號人，往往會因為過度理想化現實而活在幻想中，或在面對殘酷現實時選擇自我麻痺、甚至陷入悲觀的受害者心態。腳踏實地，『將無邊際的慈悲轉化為具體的世俗行動』，是你與生俱來的使命。",
    color: "黑、藍、灰",
    keyword: "博愛 · 理想 · 夢想",
    emoji: "🌌"
  }
};

// ===== Utils =====
function reduceToLifePath(num) {
  while (num > 9) {
    num = String(num).split("").reduce((s, d) => s + Number(d), 0);
  }
  return num;
}

function showModal(message) {
  const modal = document.getElementById("simpleModal");
  const modalMsg = document.getElementById("modalMsg");
  if (!modal || !modalMsg) return;
  modalMsg.textContent = message;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("simpleModal");
  if (modal) modal.classList.remove("show");
  document.body.style.overflow = "";
}

// ===== Gallery / Image Modal State =====
const galleryState = {};
const modalState = {
  galleryId: null,
  index: 0
};

// ===== Gallery Helpers =====
function getGalleryContainer(galleryId) {
  return document.querySelector(`.gallery[data-gallery="${galleryId}"]`);
}

function getGalleryThumbs(gallery) {
  return gallery ? Array.from(gallery.querySelectorAll(".thumb")) : [];
}

function getGalleryMainImg(gallery) {
  return gallery ? gallery.querySelector(".gallery-main img") : null;
}

function getGalleryPlaceholder(gallery) {
  return gallery ? gallery.querySelector(".gallery-placeholder") : null;
}

function extractThumbSource(thumb) {
  const img = thumb.querySelector("img");
  return img ? img.getAttribute("src") : null;
}

function extractThumbAlt(thumb) {
  const img = thumb.querySelector("img");
  return img ? img.getAttribute("alt") : "產品圖片";
}

function getGalleryImages(galleryId) {
  const gallery = getGalleryContainer(galleryId);
  if (!gallery) return [];

  return getGalleryThumbs(gallery)
    .map((thumb, index) => {
      const src = extractThumbSource(thumb);
      if (!src) return null;
      return {
        src,
        alt: extractThumbAlt(thumb).replace("縮圖", "產品圖片"),
        index
      };
    })
    .filter(Boolean);
}

// ===== Image Modal =====
function openImageModal(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");
  if (!modal || !modalImg) return;

  modalState.galleryId = null;
  modalState.index = 0;

  modalImg.src = src;
  modalImg.alt = alt || "產品完整圖片預覽";
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateModalImage() {
  const modalImg = document.getElementById("imageModalImg");
  if (!modalImg || !modalState.galleryId) return;

  const images = getGalleryImages(modalState.galleryId);
  if (!images.length) return;

  if (modalState.index < 0) modalState.index = images.length - 1;
  if (modalState.index >= images.length) modalState.index = 0;

  const currentImage = images[modalState.index];
  modalImg.src = currentImage.src;
  modalImg.alt = currentImage.alt;
}

function openImageModalByGallery(galleryId) {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  const images = getGalleryImages(galleryId);
  if (!images.length) return;

  modalState.galleryId = galleryId;
  modalState.index =
    typeof galleryState[galleryId] === "number" ? galleryState[galleryId] : 0;

  updateModalImage();

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function changeModalImage(step) {
  if (!modalState.galleryId) return;

  const images = getGalleryImages(modalState.galleryId);
  if (!images.length) return;

  modalState.index += step;

  if (modalState.index < 0) modalState.index = images.length - 1;
  if (modalState.index >= images.length) modalState.index = 0;

  updateModalImage();
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");
  if (!modal || !modalImg) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  document.body.style.overflow = "";

  modalState.galleryId = null;
  modalState.index = 0;
}

// ===== Life Path Calculation =====
function calculateLifePath() {
  const yearInput = document.getElementById("birthYear");
  const monthInput = document.getElementById("birthMonth");
  const dayInput = document.getElementById("birthDay");
  const resultBox = document.getElementById("resultBox");
  const resultNumber = document.getElementById("resultNumber");
  const resultTitle = document.getElementById("resultTitle");
  const resultDesc = document.getElementById("resultDesc");

  if (!yearInput || !monthInput || !dayInput) return;

  const year = parseInt(yearInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const day = parseInt(dayInput.value, 10);

  if (!year || !month || !day) {
    showModal("請完整輸入出生年份、月份與日期。");
    return;
  }
  if (year < 1900 || year > currentYear) {
    showModal(`請輸入有效的出生年份（1900 - ${currentYear}）。`);
    return;
  }
  if (month < 1 || month > 12) {
    showModal("請輸入有效月份（1 - 12）。");
    return;
  }

  const testDate = new Date(year, month - 1, day);
  const isValid =
    testDate.getFullYear() === year &&
    testDate.getMonth() === month - 1 &&
    testDate.getDate() === day;

  if (!isValid) {
    showModal("請輸入有效日期，例如 1997 / 8 / 15。");
    return;
  }

  const digits = `${year}${month}${day}`.split("").map(Number);
  const sum = digits.reduce((a, n) => a + n, 0);
  const lifePath = reduceToLifePath(sum);
  const data = lifePathData[lifePath];

  if (!data) {
    showModal("暫時未能計算此生命靈數結果，請稍後再試。");
    return;
  }

  if (resultNumber) resultNumber.textContent = lifePath;
  if (resultTitle) resultTitle.textContent = data.title;
  if (resultDesc) resultDesc.textContent = data.desc;

  const colorEl = document.getElementById("resultColor");
  const keywordEl = document.getElementById("resultKeyword");
  if (colorEl) colorEl.textContent = data.color;
  if (keywordEl) keywordEl.textContent = data.keyword;

  const storeRec = document.getElementById("storeRecommendation");
  if (storeRec) {
    storeRec.innerHTML = `你係 <strong>${lifePath} 號人</strong>，建議從「初體驗 30天日曆」開始感受屬於你嘅 <strong>${data.color}</strong> 能量。`;
  }

  if (resultBox) {
    resultBox.classList.add("show");
    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  triggerSpark(resultNumber || document.body);
}

// ===== Spark / Celebrate =====
function triggerSpark(el) {
  if (!el) return;
  const sparks = ["✨", "🌟", "💫", "⭐", "🌿", "✦"];
  const rect = el.getBoundingClientRect();

  for (let i = 0; i < 8; i++) {
    const s = document.createElement("span");
    s.textContent = sparks[Math.floor(Math.random() * sparks.length)];
    s.style.cssText = `
      position:fixed;
      pointer-events:none;
      z-index:9999;
      font-size:1.2rem;
      left:${rect.left + rect.width / 2}px;
      top:${rect.top + rect.height / 2}px;
      animation:sparkFly .9s ease forwards;
      --tx:${(Math.random() - 0.5) * 120}px;
      --ty:${-(Math.random() * 100 + 40)}px;
    `;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 950);
  }
}

// Inject spark animation once
(function () {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes sparkFly{
      0%{opacity:1;transform:translate(0,0) scale(1);}
      100%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(0.3);}
    }
  `;
  document.head.appendChild(style);
})();

// ===== Personality Cards =====
function showPersonality(num) {
  const detailBox = document.getElementById("personalityDetailBox");
  const numberEl = document.getElementById("personalityNumber");
  const titleEl = document.getElementById("personalityTitle");
  const descEl = document.getElementById("personalityDesc");

  const data = lifePathData[num];
  if (!data || !detailBox || !numberEl || !titleEl || !descEl) return;

  numberEl.textContent = num;
  titleEl.textContent = data.title;
  descEl.textContent = data.desc;

  const emojiEl = document.getElementById("personalityEmoji");
  const colorEl = document.getElementById("personalityColor");
  const kwEl = document.getElementById("personalityKeyword");

  if (emojiEl) emojiEl.textContent = data.emoji || "";
  if (colorEl) colorEl.textContent = data.color || "";
  if (kwEl) kwEl.textContent = data.keyword || "";

  detailBox.classList.add("show");

  document.querySelectorAll(".personality-item").forEach(item => {
    item.classList.toggle("active", Number(item.dataset.num) === Number(num));
  });
}

// ===== FAQ Accordion =====
function initFaqAccordion() {
  document.querySelectorAll(".faq-accordion-item").forEach(item => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-accordion-item").forEach(other => {
        other.classList.remove("open");
        const ob = other.querySelector(".faq-question");
        const oa = other.querySelector(".faq-answer");
        if (ob) ob.setAttribute("aria-expanded", "false");
        if (oa) oa.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ===== Scroll Progress Bar =====
function initScrollProgress() {
  const bar = document.getElementById("scrollProgressBar");
  if (!bar) return;

  document.addEventListener(
    "scroll",
    () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.width = pct + "%";
    },
    { passive: true }
  );
}

// ===== Nav scroll effect =====
function initNavScroll() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
  );
}

// ===== Animated Counters =====
function animateCounter(el, target, duration = 1600) {
  let start = 0;

  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString();
    }
  };

  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          animateCounter(el, target);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(c => obs.observe(c));
}

// ===== Reveal on Scroll =====
function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach(item => obs.observe(item));
}

// ===== Product Gallery =====
function setGalleryImage(galleryId, index) {
  const gallery = getGalleryContainer(galleryId);
  if (!gallery) return;

  const thumbs = getGalleryThumbs(gallery);
  const mainImg = getGalleryMainImg(gallery);
  const placeholder = getGalleryPlaceholder(gallery);

  if (!thumbs.length || !mainImg) return;

  const validThumbs = thumbs.filter(thumb => extractThumbSource(thumb));
  if (!validThumbs.length) return;

  if (index < 0) index = validThumbs.length - 1;
  if (index >= validThumbs.length) index = 0;

  galleryState[galleryId] = index;

  const selectedThumb = validThumbs[index];
  const newSrc = extractThumbSource(selectedThumb);
  const newAlt = extractThumbAlt(selectedThumb).replace("縮圖", "產品圖片");

  if (newSrc) {
    mainImg.style.display = "";
    if (placeholder) placeholder.style.display = "none";
    mainImg.src = newSrc;
    mainImg.alt = newAlt;
  }

  thumbs.forEach(thumb => thumb.classList.remove("active"));
  selectedThumb.classList.add("active");
}

function changeGalleryImage(galleryId, step) {
  const gallery = getGalleryContainer(galleryId);
  if (!gallery) return;

  const thumbs = getGalleryThumbs(gallery).filter(thumb => extractThumbSource(thumb));
  if (!thumbs.length) return;

  const current = typeof galleryState[galleryId] === "number" ? galleryState[galleryId] : 0;
  let next = current + step;

  if (next < 0) next = thumbs.length - 1;
  if (next >= thumbs.length) next = 0;

  setGalleryImage(galleryId, next);
}

function initGalleries() {
  document.querySelectorAll(".gallery").forEach(gallery => {
    const galleryId = gallery.dataset.gallery;
    if (!galleryId) return;

    galleryState[galleryId] = 0;

    const thumbs = getGalleryThumbs(gallery);
    const mainImg = getGalleryMainImg(gallery);
    const placeholder = getGalleryPlaceholder(gallery);

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => setGalleryImage(galleryId, index));
    });

    if (mainImg) {
      mainImg.addEventListener("error", () => {
        mainImg.style.display = "none";
        if (placeholder) placeholder.style.display = "flex";
      });

      mainImg.addEventListener("load", () => {
        mainImg.style.display = "";
        if (placeholder) placeholder.style.display = "none";
      });
    }

    const validThumbs = thumbs.filter(thumb => extractThumbSource(thumb));
    if (validThumbs.length) {
      setGalleryImage(galleryId, 0);
    }
  });
}

// ===== Store Slider =====
function getVisibleCardCount() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 960) return 2;
  return 3;
}

function getStoreSliderMetrics() {
  const slider = document.getElementById("storeSlider") || document.querySelector(".store-slider");
  if (!slider) return null;

  const cards = slider.querySelectorAll(".product-card");
  if (!cards.length) return { slider, cards, cardWidth: 0, visibleCount: 1, totalSlides: 1 };

  const firstCard = cards[0];
  const gap = 18;
  const cardWidth = firstCard.offsetWidth + gap;
  const visibleCount = getVisibleCardCount();
  const totalSlides = Math.max(1, Math.ceil(cards.length / visibleCount));

  return { slider, cards, cardWidth, visibleCount, totalSlides };
}

function updateStoreSliderDots() {
  const metrics = getStoreSliderMetrics();
  if (!metrics) return;

  const { slider, cardWidth, visibleCount } = metrics;
  const dots = document.querySelectorAll("#sliderDots .slider-dot, .slider-dots .slider-dot");
  if (!dots.length || !cardWidth) return;

  const currentIndex = Math.round(slider.scrollLeft / (cardWidth * visibleCount));
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function scrollStoreSlider(direction) {
  const metrics = getStoreSliderMetrics();
  if (!metrics) return;

  const { slider, cardWidth, visibleCount } = metrics;
  const moveBy = cardWidth * visibleCount;

  slider.scrollBy({
    left: moveBy * direction,
    behavior: "smooth"
  });
}

function goStoreSlide(index) {
  const metrics = getStoreSliderMetrics();
  if (!metrics) return;

  const { slider, cardWidth, visibleCount } = metrics;
  const target = cardWidth * visibleCount * index;

  slider.scrollTo({
    left: target,
    behavior: "smooth"
  });
}

function initStoreSlider() {
  const slider = document.getElementById("storeSlider") || document.querySelector(".store-slider");
  if (!slider) return;

  slider.addEventListener("scroll", updateStoreSliderDots, { passive: true });
  window.addEventListener("resize", updateStoreSliderDots);
  updateStoreSliderDots();

  const prevBtn = document.querySelector(".slider-arrow.prev");
  const nextBtn = document.querySelector(".slider-arrow.next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => scrollStoreSlider(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => scrollStoreSlider(1));
  }

  document.querySelectorAll("#sliderDots .slider-dot, .slider-dots .slider-dot").forEach((dot, i) => {
    dot.addEventListener("click", () => goStoreSlide(i));
  });
}

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", () => {
  window.calculateLifePath = calculateLifePath;
  window.closeModal = closeModal;
  window.showModal = showModal;
  window.showPersonality = showPersonality;
  window.openImageModal = openImageModal;
  window.openImageModalByGallery = openImageModalByGallery;
  window.changeModalImage = changeModalImage;
  window.closeImageModal = closeImageModal;
  window.setGalleryImage = setGalleryImage;
  window.changeGalleryImage = changeGalleryImage;
  window.scrollStoreSlider = scrollStoreSlider;
  window.goStoreSlide = goStoreSlide;

  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Simple modal backdrop close
  const simpleModal = document.getElementById("simpleModal");
  if (simpleModal) {
    simpleModal.addEventListener("click", e => {
      if (e.target === simpleModal) closeModal();
    });
  }

  // Image modal backdrop close
  const imageModal = document.getElementById("imageModal");
  if (imageModal) {
    imageModal.addEventListener("click", e => {
      if (e.target === imageModal) closeImageModal();
    });
  }

  // Keyboard control
  document.addEventListener("keydown", e => {
    const imageModalOpen = imageModal && imageModal.classList.contains("show");

    if (e.key === "Escape") {
      closeModal();
      closeImageModal();
    }

    if (imageModalOpen && e.key === "ArrowLeft") {
      changeModalImage(-1);
    }

    if (imageModalOpen && e.key === "ArrowRight") {
      changeModalImage(1);
    }
  });

  // Personality cards
  document.querySelectorAll(".personality-item").forEach(item => {
    item.addEventListener("click", () => showPersonality(Number(item.dataset.num)));
  });

  // Enter key on calc inputs
  ["birthYear", "birthMonth", "birthDay"].forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("keydown", e => {
        if (e.key === "Enter") calculateLifePath();
      });
    }
  });

  showPersonality(1);
  initFaqAccordion();
  initRevealOnScroll();
  initScrollProgress();
  initNavScroll();
  initCounters();
  initGalleries();
  initStoreSlider();
});