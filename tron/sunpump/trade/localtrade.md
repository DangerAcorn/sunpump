---
icon: house-lock
description: >-
  This API allows users to trade SunPump tokens without passing a private key or
  sensitive information. It works by building transaction instructions for local
  signing and broadcasting instead.
---

# Local Trade API

### Endpoint

* **URL:** `/sunpump/localTrade`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key-here`

{% hint style="warning" %}
**This method is currently in development**&#x20;

Please use with caution.
{% endhint %}

### Parameters

| Parameter      | Type          | Required | Description                                                 |
| -------------- | ------------- | -------- | ----------------------------------------------------------- |
| `type`         | string        | Yes      | Type of transaction: `buy` or `sell`.                       |
| `tokenAddress` | string        | Yes      | Token Contract Address                                      |
| `amount`       | number/string | Yes      | Amount to trade (in TRX for tokens (or %) for sale).        |
| `userAddress`  | string        | Yes      | Public Tron Address of sender                               |
| `slippage`     | number        | No       | Max allowed price change before the transaction is reverted |

### Example Buy Request

{% tabs %}
{% tab title="cURL" %}
```sh
curl -X POST https://api.dangeracorn.com/sunpump/localTrade \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "action": "buy",
  "tokenAddress": "token-contract-address",
  "amount": 100,
  "slippage": 1,
  "userAddress": "sender-public-tron-address"
}'

```
{% endtab %}

{% tab title="JavaScript" %}
{% code title="npm install axios" %}
```javascript
const axios = require('axios');

const buyRequest = async () => {
  const response = await axios.post('https://api.dangeracorn.com/sunpump/localTrade', {
    action: 'buy',
    tokenAddress: 'token-contract-address',
    amount: 100, // Amount in TRX when buying
    slippage: 1,
    userAddress: 'sender-public-tron-address'
  }, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    }
  });

  console.log(response.data);
};

buyRequest();

```
{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="pip install requests" %}
```python
import requests

url = 'https://api.dangeracorn.com/sunpump/localTrade'
headers = {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
}

data = {
    "action": "buy",
    "tokenAddress": "token-contract-address",
    "amount": 100,
    "slippage": 1,
    "userAddress": "sender-public-tron-address"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())

```
{% endcode %}
{% endtab %}

{% tab title="Node.js" %}
{% code title="npm install node-fetch" %}
```javascript
const fetch = require('node-fetch');

const buyRequest = async () => {
  const response = await fetch('https://api.dangeracorn.com/sunpump/localTrade', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    },
    body: JSON.stringify({
      action: 'buy',
      tokenAddress: 'token-contract-address',
      amount: 100,
      slippage: 1,
      userAddress: 'sender-public-tron-address'
    })
  });

  const data = await response.json();
  console.log(data);
};

buyRequest();

```
{% endcode %}
{% endtab %}

{% tab title="Go" %}
```go
package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"fmt"
)

func main() {
	data := map[string]interface{}{
		"action": "buy",
		"tokenAddress": "token-contract-address",
		"amount": 100,
		"slippage": 1,
		"userAddress": "sender-public-tron-address",
	}

	payload, _ := json.Marshal(data)
	req, _ := http.NewRequest("POST", "https://api.dangeracorn.com/sunpump/localTrade", bytes.NewBuffer(payload))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("api-key", "your-api-key")

	client := &http.Client{}
	resp, _ := client.Do(req)
	defer resp.Body.Close()

	fmt.Println("Response Status:", resp.Status)
}

```
{% endtab %}

{% tab title="PHP" %}
```php
<?php

$url = 'https://api.dangeracorn.com/sunpump/localTrade';

$data = array(
    'action' => 'buy',
    'tokenAddress' => 'token-contract-address',
    'amount' => 100,
    'slippage' => 1,
    'userAddress' => 'sender-public-tron-address'
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

echo $response;

```
{% endtab %}
{% endtabs %}

### Example Sell Request

{% tabs %}
{% tab title="cURL" %}
```sh
curl -X POST https://api.dangeracorn.com/sunpump/localTrade \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "action": "sell",
  "tokenAddress": "token-contract-address",
  "amount": "50%",
  "slippage": 2,
  "userAddress": "sender-public-tron-address"
}'

