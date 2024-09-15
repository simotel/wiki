---

---
# Announce Upload

از این سرویس برای بارگذاری فایل صوتی در مرکز‌تماس استفاده می‌شود. پس از بارگذاری مرکزتماس در پاسخ `filename` را سمت وب‌سرویس برمی‌گرداند، از آن در API افزودن فایل‌صوتی استفاده می‌کنید.

## پارامتر‌ها
|     توضیحات    | داده های تعریف شده |         داده های نمونه         | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:--------------:|:------------------:|:------------------------------:|:----------------------:|:---------:|
| مسیر فایل صوتی |          -         | c:users\users\Desktop\file.mp3 |           **           |    file   |



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
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/announcements/upload',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS => array('file'=> new CURLFILE('/path/to/file')),
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw=='
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
				var form = new FormData();
				form.append("file", fileInput.files[0], "/path/to/file");

				var settings = {
				  "url": "http://192.168.51.20/api/v4/pbx/announcements/upload",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw=="
				  },
				  "processData": false,
				  "mimeType": "multipart/form-data",
				  "contentType": false,
				  "data": form
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
	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/announcements/upload' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--form 'file=@"/path/to/file"'
```
</TabItem>
</Tabs>

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "1 file(s) uploaded successfully",
    "data": {
        "filename": "file-20230719143541-90036-announcemp3_.wav"
    }
}
```