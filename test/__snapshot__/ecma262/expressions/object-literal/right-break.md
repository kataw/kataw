# Kataw parser test case

## Input

`````js
const blablah =
  "aldkfkladfskladklsfkladklfkaldfadfkdaf" +
  "adlfasdklfkldsklfakldsfkladsfkadsfladsfa" +
  "dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf";

const k = {
  blablah: "aldkfkladfskladklsfkladklfkaldfadfkdaf" +
    "adlfasdklfkldsklfakldsfkladsfkadsfladsfa" +
    "dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf"
};

somethingThatsAReallyLongPropName =
  this.props.cardType === AwesomizerCardEnum.SEEFIRST;

const o = {
  somethingThatsAReallyLongPropName:
    this.props.cardType === AwesomizerCardEnum.SEEFIRST,
};
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
                            "text": "blablah",
                            "rawText": "blablah",
                            "flags": 96,
                            "start": 5,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392131,
                                    "text": "aldkfkladfskladklsfkladklfkaldfadfkdaf",
                                    "rawText": "\"aldkfkladfskladklsfkladklfkaldfadfkdaf\"",
                                    "flags": 97,
                                    "start": 15,
                                    "end": 58
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 58,
                                    "end": 60
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "adlfasdklfkldsklfakldsfkladsfkadsfladsfa",
                                    "rawText": "\"adlfasdklfkldsklfakldsfkladsfkadsfladsfa\"",
                                    "flags": 97,
                                    "start": 60,
                                    "end": 105
                                },
                                "flags": 97,
                                "start": 15,
                                "end": 105
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 105,
                                "end": 107
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf",
                                "rawText": "\"dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf\"",
                                "flags": 97,
                                "start": 107,
                                "end": 154
                            },
                            "flags": 97,
                            "start": 15,
                            "end": 154
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 154
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 154
            },
            "flags": 33554448,
            "start": 0,
            "end": 155
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 155,
                "end": 162
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "k",
                            "rawText": "k",
                            "flags": 96,
                            "start": 162,
                            "end": 164
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "blablah",
                                            "rawText": "blablah",
                                            "flags": 97,
                                            "start": 168,
                                            "end": 178
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "aldkfkladfskladklsfkladklfkaldfadfkdaf",
                                                    "rawText": "\"aldkfkladfskladklsfkladklfkaldfadfkdaf\"",
                                                    "flags": 96,
                                                    "start": 179,
                                                    "end": 220
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 220,
                                                    "end": 222
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "adlfasdklfkldsklfakldsfkladsfkadsfladsfa",
                                                    "rawText": "\"adlfasdklfkldsklfakldsfkladsfkadsfladsfa\"",
                                                    "flags": 97,
                                                    "start": 222,
                                                    "end": 269
                                                },
                                                "flags": 96,
                                                "start": 168,
                                                "end": 269
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 269,
                                                "end": 271
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf",
                                                "rawText": "\"dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf\"",
                                                "flags": 97,
                                                "start": 271,
                                                "end": 320
                                            },
                                            "flags": 96,
                                            "start": 168,
                                            "end": 320
                                        },
                                        "flags": 33,
                                        "start": 168,
                                        "end": 320
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 168,
                                "end": 320
                            },
                            "flags": 49,
                            "start": 166,
                            "end": 322
                        },
                        "flags": 16,
                        "start": 162,
                        "end": 322
                    }
                ],
                "flags": 16777232,
                "start": 162,
                "end": 322
            },
            "flags": 33554448,
            "start": 155,
            "end": 323
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "somethingThatsAReallyLongPropName",
                    "rawText": "somethingThatsAReallyLongPropName",
                    "flags": 97,
                    "start": 323,
                    "end": 358
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 358,
                    "end": 360
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 129,
                        "member": {
                            "kind": 129,
                            "member": {
                                "kind": 4276321,
                                "flags": 97,
                                "start": 360,
                                "end": 367
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "props",
                                "rawText": "props",
                                "flags": 96,
                                "start": 368,
                                "end": 373
                            },
                            "flags": 97,
                            "start": 360,
                            "end": 373
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "cardType",
                            "rawText": "cardType",
                            "flags": 96,
                            "start": 374,
                            "end": 382
                        },
                        "flags": 97,
                        "start": 360,
                        "end": 382
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 96,
                        "start": 382,
                        "end": 386
                    },
                    "right": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "AwesomizerCardEnum",
                            "rawText": "AwesomizerCardEnum",
                            "flags": 96,
                            "start": 386,
                            "end": 405
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "SEEFIRST",
                            "rawText": "SEEFIRST",
                            "flags": 96,
                            "start": 406,
                            "end": 414
                        },
                        "flags": 96,
                        "start": 386,
                        "end": 414
                    },
                    "flags": 97,
                    "start": 360,
                    "end": 414
                },
                "flags": 32,
                "start": 323,
                "end": 414
            },
            "flags": 16,
            "start": 323,
            "end": 415
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 415,
                "end": 422
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "start": 422,
                            "end": 424
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "somethingThatsAReallyLongPropName",
                                            "rawText": "somethingThatsAReallyLongPropName",
                                            "flags": 97,
                                            "start": 428,
                                            "end": 464
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "start": 465,
                                                        "end": 474
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "props",
                                                        "rawText": "props",
                                                        "flags": 96,
                                                        "start": 475,
                                                        "end": 480
                                                    },
                                                    "flags": 97,
                                                    "start": 428,
                                                    "end": 480
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "cardType",
                                                    "rawText": "cardType",
                                                    "flags": 96,
                                                    "start": 481,
                                                    "end": 489
                                                },
                                                "flags": 97,
                                                "start": 428,
                                                "end": 489
                                            },
                                            "operatorToken": {
                                                "kind": 34620,
                                                "flags": 96,
                                                "start": 489,
                                                "end": 493
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "AwesomizerCardEnum",
                                                    "rawText": "AwesomizerCardEnum",
                                                    "flags": 96,
                                                    "start": 493,
                                                    "end": 512
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "SEEFIRST",
                                                    "rawText": "SEEFIRST",
                                                    "flags": 96,
                                                    "start": 513,
                                                    "end": 521
                                                },
                                                "flags": 96,
                                                "start": 493,
                                                "end": 521
                                            },
                                            "flags": 97,
                                            "start": 428,
                                            "end": 521
                                        },
                                        "flags": 33,
                                        "start": 428,
                                        "end": 521
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 428,
                                "end": 522
                            },
                            "flags": 49,
                            "start": 426,
                            "end": 524
                        },
                        "flags": 16,
                        "start": 422,
                        "end": 524
                    }
                ],
                "flags": 16777232,
                "start": 422,
                "end": 524
            },
            "flags": 33554448,
            "start": 415,
            "end": 525
        }
    ],
    "isModule": false,
    "source": "const blablah =\n  \"aldkfkladfskladklsfkladklfkaldfadfkdaf\" +\n  \"adlfasdklfkldsklfakldsfkladsfkadsfladsfa\" +\n  \"dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf\";\n\nconst k = {\n  blablah: \"aldkfkladfskladklsfkladklfkaldfadfkdaf\" +\n    \"adlfasdklfkldsklfakldsfkladsfkadsfladsfa\" +\n    \"dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf\"\n};\n\nsomethingThatsAReallyLongPropName =\n  this.props.cardType === AwesomizerCardEnum.SEEFIRST;\n\nconst o = {\n  somethingThatsAReallyLongPropName:\n    this.props.cardType === AwesomizerCardEnum.SEEFIRST,\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 525
}
```

### Printed

```javascript

  const blablah = "\"aldkfkladfskladklsfkladklfkaldfadfkdaf\"" + "\"adlfasdklfkldsklfakldsfkladsfkadsfladsfa\"" + "\"dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf\"";
  const k = {
    blablah: "\"aldkfkladfskladklsfkladklfkaldfadfkdaf\"" + "\"adlfasdklfkldsklfakldsfkladsfkadsfladsfa\"" + "\"dflkadfkladsfklkadlfkladlfkadklfjadlfdfdaf\""
  };
  somethingThatsAReallyLongPropName = this.props.cardType === AwesomizerCardEnum.SEEFIRST;
  const o = {
    somethingThatsAReallyLongPropName: this.props.cardType === AwesomizerCardEnum.SEEFIRST,
  };

```

### Diagnostics

```javascript
✔ No errors
```

