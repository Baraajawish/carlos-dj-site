// loader, reveal with stagger
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader')?.classList.add('done'),700));
document.addEventListener('DOMContentLoaded',()=>{const io=new IntersectionObserver(es=>{let k=0;es.forEach(e=>{if(e.isIntersecting){e.target.style.transitionDelay=(k++*110)+'ms';e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));});
