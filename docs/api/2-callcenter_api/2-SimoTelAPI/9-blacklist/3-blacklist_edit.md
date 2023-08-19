---

---
# BlackList Edit

از این سرویس برای ویرایش لیست سیاه استفاده می‌شود.

## پارامتر‌ها
|              توضیحات              | داده های تعریف شده |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:---------------------------------:|:------------------:|:------------------------:|:----------------------:|:---------:|
| شناسه یکتا که از [جستجو](/docs/api/callcenter_api/SimoTelAPI/blacklist/blacklist_search) بدست می‌آید |          -         | 6033876dc92de036d1390923 |           **           |    id_    |
|            شماره مدنظر            |          -         |            999           |            *           |   number  |
|              توضیحات              |          -         |             -            |                        |  comment  |

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
	  CURLOPT_URL => 'http://192.168.51.20/api/v3/pbx/blacklists',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'PUT',
	  CURLOPT_POSTFIELDS =>'{
		"_id":"6033876dc92de036d1390923",
		"number":"999",
		"comment":""
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
					  "url": "http://192.168.51.20/api/v3/pbx/blacklists",
					  "method": "PUT",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",
						"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify(
						  {"_id":"6033876dc92de036d1390923"
						  ,"number":"999"
						  ,"comment":""
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

	curl --location --request PUT 'http://192.168.51.20/api/v3/pbx/blacklists' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"6033876dc92de036d1390923",
		"number":"999",
		"comment":""
	}'	
</TabItem>
</Tabs>

