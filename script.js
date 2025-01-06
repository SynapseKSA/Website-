let container;
let leftArrow;
let rightArrow;



document.addEventListener('DOMContentLoaded', () => {
    container = document.querySelector('.workshops-container');
    leftArrow = document.querySelector('.left-arrow');
    rightArrow = document.querySelector('.right-arrow');

    // التحقق من وجود العناصر
    if (!container || !leftArrow || !rightArrow) {
        console.error('العناصر غير موجودة.');
        return;
    }

    // تحريك الحاوية لليسار
    leftArrow.addEventListener('click', () => {
        container.scrollBy({ left: -320, behavior: 'smooth' });
    });

    // تحريك الحاوية لليمين
    rightArrow.addEventListener('click', () => {
        container.scrollBy({ left: 320, behavior: 'smooth' });
    });
});
