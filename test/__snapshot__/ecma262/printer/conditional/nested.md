# Kataw parser test case

## Input

`````js
const message =
    i % 3 === 0 && i % 5 === 0 ?
        'fizzbuzz'
    : i % 3 === 0 ?
        'fizz'
    : i % 5 === 0 ?
        'buzz'
    :
        String(i);

const paymentMessage = state == 'success'
  ? 'Payment completed successfully'

: state == 'processing'
  ? 'Payment processing'

: state == 'invalid_cvc'
  ? 'There was an issue with your CVC number'

: state == 'invalid_expiry'
  ? 'Expiry must be sometime in the past.'

  : 'There was an issue with the payment.  Please contact support.'

const paymentMessage2 = state == 'success'
  ? 1 //'Payment completed successfully'

: state == 'processing'
  ? 2 //'Payment processing'

: state == 'invalid_cvc'
  ? 3 //'There was an issue with your CVC number'

: true //state == 'invalid_expiry'
  ? 4 //'Expiry must be sometime in the past.'

  : 5 // 'There was an issue with the payment.  Please contact support.'


const result = children && !isEmptyChildren(children)
  ? children
  : props.match
    ? component
      ? React.createElement(component, props)
      : render
        ? render(props)
        : null
    : null;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "message",
                            "rawText": "message",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "operatorToken": {
                                            "kind": 35639,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 97,
                                        "transformFlags": 5120,
                                        "start": 15,
                                        "end": 25
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 25,
                                        "end": 29
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "flags": 97,
                                    "transformFlags": 5120,
                                    "start": 15,
                                    "end": 31
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 34
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "operatorToken": {
                                            "kind": 35639,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 36,
                                        "end": 40
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 40,
                                        "end": 44
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 46
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 36,
                                    "end": 46
                                },
                                "flags": 97,
                                "transformFlags": 5120,
                                "start": 15,
                                "end": 46
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 48
                            },
                            "consequent": {
                                "kind": 201392131,
                                "text": "fizzbuzz",
                                "rawText": "'fizzbuzz'",
                                "flags": 4194401,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 67
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 73
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 73,
                                            "end": 75
                                        },
                                        "operatorToken": {
                                            "kind": 35639,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 75,
                                            "end": 77
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 79
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 73,
                                        "end": 79
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 79,
                                        "end": 83
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 85
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 73,
                                    "end": 85
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 87
                                },
                                "consequent": {
                                    "kind": 201392131,
                                    "text": "fizz",
                                    "rawText": "'fizz'",
                                    "flags": 4194401,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 102
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 102,
                                    "end": 108
                                },
                                "alternate": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "i",
                                                "rawText": "i",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 108,
                                                "end": 110
                                            },
                                            "operatorToken": {
                                                "kind": 35639,
                                                "flags": 96,
                                                "transformFlags": 32,
                                                "start": 110,
                                                "end": 112
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 112,
                                                "end": 114
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 108,
                                            "end": 114
                                        },
                                        "operatorToken": {
                                            "kind": 34620,
                                            "flags": 96,
                                            "transformFlags": 16,
                                            "start": 114,
                                            "end": 118
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 120
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 108,
                                        "end": 120
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 120,
                                        "end": 122
                                    },
                                    "consequent": {
                                        "kind": 201392131,
                                        "text": "buzz",
                                        "rawText": "'buzz'",
                                        "flags": 4194401,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 137
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 143
                                    },
                                    "alternate": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "String",
                                            "rawText": "String",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 158
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "i",
                                                    "rawText": "i",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 159,
                                                    "end": 160
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 159,
                                            "end": 160
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 143,
                                        "end": 161
                                    },
                                    "flags": 96,
                                    "transformFlags": 4096,
                                    "start": 108,
                                    "end": 161
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 73,
                                "end": 161
                            },
                            "flags": 97,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 161
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 161
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 161
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 162
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 162,
                "end": 169
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "paymentMessage",
                            "rawText": "paymentMessage",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 169,
                            "end": 184
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "state",
                                    "rawText": "state",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 186,
                                    "end": 192
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 192,
                                    "end": 195
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "success",
                                    "rawText": "'success'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 195,
                                    "end": 205
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 186,
                                "end": 205
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 205,
                                "end": 209
                            },
                            "consequent": {
                                "kind": 201392131,
                                "text": "Payment completed successfully",
                                "rawText": "'Payment completed successfully'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 242
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 242,
                                "end": 245
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "state",
                                        "rawText": "state",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 251
                                    },
                                    "operatorToken": {
                                        "kind": 34622,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 251,
                                        "end": 254
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "processing",
                                        "rawText": "'processing'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 254,
                                        "end": 267
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 245,
                                    "end": 267
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 267,
                                    "end": 271
                                },
                                "consequent": {
                                    "kind": 201392131,
                                    "text": "Payment processing",
                                    "rawText": "'Payment processing'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 271,
                                    "end": 292
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 292,
                                    "end": 295
                                },
                                "alternate": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "state",
                                            "rawText": "state",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 295,
                                            "end": 301
                                        },
                                        "operatorToken": {
                                            "kind": 34622,
                                            "flags": 96,
                                            "transformFlags": 16,
                                            "start": 301,
                                            "end": 304
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "invalid_cvc",
                                            "rawText": "'invalid_cvc'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 304,
                                            "end": 318
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 295,
                                        "end": 318
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 318,
                                        "end": 322
                                    },
                                    "consequent": {
                                        "kind": 201392131,
                                        "text": "There was an issue with your CVC number",
                                        "rawText": "'There was an issue with your CVC number'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 322,
                                        "end": 364
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 364,
                                        "end": 367
                                    },
                                    "alternate": {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "state",
                                                "rawText": "state",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 367,
                                                "end": 373
                                            },
                                            "operatorToken": {
                                                "kind": 34622,
                                                "flags": 96,
                                                "transformFlags": 16,
                                                "start": 373,
                                                "end": 376
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "invalid_expiry",
                                                "rawText": "'invalid_expiry'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 376,
                                                "end": 393
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 367,
                                            "end": 393
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 393,
                                            "end": 397
                                        },
                                        "consequent": {
                                            "kind": 201392131,
                                            "text": "Expiry must be sometime in the past.",
                                            "rawText": "'Expiry must be sometime in the past.'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 397,
                                            "end": 436
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 436,
                                            "end": 441
                                        },
                                        "alternate": {
                                            "kind": 201392131,
                                            "text": "There was an issue with the payment.  Please contact support.",
                                            "rawText": "'There was an issue with the payment.  Please contact support.'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 441,
                                            "end": 505
                                        },
                                        "flags": 96,
                                        "transformFlags": 4096,
                                        "start": 367,
                                        "end": 505
                                    },
                                    "flags": 96,
                                    "transformFlags": 4096,
                                    "start": 295,
                                    "end": 505
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 245,
                                "end": 505
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 186,
                            "end": 505
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 169,
                        "end": 505
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 169,
                "end": 505
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 162,
            "end": 505
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 505,
                "end": 512
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "paymentMessage2",
                            "rawText": "paymentMessage2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 512,
                            "end": 528
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "state",
                                    "rawText": "state",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 530,
                                    "end": 536
                                },
                                "operatorToken": {
                                    "kind": 34622,
                                    "flags": 96,
                                    "transformFlags": 16,
                                    "start": 536,
                                    "end": 539
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "success",
                                    "rawText": "'success'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 539,
                                    "end": 549
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 530,
                                "end": 549
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 549,
                                "end": 553
                            },
                            "consequent": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 553,
                                "end": 555
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 555,
                                "end": 593
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "state",
                                        "rawText": "state",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 593,
                                        "end": 599
                                    },
                                    "operatorToken": {
                                        "kind": 34622,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 599,
                                        "end": 602
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "processing",
                                        "rawText": "'processing'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 602,
                                        "end": 615
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 593,
                                    "end": 615
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 615,
                                    "end": 619
                                },
                                "consequent": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 619,
                                    "end": 621
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 621,
                                    "end": 647
                                },
                                "alternate": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "state",
                                            "rawText": "state",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 647,
                                            "end": 653
                                        },
                                        "operatorToken": {
                                            "kind": 34622,
                                            "flags": 96,
                                            "transformFlags": 16,
                                            "start": 653,
                                            "end": 656
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "invalid_cvc",
                                            "rawText": "'invalid_cvc'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 656,
                                            "end": 670
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 647,
                                        "end": 670
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 670,
                                        "end": 674
                                    },
                                    "consequent": {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 674,
                                        "end": 676
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 676,
                                        "end": 723
                                    },
                                    "alternate": {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 723,
                                            "end": 728
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 728,
                                            "end": 760
                                        },
                                        "consequent": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 760,
                                            "end": 762
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 762,
                                            "end": 808
                                        },
                                        "alternate": {
                                            "kind": 201392130,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 808,
                                            "end": 810
                                        },
                                        "flags": 96,
                                        "transformFlags": 4096,
                                        "start": 723,
                                        "end": 810
                                    },
                                    "flags": 96,
                                    "transformFlags": 4096,
                                    "start": 647,
                                    "end": 810
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 593,
                                "end": 810
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 530,
                            "end": 810
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 512,
                        "end": 810
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 512,
                "end": 810
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 505,
            "end": 810
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 810,
                "end": 885
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "result",
                            "rawText": "result",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 885,
                            "end": 892
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "children",
                                    "rawText": "children",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 894,
                                    "end": 903
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 903,
                                    "end": 906
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 906,
                                        "end": 908
                                    },
                                    "operand": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "isEmptyChildren",
                                            "rawText": "isEmptyChildren",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 908,
                                            "end": 923
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "children",
                                                    "rawText": "children",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 924,
                                                    "end": 932
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 924,
                                            "end": 932
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 908,
                                        "end": 933
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 906,
                                    "end": 933
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 894,
                                "end": 933
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 933,
                                "end": 937
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "children",
                                "rawText": "children",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 937,
                                "end": 946
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 946,
                                "end": 950
                            },
                            "alternate": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "props",
                                        "rawText": "props",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 950,
                                        "end": 956
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "match",
                                        "rawText": "match",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 957,
                                        "end": 962
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 950,
                                    "end": 962
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 962,
                                    "end": 968
                                },
                                "consequent": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 134299649,
                                        "text": "component",
                                        "rawText": "component",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 968,
                                        "end": 978
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 978,
                                        "end": 986
                                    },
                                    "consequent": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "React",
                                                "rawText": "React",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 986,
                                                "end": 992
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "createElement",
                                                "rawText": "createElement",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 993,
                                                "end": 1006
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 986,
                                            "end": 1006
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "component",
                                                    "rawText": "component",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1007,
                                                    "end": 1016
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "props",
                                                    "rawText": "props",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1017,
                                                    "end": 1023
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 1007,
                                            "end": 1023
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 986,
                                        "end": 1024
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 1024,
                                        "end": 1032
                                    },
                                    "alternate": {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 134299649,
                                            "text": "render",
                                            "rawText": "render",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1032,
                                            "end": 1039
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 1039,
                                            "end": 1049
                                        },
                                        "consequent": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "render",
                                                "rawText": "render",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1049,
                                                "end": 1056
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "props",
                                                        "rawText": "props",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 1057,
                                                        "end": 1062
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1057,
                                                "end": 1062
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 1049,
                                            "end": 1063
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 1063,
                                            "end": 1073
                                        },
                                        "alternate": {
                                            "kind": 138477575,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1073,
                                            "end": 1078
                                        },
                                        "flags": 96,
                                        "transformFlags": 4096,
                                        "start": 1032,
                                        "end": 1078
                                    },
                                    "flags": 96,
                                    "transformFlags": 4096,
                                    "start": 968,
                                    "end": 1078
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 1078,
                                    "end": 1084
                                },
                                "alternate": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1084,
                                    "end": 1089
                                },
                                "flags": 96,
                                "transformFlags": 4096,
                                "start": 950,
                                "end": 1089
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 894,
                            "end": 1089
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 885,
                        "end": 1089
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 885,
                "end": 1089
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 810,
            "end": 1090
        }
    ],
    "isModule": false,
    "source": "const message =\n    i % 3 === 0 && i % 5 === 0 ?\n        'fizzbuzz'\n    : i % 3 === 0 ?\n        'fizz'\n    : i % 5 === 0 ?\n        'buzz'\n    :\n        String(i);\n\nconst paymentMessage = state == 'success'\n  ? 'Payment completed successfully'\n\n: state == 'processing'\n  ? 'Payment processing'\n\n: state == 'invalid_cvc'\n  ? 'There was an issue with your CVC number'\n\n: state == 'invalid_expiry'\n  ? 'Expiry must be sometime in the past.'\n\n  : 'There was an issue with the payment.  Please contact support.'\n\nconst paymentMessage2 = state == 'success'\n  ? 1 //'Payment completed successfully'\n\n: state == 'processing'\n  ? 2 //'Payment processing'\n\n: state == 'invalid_cvc'\n  ? 3 //'There was an issue with your CVC number'\n\n: true //state == 'invalid_expiry'\n  ? 4 //'Expiry must be sometime in the past.'\n\n  : 5 // 'There was an issue with the payment.  Please contact support.'\n\n\nconst result = children && !isEmptyChildren(children)\n  ? children\n  : props.match\n    ? component\n      ? React.createElement(component, props)\n      : render\n        ? render(props)\n        : null\n    : null;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1090
}
```

