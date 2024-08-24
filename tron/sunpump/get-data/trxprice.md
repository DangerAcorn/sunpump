---
description: >-
  Allows users to fetch current token price in TRX and USD for a specific token
  (un-bonded) on SunPump.
icon: dollar-sign
---

# Get TRX Price

{% hint style="info" %}
**This method is currently in development**&#x20;

Check back soon or follow our [socials](broken-reference) for updates
{% endhint %}

### Endpoint

* **URL:** `/tron/price`
* **Method:** `GET`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

### Example Request Body JSON

```json
{
  "address": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71", // Token Contract Address
}
```

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
