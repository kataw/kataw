# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
var y = { prot\u0065cted: x } = { protected: 42 };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "original": "y",
                            "text": "y",
                            "rawText": " y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "asyncKeyword": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "left": {
                                                "kind": 134299649,
                                                "original": "x",
                                                "text": "x",
                                                "rawText": " x",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "original": "prot\\u0065cted",
                                                "text": "protected",
                                                "rawText": " prot\\u0065cted",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 24
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16400,
                                    "start": 9,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 29,
                                "end": 31
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "asyncKeyword": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "original": "42",
                                                "rawText": " 42",
                                                "flags": 96,
                                                "start": 44,
                                                "end": 47
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "original": "protected",
                                                "text": "protected",
                                                "rawText": " protected",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "start": 33,
                                            "end": 47
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 33,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 49
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": true,
    "source": "var y = { prot\\u0065cted: x } = { protected: 42 };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

