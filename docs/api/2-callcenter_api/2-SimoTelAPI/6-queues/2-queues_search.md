---

---
# Queue Search

این سرویس برای جستجوی صف‌ها استفاده می‌شود.

## پارامتر‌ها
|       توضیحات       | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] |      پارامترها     |
|:-------------------:|:------------------:|:--------------:|:----------------------:|:------------------:|
| نمایش داده‌های مشابه |     true/false     |      true      |           **           |        alike       |
|        نام صف       |          -         |        -       |                        |  conditions->name  |
|       شماره صف      |          -         |      9009      |                        | conditions->number |


## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "",
    "data": [
        {
            "_id": "603c8d9ffc909f2e766d40d3",
            "name": "NasimTelecom",
            "number": "9009",
            "strategy": "ringall",
            "ringinuse": "no",
            "call_record": "yes",
            "setinterfacevar": "yes",
            "autofill": "yes",
            "setqueuevar": "yes",
            "setqueueentryvar": "yes",
            "persistentmembers": "no",
            "shared_lastcall": "no",
            "announce_holdtime": "no",
            "announce_position": "yes",
            "joinempty": "strict",
            "leavewhenempty": "yes",
            "reportholdtime": "no",
            "maxlen": "0",
            "announce_frequency": "120",
            "min_announce_frequency": "60",
            "periodic_announce_frequency": "120",
            "music": "gole orkideh",
            "queue_callswaiting": "queue-callswaiting",
            "queue_thankyou": "queue-thankyou",
            "queue_thereare": "queue-thereare",
            "queue_youarenext": "queue-youarenext",
            "retry": "5",
            "servicelevel": "60",
            "timeout": "30",
            "weight": "10",
            "wrapuptime": "1",
            "monitor_type": "MixMonitor",
            "monitor_format": "wav",
            "more_options": "",
            "date": "1399-12-11 10:15:51"
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v3/pbx/queues',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'GET',
	  CURLOPT_POSTFIELDS =>'{
		"alike":"true",
		"conditions":{
			"name":"",
			"number":"9009"
		}
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
				  "url": "http://192.168.51.20/api/v3/pbx/queues",
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
						"name": "",
						"number": "9009"
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

	curl --location --request GET 'http://192.168.51.20/api/v3/pbx/queues' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"conditions":{
			"name":"",
			"number":"9009"
		}
	}'

</TabItem>
</Tabs>

