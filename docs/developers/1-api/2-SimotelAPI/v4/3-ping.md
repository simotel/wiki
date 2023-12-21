---
sidebar_position: 2
---
# ping (تست ارتباط)

## معرفی
با استفاده از این ای پی آی می‌توانید با یک درخواست ساده و بدون پارامتر ورودی ارتباط نرم افزار خود با سیموتل را تست کنید. 
به این صورت که بک درخواست پینگ به سرور سیموتل ارسال می‌کنید و در صورتی که همه چیز مرتب باشد از سرور پاسخ Success  دریافت خواهید کرد.

## پیاده سازی
### پارامترها
این ای پی آی هیچ پارامتر ورودی ندارد.
### نمونه فراخوانی
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

```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/setting/ping/act',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>{},
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
				  "url": "http://192.168.51.20/api/v4/setting/ping/act",
				  "method": "PUT",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({}),
				};


					$.ajax(settings).always(function (jqXHR) {
						console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);
						console.log("response body: " + jqXHR.responseText);
					});
			</script>
		</body>
	</html>
```

</TabItem>
<TabItem value="Linux">

	curl --location --request PUT 'http://192.168.51.20/api/v4/setting/ping/act' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw ''

</TabItem>
</Tabs>

### نمونه خروجی
```shell
{
"success":1,
"message":"If the 'Ping' event is enabled in the settings menu, you'll receive it when it's sent",
"data":null
}
```

## رخداد Ping
در صورتی که رخداد Ping در تنظیمات سیموتل فعال باشد بعد از فراخوانی ای پی آی پینگ وب هوک Ping فعال می‌شود.

## نمونه کد تست ارتباط سیموتل
آدرس گیتهاب ای پی آی تست

