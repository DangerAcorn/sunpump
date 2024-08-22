---
icon: house-signal
description: >-
  This API allows users to trade SunPump tokens using TRX. This includes Buy and
  Sell transactions.
---

# Live Trade API

### Endpoint

* **URL:** `/sunpump/trade`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key-here`

{% hint style="warning" %}
**Please do NOT use your main wallet private key for transaction on our API. If anybody has access to your API key or privateKey, they can access your funds.** \
\
If you would prefer to build transactions instead of sending your Private Key through an HTTPS request, please refer to our [**`Local Trade API`**](localtrade.md)
{% endhint %}

### Request Body&#x20;

if `{parameter}` contains `⚠️`, the data may be sensitive and you should double check what you are doing.

| Parameter       | Type   | Required | Description                                                              |
| --------------- | ------ | -------- | ------------------------------------------------------------------------ |
| `action`        | string | Yes      | <p>Type of transaction: </p><p><code>buy</code> or <code>sell</code></p> |
| `tokenAddress`  | string | Yes      | Token Contract Address                                                   |
| `amount`        | number | Yes      | Amount to trade (TRX for Buys)                                           |
| `slippage`      | number | No       | Max allowed price change before transaction is reverted                  |
| `priorityFee`   | number | No       | Tip to speed up transactions `(experimental ⚠️)`                         |
| `privateKey ⚠️` | string | Yes      | Your Wallet Private Key (use a fresh wallet)                             |

### Example Request

{% tabs %}
{% tab title="cURL" %}
```sh
curl -X POST "https://api.dangeracorn.bot/sunpump/trade" \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "action": "buy",
  "tokenAddress": "TXu7ZTRhX5FqGbVNGg81DovGHedZXPQB1A",
  "amount": 100,
  "slippage": 5,
  "priorityFee": 10,
  "privateKey": "your-private-key"
}'

```
{% endtab %}

{% tab title="JavaScript" %}
{% code title="npm install axios" %}
```javascript
const axios = require('axios');

const data = {
  action: "buy",
  tokenAddress: "TXu7ZTRhX5FqGbVNGg81DovGHedZXPQB1A",
  amount: 100,
  slippage: 5,
  priorityFee: 10,
  privateKey: "your-private-key"
};

axios.post('https://api.dangeracorn.bot/sunpump/trade', data, {
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

url = 'https://api.dangeracorn.bot/sunpump/trade'
headers = {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
}
data = {
    "action": "buy",
    "tokenAddress": "TXu7ZTRhX5FqGbVNGg81DovGHedZXPQB1A",
    "amount": 100,
    "slippage": 5,
    "priorityFee": 10,
    "privateKey": "your-private-key"
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
  action: 'buy',
  tokenAddress: 'TXu7ZTRhX5FqGbVNGg81DovGHedZXPQB1A',
  amount: 100,
  slippage: 5,
  priorityFee: 10,
  privateKey: 'your-private-key'
});

const options = {
  hostname: 'api.dangeracorn.bot',
  port: 443,
  path: '/sunpump/trade',
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
    url := "https://api.dangeracorn.bot/sunpump/trade"
    apiKey := "your-api-key"

    data := map[string]interface{}{
        "action":       "buy",
        "tokenAddress": "TXu7ZTRhX5FqGbVNGg81DovGHedZXPQB1A",
        "amount":       100,
        "slippage":     5,
        "priorityFee":  10,
        "privateKey":   "your-private-key",
    }

    jsonData, _ := json.Marshal(data)

    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("api-key", apiKey)

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()

    fmt.Println("Response Status:", resp.Status)
    // Additional response parsing can go here
}

```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
$api_url = "https://api.dangeracorn.bot/sunpump/trade";
$api_key = "your-api-key";

$data = array(
    "action" => "buy",
    "tokenAddress" => "TXu7ZTRhX5FqGbVNGg81DovGHedZXPQB1A",
    "amount" => 100,
    "slippage" => 5,
    "priorityFee" => 0.002,
    "privateKey" => "your-private-key"
);

$ch = curl_init($api_url);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'api-key: ' . $api_key
));

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if(curl_errno($ch)) {
    echo 'Request Error:' . curl_error($ch);
} else {
    echo $response;
}

curl_close($ch);
?>

```
{% endtab %}
{% endtabs %}

### Example Response JSON

```json
{
  "signature": "b69f27c7bfcf54a464294f1df99aaeff1b53714a12a80460709b20923a24486c",
  "status": "success",
  "code": "200"
}
```

### **Example Error Responses**

**Invalid Parameters:**

```json
jsonCopy code{
  "error": "Invalid parameters",
  "message": "You must provide action, tokenAddress, amount, and privateKey",
  "code": "400"
}
```

**Max Slippage Reached:**

```json
jsonCopy code{
  "error": "Simulation failed",
  "message": "Max slippage reached",
  "code": "500"
}
```

**Insufficient Funds:**

```json
jsonCopy code{
  "error": "Insufficient funds",
  "message": "Your account does not have enough funds to perform this transaction.",
  "code": "400"
}
```

**Invalid Action:**

```json
jsonCopy code{
  "error": "Invalid action",
  "message": "Action must be either 'buy' or 'sell'",
  "code": "400"
}
```
