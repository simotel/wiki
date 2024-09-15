
# Fax Add

از این سرویس برای افزودن فکس ارسالی استفاده می‌شود.

:::tip نکته
برای ارسال فکس به صورت فایل فیلد "file" باید مقدار داشته باشد و فیلد "text" از JSON ورودی حذف شود. 
:::
## پارامتر‌ها
|                          توضیحات                         | داده های تعریف شده |           داده های نمونه           | پارامترهای ضروری[**]/منطقی[*] |  پارامتر ها |
|:--------------------------------------------------------:|:------------------:|:----------------------------------:|:----------------------:|:-----------:|
|                  شناسه یکتای ارسال کننده                 |          -         |              username1              |            *           |  sender_id  |
|                        شماره مقصد                        |          -         |               112233               |            *           |      to     |
|                        داخلی مقصد                        |          -         |                 558                |            *           |     ext     |
|                        ترانک خروجی                       |          -         |             trunk_name1            |            *           |  trunk_name |
| نام فایل آپلود شده که در جواب [fax upload](/docs/developers/api/SimotelAPI/v4/fax/fax_upload) برگردانده می‌شود(در صورتی که فیلد file مقدار دارد فیلد text حذف شود) |          -         | file-20200624051520-61681-fax-test |            *           |     file    |
|                   برای ارسال فایل متنی                   |          -         |           this is sample           |                       |     text    |
|                          توضیحات                         |          -         |            just for test           |                        | description |



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

```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/faxes/add',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"sender_id":"username1",
		"to":"112233",
		"ext":"558",
		"trunk_name":"Cisco",
		"file":"file-20200624051520-61681-fax-test",
		"description":"Just for test"
	}',
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw==',
		'Content-Type: application/json'
	  ),
	));

	$response = curl_exec($curl);

	curl_close($curl);
	echo $response;
?>
```


</TabItem>

<TabItem value="Linux">

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/pbx/faxes/add' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"sender_id":"username1",
		"to":"112233",
		"ext":"558",
		"trunk_name":"Cisco",
		"file":"file-20200624051520-61681-fax-test",
		"description":"Just for test"
	}'
```
</TabItem>
</Tabs>

## نمونه خروجی درخواست

```shell
{
    "success": 1,
    "message": "Requested operation is done successfully",
    "data": {
        "_id": "64b800977ec8cb8899ee28a2"
    }
}
```