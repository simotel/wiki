---

---
# Fax Search

از این سرویس برای جستجو در فکس‌های  استفاده می شود.

## پارامتر‌ها
|      توضیحات      | داده های تعریف شده |  داده های نمونه  | پارامترهای ضروری[**]/منطقی[*] |       پارامترها      |
|:-----------------:|:------------------:|:----------------:|:----------------------:|:--------------------:|
| یافتن موارد مشابه |     true/false     |       true       |           **           |         alike        |
|         -         |          -         |         0        |                        |  pagination-->start  |
|         -         |          -         |        20        |                        |  pagination-->count  |
|         -         |          -         |         -        |                        | pagination-->sorting |
|         -         |          -         | 2020-12-25 13:47 |                        |   date_range-->from  |
|         -         |          -         | 2020-12-27 13:47 |                        |    date_range-->to   |
|         -         |          -         |         -        |                        |   conditions-->src   |
|         -         |          -         |         -        |                        |   conditions-->dst   |
|         -         |          -         |         -        |                        |  conditions-->status |
|         -         |          -         |         -        |                        |   conditions-->type  |


## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "",
    "data": {
        "pagination": {
            "start": 0,
            "count": 20,
            "sorting": {
                "date": -1
            },
            "total": 1
        },
        "data": [
            {
                "_id": "5fe7b083b6e91a5ef2bbf7bb",
                "description": "",
                "trunk": "g0",
                "file": "sen_file-20201226215201-25194-1609019517pdf_.tiff",
                "type": "outbox",
                "channel": "DAHDI/g0/02188808276",
                "date": "1399-10-07 01:22:03",
                "src": "05131041051",
                "dst": "02188808276",
                "status": ""
            }
        ]
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
		{label: 'Linux', value: 'Linux'},
    ]}>
<TabItem value="PHP">

	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.21/api/v3/pbx/faxes',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'GET',
	  CURLOPT_POSTFIELDS =>'{
		"alike":"true",
		"pagination":{
			"start":0,
			"count":20,
			"sorting":{}
		},
		"date_range":{
			"from":"2020-12-25 13:47",
			"to":"2020-12-27 13:47"
		},
		"conditions":{
			"src":"",
			"dst":"",
			"status":"",
			"type":""
		}
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

	curl --location --request GET 'http://192.168.51.21/api/v3/pbx/faxes' \
	--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \
	--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"alike":"true",
		"pagination":{
			"start":0,
			"count":20,
			"sorting":{}
		},
		"date_range":{
			"from":"2020-12-25 13:47",
			"to":"2020-12-27 13:47"
		},
		"conditions":{
			"src":"",
			"dst":"",
			"status":"",
			"type":""
		}
	}'
</TabItem>
</Tabs>

