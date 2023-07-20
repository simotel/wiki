---

---
# Queue Add

از این سرویس برای افزودن صف استفاده می‌شود.

## پارامتر‌ها
|     توضیحات     |                               داده های تعریف شده                               |    داده‌های نمونه   | پارامترهای ضروری[**]/منطقی[*] |          پارامترها          |
|:---------------:|:------------------------------------------------------------------------------:|:------------------:|:----------------------:|:---------------------------:|
|      نام صف     |                                        -                                       |    NasimTelecom    |           **           |             name            |
|     شماره صف    |                                        -                                       |        9009        |           **           |            number           |
|  استراتژی تماس  | Ring All/Least Recent/Fewest Calls/Random/RR Memory/RR Ordered/Linear/W Random |       ringall      |            *           |           strategy          |
|        -        |                                     yes/no                                     |         no         |            *           |          ringinuse          |
|  ضبط‌مکالمات صف  |                                     yes/no                                     |         yes        |            *           |         call_record         |
|        -        |                                     yes/no                                     |         yes        |            *           |       setinterfacevar       |
|        -        |                                     yes/no                                     |         yes        |            *           |           autofill          |
|        -        |                                     yes/no                                     |         yes        |            *           |         setqueuevar         |
|        -        |                                     yes/no                                     |         yes        |            *           |       setqueueentryvar      |
|        -        |                                     yes/no                                     |         no         |            *           |      persistentmembers      |
|        -        |                                     yes/no                                     |         no         |            *           |       shared_lastcall       |
|        -        |                                     yes/no                                     |         no         |            *           |      announce_holdtime      |
|        -        |                                     yes/no                                     |         yes        |            *           |      announce_position      |
|        -        |                                  yes/no/Strict                                 |       strict       |            *           |          joinempty          |
|        -        |                                     yes/no                                     |         yes        |            *           |        leavewhenempty       |
|        -        |                                     yes/no                                     |         no         |            *           |        reportholdtime       |
|        -        |                                        -                                       |          0         |            *           |            maxlen           |
|        -        |                                        -                                       |         120        |            *           |      announce_frequency     |
|        -        |                                        -                                       |         60         |            *           |    min_announce_frequency   |
|        -        |                                        -                                       |         120        |            *           | periodic_announce_frequency |
| موزیک انتظار صف |                                        -                                       |    gole orkideh    |            *           |            music            |
|        -        |                                        -                                       | queue-callswaiting |            *           |      queue_callswaiting     |
|        -        |                                        -                                       |   queue-thankyou   |            *           |        queue_thankyou       |
|        -        |                                        -                                       |   queue-thereare   |            *           |        queue_thereare       |
|        -        |                                        -                                       |  queue-youarenext  |            *           |       queue_youarenext      |
|        -        |                                        -                                       |          5         |            *           |            retry            |
|        -        |                                        -                                       |         60         |            *           |         servicelevel        |
|        -        |                                        -                                       |         30         |            *           |           timeout           |
|        -        |                                        -                                       |         10         |            *           |            weight           |
|        -        |                                        -                                       |          1         |            *           |          wrapuptime         |
|        -        |                                        -                                       |     MixMonitor     |            *           |         monitor_type        |
|        -        |                                        -                                       |         wav        |            *           |        monitor_format       |
|        -        |                                        -                                       |         wav        |            *           |        monitor_format       |
## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": {
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
        "date": "1399-12-11 06:45:51",
        "_id": "603c8d9ffc909f2e766d40d3"
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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/queues/add',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"name":"NasimTelecom",
		"number":"9009",
		"strategy":"ringall",
		"ringinuse":"no",
		"call_record":"yes",
		"setinterfacevar":"yes",
		"autofill":"yes",
		"setqueuevar":"yes",
		"setqueueentryvar":"yes",
		"persistentmembers":"no",
		"shared_lastcall":"no",
		"announce_holdtime":"no",
		"announce_position":"yes",
		"joinempty":"strict",
		"leavewhenempty":"yes",
		"reportholdtime":"no",
		"maxlen":"0",
		"announce_frequency":"120",
		"min_announce_frequency":"60",
		"periodic_announce_frequency":"120",
		"music":"gole orkideh",
		"queue_callswaiting":"queue-callswaiting",
		"queue_thankyou":"queue-thankyou",
		"queue_thereare":"queue-thereare",
		"queue_youarenext":"queue-youarenext",
		"retry":"5",
		"servicelevel":"60",
		"timeout":"30",
		"weight":"10",
		"wrapuptime":"1",
		"monitor_type":"MixMonitor",
		"monitor_format":"wav",
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
					  "url": "http://192.168.51.20/api/v4/pbx/queues/add",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
						"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
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
						  "more_options": ""
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

	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/queues/add' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"name":"NasimTelecom",
		"number":"9009",
		"strategy":"ringall",
		"ringinuse":"no",
		"call_record":"yes",
		"setinterfacevar":"yes",
		"autofill":"yes",
		"setqueuevar":"yes",
		"setqueueentryvar":"yes",
		"persistentmembers":"no",
		"shared_lastcall":"no",
		"announce_holdtime":"no",
		"announce_position":"yes",
		"joinempty":"strict",
		"leavewhenempty":"yes",
		"reportholdtime":"no",
		"maxlen":"0",
		"announce_frequency":"120",
		"min_announce_frequency":"60",
		"periodic_announce_frequency":"120",
		"music":"gole orkideh",
		"queue_callswaiting":"queue-callswaiting",
		"queue_thankyou":"queue-thankyou",
		"queue_thereare":"queue-thereare",
		"queue_youarenext":"queue-youarenext",
		"retry":"5",
		"servicelevel":"60",
		"timeout":"30",
		"weight":"10",
		"wrapuptime":"1",
		"monitor_type":"MixMonitor",
		"monitor_format":"wav",
		"more_options":""
	}'

</TabItem>
</Tabs>

