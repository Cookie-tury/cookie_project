/* 流转 — 轻量交互 */
document.addEventListener('DOMContentLoaded',()=>{
    // 滚动入场
    const obs=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}})},{threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
    // 导航阴影
    const nav=document.querySelector('.nav');
    if(nav){window.addEventListener('scroll',()=>{nav.style.boxShadow=window.scrollY>4?'0 2px 8px rgba(0,0,0,.06)':'none'},{passive:true})}
    // 平滑锚点
    document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){const t=document.querySelector(this.getAttribute('href'));if(!t)return;e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-64,behavior:'smooth'})})});
});
