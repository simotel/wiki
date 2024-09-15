---

---
# Batch Resume Agent

این سرویس برای خروج اپراتورها به صورت دسته‌ای از حالت استراحت در صف استفاده می‌شود.

## پارامتر‌ها
|    توضیحات   | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:------------:|:------------------:|:--------------:|:----------------------:|:---------:|
|    شماره‌صف   |          -         |       10000      |           **           |   queue   |
| شماره‌اپراتور |          -         |       570      |           **           |   agent   |


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

```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/queues/batchresumeagent',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"agents":[
			{"queue": "10000", "agent": "570"},
			{"queue": "10000", "agent": "553"}
		]
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2Fkcjo=',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

	curl_close($curl);
	echo $response;
?>
```


</TabItem>
<TabItem value="JS">

```js
	<html>
			<head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			</head>
		<body>
				<script>
					var settings = {
					  "url": "http://192.168.51.20/api/v4/pbx/queues/batchresumeagent",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2Fkcjo=",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"agents": [
						  {
							"queue": "10000",
							"agent": "570"
						  },
						  {
							"queue": "10000",
							"agent": "553"
						  }
						]
					  }),
					};

					$.ajax(settings).done(function (response) {
					  console.log(response);
					});
				</script>
		</body>
	</html>
```

</TabItem>
<TabItem value="Linux">

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/queues/batchresumeagent' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2Fkcjo=' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"agents":[
			{"queue": "10000", "agent": "570"},
			{"queue": "10000", "agent": "553"}
		]
	}'
	```
</TabItem>
</Tabs>


## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "",
    "data": {
        "Data": [
            {
                "agent": "570",
                "message": "UnPaused successfully",
                "ok": 1,
                "queue": "10000"
            },
            {
                "agent": "553",
                "message": "UnPaused successfully",
                "ok": 1,
                "queue": "10000"
            }
        ],
        "ok": 1
    }
}
```

