---
description: Allows users to fetch the top token holders of a specific token on SunPump.
icon: person-walking-luggage
---

# Get Token Holders



> **Note:** You must provide a valid API key in the request headers to access this endpoint.

### Endpoint

* **URL:** `/api/sunpump/getTokenHolders`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

### Request Body&#x20;

| Field     | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| address   | string | true     | Token contract address      |
| **page**  | string | true     | Page number for pagination. |
| **limit** | number | false    | Number of holders per page. |

### Example Request

{% tabs %}
{% tab title="cURL" %}
```sh
curl -X POST "https://api.dangeracorn.bot/sunpump/getTokenHolders" \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "address": "TYrsH6Ee92FJD83QoMo9BXJpow4PRoCjvH",
  "page": 1,
  "limit" 100
}'
```
{% endtab %}

{% tab title="JavaScript" %}
{% code title="npm install axios" %}
```javascript
const axios = require('axios');

const data = {
  address: 'TYrsH6Ee92FJD83QoMo9BXJpow4PRoCjvH',
  page: 1,
  limit: 100
};

axios.post('https://api.dangeracorn.bot/sunpump/getTokenHolders', data, {
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
{% code title="pip install requests" %}
```python
import requests

url = 'https://api.dangeracorn.bot/sunpump/getTokenHolders'
headers = {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
}
data = {
    "address": "TYrsH6Ee92FJD83QoMo9BXJpow4PRoCjvH", # Token Contract Address
    "page": 1  # Page index
    "limit": 100  # Max Holders to retrieve
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```
{% endcode %}
{% endtab %}

{% tab title="Node.js" %}
```javascript
const https = require('https');

const data = JSON.stringify({
  address: 'TYrsH6Ee92FJD83QoMo9BXJpow4PRoCjvH',
  page: 1
  limit: 100
});

const options = {
  hostname: 'api.dangeracorn.bot',
  port: 443,
  path: '/sunpump/getTokenHolders',
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
	url := "https://api.dangeracorn.bot/sunpump/getTokenHolders"

	data := map[string]interface{}{
		"address": "TYrsH6Ee92FJD83QoMo9BXJpow4PRoCjvH",
		"page":    1,
		"limit": 100
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
$url = 'https://api.dangeracorn.bot/sunpump/getTokenHolders';

$data = [
    'address' => 'TNNND7Gq3h6s6zMdCB56PHvW8959HPh97z',
    'page' => 1,
    'page' => 100
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
    "data": [{
        "address": "TTfvyrAz86hbZk5iDpKD78pqLGgi8C7AAw",
        "balance": 763708075.28,
        "priceInTrx": 0.000053879530896793,
        "valueInTrx": 41148.23283817907,
        "percentage": 76.370807528,
        "type": "curve"
    },{
        "address": "TWp3D9mPbTKv7epKzDKUS1kKALYa4vAmMk",
        "balance": 91373664.74,
        "priceInTrx": 0.00027160312242571,
        "valueInTrx": 24817.372650864,
        "percentage": 9.137366474,
        "type": "dev"
    },
    {
        "address": "TEw922sYxZLoq5AcxeNMj2GNEXMbDFk51y",
        "balance": 367648.55,
        "priceInTrx": 0.000053879530896793,
        "valueInTrx": 19.808731408886146,
        "percentage": 0.036764855,
        "type": "trader"
    }],
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
