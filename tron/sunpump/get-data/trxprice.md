---
icon: dollar-sign
description: >-
  This API provides the current price of TRX in USD. You can use this endpoint
  to retrieve the most up-to-date TRX price.
---

# Get TRX Price

### Endpoint

* **URL:** `/tron/price`
* **Method:** `GET`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

### Request Example

```bash
curl -X GET https://api.dangeracorn.com/tron/price \
-H "Content-Type: application/json" \
-H "api-key: your-api-key"
```

### Example Response JSON

```json
{
  "price": 0.0745,
  "status": "success",
  "code": "200"
}
```

### **Error Responses**

**Internal Server Error**

```json
{
  "error": "Failed to fetch TRX price",
  "message": "An error occurred while fetching the TRX price.",
  "status": "error",
  "code": "500"
}
```

**400 Invalid API Key**

```json
{
  "error": "Unauthorized",
  "message": "Invalid API key provided.",
  "status": "error",
  "code": "401"
}
```

### _Notes_

> * **Rate Limiting:** This endpoint is rate-limited according to your plan's API key limits. Ensure that you handle these limits in your application.
> * **Error Handling:** In case of network issues or if we can't fetch the price, the response will return a 500 error code with an appropriate error message.
