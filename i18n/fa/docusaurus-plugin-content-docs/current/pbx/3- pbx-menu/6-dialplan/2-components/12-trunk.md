---
sidebar_label: "Trunk"
---


# Trunk  

## کاربرد  

برای **ایجاد تماس روی ترانک** استفاده می‌شود، به این نحو که شماره ورودی به کامپوننت ترانک را روی ترانک انتخاب‌شده در کامپوننت شماره‌گیری می‌کند.  

## پارامترها کامپوننت  

- **Trunk**: انتخاب **ترانک** برای انتقال تماس از طریق آن است.  

- **Timeout (sec)**: مدت زمانی است که **تماس منتظر برقراری ارتباط می‌ماند** (برحسب ثانیه).  

- **Skip**: تعیین تعداد **رقم‌هایی** که باید از ابتدای شماره واردشده **حذف گردد**. سپس شماره جدید به‌عنوان شماره مقصد در نظر گرفته می‌شود.  

- **Prefix**: افزودن عدد درج‌شده در این گزینه **قبل از شماره واردشده**. سپس شماره جدید به‌عنوان شماره مقصد در نظر گرفته می‌شود.  

- **Call Limit (sec)**: **محدودیت زمانی مکالمه** است.  

- **Permitted Queues**: **صف‌هایی** که مجاز به استفاده از این ترانک هستند. اگر صفی انتخاب نشود، تمام صف‌ها مجاز به استفاده‌اند.  

- **Permitted Extensions**: **داخلی‌هایی** که مجاز به استفاده از این ترانک هستند. اگر داخلی انتخاب نشود، تمام داخلی‌ها مجاز به استفاده هستند.  

- **Options**: تنظیمات **تماس** است.  



## خروجی‌ها  

- **S (Success)**: در صورتی که **تماس موفق** باشد. تماس خاتمه می‌یابد و مرحله بعدی ندارد.  

- **F (Fail)**: در صورتی که **تماس موفق نباشد**، یعنی مقصد به هر دلیلی **پاسخ نداده باشد**.