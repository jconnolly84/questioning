(function(){
  // Active nav link
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === file) a.classList.add('active');
  });

  // Mobile nav toggle
  const nav = document.querySelector('[data-nav]');
  const btn = document.querySelector('.nav-toggle');
  const links = document.getElementById('navLinks');
  if(nav && btn && links){
    const close = () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    };
    const open = () => {
      nav.classList.add('open');
      btn.setAttribute('aria-expanded','true');
    };
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      expanded ? close() : open();
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape') close(); });
    document.addEventListener('click', (e) => {
      if(!nav.contains(e.target) && !btn.contains(e.target)) close();
    });
  }

  // PDF fullscreen buttons
  document.querySelectorAll('[data-pdf] [data-pdf-fullscreen]').forEach(btn => {
    btn.addEventListener('click', () => {
      const viewer = btn.closest('[data-pdf]');
      if(!viewer) return;
      const doc = document;
      // toggle
      if(doc.fullscreenElement){
        doc.exitFullscreen?.();
        return;
      }
      viewer.requestFullscreen?.();
    });
  });
})();
