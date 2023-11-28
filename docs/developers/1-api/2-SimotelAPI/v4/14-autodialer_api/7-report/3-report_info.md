---

---
# Report Info

این سرویس در بازیابی جزئیات مربوط به گزارشات تماس‌انبوه کاربرد دارد.

## پارامتر‌ها
|                   توضیحات                  | داده های تعریف شده |       داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:------------------------------------------:|:------------------:|:-------------------------:|:----------------------:|:---------:|
| شناسه یکتای cdr_id که از [جستجو](/docs/developers/api/SimotelAPI/v4/autodialer_api/report/report_search) بدست می‌آید |     true/false     | 602e50ce305bdd377168a8c16 |           **           |    _id    |

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": {
        "dcontext": "poll07",
        "amaflags": "DOCUMENTATION",
        "channel": "SIP/dahdi-00000be0",
        "duration": 2,
        "wait": 0
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
	  CURLOPT_URL => 'http://192.168.51.20//api/v3/autodialer/reports/info',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'GET',
	  CURLOPT_POSTFIELDS =>'{
		"_id":"602e50ce305bdd377168a8c1"
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
				  "url": "http://192.168.51.20//api/v3/autodialer/reports/info",
				  "method": "GET",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					"_id": "602e50ce305bdd377168a8c1"
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

	curl --location --request GET 'http://192.168.51.20//api/v3/autodialer/reports/info' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"602e50ce305bdd377168a8c1"
	}'
	
</TabItem>
</Tabs>

