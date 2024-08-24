---
icon: clock-rotate-left
description: >-
  This endpoint retrieves recent trades and their transaction details for tokens
  on SunPump.
---

# Get Recent Trades

> **Note:** You must provide a valid API key in the request headers to access this endpoint.

### Endpoint

* **URL:** `/sunpump/getRecentTrades`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

### Request Body

* **address** (string, required): The contract address of the token you want to retrieve transactions for.
* **page** (number, optional): The page number for pagination. Defaults to 1.
* **limit** (number, optional): The number of transactions per page. Defaults to 20, with a maximum of 200.

### Example Request Body JSON

```json
{
  "address": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71", // Token Contract Address
  "page": 1, // Page index
  "limit": 5 // Max # of transactions to retrieve
}
```

### Example cURL Request

```
curl -X POST "http://api.dangeracorn.com/api/sunpump/getRecentTrades" \
-H "Content-Type: application/json" \
-H "api-key: your-api-key" \
-d '{
  "address": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71",
  "page": 1,
  "limit": 5
}'
```

### Example Response JSON

```json
{
    "data": [{
        "type": "SELL",
        "signature": "82bbbf6dc8c6fcb9d916abc5b348884330be989ef309c41b3478c694e53d42ef",
        "user": "TWZsbd9x33CN6eVwjLKfU9nrUKCFtvS4oD",
        "tokenAddress": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71",
        "poolAddress": "TFwKn5NxQ77tZiGdKjfK8C3w6SS6TeGKMf",
        "trxAmount": 208.233689,
        "tokenAmount": 380000,
        "priceInTrx": 1824.8728235324113,
        "timestamp": 1724277549000
    }, {
        "type": "BUY",
        "signature": "c5e17d24ccaf92b8552bf940cd9fe868dd715838d70e4d5f34c26d591f170a2f",
        "user": "TLGfM89duvH6iC6NEBRgVXPW95jRYh76cZ",
        "tokenAddress": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71",
        "poolAddress": "TFwKn5NxQ77tZiGdKjfK8C3w6SS6TeGKMf",
        "trxAmount": 200,
        "tokenAmount": 362759.73151558277,
        "priceInTrx": 1813.798657577914,
        "timestamp": 1724277375000
    }, {
        "type": "SELL",
        "signature": "28ddf59dcc7b50e476b6b139ddb9daa4b7861365da5b0a20251834a4ac0c3f3f",
        "user": "TPqsV1aBEFThqk6tv3mjaVcGLT7vKkeJ7o",
        "tokenAddress": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71",
        "poolAddress": "TFwKn5NxQ77tZiGdKjfK8C3w6SS6TeGKMf",
        "trxAmount": 963.015999,
        "tokenAmount": 1744612.879715,
        "priceInTrx": 1811.6135988671151,
        "timestamp": 1724277363000
    }, {
        "type": "BUY",
        "signature": "ed4de49c817209d1121b891b6ba01046a11b9d50687f089a5835cae841015da4",
        "user": "TLFfwBZaxwM9VE7tTauNdXiyDcAxqJ41xF",
        "tokenAddress": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71",
        "poolAddress": "TFwKn5NxQ77tZiGdKjfK8C3w6SS6TeGKMf",
        "trxAmount": 550,
        "tokenAmount": 986561.9197268437,
        "priceInTrx": 1793.7489449578977,
        "timestamp": 1724277357000
    }, {
        "type": "BUY",
        "signature": "acb10b2e46649a1a3526ec585e0e7ac2222eb957e0c32d712fd9fa72f3db8fe7",
        "user": "TT4o6QZgq8dYaWi3cEpDYjcFUx4UQbermt",
        "tokenAddress": "TVccuknJqKjC6bzH9WyDBrZcbzbKWmoA71",
        "poolAddress": "TFwKn5NxQ77tZiGdKjfK8C3w6SS6TeGKMf",
        "trxAmount": 75,
        "tokenAmount": 135322.27984941003,
        "priceInTrx": 1804.2970646588003,
        "timestamp": 1724277231000
    }],
    "status": "success",
    "code": "200"
}
```

### Example Error Response JSON

#### Max Limit Exceeded

If the `limit` exceeds 200, the API will return the following error:

```
{
    "error": "Max limit reached",
    "message": "Maximum limit for this endpoint is 200",
    "code": "400"
}
```

#### Missing Address Parameter

If the `address` parameter is missing, the API will return:

```
{
    "error": "Missing address parameter",
    "message": "You must provide a valid token address",
    "code": "400"
}
```

### _Notes_

> * **Rate Limiting:** This endpoint is rate-limited according to your plan's API key limits. Ensure that you handle these limits in your application.