### Printed

```javascript
const message =
    i % 3 === 0 && i % 5 === 0
      ? "'fizzbuzz'"
      : i % 3 === 0
        ? "'fizz'"
        : i % 5 === 0
          ? "'buzz'"
          : String(i);
const paymentMessage =
    state == "'success'"
      ? "'Payment completed successfully'"
      : state == "'processing'"
        ? "'Payment processing'"
        : state == "'invalid_cvc'"
          ? "'There was an issue with your CVC number'"
          : state == "'invalid_expiry'"
            ? "'Expiry must be sometime in the past.'"
            : "'There was an issue with the payment.  Please contact support.'";

const paymentMessage2 =
    state == "'success'"
      ? 1 //'Payment completed successfully'

      : state == "'processing'"
        ? 2 //'Payment processing'

        : state == "'invalid_cvc'"
          ? 3 //'There was an issue with your CVC number'

          : true //state == 'invalid_expiry'

            ? 4 //'Expiry must be sometime in the past.'

            : 5; // 'There was an issue with the payment.  Please contact support.'


const result =
    children && !isEmptyChildren(children)
      ? children
      : props.match
        ? component
          ? React.createElement(component, props)
          : render
            ? render(props)
            : null
        : null;

```

### Diagnostics

```javascript
✔ No errors
```

