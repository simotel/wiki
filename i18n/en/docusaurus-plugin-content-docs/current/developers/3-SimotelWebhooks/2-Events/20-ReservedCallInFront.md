---
title: "Queue Call Reservation"
---

# ReservedCallInFront

The `ReservedCallInFront` event is triggered after a call is created in the specified queue where the call reservation feature is enabled from the queue component. This event will be generated and sent to your web service.

## Event Parameters
<div class="custom-table">

|                         Description                         | Defined Data |          Sample Data           |     Parameters     |
|:-----------------------------------------------------------:|:------------:|:------------------------------:|:-----------------:|
|                       Event Name                            |      -       |       ReservedCallInFront      |   **event_name**  |
|                  Event Type (same as name)                  |      -       |       ReservedCallInFront      |      **event**    |
|            Name of the queue where the call is placed        |      -       |              1010              |   **queue_name**  |
|                  Caller’s phone number (Caller ID)          |      -       |          09123456789           |   **caller_id**   |
| Date and time the call entered the queue (Gregorian - YYYY-MM-DD HH:MM:SS.mmmmmm) |      -       | 2025-03-11 13:10:12.712188    |      **date**     |
</div>


## Sample CDR Event Output

```shell
{
    "event_name": "ReservedCallInFront",
    "event": "ReservedCallInFront",
    "queue_name": "1010",
    "caller_id": "09123456789",
    "date": "2025-03-11 13:10:12.712188"
}
