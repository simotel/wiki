---

---
# Campaign Add

از این سرویس برای افزودن کمپین استفاده می‌شود.

## پارامتر‌ها
|                   توضیحات                  | داده های تعریف شده |                     داده های نمونه                    | پارامترهای ضروری[**]/منطقی[*] |     پارامترها     |
|:------------------------------------------:|:------------------:|:-----------------------------------------------------:|:-----------------------------:|:-----------------:|
|                  نام کمپین                 |          -         |                          test                         |               **              |        name       |
|   شناسه‌یکتا ترانک که از جستجو بدست می‌آید   |          -         |                5f6c5b56c92de0068f32e592               |               **              |  trunk_manager_id |
| مقدار context در کامپوننت autodialer route |          -         |                          auto                         |                               | interface_context |
|   مقدار text در کامپوننت autodialer route  |          -         |                         text1                         |                               |   interface_text  |
|                شماره مخاطبین               |          -         |                      09212396500                      |               *               |      numbers      |
|    شناسه‌یکتا گروه که از جستجو بدست می‌آید   |          -         | "5e96c8c2c92de0468920657e" "5e96d40cc92de025690d0a61" |               *               |       groups      |
|           فاصله زمانی بین هر تلاش          |          -         |                          600                          |               *               |    try_interval   |
|                 تعداد تکرار                |          -         |                           1                           |               *               |        try        |
|               زمان شروع کمپین              |          -         |                    2021-02-19 15:17                   |               *               |       start       |
|              زمان پایان کمپین              |          -         |                    2021-02-23 15:17                   |               *               |        end        |
|  شناسه‌یکتا فایل‌صوتی که از جستجو بدست می‌آید |          -         |                5e5b629ec92de075df7af457               |               *               |    announcement   |
|                   توضیحات                  |          -         |                           -                           |                               |    description    |
## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": {
        "name": "test",
        "trunk_manager_id": {
            "$oid": "5f6c5b56c92de0068f32e592"
        },
        "interface_context": "auto",
        "interface_text": "text1",
        "numbers": [
            "09212396500"
        ],
        "groups": [
            "5e96c8c2c92de0468920657e",
            "5e96d40cc92de025690d0a61"
        ],
        "try_interval": "600",
        "try": "1",
        "start": {
            "$date": {
                "$numberLong": "1613735220000"
            }
        },
        "end": {
            "$date": {
                "$numberLong": "1614080820000"
            }
        },
        "announcement": "5e5b629ec92de075df7af457",
        "description": "",
        "count": 1,
        "repeat": 1,
        "date": "1399-12-18 14:01:49",
        "status": "waiting",
        "isoStart": {
            "$date": {
                "$numberLong": "1613735220000"
            }
        },
        "isoEnd": {
            "$date": {
                "$numberLong": "1614080820000"
            }
        }
    }
}
```


## نمونه فراخوانی

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
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
	  CURLOPT_URL => "http://192.168.51.21//api/v4/autodialer/campaigns/add",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"name\":\"test\",\r\n    \"trunk_manager_id\":\"5f6c5b56c92de0068f32e592\",\r\n    \"interface_context\":\"auto\",\r\n    \"interface_text\":\"text1\",\r\n    \"numbers\":[\"09212396500\"],\r\n    \"groups\":[\"5e96c8c2c92de0468920657e\",\"5e96d40cc92de025690d0a61\"],\r\n    \"try_interval\":\"600\",\r\n    \"try\":\"1\",\r\n    \"start\":\"2021-02-19 15:17\",\r\n    \"end\":\"2021-02-23 15:17\",\r\n    \"announcement\":\"5e5b629ec92de075df7af457\",\r\n    \"description\":\"\",\r\n    \"count\":3\r\n}",
	  CURLOPT_HTTPHEADER => array(
		"X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
		"Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",
		"Content-Type: application/json"
	  ),
	));

	$response = curl_exec($curl);

		if (!curl_errno($curl)) {
		$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		echo 'response code:'.$httpcode, '<br/>';
	}

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
				  "url": "http://192.168.51.21//api/v4/autodialer/campaigns/add",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "name": "test",
					  "trunk_manager_id": "5f6c5b56c92de0068f32e592",
					  "interface_context": "auto",
					  "interface_text": "text1",
					  "numbers": [
						"09212396500"
					  ],
					  "groups": [
						"5e96c8c2c92de0468920657e",
						"5e96d40cc92de025690d0a61"
					  ],
					  "try_interval": "600",
					  "try": "1",
					  "start": "2021-02-19 15:17",
					  "end": "2021-02-23 15:17",
					  "announcement": "5e5b629ec92de075df7af457",
					  "description": "",
					  "count": 3
					}),
				};


					$.ajax(settings).always(function (jqXHR) {
						console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);
						console.log("response body: " + jqXHR.responseText);
					});
			</script>
		</body>
	</html>
	

</TabItem>
<TabItem value="Linux">

	curl --location --request POST 'http://192.168.51.21//api/v4/autodialer/campaigns/add' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"name":"test",
		"trunk_manager_id":"5f6c5b56c92de0068f32e592",
		"interface_context":"auto",
		"interface_text":"text1",
		"numbers":["09212396500"],
		"groups":["5e96c8c2c92de0468920657e","5e96d40cc92de025690d0a61"],
		"try_interval":"600",
		"try":"1",
		"start":"2021-02-19 15:17",
		"end":"2021-02-23 15:17",
		"announcement":"5e5b629ec92de075df7af457",
		"description":"",
		"count":3
	}'
	
</TabItem>
</Tabs>

