---

---
# WhiteList Add

از این سرویس برای افزودن شماره به لیست‌سفید استفاده می‌شود.

## پارامتر‌ها
|   توضیحات   | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:-----------:|:------------------:|:--------------:|:----------------------:|:---------:|
| شماره مدنظر |          -         |       557      |           **           |   number  |
|      -      |          -         |      test      |            *           |   labels  |
|   توضیحات   |          -         |        -       |                        |  comment  |
## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": [
        {
            "_id": "5fbceeb4132b8926cc3328a7",
            "number": "091515154",
            "labels": [
                "modiran"
            ],
            "comment": "",
            "date": "1399-09-04 14:59:56"
        },
        {
            "_id": "5fc4935ca359cd36256dd5c6",
            "number": "093645978141",
            "labels": [],
            "comment": "vip",
            "date": "1399-09-10 10:08:20"
        },
        {
            "_id": "5ffd966d25dca3214c749793",
            "number": "09123123123",
            "labels": [
                "modiran"
            ],
            "comment": "",
            "date": "1399-10-23 16:00:37"
        },
        {
            "_id": "603f7f79fcff3269187a3dd6",
            "number": "557",
            "labels": [
                "test"
            ],
            "comment": "",
            "date": "1399-12-13 15:52:17"
        }
    ]
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/whitelists/add',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"number":"557",
		"labels":["test"],
		"comment":""
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',
		'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',
		'Content-Type: application/json'
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
				  "url": "http://192.168.51.20/api/v4/pbx/whitelists/add",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "number":"557",
					  "labels":["test"]
					  ,"comment":""

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

	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/whitelists/add' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"number":"557",
		"labels":["test"],
		"comment":""
	}'
</TabItem>
</Tabs>

