---
sidebar_position: 2
---
# Exten Added

When a new user is defined in Simutel, the ExtenAdded event is created.

##  Event parameter
<div class="custom-table">
|                         توضیحات                         | داده‌های تعریف‌شده | داده‌های نمونه |  پارامتر‌ها |
|:-------------------------------------------------------:|:----------------:|:-------------:|:----------:|
|                        نام رویداد                       |         -        |   ExtenAdded  | **event_name** |
| شماره داخلی(کاربری است که رویداد برای وی تولید شده است) |         -        |      559      |    **exten**   |
|                       وضعیت داخلی                       |         -        |  Unavailable  |    **state**   |

</div>

## نمونه خروجی رویداد Exten Added

```shell
{
  "event_name": "ExtenAdded",
  "exten": "77777",
  "state": "Unavailable"
}
```