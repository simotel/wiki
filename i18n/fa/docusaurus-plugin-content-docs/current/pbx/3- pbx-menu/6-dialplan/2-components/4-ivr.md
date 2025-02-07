---
sidebar_label: "IVR"
title: "IVR"
---

# IVR

## کاربرد  

با استفاده از **منشی دیجیتال** این امکان فراهم می‌شود که **تماس‌گیرنده بین مسیرهای مختلف حق انتخاب داشته باشد**.  

## پارامترهای کامپوننت  

- **Announcement**: فایل صوتی‌ای که در ورود به IVR پخش می‌شود.  

- **Timeout Announcement**: پیامی که هنگام **Timeout** شدن پخش می‌شود.  

- **Invalid Announcement**: پیامی که هنگام وارد کردن **شماره اشتباه** از سوی تماس‌گیرنده پخش می‌شود.  

- **Enable Direct Dial**: در صورت فعال بودن، تماس‌گیرنده می‌تواند شماره داخلی یکی از کاربران تعریف‌شده در سیستم را بگیرد.  

- **Repeat Loop**: تعداد تکرار IVR در صورت عدم ورود عدد از سوی تماس‌گیرنده.  

- **Timeout (Sec)**: مدت‌زمانی (برحسب ثانیه) که به تماس‌گیرنده فرصت داده می‌شود تا پس از وارد کردن عدد اول، عدد دوم را وارد کند. مقدار `0` قابلیت **timeout** را غیرفعال می‌کند.  

- **Max Digits**: حداکثر تعداد رقم‌هایی که تماس‌گیرنده می‌تواند وارد کند.  



## پارامترهای مسیردهی  

- **Case**: عددی است که به **خروجی انتساب داده می‌شود**. اگر عدد واردشده توسط تماس‌گیرنده با مقدار **Case** برابر باشد، تماس از آن خروجی خارج می‌شود.  

- **Text**: نامی که تنها برای **نمایش در ظاهر کامپوننت** استفاده می‌شود و می‌توان از آن برای **سهولت در دسترسی** بهره برد.  

## پارامترهای خروجی `t` و `i`  

**خروجی‌های پیش‌فرض تعریف‌شده در IVR** هستند:  

- **`t` (Timeout)**: برای **مسیردهی به رویداد timeout** استفاده می‌شود.  
- **`i` (Invalid)**: برای **مسیردهی زمانی که تماس‌گیرنده داده اشتباه (Invalid) وارد کرده است**، استفاده می‌شود.  

برای استفاده از این خروجی‌ها، باید **مسیر جدیدی به IVR اضافه کنید** و مقدار **"Case" را `t` یا `i` قرار دهید**.