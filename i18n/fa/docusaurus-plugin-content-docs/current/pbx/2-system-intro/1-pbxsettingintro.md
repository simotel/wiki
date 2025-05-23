---
sidebar_position: 1
sidebar_label: "مرکز تماس"
title: "مرکز تماس"
---


# مرکزتماس
مرکز تماس یک شبکه تلفنی است که در سازمان‌ها و شرکت‌ها مورد استفاده قرار می‌گیرد. کاربران مرکز تماس (که معمولاً به‌عنوان کارکنان داخلی شناخته می‌شوند) از طریق روش‌های مختلف ارتباطی مانند VoIP، شبکه ISDN و خطوط آنالوگ، به‌صورت داخلی (درون سازمانی) و خارجی (با دنیای بیرون) با یکدیگر در ارتباط هستند. یکی از مزایای اصلی مرکز تماس این است که به شما امکان می‌دهد تعداد خطوط تلفنی بیشتری نسبت به خطوط فیزیکی (PSTN) در اختیار داشته باشید.

## PBX
بخش `PBX` همان اطلاعات پایه سامانه است که پس از تعریف مقادیری مانند کاربران (داخلی‌ها)، صف‌ها و ترانک‌ها، از آن‌ها در ویرایشگر `DialPlan` برای پیاده‌سازی سناریوی مدنظر استفاده می‌شود. در این بخش موارد ضروری برای راه‌اندازی اولیه مرکز تماس بررسی می‌شود.

## کاربران `Users`

برای استفاده از مرکز تماس، ابتدا باید کاربران تعریف شوند. پس از تعریف کاربران، امکان رجیستر کردن آن‌ها بر روی تلفن ویپ یا سافت‌فون فراهم می‌شود. به این کاربران اصطلاحاً **داخلی** (`Extension`) گفته می‌شود.  

با رجیستر کردن داخلی‌ها روی تلفن‌ها، امکان ایجاد تماس داخلی به داخلی بین کاربران فراهم می‌شود.

:::caution هشدار

  بخش مرکزتماس تنها شامل اطلاعات پایه می‌باشد وبرای ایجاد تماس داخلی‌به‌داخلی تنظیمات مربوط به بخش ویرایشگر نیز باید انجام شود.

:::



- در بخش `DialPlan`، سناریوی معمول پیاده‌سازی شده است. اگر داخلی‌های خود را به‌صورت سه‌رقمی (`XXX`) تعریف کنید، امکان تماس داخلی به داخلی به‌صورت پیش‌فرض فراهم خواهد بود.




برای کسب اطلاعات بیشتر در مورد داخلی‌ها به [این‌قسمت](/pbx/pbx-menu/pbx/users) مراجعه فرمایید.


## ترانک‌ها `Trunks`

برای ایجاد ارتباط بین سیستم ویپ و دیگر سیستم‌ها از ترانک استفاده می‌شود.



### مثال‌های کاربردی استفاده از ترانک

- **مثال:** زمانی که یک مرکز تماس تهیه می‌کنید، سیستم تمامی قابلیت‌ها را ارائه می‌دهد. اما برای ایجاد ارتباط بین شبکه مخابراتی و سیستم ویپ، نیاز به اتصال این دو سیستم است. به‌عبارت‌دیگر، زمانی که یک شماره ثابت از ارائه‌دهنده خریداری می‌کنید، باید این شماره در سیستم شما تعریف شود و ارتباطی بین شما و ارائه‌دهنده برقرار شود. این ارتباط باعث می‌شود که زمانی که تماسی به شماره مقصد شما توسط ارائه‌دهنده دریافت شد، آن تماس به سمت مرکز تماس شما هدایت شود (`Route`). در نهایت، با توجه به سناریوی تماس تنظیم‌شده، تماس به یکی از کارمندان مجموعه متصل می‌شود.
 
 <br/> <br/>
 
- **مثال:** تصور کنید یک شرکت چندین شعبه در استان‌های مختلف دارد و هرکدام از این شعبات مرکز تماس مستقل خود را دارند. با توجه به اینکه این سیستم‌ها با هم ارتباطی ندارند، چگونه می‌توان تماسی را که به دفتر مرکزی شرکت در تهران متصل شده است به سرپرست بخش تولید شعبه مشهد `Transfer` کرد؟ یا چگونه می‌توان تماس داخلی‌به‌داخلی بین دو شعبه شرکت را بدون پرداخت هزینه مخابراتی برقرار کرد؟  
در اینجا با استفاده از ترانک می‌توان بین سیستم‌های ویپ مستقل ارتباطی منطقی ایجاد کرد و به‌راحتی از این سرویس‌ها بهره‌مند شد.

