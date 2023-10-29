---

---
# Contact Update

از این سرویس برای ویرایش مخاطبین استفاده می‌شود.

## پارامتر‌ها
|              توضیحات             | داده های تعریف شده |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] |  پارامترها  |
|:--------------------------------:|:------------------:|:------------------------:|:----------------------:|:-----------:|
| شناسه‌یکتا که از [جستجو](/docs/api/v4/autodialer_api/contact/contact_search) بدست می‌آید |          -         | 60461561095d840c2e477098 |           **           |     id_     |
|             نام مخاطب            |          -         |     test_contact_new     |                        |     name    |
|            شماره مخاطب           |          -         |           11223          |                        |    number   |
|              توضیحات             |          -         |       Just for test      |                        | description |


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
	  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/contacts/update",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"_id\":\"60461561095d840c2e477098\",\r\n    \"name\":\"test_contact_new\",\r\n    \"number\":\"11223\",\r\n    \"description\":\"Just for test\"\r\n}",
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
				  "url": "http://192.168.51.21/api/v4/autodialer/contacts/update",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "_id": "60461561095d840c2e477098",
					  "name": "test_contact_new",
					  "number": "11223",
					  "description": "Just for test"
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

	curl --location --request POST 'http://192.168.51.21/api/v4/autodialer/contacts/update' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"60461561095d840c2e477098",
		"name":"test_contact_new",
		"number":"11223",
		"description":"Just for test"
	}'
		
</TabItem>
</Tabs>

## نمونه خروجی درخواست

```shell
{
    {
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": ""
}
}
```