---
sidebar_position: 1
---
# User Search

از این سرویس برای جستجوی داخلی استفاده می‌شود.

## پارامتر‌ها
|                        توضیحات                       | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:----------------------------------------------------:|:------------------:|:--------------:|:----------------------:|:---------:|
| جستجو بر روی تمامی داخلی‌ها یا آن‌هایی که نگاشت شده‌اند |     all/mapped     |       all      |            *           |   status  |
|                   یافتن موارد مشابه                  |          -         |        1       |           **           |   alike   |
|                       نام داخلی                      |          -         |        -       |                        |    name   |
|                      شماره داخلی                     |          -         |       999      |                        |   number  |
|                شماره اپراتور نگاشت شده               |          -         |        -       |                        |   mapped  |


## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "",
    "data": [
        {
            "_id": "603b41443e14270c550bf15a",
            "user_type": "SIP",
            "active": "yes",
            "name": "User2",
            "number": "999",
            "cid_number": "999",
            "secret": "999",
            "call_record": "no",
            "push_notification": "no",
            "deny": "0.0.0.0/0.0.0.0",
            "permit": "0.0.0.0/0.0.0.0",
            "dtmfmode": "rfc2833",
            "canreinvite": "no",
            "directmedia": "no",
            "context": "main_routing",
            "host": "dynamic",
            "type": "user",
            "nat": "no",
            "port": "5060",
            "qualify": "no",
            "callgroup": "1",
            "pickupgroup": "1",
            "callcounter": "no",
            "faxdetect": "no",
            "call_limit": "",
            "trunk": "no",
            "transfer": "no",
            "email": "",
            "forward_policy": {
                "Busy": "571",
                "No Answer": "09158315762",
                "UnAvailable": "570",
                "All": "2121"
            },
            "more_options": "",
            "date": "1399-12-10 10:37:48"
        }
    ]
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
	CURLOPT_URL => 'http://192.168.51.20/api/v3/pbx/users',
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => '',
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 0,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => 'GET',
	CURLOPT_POSTFIELDS =>'{
			"status":"all",
			"alike":true,
			"conditions":{"name": "", "number": "999", "mapped": ""}
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
				"url": "http://192.168.51.20/api/v3/pbx/users",
				"method": "GET",
			"timeout": 0,
			"headers": {
				"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
				"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
				"Content-Type": "application/json"
			},
			"data": JSON.stringify({
				"status": "all",
				"alike": true,
				"conditions": {
					"name": "",
					"number": "999",
					"mapped": ""
				}
				}),
			};

			$.ajax(settings).done(function (response) {
			console.log(response);
				});
				$.ajax(settings).always(function (jqXHR) {
					console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);
					console.log("response body: " + jqXHR.responseText);
				});
			</script>
		</body>
	</html>
	

</TabItem>
<TabItem value="Linux">

	curl --location --request GET 'http://192.168.51.20/api/v3/pbx/users' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"status":"all",
		"alike":true,
		"conditions":{"name": "", "number": "999", "mapped": ""}
	}'

</TabItem>
</Tabs>

