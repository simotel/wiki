---

---
# Announce Edit

از این سرویس برای ویرایش آوای بخش تماس انبوه استفاده می‌شود.

## پارامتر‌ها
|                توضیحات               | داده های تعریف شده |                   داده های نمونه                   | پارامترهای ضروری[**]/منطقی[*] |  پارامترها  |
|:------------------------------------:|:------------------:|:--------------------------------------------------:|:----------------------:|:-----------:|
| شناسه‌یکتا آوا که از [جستجو](/docs/developers/api/SimotelAPI/v4/autodialer_api/announcement/announcement_search) بدست می‌آید |          -         |              6033876dc92de036d1390923              |           **           |     id_     |
|                نام آوا               |          -         |                   test_sound_new                   |            *           |     name    |
|               نام فایل               |          -         | file-20200825065434-58826-bbc-farsi-pargarmp3_.wav |            *           |   filename  |
|                توضیحات               |          -         |                    Just for test                   |            -           | description |

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": "",
    "old": null
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

	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => "http://192.168.51.21//api/v3/autodialer/announcements",
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => "PUT",
	  CURLOPT_POSTFIELDS =>"{\r\n    \"_id\":\"6033876dc92de036d1390923\",\r\n    \"name\":\"test_sound_new\",\r\n    \"filename\":\"file-20200825065434-58826-bbc-farsi-pargarmp3_.wav\",\r\n    \"description\":\"Just for test\"\r\n}",
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
				  "url": "http://192.168.51.21//api/v3/autodialer/announcements",
				  "method": "PUT",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
					"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
					"Content-Type": "application/json"
				  },
				  "data": JSON.stringify({
					  "_id": "6033876dc92de036d1390923",
					  "name": "test_sound_new",
					  "filename": "file-20200825065434-58826-bbc-farsi-pargarmp3_.wav",
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

	curl --location --request PUT 'http://192.168.51.21//api/v3/autodialer/announcements' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"6033876dc92de036d1390923",
		"name":"test_sound_new",
		"filename":"file-20200825065434-58826-bbc-farsi-pargarmp3_.wav",
		"description":"Just for test"
	}'
	
</TabItem>
</Tabs>

