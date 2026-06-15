/* ===== 深色模式切换 ===== */
(function () {
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    const STORAGE_KEY = 'theme-preference';

    /* 读取保存的主题 */
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') {
        body.classList.add('dark');
        toggle.textContent = '☀️';
    }

    /* 切换主题 */
    toggle.addEventListener('click', function () {
        const isDark = body.classList.toggle('dark');
        toggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
})();

/* ===== 技能进度条滚动动画 ===== */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.3 }
);

const skillsSection = document.getElementById('skills');
observer.observe(skillsSection);

/* 页面加载时如果已在视野内，立即触发 */
if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
    skillsSection.classList.add('visible');
}
