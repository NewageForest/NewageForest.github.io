const currentYear = new Date().getFullYear();

const lifePathData = {
  1: {
    title: "1 號人 — 開創領導者",
    desc: "充滿活力與獨立精神，天生具備強烈的領導欲與創造力，是勇敢的開拓者。你擁有堅定的意志力，善於開創新局面，適合走在前面帶領他人。"
  },
  2: {
    title: "2 號人 — 溫柔協調者",
    desc: "善解人意、心思細膩，具有極佳的直覺與審美觀，擅長人際溝通與協調。你天生就是團隊中的潤滑劑，能夠感知他人的情感需求。"
  },
  3: {
    title: "3 號人 — 熱情社交家",
    desc: "樂觀、幽默且充滿童心，對新事物接受度高，善於表達與展現個人魅力。你的創造力與表達力是你最大的天賦，適合藝術與社交相關領域。"
  },
  4: {
    title: "4 號人 — 務實穩定者",
    desc: "講求實事求是、做事有條理，重視承諾與安全感，是團隊中最可靠的基石。你的耐心與毅力讓你能夠將任何計劃落實到位。"
  },
  5: {
    title: "5 號人 — 自由冒險家",
    desc: "崇尚自由、不愛拘束，學習能力強且適應力高，擁有極佳的口才與冒險精神。你的多才多藝讓你在不同領域都能綻放光芒。"
  },
  6: {
    title: "6 號人 — 無私奉獻者",
    desc: "重感情、富有同理心與責任感，非常願意照顧他人，但需要學習設立界線。你的愛與關懷是你周圍人的溫暖來源。"
  },
  7: {
    title: "7 號人 — 邏輯分析者",
    desc: "天生的獨立思考者，喜歡探究事物本質，觀察力與分析能力極強，享受獨處。你擁有深度的智慧，適合研究與靈性探索。"
  },
  8: {
    title: "8 號人 — 商業權威者",
    desc: "具有敏銳的商業與賺錢頭腦，重視物質成就與效率，天生具備經營管理的能力。你的格局與執行力讓你在事業上容易取得成就。"
  },
  9: {
    title: "9 號人 — 博愛夢想家",
    desc: "充滿理想主義與大愛精神，想像力豐富且樂於助人，擁有如老靈魂般的智慧。你的包容與慈悲讓你能夠影響並療癒身邊的人。"
  },
  11: {
    title: "11 號人 — 大師數・靈性啟發者",
    desc: "你擁有大師數 11！這代表你有著極強的靈性感知力與啟發他人的天賦。你是天生的直覺者，擁有比一般人更強大的靈性潛能與使命感。"
  },
  22: {
    title: "22 號人 — 大師數・夢想建築師",
    desc: "你擁有大師數 22！這代表你有將宏大夢想化為現實的能力。你結合了靈性與實踐力，是能夠在物質世界中實現靈性願景的稀有存在。"
  }
};

const galleries = {
  p1: {
    index: 0,
    images: [
      "images/product-1/1.jpg",
      "images/product-1/2.jpg",
      "images/product-1/3.jpg",
      "images/product-1/4.jpg"
    ]
  },
  p2: {
    index: 0,
    images: [
      "images/product-2/1.jpg",
      "images/product-2/2.jpg",
      "images/product-2/3.jpg",
      "images/product-2/4.jpg"
    ]
  },
  p3: {
    index: 0,
    images: [
      "images/product-3/1.jpg",
      "images/product-3/2.jpg",
      "images/product-3/3.jpg",
      "images/product-3/4.jpg"
    ]
  }
};

function showModal(msg) {
  const modalMsg = document.getElementById("modalMsg");
  const simpleModal = document.getElementById("simpleModal");

  if (!modalMsg || !simpleModal) return;

  modalMsg.textContent = msg;
  simpleModal.classList.add("show");
}

function closeModal() {
  const simpleModal = document.getElementById("simpleModal");
  if (!simpleModal) return;

  simpleModal.classList.remove("show");
}

function openImageModal(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");

  if (!modal || !modalImg) return;

  modalImg.src = src;
  modalImg.alt = alt || "產品完整圖片預覽";
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");

  if (!modal || !modalImg) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  document.body.style.overflow = "";
}

function isValidDate(year, month, day) {
  const d = new Date(year, month - 1, day);

  return d.getFullYear() === Number(year) &&
    d.getMonth() === Number(month) - 1 &&
    d.getDate() === Number(day);
}

