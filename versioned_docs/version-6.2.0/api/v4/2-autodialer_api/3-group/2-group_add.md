---

---
# Group Add

از این سرویس برای افزودن گروهی شماره‌ها استفاده می‌شود.

## پارامتر‌ها
|  توضیحات | داده های تعریف شده |     داده های نمونه     | پارامترهای ضروری[**]/منطقی[*] |  پارامترها  |
|:--------:|:------------------:|:----------------------:|:----------------------:|:-----------:|
| نام گروه |          -         |       test_group       |           **           |     name    |
|  شماره‌ها |          -         | "1111", "2222", "3333" |            *           |   numbers   |
|  توضیحات |          -         |      just for test     |                        | description |

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": {
        "name": "test_group",
        "numbers": [
            "1111",
            "2222",
            "3333"
        ],
        "description": "just for test",
        "count": 3,
        "date": "1399-12-18 16:58:50",
        "_id": "60462692095d840c2e47709f"
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
	  CURLOPT_URL => "http://192.168.51.21//api/v4/autodialer/groups/add",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"name\":\"test_group\",\r\n    \"numbers\":[\"1111\", \"2222\", \"3333\"],\r\n    \"description\":\"just for test\"\r\n}",
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
				  "url": "http://192.168.51.21//api/v4/autodialer/groups/add",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "name": "test_group",
					  "numbers": [
						"1111",
						"2222",
						"3333"
					  ],
					  "description": "just for test"
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

	curl --location --request POST 'http://192.168.51.21//api/v4/autodialer/groups/add' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"name":"test_group",
		"numbers":["1111", "2222", "3333"],
		"description":"just for test"
	}'
	
</TabItem>
</Tabs>

