---
description: >-
  Allows users to fetch current token price in TRX and USD for a specific token
  (un-bonded) on SunPump.
icon: sack-dollar
---

# Get Token Balance

### Endpoint

* **URL:** `/sunpump/getTokenBalance`
* **Method:** `GET`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

### Parameters

| Parameter       | Type   | Required | Description                                                |
| --------------- | ------ | -------- | ---------------------------------------------------------- |
| `publicKey`     | string | Yes      | Sender Public Tron Address                                 |
| `tokenAddress`  | string | Yes      | Token Contract Address                                     |
| `tokenDecimals` | number | No       | The number of decimals used by the token. Defaults to `18` |
| `rpc`           | string | No       | Optional custom Tron RPC URL                               |

### Example Request

{% tabs %}
{% tab title="cURL" %}
```sh
curl -X POST https://api.dangeracorn.com/sunpump/getTokenBalance \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "publicKey": "sender-public-tron-address",
  "tokenAddress": "token-contract-address",
  "tokenDecimals": 18
}'
```
{% endtab %}

{% tab title="JavaScript" %}
{% code title="npm install axios" %}
```javascript
const axios = require('axios');

const getTokenBalance = async () => {
  const response = await axios.post('https://api.dangeracorn.com/sunpump/getTokenBalance', {
    publicKey: 'sender-public-tron-address',
    tokenAddress: 'token-contract-address',
    tokenDecimals: 18
  }, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    }
  });

  console.log(response.data);
};

getTokenBalance();

```
{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="pip install requests" %}
```python
import requests

url = "https://api.dangeracorn.com/sunpump/getTokenBalance"
headers = {
    "Content-Type": "application/json",
    "api-key": "your-api-key"
}
data = {
    "publicKey": "sender-public-tron-address",
    "tokenAddress": "token-contract-address",
    "tokenDecimals": 18
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```
{% endcode %}
{% endtab %}

{% tab title="Node.js" %}
```javascript
const axios = require('axios');

const getTokenBalance = async () => {
  const response = await axios.post('https://api.dangeracorn.com/sunpump/getTokenBalance', {
    publicKey: 'sender-public-tron-address',
    tokenAddress: 'token-contract-address',
    tokenDecimals: 18
  }, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    }
  });

  console.log(response.data);
};

getTokenBalance();
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
	url := "https://api.dangeracorn.com/sunpump/getTokenBalance"
	data := map[string]interface{}{
		"publicKey":    "sender-public-tron-address",
		"tokenAddress": "token-contract-address",
		"tokenDecimals": 18,
	}

	jsonData, _ := json.Marshal(data)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("api-key", "your-api-key")

	client := &http.Client{}
	resp, _ := client.Do(req)
	defer resp.Body.Close()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)

	fmt.Println(result)
}
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php

$url = "https://api.dangeracorn.com/sunpump/getTokenBalance";

$data = array(
    "publicKey" => "sender-public-tron-address",
    "tokenAddress" => "token-contract-address",
    "tokenDecimals" => 18
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\n" .
                     "api-key: your-api-key\r\n",
        'method'  => 'POST',
        'content' => json_encode($data),
    ),
);

$context  = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    die('Error occurred');
}

echo $response;
```
{% endtab %}
{% endtabs %}

### Example Response JSON

```json
{
    "data": [{
    "priceInTRX": 0.0025,
    "priceInUSD": 0.0003735,
}], 
    "status": "success",
    "code": "200"
}
```

### Error Responses

**Invalid Public Key**

```json
{
  "error": "Invalid publicKey",
  "message": "Please check that the publicKey is a valid Tron address.",
  "status": "error",
  "code": "400"
}
```

**Invalid Token Address**

```json
{
  "error": "Invalid tokenAddress",
  "message": "Please check that the tokenAddress is a valid Tron address.",
  "status": "error",
  "code": "400"
}
```

**Balance Retrieval Error**

```json
{
  "error": "Error retrieving token balance",
  "message": "Failed to retrieve token balance. Please check your input values and try again.",
  "status": "error",
  "code": "500"
}
```

### _Notes_

> * **Balance Format**: The API returns the balance in Sun (`balanceInSun`), and a human-readable format (`convertedBalance`) based on the provided decimals.
> * **Rate Limiting:** This endpoint is rate-limited according to your plan's API key limits. Ensure that you handle these limits in your application.
