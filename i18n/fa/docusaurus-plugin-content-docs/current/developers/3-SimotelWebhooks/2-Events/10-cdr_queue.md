---
sidebar_label: " اتصال تماس به اپراتور"
title: " اتصال تماس به اپراتور"
---


# CDRQueue

پس از اتصال تماس‌گیرنده به یکی از اپراتورهای صف رویداد CDRQueue ایجاد می‌گردد.


## پارامترهای رویداد
<div class="custom-table">

|        توضیحات        | داده های تعریف شده |        داده های نمونه       |       پارامترها     |
|:---------------------:|:------------------:|:---------------------------:|:-------------------:|
|       نام رویداد      |          -         |           CdrQueue          |      **event_name**     |
|    شناسه یکتای تماس   |          -         |        1610004672.198       |      **cuid**      |
|                          شناسه تماس دو طرفه                    |                       -                       |            orig.call.1683107010.780601           |  **originated_call_id** |
|       شماره مبداء     |          -         |             991             |         **src**         |
|       شماره مقصد      |          -         |             992             |         **dst**         |
|        شماره صف       |          -         |             901             |        **queue**        |
|       مدت مکالمه      |          -         |              11             |       **billsec**       |
|       مدت انتظار      |          -         |              10             |         **wait**        |
|       کل مدت تماس     |          -         |              21             |       **duration**      |
|    مدت انتظار در صف   |          -         |              10             |      **agent_wait**     |
|       وضعیت تماس      |          -         |           ANSWERED          |     **disposition**     |
|            -          |          -         |              -              |     **queue_status**    |
|      قطع کنند تماس    |          -         |            caller           |        **hangup**       |
|           -           |          -         |              -              |       **comment**       |
|  نام فایل صوتی مکالمه |          -         | 20210107_1610004672.198.mp3 |        **record**       |
|           -           |          -         |  2021-01-07 07:31:23.860004 |     **answeredtime**    |
|            -          |          -         |  2021-01-07 07:31:13.289281 |       **ringtime**      |
|    زمان شروع مکالمه   |          -         |  2021-01-07 07:31:13.247554 |      **starttime**      |
|    زمان پایان مکالمه  |          -         |  2021-01-07 07:31:35.077859 |       **endtime**       |
|            -          |          -         |             991             |     **detail->src**     |
|            -          |          -         |             992             |     **detail->dst**     |
|            -          |          -         |              11             |   **detail->billsec**   |
|            -          |          -         |              10             |     **detail->wait**    |
|            -          |          -         |           ANSWERED          | **detail->disposition** |
|            -          |          -         |              -              |   **detail->comment**   |
|            -          |          -         |              1              |    **detail->tries**    |
</div>

## نمونه خروجی رویداد CDRQueue


```shell
{
  "event_name": "CdrQueue",
  "unique_id": "1610782193.391",
  "src": "992",
  "dst": "993",
  "queue": "902",
  "billsec": "31",
  "wait": "3",
  "duration": "34",
  "agent_wait": "3",
  "disposition": "ANSWERED",
  "hangup": "agent",
  "queue_status": "CONTINUE",
  "record": "20210116_1610782193.391.mp3",
  "answeredtime": "2021-01-16 07:29:56.819506",
  "ringtime": "2021-01-16 07:29:53.382906",
  "starttime": "2021-01-16 07:29:53.310319",
  "endtime": "2021-01-16 07:30:28.794906",
  "detail": [
    {
      "src": "992",
      "dst": "993",
      "billsec": "31",
      "wait": "3",
      "disposition": "ANSWERED",
      "comment": "",
      "tries": "1"
    }
  ]
}
```