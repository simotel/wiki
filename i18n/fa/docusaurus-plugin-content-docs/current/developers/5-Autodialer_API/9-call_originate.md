---
sidebar_label: "تماس دو طرفه با کمپین"
title: "تماس دو طرفه با کمپین"
---


# تماس دوطرفه با کمپین

برای ایجاد تماس دوطرفه می‌توان از ماژول تماس‌انبوه نیز استفاده کرد. مزیت این ماژول زمانی مشخص می‌شود که نفر اول در تماس‌ دوطرفه تماس را قطع کند.
در این صورت با استفاده از `autodialer_api/report/report_search` می‌توان از قطع‌ شدن تماس توسط نفر اول آگاه شد.

:::info اطلاعات
در صورتی که نیاز به اطلاعات بیشتر درمورد ماژول تماس انبوه دارید به **[این قسمت](/autodialer)** مراجعه فرمایید.
:::

:::tip نکته
زمانی که از ماژول تماس انبوه برای ارسال تماس دوطرفه استفاده می‌کنید، هر کمپین به جای گروهی از مخاطبان شامل یک مخاطب است که نفر اول تماس می‌باشد. پس از پاسخ دادن نفر اول تماس شما می‌توانید با استفاده از `context_interface` و `inteface_text` تنظیم شده در کمپین تماس را به سمت کامپوننت  `autodialer route` هدایت کنید و پس از آن تماس به `trunk api` یا `exten api` در دایل‌پلن متصل شود و با نفر دوم نیز تماس بگیرید.
:::

## فرایند پیاده سازی سناریو
برای ارسال تماس باید از سرویس افزودن کمپین استفاده شود (۱)؛ و وضعیت نهایی شماره‌ها در کمپین از طریق وب‌ سرویس جستجوی گزارشات کمپین (۲) به دست می‌آید. در ایجاد کمپین مطابق با توضیحات وب‌ سرویس افزودن کمپین (۱) با استفاده از مقدار **interface_context** و **inteface_text** می‌توان تماس را به سمت دایل‌پلن هدایت کرد. در دایل‌پلن چنانکه نیاز هست ارتباط مقصد مدیریت شود از کامپوننت های **ExtensionAPI** و یا **TrunkApi** استفاده شود (طبق ۳ و ۴). برای دریافت cdr قسمت دوم تماس می‌توان از سرویس دریافت گزارشات (۵) و یا وب‌ سرویس (۶) که مربوط به CDR می‌باشد استفاده کرد. در نهایت در پایان مکالمه وضعیت مکالمه اعلام می‌گردد.


 **۱:** [وب‌ سرویس افزودن کمپین](/developers/Autodialer_API/campaign/campaign_add)

**۲:** [وب‌ سرویس دریافت گزارشات کمپین](/developers/Autodialer_API/report/report_search)

**۳:** [وب‌ سرویس کامپوننت Exten API](/developers/SimotelWebhooks/DialplanApiComponents/exten_api)

**۴:** [وب‌ سرویس کامپوننت Trunk API](/developers/SimotelWebhooks/DialplanApiComponents/trunk_api)

**۵:** [وب‌ سرویس دریافت گزارشات](/developers/SimotelAPI/v4/report/report_cdr_search)

**۶:** [وب‌ سرویس رویداد CDR](/developers/SimotelWebhooks/Events/cdr) 