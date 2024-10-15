---
//slug:
title: simotelhelper 26
author: تیم توسعه مستندات مرکزتماس سیموتل
//author_title: Vsadrnia
//author_url: https://github.com/wgao19
//author_image_url: 
//tags: [DocCenter ، نسخه ۶/۲]
sidebar_label: "Simotelhelper 26"
---
<head>
  <title>Simotelhelper 26 | مستندات سیموتل</title>
</head>



نسخه 26 ابزار simotelhelper منتشر شد(**آپدیت ضروری**). 

در این نسخه ایراد اساسی مربوط به متوقف شدن دیتابیس برطرف شده، لذا اعمال آپدیت ضروری می باشد.

این آپدیت برای کلیه سرور‌ها باز شده و درصورتی که سرور به اینترنت دسترسی داشته باشد حداکثر  پس از ۴۸ ساعت بصورت خودکار آپدیت می‌گردد. 
درصورتی که سرور اینترنت ندارد پس از برقراری ارتباط اینترنتی یک بار سرویس سیموتل هلپر را استاپ و استارت نمایید تا سرور آپدیت گردد.

```shell
ubuntu
stop simotelhelper
start simotelhelper

debian
service simotelhelper stop
service simotelhelper start
```
در منوی **Maintenance > Settings** می‌توانید ورژن جاری simotelhelper را مشاهده فرمایید.

برای آشنایی بیشتر در مورد ابزار simotelhelper به [این قسمت](/pbx/advance-settings/simotelhelper_tool) مراجعه فرمایید.