برای کسب اطلاعات بیشتر در مورد ترانک‌ها به [این‌قسمت](/pbx/pbx-menu/pbx/trunks) مراجعه فرمایید.




## صف‌ها `Queues`

درسازمان‌ها بخش‌های مختلفی وجود دارند که هرکدام به صورت تخصصی وظیفه ارائه سرویس مشخصی را به مشترکان سازمان برعهده دارند، برای مثال می‌توان به بخش‌های پشتیبانی
 فنی و فروش اشاره کرد، در این بخش‌ها افراد مختلفی مشغول به کار می‌باشند؛ پس بهترین روش برای توزیع کار بین نیروهای یک بخش ایجاد صفی از اپراتور‌ها  می‌باشد تا تماس مشترکان 
 براساس یک الگوی عادلانه به افراد حاضر در صف متصل شود.
 
### برخی از قابلیت‌های صف
 
- تعریف تعداد نامحدودی از صف‌ها  
- امکان تعریف هشت الگوریتم مختلف توزیع تماس در صف (مانند زنگ خوردن برای همه اپراتورها به‌صورت هم‌زمان، زنگ خوردن یکی‌یکی بر اساس اولویت و ...)  
- قابلیت تعیین اولویت برای اپراتورهای صف (`Agents`) (به‌عنوان‌مثال، ابتدا اپراتورهای بخش فنی پاسخ دهند و در صورت مشغول بودن همه، تلفن سرپرست بخش زنگ بخورد)  
- تعریف موزیک انتظار (در زمان مشغول بودن تمامی اپراتورها، موزیک انتظار برای مشترک پخش می‌شود)  
- امکان ورود و خروج اپراتورها از صف با استفاده از کدهای ویژه (مانند وارد شدن به صف پشتیبانی فنی با کد `91` و خروج از صف با کد `92`)  
- ضبط مکالمات اپراتورهای صف
 
برای کسب اطلاعت بیشتر در مورد ترانک‌ها به [این‌قسمت](/pbx/pbx-menu/pbx/queues) مراجعه فرمایید.
 

 
 
### موزیک‌انتظار `Music On Hold`
برای استفاده از قابلیت موزیک انتظار صف، ابتدا باید یک کلاس ساخته شود و در آن کلاس، فایل‌های موزیک انتظار مربوط به صف خود را بارگذاری کنید. پس از بارگذاری فایل صوتی، با مراجعه به بخش "صف" در قسمت "تنظیمات صف"، لیست (کلاس) موزیک انتظار بارگذاری شده خود را انتخاب می‌کنید.

برای کسب اطلاعت بیشتر در مورد موزیک‌انتظار به [این‌قسمت](/pbx/pbx-menu/pbx/music_on_hold) مراجعه فرمایید.

## آواها `Announcements`

در بسیاری از مواقع، نیاز است که قبل از اتصال فرد تماس‌گیرنده به افراد سازمان، ابتدا در یک فایل صوتی معرفی نسبت به بخش‌های سازمان صورت گیرد. سپس از کاربر خواسته می‌شود که در صورتی که با بخش خاصی کار دارد، لطفاً عدد مشخصی را وارد کند. به این قابلیت در مراکز تماس، پاسخگوی صوتی (`IVR`) گفته می‌شود که در آینده به‌طور کامل به تشریح قابلیت‌های آن خواهیم پرداخت. به هر حال، سازمان‌های مختلف فایل صوتی مخصوص به خود را دارند، بنابراین نیاز است فایل صوتی ابتدا در بخش آواها بارگذاری شده و سپس به پاسخگوی صوتی (`IVR`) مربوطه انتساب داده شود.

 
### مثال‌های از کاربرد بخش آواها

- آوای مربوط به تماس‌های خارج از زمان و روزهای کاری سازمان  
- آوای مربوط به ضبط مکالمات  
- آوای مربوط به نظرسنجی پایانی از مشترک  
 
:::tip نکته

در مرکز تماس سیموتل به صورت پیش‌فرض تعدادی از فایل‌های صوتی پرکاربرد و معمول بارگذاری شده‌اند، برای مشاهده و پخش آن‌ها به بخش آواها مراجعه فرمایید.

:::
 
 
برای کسب اطلاعت بیشتر در مورد آوا‌ها به [این‌قسمت](/pbx/pbx-menu/pbx/announcements) مراجعه فرمایید.
 
 
 
 
 
 
 
 
 