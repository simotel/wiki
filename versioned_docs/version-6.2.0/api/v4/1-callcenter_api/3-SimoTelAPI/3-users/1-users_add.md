---
sidebar_position: 1
---
# User Add

از این سرویس برای اضافه کردن داخلی استفاده می‌شود.

## پارامتر‌ها
|       توضیحات       |       داده های تعریف شده       |  داده های نمونه | پارامترهای ضروری[**]/منطقی[*] |          پارامتر ها         |
|:-------------------:|:------------------------------:|:---------------:|:----------------------:|:---------------------------:|
|      نوع کاربر      |            SIP/IAX2            |       SIP       |            *           |          user_type          |
|     وضعیت کاربر     |             yes/no             |       yes       |            *           |            active           |
|      نام کاربر      |                -               |      User2      |            **           |             name            |
|     شماره داخلی     |                -               |       999       |            **           |            number           |
|      cid کاربر      |                -               |       999       |            *           |          cid_number         |
|       رمزعبور       |                -               |       999       |            **           |            secret           |
|   ضبط مکالمات صوتی  |             yes/no             |        no       |            *           |         call_record         |
|          -          |             yes/no             |        no       |            *           |      push_notification      |
| لیست IPهای غیر مجاز |                -               | 0.0.0.0/0.0.0.0 |            *           |             deny            |
|   لیست IPهای مجاز   |                -               | 0.0.0.0/0.0.0.0 |            *           |            permit           |
|    استاندارد dtmf   |                -               |     rfc2833     |            *           |           dtmfmode          |
|          -          |             yes/no             |        no       |            *           |         canreinvite         |
| - |             yes/no             |        no       |            *           |         directmedia         |
|    کانتکست کاربر    |                -               |   main_routing  |            *           |           context           |
|          -          |                -               |     dynamic     |            *           |             host            |
|          -          |                -               |       user      |            *           |             type            |
|          -          | yes/no/Force Report & Co-Media |        no       |            *           |             nat             |
|          -          |                -               |       5060      |            *           |             port            |
|          -          |             yes/no             |        no       |            *           |           qualify           |
|          -          |                -               |        1        |            *           |          callgroup          |
|          -          |                -               |        1        |            *           |         pickupgroup         |
|          -          |             yes/no             |        no       |            *           |         callcounter         |
|          -          |             yes/no             |        no       |            *           |          faxdetect          |
|  تعداد تماس پشت خط  |                -               |        -        |            *           |          call_limit         |
|          -          |             yes/no             |        no       |            *           |            trunk            |
|          -          |             yes/no             |        no       |            *           |           transfer          |
|          -          |                -               |        -        |                        |            email            |
|          -          |                -               |       571       |                        |     forward_policy->Busy    |
|          -          |                -               |   09158315762   |                        |  forward_policy->No Answer  |
|          -          |                -               |       570       |                        | forward_policy->UnAvailable |
|          -          |                -               |       2121      |                        |     forward_policy->All     |


## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": {
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
        "date": "1399-12-10 07:07:48",
        "_id": "603b41443e14270c550bf15a"
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
	CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/users/add',
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => '',
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 0,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => 'POST',
	CURLOPT_POSTFIELDS =>'{
			"user_type":"SIP",
			"active":"yes",
			"name":"User2",
			"number":"99998",
			"cid_number":"999",
			"secret":"999",
			"call_record":"no",
			"push_notification":"no",
			"deny":"0.0.0.0/0.0.0.0",
			"permit":"0.0.0.0/0.0.0.0",
			"dtmfmode":"rfc2833",
			"canreinvite":"no",
			"directmedia":"no",
			"context":"main_routing",
			"host":"dynamic",
			"type":"user",
			"nat":"no",
			"port":"5060",
			"qualify":"no",
			"callgroup":"1",
			"pickupgroup":"1",
			"callcounter":"no",
			"faxdetect":"no",
			"call_limit":"",
			"trunk":"no",
			"transfer":"no",
			"email":"",
			"forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},
			"more_options":""
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
	  "url": "http://192.168.51.20/api/v4/.*pbx/users/add",
	  "method": "POST",
	  "timeout": 0,
	  "headers": {
		"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
		"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
		"Content-Type": "application/json"
	  },
	  "data": JSON.stringify(
			{
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
			   "more_options": ""
			}
	  ),

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

	curl --location --request POST 'http://192.168.51.20/api/v4/.*pbx/users/add' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
	"user_type":"SIP",
	"active":"yes",
	"name":"User2",
	"number":"999",
	"cid_number":"999",
	"secret":"999",
	"call_record":"no",
	"push_notification":"no",
	"deny":"0.0.0.0/0.0.0.0",
	"permit":"0.0.0.0/0.0.0.0",
	"dtmfmode":"rfc2833",
	"canreinvite":"no",
	"directmedia":"no",
	"context":"main_routing",
	"host":"dynamic",
	"type":"user",
	"nat":"no",
	"port":"5060",
	"qualify":"no",
	"callgroup":"1",
	"pickupgroup":"1",
	"callcounter":"no",
	"faxdetect":"no",
	"call_limit":"",
	"trunk":"no",
	"transfer":"no",
	"email":"",
	"forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},
	"more_options":""
	}'

</TabItem>
</Tabs>

