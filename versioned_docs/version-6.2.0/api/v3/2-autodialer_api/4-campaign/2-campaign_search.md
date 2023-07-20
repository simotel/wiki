---
---
# Campaign Search

از این سرویس برای جستجو کمپین استفاده می‌شود.

## پارامتر‌ها
|      توضیحات      | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] |        پارامترها        |
|:-----------------:|:------------------:|:--------------:|:----------------------:|:-----------------------:|
| یاقتن موارد مشابه |       yes/no       |      true      |           **           |          alike          |
|     نام کمپین     |          -         |        -       |                        |     conditions->name    |
|      توضیحات      |          -         |        -       |                        | conditions->description |
|         -         |          -         |        -       |                        |    conditions->status   |
|         -         |          -         |       20       |                        |    pagination->start    |
|         -         |          -         |        0       |                        |    pagination->count    |
|         -         |          -         |       {}       |                        |   pagination->sorting   |
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
                "date": -1
            },
            "total": 1
        },
        "data": [
            {
                "_id": "6045fd15095d840c2d29ae80",
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
                "start": "1399-12-01 15:17:00",
                "end": "1399-12-05 15:17:00",
                "announcement": "5e5b629ec92de075df7af457",
                "description": "",
                "count": 1,
                "repeat": 1,
                "date": "1399-12-18 14:01:49",
                "status": "running",
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
        ]
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
	  CURLOPT_URL => "http://192.168.51.21//api/v3/autodialer/campaigns",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "GET",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"alike\":\"true\",\r\n    \"conditions\":{\"name\":\"test\",\"description\":\"\",\"status\":\"\"},\r\n    \"pagination\":{\"start\":0,\"count\":20,\"sorting\":{}}\r\n}",
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
				  "url": "http://192.168.51.21//api/v3/autodialer/campaigns",
				  "method": "GET",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "alike": "true",
					  "conditions": {
						"name": "test",
						"description": "",
						"status": ""
					  },
					  "pagination": {
						"start": 0,
						"count": 20,
						"sorting": {}
					  }
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

	curl --location --request GET 'http://192.168.51.21//api/v3/autodialer/campaigns' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"conditions":{"name":"test","description":"","status":""},
		"pagination":{"start":0,"count":20,"sorting":{}}
	}'
	
</TabItem>
</Tabs>

