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

### CST

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
                "flags": 80,
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
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
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "protected",
                                                "rawText": "prot\\u0065cted",
                                                "flags": 16480,
                                                "start": 9,
                                                "end": 24
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 16416,
                                            "start": 9,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16400,
                                    "start": 9,
                                    "end": 27
                                },
                                "flags": 16432,
                                "start": 7,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
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
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "protected",
                                                "rawText": "protected",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 43
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 44,
                                                "end": 47
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
                                "flags": 48,
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

var y = { prot\u0065cted : x } = { protected : 42 };

```

### Diagnostics

```javascript
✔ No errors
```

