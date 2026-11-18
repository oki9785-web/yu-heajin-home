/* =========================================================
   유혜진 소개 홈페이지 – 동작 (외부 라이브러리 없음)
   ========================================================= */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1) 이메일 주소를 JavaScript로 조합 (스팸 수집 줄이기) */
  var emailEls = document.querySelectorAll('.js-email-text');
  var email = '';
  emailEls.forEach(function (el) {
    var user = el.getAttribute('data-user');
    var domain = el.getAttribute('data-domain');
    if (user && domain) {
      email = user + '@' + domain;
      el.textContent = email;
    }
  });
  if (email) {
    document.querySelectorAll('.js-email-link').forEach(function (a) {
      a.setAttribute('href', 'mailto:' + email);
    });
  }

  /* 2) 햄버거 메뉴 (휴대폰) */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '메뉴 열기');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* 3) 스크롤하면 메뉴바 배경 진하게 */
  var header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 4) 글자 타이핑 효과 */
  var typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    var fullText = typingEl.getAttribute('data-text') || '';
    if (reduceMotion) {
      typingEl.textContent = fullText;
    } else {
      var chars = Array.from(fullText);
      var i = 0;
      var tick = function () {
        i += 1;
        typingEl.textContent = chars.slice(0, i).join('');
        if (i < chars.length) {
          window.setTimeout(tick, chars[i - 1] === '\n' ? 350 : 70);
        }
      };
      window.setTimeout(tick, 600);
    }
  }

  /* 5) 섹션이 화면에 들어오면 부드럽게 나타나기 */
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, idx) {
      el.style.transitionDelay = (idx % 4) * 0.08 + 's';
      io.observe(el);
    });
  }

  /* 6) 히어로 배경의 은은한 골드 반짝임 */
  var sparkles = document.querySelector('.sparkles');
  if (sparkles && !reduceMotion) {
    for (var s = 0; s < 28; s++) {
      var dot = document.createElement('span');
      dot.className = 'sparkle';
      dot.style.left = (Math.random() * 100).toFixed(2) + '%';
      dot.style.top = (Math.random() * 100).toFixed(2) + '%';
      dot.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
      dot.style.animationDuration = (3 + Math.random() * 3).toFixed(2) + 's';
      sparkles.appendChild(dot);
    }
  }

  /* 7) 저작권 연도 자동 표시 */
  var yearEl = document.querySelector('.js-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
