
document.addEventListener('DOMContentLoaded', () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  };
  document.querySelectorAll('[data-scroll]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      scrollTo(btn.getAttribute('data-scroll'));
    });
  });
  // mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click', ()=>{
      mobileMenu.classList.toggle('hidden');
    });
  }
  // year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
