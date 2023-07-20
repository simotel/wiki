---

---
# Fax Download

از این سرویس برای دانلود فکس دریافتی استفاده می شود.

## پارامتر‌ها
|                توضیحات               | داده های تعریف شده |      داده های نمونه      | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:------------------------------------:|:------------------:|:------------------------:|:-------------:|:---------:|
| شناسه یکتا فکس که از [جستجو](/docs/api/callcenter_api/SimoTelAPI/fax/fax_search) بدست آمده |          -         | 5fe7b083b6e91a5ef2bbf7bb |       **       |    id_    |



## نمونه فراخوانی

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
   className="unique-tabs" 
    defaultValue="PHP"
    values={[
        {label: 'PHP', value: 'PHP'},
		{label: 'Linux', value: 'Linux'},
    ]}>
<TabItem value="PHP">

	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.21/api/v3/pbx/faxes/download',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'GET',
	  CURLOPT_POSTFIELDS =>'{
		"_id":"5fe7b083b6e91a5ef2bbf7bb"
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

<TabItem value="Linux">

	curl --location --request GET 'http://192.168.51.21/api/v3/pbx/faxes/download' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"_id":"5fe7b083b6e91a5ef2bbf7bb"
	}'

</TabItem>
</Tabs>

