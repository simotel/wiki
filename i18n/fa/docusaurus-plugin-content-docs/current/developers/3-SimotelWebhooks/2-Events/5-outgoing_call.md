---
sidebar_position: 2
sidebar_label: "تماس خروجی"
title: "تماس خروجی"
---


# OutgoingCall

هنگامی‌ كه تماسی از سیموتل خارج می‌شود (تماس خروجی)، رویداد OutgoingCall ایجاد می‌گردد و مشخص می‌نماید كه تماس از چه طریقی خارج شده است.


## پارامترهای رویداد
<div class="custom-table">

|                   توضیحات                  | داده‌های تعریف‌شده |  داده‌های نمونه |    پارامتر‌ها    |
|:------------------------------------------:|:----------------:|:--------------:|:---------------:|
|                 نام رویداد                 |         -        |  OutgoingCall  |  **event_name** |
|          شماره تماس خروجی (callee)         |         -        |   05131041570  |    **number**   |
|           نام درگاه‌‌ خروجی سیموتل           |         -        |       E1       | **entry_point** |
| شناسه یکتای تماس که توسط PBX تولید می‌گردد |         -        | 1510564538.919 |  **cuid**  |
|                          شناسه تماس دو طرفه  (در صورتی که تماس دو طرفه باشد این فیلد مقدار دارد)                    |                       -                       |            orig.call.1683107010.780601           |  **originated_call_id** |

</div>


## نمونه خروجی رویداد Outgoing Call

```shell
{
    "event_name": "OutgoingCall",
    "number": "999",
    "unique_id": "1610781425.388",
    "outgoing_point": "to_simo_51_20"
}
```