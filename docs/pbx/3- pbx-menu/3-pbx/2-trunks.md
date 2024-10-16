---
sidebar_label: "ترانک ها"
title: "ترانک ها"
---

# ترانک‌ها

ترانک، مسیر ارتباطی میان گیت‌وی‌‌های خطوط شهری،E1،SipTrunk‌‌ها و یا سرور دیگری است که تماس‌ها از آن وارد و خارج می‌‌شوند. در این قسمت می‌‌توان علاوه بر مشاهده ترانک‌‌های موجود در مرکز تماس، ترانکی ایجاد،حذف و یا ویرایش کرد. سیموتل در ترانک‌ها، از سه پروتکل SIP، IAX2 و DAHDI پشتیبانی می‌کند.

## پارامترهای ترانک SIP

- **Name**: نام نمایشی ترانک.

- **Register String**: برای ریجسترکردن ترانک‌‌های خاص بکار می‌رود. (برای‌‌مثال، اگر یک sip-user از یک مرکز دیگر، نیاز به اتصال به سرور را داشته باشد، این کاربر با الگوریتم خاصی باید رجیستر شود تا هر دو طرف از وضعیت یکدیگر اطلاع داشته باشند).

- **Active**: فعال یا غیرفعال‌‌کردن ترانک.

- **Deny**: ایجاد عدم‌دسترسی از یک محدوده IP.

- **Permit**: ایجاد دسترسی فقط از یک محدوده IP.

- **Dtmf Mode**: نوع Dtmf ارسالی.

- **Can Re-Invite**: ایجاد ارتباط مستقیم از مبدأ داخلی به هر مقصدی بدون عبور از سرور (درصورت yes بودن).

- **Direct Media**: مبادله Media (صوت و تصویر) بدون عبور از سرور (درصورت yes بودن).

- **Context**: کانتکست ترانک.

- **Host**: این منو به‌‌صورت پیش‌‌فرض dynamic است اما چون ترانک فقط باید از یک IP خاص ریجستر شود، این IP را اینجا وارد می‌‌کنیم(آدرس مقصد ترانک).

- **Type**: انتخاب نوع داخلی فقط براساس خروجی (User)، فقط ورودی (Peer)، هم ورودی و هم خروجی (Friend).

- **NAT**: (مراجعه شود به ”مرجع آموزش ویپ با سافت سوئیچ استریسک“).

- **Port**: پورت برقراری ارتباط.

- **Qualify**: بررسی برقراری ارتباط (qualify = yes| no) اگر yes باشد. PBX هر۲ ثانیه یکبار به‌‌طور منظم دستور SIP OPTIONS را برای بررسی اینکه دستگاه هنوز آنلاین است یا نه، ارسال می‌‌کند. این ویژگی همچنین می‌‌تواند برای نگه‌‌داشتن یک جلسه UDP برای دستگاهی که در پشت یک مترجم آدرس شبکه (NAT) قرار دارد، استفاده شود و اگر nat=yes باشد این ارتباط در پشت nat هم چک می‌‌شود و ارتباط نیز حفظ می‌‌شود.

- **Insecure**: عدم لزوم احراز هویت.

	- **port**: نادیده‌گرفتن شماره پورتی که درخواست از آن آمده است، در این حالت اجازه تطابق peer با ip address بدون تطبیق شماره پورت داده می‌‌شود.

	- **invite**: عدم نیاز به احراز هویت در invite ورودی.

	- **port&invite**: هردو مورد بالا هم زمان اعمال می‌‌شوند.


- **Disallow**: کدک‌‌هایی که در اینجا وارد می‌‌شود، غیرفعال می‌گردند و اگر all وارد شود تمام کدک‌‌ها غیرفعال می‌‌گردند.

- **Allow**: اجازه دادن به کدک‌‌ها به ترتیب اولویت (قبل از اجازه دادن به کدک‌‌های دیگر ابتدا از disallow = all استفاده کنید).

- **More Option**: اگر در تعریف ترانک بخواهید از پارامتری استفاده کنید که در لیست بالا به آن اشاره نشده باشد، آن پارامتر و مقدار آن را در این قسمت وارد کنید. اگر می‌خواهید چند پارامتر را در این بخش وارد کنید باید هر کدام در یک خط باشند.

- **Description**: توضیحاتی درمورد ترانک.

## پارامترهای ترانک IAX2

:::info اطلاعات
اکثر پارامترهای IAX2 مشابه SIP است.

:::

- **Name**: نام نمایشی ترانک.

- **Register String**: برای ریجسترکردن ترانک‌‌های خاص بکار می‌رود (برای‌مثال، اگر یک IAX2-user از یک مرکز دیگر، نیاز به اتصال به سرور داشته باشد، با الگوریتم خاصی این کاربر باید رجیستر گردد تا هر دو طرف از وضعیت یکدیگر اطلاع داشته باشند).

- **Active**: فعال یا غیرفعال‌‌کردن ترانک.

- **Deny**: ایجاد عدم‌دسترسی از یک محدوده IP.

- **Permit**: ایجاد دسترسی فقط از یک محدوده IP.

- **DTMF Mode**: نوع DTMF ارسالی.

- **Context**: کانتکست ترانک.

- **Host**: این منو به‌‌صورت پیش‌‌فرض dynamic است اما درصورتی‌‌که داخلی فقط باید از یک IP خاص ریجستر شود، این IP را اینجا وارد می‌‌کنیم.

