// custom.js
function setLanguageClass() {
    // خواندن زبان جاری از عنصر <html>
    const currentLocale = document.documentElement.lang; // 'en' یا 'fa'

    // انتخاب تمام عناصر با کلاس‌های خاص
    const itemsEn = document.getElementsByClassName('navbar-item-en').length;
    const itemsFa = document.getElementsByClassName('navbar-item-fa');
    console.log(itemsEn)
    // نمایش یا پنهان کردن آیتم‌های انگلیسی
    for (let i = 0; i < itemsEn.length; i++) {
        console.log(i)
        itemsEn[i].style.display = currentLocale == 'en' ? 'block' : 'none';
    }

    // نمایش یا پنهان کردن آیتم‌های فارسی
    for (let i = 0; i < itemsFa.length; i++) {
        itemsFa[i].style.display = currentLocale === 'fa' ? 'block' : 'none';
    }
}

// اجرای تابع پس از بارگذاری صفحه
document.addEventListener('DOMContentLoaded', setLanguageClass);