function calculateLifePath() {
  const yearInput = document.getElementById("birthYear");
  const monthInput = document.getElementById("birthMonth");
  const dayInput = document.getElementById("birthDay");

  if (!yearInput || !monthInput || !dayInput) return;

  const year = parseInt(yearInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const day = parseInt(dayInput.value, 10);

  if (!year || !month || !day) {
    showModal("請輸入完整嘅出生年月日 🙏");
    return;
  }

  if (year < 1900 || year > currentYear || month < 1 || month > 12 || day < 1 || day > 31) {
    showModal("請輸入有效嘅日期 🙏");
    return;
  }

  if (!isValidDate(year, month, day)) {
    showModal("你輸入嘅日期唔存在，請重新確認 🙏");
    return;
  }

  const dateStr = String(year) + String(month).padStart(2, "0") + String(day).padStart(2, "0");

  let sum = 0;

  for (let i = 0; i < dateStr.length; i++) {
    sum += parseInt(dateStr[i], 10);
  }

  let result = sum;

  while (result > 9 && result !== 11 && result !== 22) {
    let tempSum = 0;
    const tempStr = String(result);

    for (let i = 0; i < tempStr.length; i++) {
      tempSum += parseInt(tempStr[i], 10);
    }

    result = tempSum;
  }

  const data = lifePathData[result];

  if (!data) return;

  document.getElementById("resultNumber").textContent = result;
  document.getElementById("resultTitle").textContent = data.title;
  document.getElementById("resultDesc").textContent = data.desc;

  const resultBox = document.getElementById("resultBox");
  resultBox.classList.add("show");

  resultBox.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function showPersonality(num) {
  const data = lifePathData[num];

  if (!data) return;

  const personalityNumber = document.getElementById("personalityNumber");
  const personalityTitle = document.getElementById("personalityTitle");
  const personalityDesc = document.getElementById("personalityDesc");
  const personalityDetailBox = document.getElementById("personalityDetailBox");

  if (!personalityNumber || !personalityTitle || !personalityDesc || !personalityDetailBox) return;

  personalityNumber.textContent = num;
  personalityTitle.textContent = data.title;
  personalityDesc.textContent = data.desc;
  personalityDetailBox.classList.add("show");

  document.querySelectorAll(".personality-item").forEach(item => {
    item.classList.toggle("active", Number(item.dataset.num) === num);
  });
}

function renderGallery(galleryId) {
  const gallery = galleries[galleryId];
  const wrapper = document.querySelector(`[data-gallery="${galleryId}"]`);

  if (!gallery || !wrapper) return;

  const mainImg = wrapper.querySelector(".gallery-main img");
  const placeholder = wrapper.querySelector(".gallery-placeholder");
  const thumbs = wrapper.querySelectorAll(".thumb");

  if (mainImg) {
    mainImg.style.display = "block";
    mainImg.src = gallery.images[gallery.index];

    mainImg.onerror = function() {
      this.style.display = "none";
      if (placeholder) placeholder.style.display = "flex";
    };

    mainImg.onload = function() {
      this.style.display = "block";
      if (placeholder) placeholder.style.display = "none";
    };
  }

  thumbs.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === gallery.index);
  });
}

function setGalleryImage(galleryId, index) {
  const gallery = galleries[galleryId];

  if (!gallery) return;
  if (index < 0 || index >= gallery.images.length) return;

  gallery.index = index;
  renderGallery(galleryId);
}

function changeGalleryImage(galleryId, step) {
  const gallery = galleries[galleryId];

  if (!gallery) return;

  gallery.index = (gallery.index + step + gallery.images.length) % gallery.images.length;
  renderGallery(galleryId);
}

function getCardStep() {
  const storeSlider = document.getElementById("storeSlider");

  if (!storeSlider) return 320;

  const firstCard = storeSlider.querySelector(".product-card");

  if (!firstCard) return 320;

  const styles = window.getComputedStyle(storeSlider);
  const gap = parseInt(styles.gap) || 18;

  return firstCard.getBoundingClientRect().width + gap;
}

function scrollStoreSlider(direction) {
  const storeSlider = document.getElementById("storeSlider");

  if (!storeSlider) return;

  storeSlider.scrollBy({
    left: getCardStep() * direction,
    behavior: "smooth"
  });
}

function goStoreSlide(index) {
  const storeSlider = document.getElementById("storeSlider");

  if (!storeSlider) return;

  storeSlider.scrollTo({
    left: getCardStep() * index,
    behavior: "smooth"
  });
}

function updateSliderDots() {
  const storeSlider = document.getElementById("storeSlider");
  const sliderDots = document.querySelectorAll(".slider-dot");

  if (!storeSlider || !sliderDots.length) return;

  const step = getCardStep();
  const index = Math.round(storeSlider.scrollLeft / step);

  sliderDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === Math.min(index, sliderDots.length - 1));
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const birthYear = document.getElementById("birthYear");

  if (birthYear) {
    birthYear.setAttribute("max", currentYear);
  }

  const simpleModal = document.getElementById("simpleModal");

  if (simpleModal) {
    simpleModal.addEventListener("click", function(e) {
      if (e.target === this) closeModal();
    });
  }

  const imageModal = document.getElementById("imageModal");

  if (imageModal) {
    imageModal.addEventListener("click", function(e) {
      if (e.target === this) closeImageModal();
    });
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeModal();
      closeImageModal();
    }
  });

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function() {
      const isOpen = mobileMenu.classList.toggle("show");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function(e) {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll(".personality-item").forEach(item => {
    item.addEventListener("click", function() {
      showPersonality(Number(this.dataset.num));
    });
  });

  if (document.getElementById("personalityDetailBox")) {
    showPersonality(1);
  }

  Object.keys(galleries).forEach(renderGallery);

  Object.keys(galleries).forEach((galleryId) => {
    const wrapper = document.querySelector(`[data-gallery="${galleryId}"] .gallery-main`);

    if (!wrapper) return;

    let startX = 0;
    let endX = 0;

    wrapper.addEventListener("touchstart", function(e) {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener("touchend", function(e) {
      endX = e.changedTouches[0].screenX;

      const diff = startX - endX;

      if (Math.abs(diff) > 40) {
        if (diff > 0) changeGalleryImage(galleryId, 1);
        else changeGalleryImage(galleryId, -1);
      }
    }, { passive: true });
  });

  const storeSlider = document.getElementById("storeSlider");

  if (storeSlider) {
    storeSlider.addEventListener("scroll", updateSliderDots);
    updateSliderDots();
  }

  window.addEventListener("resize", updateSliderDots);
});