---
description: >-
  This API endpoint allows users to create one or more new Tron wallets. The
  response includes the generated public and private keys for the requested
  number of wallets.
icon: wallet
---

# Create Wallet

### Endpoint

* **URL:** `/api/tron/createWallet`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

### Request Body

| Parameter | Type   | Required | Description                                       |
| --------- | ------ | -------- | ------------------------------------------------- |
| `amount`  | number | false    | The number of wallets to create between 1 and 100 |
| `rpc`     | string | false    | The RPC URL for connecting to Tron                |



{% tabs %}
{% tab title="Python" %}
```python
import requests

url = 'https://api.dangeracorn.bot/tron/createWallet'
headers = {
    'Content-Type': 'application/json',
    'api-key': 'your-api-key'
}
data = {
    "amount": 3
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```
{% endtab %}

{% tab title="cURL" %}
```bash
curl -X POST "https://api.dangeracorn.bot/tron/createWallet" \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "amount": 3 
}'
```
{% endtab %}
{% endtabs %}

### Error Responses

#### Invalid Amount

This error occurs when the `amount` parameter is not a valid integer between 1 and 100

```json
{
  "error": "Invalid amount",
  "message": "Must be an integer between 1 and 100",
  "code": "400"
}
```

#### Internal Server Error

This error occurs if there is an internal issue while creating wallets.

**Response:**

```json
{
  "error": "Error creating wallets",
  "message": "Something awkward happened, try again",
  "code": "500"
}
```
