// Smooth scroll for nav links and hamburger open
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href') || ('#' + link.dataset.target);
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mobile hamburger toggle (if you want later you can add full menu)
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('open');
  });
}

// Intersection Observer for fade-in animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // optionally unobserve to run once
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbClose = document.getElementById('lbClose');

document.querySelectorAll('.gallery-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.dataset.img;
    lbImage.src = src;
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
  });
});
if (lbClose) lbClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
});



// Scrollspy: highlight nav indicator under active link
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = navLinks.map(link => {
  const href = link.getAttribute('href');
  return { link, el: document.querySelector(href) };
}).filter(i => i.el);

function updateActive() {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  let current = sections[0];
  sections.forEach(s => {
    if (s.el.offsetTop <= scrollPos) current = s;
  });
  // highlight current link
  navLinks.forEach(l => l.classList.remove('active'));
  if (current && current.link) current.link.classList.add('active');

  // move navIndicator if exists
  const ind = document.getElementById('navIndicator');
  const activeLink = document.querySelector('.nav-link.active');
  if (ind && activeLink) {
    const rect = activeLink.getBoundingClientRect();
    ind.style.width = rect.width + 'px';
    ind.style.left = (rect.left + window.scrollX) + 'px';
  }
}
window.addEventListener('scroll', updateActive);
window.addEventListener('resize', updateActive);
updateActive();

// optional: enable keyboard escape to close lightbox
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
  }
});


// Floating Code Background Logic
const codeSnippets = [
  'console.log("Hello World");',
  'function init() { return true; }',
  'const x = 10;',
  '<div></div>',
  'import React from "react";',
  'npm install',
  'git push origin main',
  'if (err) throw err;',
  'return null;',
  'await fetch(url);',
  'class App extends Component',
  'while(true) { coding(); }',
  'const styles = StyleSheet.create({});'
];

function createCodeLine() {
  const bg = document.getElementById('code-background');
  if (!bg) return;

  const el = document.createElement('div');
  el.classList.add('code-line-item');
  el.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

  // Random position and duration
  el.style.left = Math.random() * 95 + 'vw';
  el.style.animationDuration = (Math.random() * 10 + 10) + 's'; // 10-20s
  el.style.fontSize = (Math.random() * 10 + 10) + 'px'; // 10-20px
  el.style.opacity = (Math.random() * 0.3 + 0.1);

  bg.appendChild(el);

  // Remove after animation
  setTimeout(() => {
    el.remove();
  }, 22000);
}

// Spawn periodically
setInterval(createCodeLine, 800);
// Fungsi untuk membuka Modal
function openModal(imageSrc) {
    // PENTING: Gunakan display = "flex" agar Flexbox di CSS berfungsi
    var modal = document.getElementById("myModal");
    modal.style.display = "flex"; 
    
    // ... sisa kode lainnya ...
}