- **Type**: انتخاب نوع داخلی فقط براساس خروجی (User)، فقط ورودی (Peer)، هم ورودی و هم خروجی (Friend).

- **Port**: پورت برقراری ارتباط.

- **Qualify**: بررسی برقراری ارتباط (qualify = yes| no) اگر yes باشد. PBX هر۲ ثانیه یکبار به‌‌طور منظم دستور SIP OPTIONS را برای بررسی اینکه دستگاه هنوز آنلاین است یا نه، ارسال می‌‌کند. این ویژگی همچنین می‌‌تواند برای نگه‌‌داشتن یک جلسه UDP برای دستگاهی که در پشت یک مترجم آدرس شبکه (NAT) قرار دارد، استفاده شود و اگر nat=yes باشد این ارتباط در پشت nat هم چک می‌‌شود و ارتباط نیز حفظ می‌‌شود.

- **Disallow**: کدک‌‌هایی که در اینجا وارد شوند، غیرفعال می‌‌شوند و اگر all وارد شود تمام کدک‌‌ها غیرفعال می‌‌گردند.

- **Allow**: اجازه دادن به کدک‌‌ها به ترتیب اولویت (قبل از اجازه دادن به کدک‌‌های دیگر ابتدا از disallow = all استفاده کنید).

- **Trunk**: این پارامتر دارای دو مقدار Yes و No است که برای صرفه‌‌جویی در استفاده از پهنای باند شبکه، مقدار آن را برابر Yes قرار می‌‌دهیم.

- **Transfer**: این پارامتر شبیه پارامترهای Can Re-Invite و Direct Media در تعریف کاربر از نوع پروتکل SIP است. با این پارامتر می‌‌توان مشخص کرد که جریان‌‌های ترافیکی مدیا مستقیماً بین دو کاربر منتقل شوند. این پارامتر می‌‌تواند مقادیر زیر را داشته باشد

	- **Yes**: در این حالت سرور تلاش می‌‌کند که جریان‌‌های سیگنالینگ و مدیا بین دو کاربر به‌طور مستقیم منتقل شوند. پرواضح است که اگر بین دوکاربر نیاز به transcoding وجود داشته باشد، این کار انجام نخواهد شد.

	- **No**: در این حالت سرور جریان‌‌های سیگنالینگ و مدیا را بین دوکاربر از خود عبور می‌‌دهد.

	- **Mediaonly**: در این حالت سرور فقط جریان‌‌های سیگنالینگ را از خود عبور می‌‌دهد و جریان‌‌های مدیا بین دو کاربر مستقیماً منتقل می‌‌شوند.

- **More Option**: اگر در تعریف کاربر بخواهید از پارامتری استفاده کنید که در لیست بالا به آن اشاره نشده باشد، آن پارامتر و مقدار آن را در این قسمت وارد کنید. اگر می‌خواهید چند پارامتر را در این بخش وارد کنید باید هر کدام در یک خط باشند.

- **Description**: توضیحاتی درمورد ترانک.

## پارامترهای ترانک DAHDI

- **Name**: نام ترانک.

- **Group**: این پارامتر برای گروه‌‌بندی کانال‌‌ها و ایجاد تماس خروجی استفاده می‌‌شود. هنگام گروه‌‌بندی کانال‌‌ها، می‌‌توان براساس الگوریتم‌‌هایی مشخص کرد که از چه کانال‌‌هایی استفاده شود تا توزیع تماس‌‌ها بین کانال‌‌ها یکسان بمانند،با این قوانین می‌‌توان بهترین الگو را انتخاب و از آن استفاده کرد. این قوانین برای کارت‌‌های PRI نیز برقرارند. ترتیب انتخاب کانال‌‌ها به‌‌صورت زیر است.

	- **g**: ترتیب انتخاب پورت‌‌ها از کمترین به بیشترین (1،2،3،4،5) است. برای‌‌مثال در اولین شماره، اولین پورت استفاده می‌‌شود. اگر اولین پورت مشغول باشد، دومین پورت انتخاب می‌‌شود. این نکته مهم است که انتخاب پورت دوم به اشغال‌‌بودن پورت اول بستگی دارد (در این حالت billing برای شماره پورت‌‌های پایین‌تر مقدار بیشتری خواهد بود).

	- **G**: این ترتیب دقیقاً مثل g است با این تفاوت که انتخاب پورت‌‌ها از بیشترین به کمترین (5،4،3،2،1) است (در این حالت billing برای شماره پورت‌‌های بالاتر مقدار بیشتری خواهد بود).

	- **r**: ترتیب انتخاب از کمترین به بیشترین و به‌‌صورت چرخشی (Round-robin) است، یعنی تماس جدید با پورت جدید ایجاد می‌‌شود (در این حالت مقدار billing برای پورت‌‌ها یکسان است).

	- **R**: ترتیب انتخاب از بیشترین به کمترین و به‌‌صورت چرخشی (Round-robin) است، یعنی تماس جدید با پورت جدید ایجاد می‌‌شود (در این حالت مقدار billing برای پورت‌‌ها یکسان است).



- **Active**: فعال یا غیرفعال‌‌کردن ترانک.

- **Description**: توضیحاتی درمورد ترانک.


 