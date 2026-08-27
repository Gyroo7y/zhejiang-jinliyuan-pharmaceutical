(() => {
  const refreshArtwork = () => {
    const responsibility = location.hash.replace(/^#/, '').startsWith('responsibility');
    document.querySelectorAll('.chapter-img').forEach((node) => {
      node.classList.add(responsibility ? 'responsibility-visual' : 'quality-visual');
      node.setAttribute('aria-label', responsibility ? 'Health responsibility artwork' : 'Quality and manufacturing artwork');
    });
    document.querySelectorAll('.chapter-img + .muted').forEach((node) => node.remove());
    document.querySelectorAll('.intro').forEach((node) => {
      if (/示意视觉|Concept visuals/.test(node.textContent)) {
        node.textContent = node.textContent.replace(/。?示意视觉不代表企业厂房、员工、设备或证书。?|\. Concept visuals do not represent company facilities, staff, equipment or certificates\.?/, '');
      }
    });
  };
  new MutationObserver(refreshArtwork).observe(document.querySelector('#main'), { childList: true, subtree: true });
  window.addEventListener('hashchange', refreshArtwork);
  refreshArtwork();
})();
