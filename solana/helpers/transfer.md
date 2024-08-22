---
description: This endpoint lets you easily transfer TRX from one wallet to another.
icon: envelope-open-dollar
---

# Transfer

#### **Endpoint**

* **URL:** `/tron/transferTrx`
* **Method:** `POST`
* **Content-Type:** `application/json`
* **API Key Header:** `api-key: your-api-key`

#### **Request Parameters**

| Parameter        | Type      | Required | Description                                                                |
| ---------------- | --------- | -------- | -------------------------------------------------------------------------- |
| `amount`         | `number`  | Yes      | The amount of TRX to transfer. This is specified in full TRX (not in Sun). |
| `fromPrivateKey` | `string`  | Yes      | Sender's private key                                                       |
| `toAddress`      | `string`  | Yes      | Receiver's public address                                                  |
| `retryOnFail`    | `boolean` | No       | Retries the transaction if it fails. Default is `false`.                   |
| `rpc`            | `string`  | No       | The RPC URL for connecting to Tron                                         |

#### **Example Request Body**

```json
{
  "amount": 100, // Amount in TRX
  "fromPrivateKey": "your-private-key",
  "toAddress": "reciever-public-address",
  "retryOnFail": true,
  "rpc": "https://api.trongrid.io" // Your preferred RPC - TronGrid is Default 
}
```

