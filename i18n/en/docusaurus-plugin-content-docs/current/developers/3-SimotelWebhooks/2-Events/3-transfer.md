---
sidebar_position: 2
---
# Transfer
When a user transfers an ongoing call in Simotel, a Transfer event is generated.

## Event Parameters
<div class="custom-table">

|                           Description                          | Defined Data |      Sample Data    |      Parameters      |
|:-------------------------------------------------------------:|:------------:|:-------------------:|:--------------------:|
|                          Event Name                           |       -      |      Transfer       |    **event_name**    |
| Internal number of the user intending to transfer call 711 to 553. |       -      |         553         |     **transfer**     |
|           Number from which the call is being transferred      |       -      |         711         | **transferred_from** |
|         Number to which the current call will be transferred   |       -      |         557         |  **transferred_to**  |
|        Unique call ID generated by the PBX system             |       -      |  1510564538.919     |                      |
     **unique_id**    |
</div>

## Transfer Event Output Example

```shell
{
  "event_name": "Transfer",
  "unique_id": "1613906376.30",
  "transferer": "993",
  "transferred_from": "991",
  "transferred_to": "993"
}
```