```
{% endtab %}

{% tab title="JavaScript" %}
{% code title="npm install axios" %}
```javascript
const axios = require('axios');

const sellRequest = async () => {
  const response = await axios.post('https://api.dangeracorn.com/sunpump/localTrade', {
    action: 'sell',
    tokenAddress: 'token-contract-address',
    amount: '50%', // You may also use token amount as a number instead
    slippage: 2,
    userAddress: 'sender-public-tron-address'
  }, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    }
  });

  console.log(response.data);
};

sellRequest();

```
{% endcode %}
{% endtab %}

{% tab title="Python" %}
{% code title="pip install requests" %}
```python
import requests

url = 'https://api.dangeracorn.com/sunpump/localTrade'
headers = {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
}

data = {
    "action": "sell",
    "tokenAddress": "token-contract-address",
    "amount": "50%",
    "slippage": 2,
    "userAddress": "sender-public-tron-address"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())

```
{% endcode %}
{% endtab %}

{% tab title="Node.js" %}
{% code title="npm install node-fetch" %}
```javascript
const fetch = require('node-fetch');

const sellRequest = async () => {
  const response = await fetch('https://api.dangeracorn.com/sunpump/localTrade', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    },
    body: JSON.stringify({
      action: 'sell',
      tokenAddress: 'token-contract-address',
      amount: '50%',
      slippage: 2,
      userAddress: 'sender-public-tron-address'
    })
  });

  const data = await response.json();
  console.log(data);
};

sellRequest();

```
{% endcode %}
{% endtab %}

{% tab title="Go" %}
```go
package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"fmt"
)

func main() {
	data := map[string]interface{}{
		"action": "sell",
		"tokenAddress": "token-contract-address",
		"amount": "50%",
		"slippage": 2,
		"userAddress": "sender-public-tron-address",
	}

	payload, _ := json.Marshal(data)
	req, _ := http.NewRequest("POST", "https://api.dangeracorn.com/sunpump/localTrade", bytes.NewBuffer(payload))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("api-key", "your-api-key")

	client := &http.Client{}
	resp, _ := client.Do(req)
	defer resp.Body.Close()

	fmt.Println("Response Status:", resp.Status)
}

```
{% endtab %}

{% tab title="PHP" %}
```php
<?php

$url = 'https://api.dangeracorn.com/sunpump/localTrade';

$data = array(
    'action' => 'sell',
    'tokenAddress' => 'token-contract-address',
    'amount' => '50%',
    'slippage' => 2,
    'userAddress' => 'sender-public-tron-address'
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

echo $response;

```
{% endtab %}
{% endtabs %}

### Example Response JSON

```json
{
  "unsignedTx": {
    "raw_data": { /* transaction data */ },
    "txID": "b69f27c7bfcf54a464294f1df99aaeff1b53714a12a80460709b20923a24486c"
  },
  "status": "unsigned",
  "code": "200"
}
```

### Error Responses

#### Invalid Parameters

```json
{
  "error": "Invalid parameters",
  "message": "You must provide type, tokenAddress, amount, and userAddress",
  "code": "400"
}
```

#### Max Slippage Reached

```json
{
  "error": "Simulation failed",
  "message": "Max slippage reached. Transaction reverted.",
  "code": "500"
}
```

#### Insufficient Funds

```json
{
  "error": "Insufficient funds",
  "message": "Your account does not have enough funds to perform this transaction.",
  "code": "400"
}
```

#### Invalid Type

```json
{
  "error": "Invalid type",
  "message": "Type must be either 'buy' or 'sell'.",
  "code": "400"
}
```

**Notes**

> * **Unsigned Transactions**: The API returns unsigned transactions that users must sign before broadcasting.
> * **Slippage Tolerance**: Ensure the slippage is reasonable to avoid reverted transactions.
> * **Fees**: A small fee is applied on each trade. Please refer to [Plans](../../../api/start/plans.md) to see what fee your plan uses.
