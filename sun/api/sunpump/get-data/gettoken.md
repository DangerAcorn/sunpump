---
description: >-
  This API endpoint fetches token details from SunPump, providing metadata
  (e.g., name, symbol, URLs) and dynamic data (e.g., market stats, price).
icon: circle-info
---

# Get Token Details

> **Note:** You must provide a valid API key in the request headers to access this endpoint.

### Endpoint

* **URL:** `/api/sunpump/getTokenDetails`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

### Request Body

* **address** (string, required): The contract address of the token you want to retrieve details for.

### Example Request Body JSON

```json
{
  "address": "TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z" // Token Contract Address
}
```

### Example Request

{% tabs %}
{% tab title="cURL" %}
```sh
curl -X POST "https://api.dangeracorn.bot/sunpump/getTokenDetails" \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "address": "TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z"
}'
```
{% endtab %}

{% tab title="JavaScript" %}
{% code title="npm install axios" %}
```javascript
const axios = require('axios');

const data = {
  address: 'TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z'
};

axios.post('https://api.dangeracorn.bot/sunpump/getTokenDetails', data, {
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});

```
{% endcode %}
{% endtab %}

{% tab title="Python" %}
<pre class="language-python" data-title="pip install requests"><code class="lang-python">import requests
<strong>
</strong>url = 'https://api.dangeracorn.bot/sunpump/getTokenDetails'
headers = {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
}
data = {
    "address": "TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())

</code></pre>
{% endtab %}

{% tab title="Node.js" %}
```javascript
const https = require('https');

const data = JSON.stringify({
  address: 'TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z'
});

const options = {
  hostname: 'api.dangeracorn.bot',
  port: 443,
  path: '/sunpump/getTokenDetails',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
  }
};

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(responseData));
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();

```
{% endtab %}

{% tab title="Go" %}
```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "https://api.dangeracorn.bot/sunpump/getTokenDetails"

	data := map[string]string{
		"address": "TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z",
	}
	jsonData, _ := json.Marshal(data)

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println(err)
		return
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("api-key", "your-api-key")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer resp.Body.Close()

	var response map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&response)
	fmt.Println(response)
}

```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
$apiKey = 'your-api-key';
$url = 'https://api.dangeracorn.bot/sunpump/getTokenDetails';

$data = [
    'address' => 'TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z'
];

$options = [
    'http' => [
        'header' => "Content-Type: application/json\r\n" .
                    "api-key: $apiKey\r\n",
        'method' => 'POST',
        'content' => json_encode($data),
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
    // Handle error
}

$response = json_decode($result, true);
print_r($response);
?>

```
{% endtab %}
{% endtabs %}

### Example Response JSON

```json
{
    "metadata": {
        "name": "TRONDOG",
        "symbol": "TRONDOG",
        "description": "DOG ON TRON",
        "image": "https://cdn.sunpump.meme/public/logo/TRONDOG_TDpZeL_5PshTZjrCHc1.jpg",
        "twitter": null,
        "telegram": null,
        "website": null,
        "ownerAddress": "TDpZeLu2HbhoarLZEdwCZudyoafMgLiqGb",
        "contractAddress": "TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z"
    },
    "data": {
        "currentStatus": "CREATED",
        "priceInTrx": 0.00003710479917223,
        "totalSupply": 1000000000,
        "currentSold": 65359069,
        "marketCap": 5717.79,
        "trxReserve": 2277,
        "tokenReserve": 734640931.41,
        "volume24Hr": 0,
        "priceChange24Hr": 0,
        "pumpPercentage": 2,
        "createTxHash": "6c12fff2f1ad520adc1f79ff38863c26be15b49bbdb7bfee83833876fb452109",
        "launchTxHash": null,
        "active": true
    },
    "status": "success",
    "code": "200"
}
```

### Example Error JSON

#### Missing address parameter (400)

```json
{
  "error": "Missing address parameter",
  "message": "You must provide a valid token address",
  "code": "400"
}
```

#### Failed to fetch token details (500)

```json
{
  "error": "Failed to fetch token details",
  "message": "There was a server-side error",
  "code": "500"
}
```
