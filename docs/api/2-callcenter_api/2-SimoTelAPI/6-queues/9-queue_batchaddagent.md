---

---
# Batch Add Agent

از این سرویس برای افزودن دسته‌ای اپراتورها به صف استفاده می‌شود.

## پارامتر‌ها
|    توضیحات    | داده های تعریف شده | داده های نمونه | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:-------------:|:------------------:|:--------------:|:----------------------:|:---------:|
|    شماره صف   |          -         |       999      |           **           |   queue   |
|  شماره داخلی  |          -         |       570      |           **           |   source  |
| شماره اپراتور |          -         |       570      |           **           |   agent   |
|  اولویت در صف |          -         |        1       |                        |  penalty  |

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "",
    "data": {
        "Data": [
            {
                "agent": "570",
                "message": "Added successfully",
                "ok": 1,
                "penalty": "",
                "queue": "10000",
                "source": "570"
            },
            {
                "agent": "553",
                "message": "Added successfully",
                "ok": 1,
                "penalty": "",
                "queue": "10000",
                "source": "553"
            }
        ],
        "ok": 1
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
	  CURLOPT_URL => 'http://192.168.51.20//api/v3/pbx/queues/batchaddagent',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'PUT',
	  CURLOPT_POSTFIELDS =>'{
		"agents":[
			{"queue": "10000", "source": "570", "agent": "570", "penalty": ""},
			{"queue": "10000", "source": "553", "agent": "553", "penalty": ""}
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



</TabItem>
<TabItem value="JS">

	<html>
		<head>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		</head>
		<body>
				<script>
					var settings = {
					  "url": "http://192.168.51.20//api/v3/pbx/queues/batchaddagent",
					  "method": "PUT",
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
							"source": "570",
							"agent": "570",
							"penalty": ""
						  },
						  {
							"queue": "10000",
							"source": "553",
							"agent": "553",
							"penalty": ""
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
	

</TabItem>
<TabItem value="Linux">

	curl --location --request PUT 'http://192.168.51.20//api/v3/pbx/queues/batchaddagent' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2Fkcjo=' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"agents":[
			{"queue": "10000", "source": "570", "agent": "570", "penalty": ""},
			{"queue": "10000", "source": "553", "agent": "553", "penalty": ""}
		]
	}'
</TabItem>
</Tabs>

