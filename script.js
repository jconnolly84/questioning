(function(){
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === file) a.classList.add('active');
  });
})();
