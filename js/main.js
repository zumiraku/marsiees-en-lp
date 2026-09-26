(function () {
  'use strict';

  var header = document.getElementById('header');
  var menuBtn = document.getElementById('menuBtn');
  var gnav = document.getElementById('gnav');

  var pagetop = document.querySelector('.pagetop');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
    if (pagetop) pagetop.classList.toggle('is-show', window.scrollY > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    gnav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
  }

  menuBtn.addEventListener('click', function () {
    var open = !gnav.classList.contains('is-open');
    gnav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  gnav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  var slides = document.querySelectorAll('.hero__slide');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduceMotion) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('is-active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('is-active');
    }, 6000);
  }

  var videoWrap = document.getElementById('video');
  if (videoWrap) {
    var video = videoWrap.querySelector('video');
    videoWrap.querySelector('.video__play').addEventListener('click', function () {
      video.controls = true;
      var p = video.play();
      if (p && p.then) {
        p.then(function () {
          videoWrap.classList.add('is-playing');
        }).catch(function () {
          video.controls = false;
        });
      }
    });
  }

  var form = document.getElementById('contactForm');
  if (form) {
    var messages = {
      valueMissing: 'Please fill in this field.',
      typeMismatch: 'Please enter a valid email address.',
      agree: 'Please agree to the privacy policy.'
    };

    function showError(input) {
      var field = input.closest('.field');
      var error = field.querySelector('.field__error');
      var valid = input.checkValidity();
      field.classList.toggle('is-error', !valid);
      input.setAttribute('aria-invalid', String(!valid));
      if (valid) {
        if (error) error.remove();
        return true;
      }
      if (!error) {
        error = document.createElement('p');
        error.className = 'field__error';
        error.id = input.name + '-error';
        input.setAttribute('aria-describedby', error.id);
        field.appendChild(error);
      }
      if (input.type === 'checkbox') error.textContent = messages.agree;
      else if (input.validity.typeMismatch) error.textContent = messages.typeMismatch;
      else error.textContent = messages.valueMissing;
      return false;
    }

    var inputs = form.querySelectorAll('[required]');
    Array.prototype.forEach.call(inputs, function (input) {
      input.addEventListener(input.type === 'checkbox' ? 'change' : 'blur', function () {
        showError(input);
      });
    });

    form.addEventListener('submit', function (e) {
      var firstInvalid = null;
      Array.prototype.forEach.call(inputs, function (input) {
        if (!showError(input) && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        e.preventDefault();
        firstInvalid.focus();
        return;
      }
      if (!form.getAttribute('action')) {
        e.preventDefault();
        var status = document.getElementById('formStatus');
        status.textContent = 'This is a preview. The form will be connected when the page goes live, so this message was not sent.';
        status.hidden = false;
      }
    });
  }
})();
