---

---
# Quick Search

از این سرویس برای بازیابی اطلاعات بخش جستجوی سریع استفاده می‌شود.

## پارامتر‌ها
|          توضیحات         | داده های تعریف شده |  داده های نمونه  | پارامترهای ضروری[**]/منطقی[*] |      پارامترها      |
|:------------------------:|:------------------:|:----------------:|:----------------------:|:-------------------:|
|             -            |          -         |         -        |                        |   conditions->from  |
|             -            |          -         |         -        |                        |    conditions->to   |
| بازیابی گزارشات از تاریخ |          -         | 2020-06-15 15:16 |           **           |   date_range->from  |
| بازیابی گزارشات تا تاریخ |          -         | 2022-06-22 15:16 |           **           |    date_renge->to   |
|             -            |          -         |         0        |                        |  pagination->start  |
|             -            |          -         |        20        |                        |  pagination->count  |
|             -            |          -         |         -        |                        | pagination->sorting |
|     یافتن موارد مشابه    |     true/false     |       true       |           **           |        alike        |

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "",
    "data": {
        "pagination": {
            "start": 0,
            "count": 20,
            "sorting": {
                "starttime": -1
            },
            "total": 1
        },
        "target": "cdr",
        "useGroupBy": false,
        "data": [
            {
                "_id": "60cad7ec8b2427f7c61c5ed5",
                "type": "outgoing",
                "cuid": "1623906282.60546",
                "clid": "\"\" <09160864352>",
                "src": "09160864352",
                "dst": "31041140",
                "dcontext": "from-310410",
                "channel": "SIP/Cisco-00007cdc",
                "dstchannel": "SIP/to-Monshi-00007cdd",
                "lastapp": "Dial",
                "lastdata": "SIP/to-Monshi/31041140,30,TtKkg",
                "start": "1400-03-27 09:34:42",
                "answer": "2021-06-17 09:34:43",
                "duration": 0,
                "billsec": 0,
                "disposition": "ANSWERED",
                "amaflags": "DOCUMENTATION",
                "accountcode": "",
                "uniqueid": "1623906282.60546",
                "userfield": "",
                "sequence": "43266",
                "comment": "",
                "v": 2,
                "old_caller_id": "9160864352",
                "did": "31041140",
                "entry_point": "Cisco",
                "outgoing_point": "to-Monshi",
                "route": [
                    {
                        "type": "IncomingRoute",
                        "name": "Incoming Route1",
                        "duration": 0.013708,
                        "date": {
                            "$date": {
                                "$numberLong": "1623906282972"
                            }
                        }
                    },
                    {
                        "type": "Switcher",
                        "name": "Switcher",
                        "duration": 0.00395,
                        "date": {
                            "$date": {
                                "$numberLong": "1623906282980"
                            }
                        }
                    },
                    {
                        "type": "Trunk",
                        "name": "to-monshi-hamed",
                        "duration": 0.215821,
                        "date": {
                            "$date": {
                                "$numberLong": "1623906283199"
                            }
                        }
                    }
                ],
                "wait": 1,
                "starttime": "1400-03-27 09:34:44",
                "endtime": {
                    "$date": {
                        "$numberLong": "1623906284732"
                    }
                },
                "hangup": "callee",
                "ANSWERED": 1,
                "outgoing": 1,
                "billsec_hhmmss": "00:00:00",
                "wait_hhmmss": "00:00:01",
                "duration_hhmmss": "00:00:00"
            }
        ]
    }
}
```

## نمونه فراخوانی

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
   className="unique-tabs" 
    defaultValue="PHP"
    values={[
        {label: 'PHP', value: 'PHP'},
        {label: 'JS', value: 'JS'},
		{label: 'Linux', value: 'Linux'},
    ]}>
<TabItem value="PHP">

	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20//api/v4/reports/cdr',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"conditions":{"from": "", "to": "", "cuid":""},
		"date_range":{"from":"2020-06-15 15:16","to":"2022-06-22 15:16"},
		"pagination":{"start":0,"count":20,"sorting":{}},
		"alike":"true"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

	curl_close($curl);
	echo $response;



</TabItem>
<TabItem value="JS">

	<html>
			<head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			</head>
			<body>
				<script>
					var settings = {
					  "url": "http://192.168.51.20//api/v4/reports/cdr",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"conditions": {
						  "from": "",
						  "to": "",
						  "cuid": ""
						},
						"date_range": {
						  "from": "2020-06-15 15:16",
						  "to": "2022-06-22 15:16"
						},
						"pagination": {
						  "start": 0,
						  "count": 20,
						  "sorting": {}
						},
						"alike": "true"
					  }),
					};

					$.ajax(settings).done(function (response) {
					  console.log(response);
					});
				</script>
			</body>
	</html>


</TabItem>
<TabItem value="Linux">

	curl --location --request POST 'http://192.168.51.20//api/v4/reports/cdr' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"conditions":{"from": "", "to": "", "cuid":""},
		"date_range":{"from":"2020-06-15 15:16","to":"2022-06-22 15:16"},
		"pagination":{"start":0,"count":20,"sorting":{}},
		"alike":"true"
	}'
	
</TabItem>
</Tabs>

