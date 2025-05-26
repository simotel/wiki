---

---
# Quick Info

:::caution
**Warning**  
Using this service to retrieve contact information is not recommended. Please use Quick Search instead.
:::

This API is used to retrieve additional details in the **Detail** section if available in a report.

**Note**: This service is only applicable for calls that have entered the queue, and should not be used for retrieving contact information in other cases.

## Parameters
<div class="custom-table">
| Description | Defined Data | Sample Data | Required[**]/Logical[*] | Parameters |
|:-----------:|:------------:|:-----------:|:------------------------:|:----------:|
| Unique ID obtained from [Quick Search](/developers/SimotelAPI/v4/report/quick_search) | - | 16244299033.75565 | ** | cuid |
</div>


## Sample Invocation

<!--  -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
     {label: 'Example Code To Use', value: 'usageCode'},
     {label: 'Example Output', value: 'outputCode'},
    ]}>

    <!-- تب نمونه کد استفاده -->
    <TabItem value="usageCode">
      <Tabs
        defaultValue="PHP"
        values={[
          {label: 'PHP', value: 'PHP'},
          {label: 'JS', value: 'JS'},
          {label: 'Curl', value: 'Curl'},
        ]}>

        <!-- کد PHP -->
        <TabItem value="PHP">
      
          <details>
            <summary>Show Full Source Code PHP</summary>
            <br/>

```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/reports/quick/info',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS =>'{
		"cuid":"1624299033.75565"
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

          </details>
        </TabItem>

        <!-- کد JS -->
        <TabItem value="JS">
          <details>
            <summary>Show Full Source Code JS</summary>
            <br/>

```js
	<html>
			<head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			</head>
			<body>
				<script>
					var settings = {
					  "url": "http://192.168.51.20/api/v4/reports/quick/info",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
						"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
						"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",
						"Content-Type": "application/json"
					  },
					  "data": JSON.stringify({
						"cuid": "1624299033.75565"
					  }),
					};

					$.ajax(settings).done(function (response) {
					  console.log(response);
					});
				</script>
			</body>
	</html>
```

          </details>
        </TabItem>

        <TabItem value="Curl">
          <details>
            <summary>Show Full Source Code Curl</summary>
            <br/>


```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/reports/quick/info' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"cuid":"1624299033.75565"
	}'
	```

          </details>
        </TabItem>

      </Tabs>
    </TabItem>

    <TabItem value="outputCode">

```shell
{
    "success": 1,
    "message": "",
    "data": [
        {
            "_id": "60d0d647895b44fe5bbc6671",
            "type": "queue_report",
            "cuid": "1624299033.75565",
            "clid": "\"09129285259\" <09129285259>",
            "src": "09129285259",
            "dst": "564",
            "dcontext": "simotel-local-agents",
            "channel": "Local/564@simotel-local-agents-00000ba7;2",
            "dstchannel": "SIP/564-00009bf3",
            "lastapp": "Dial",
            "lastdata": "SIP/564,15,TtKkm",
            "start": "1400-03-31 22:41:04",
            "answer": "",
            "duration": 15,
            "billsec": 0,
            "disposition": "NO ANSWER",
            "amaflags": "DOCUMENTATION",
            "accountcode": "",
            "uniqueid": "1624299064.75569",
            "userfield": "",
            "sequence": "53968",
            "comment": "",
            "v": 2,
            "qnum": "901",
            "starttime": "1400-03-31 22:41:04",
            "endtime": {
                "$date": {
                    "$numberLong": "1624299079716"
                }
            },
            "queue_id": "1624299064.1411",
            "NO ANSWER": 1,
            "wait": 15,
            "tries": 1,
            "last_try": {
                "$date": {
                    "$numberLong": "1624299079718"
                }
            }
        }
    ]
}
```
    </TabItem>

  </Tabs>
