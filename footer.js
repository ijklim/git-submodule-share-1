document.addEventListener("DOMContentLoaded", () => {
  console.log('[footer.js] Document is ready');

  const footer = document.createElement('footer');
  footer.innerHTML = `
    Brought to you by <a href='https://ivan-lim.com' target='_blank'>Ivan Lim</a>
  `;
  document.body.appendChild(footer);
});
