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
                "flags": 768,
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
                            "flags": 768,
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
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "protected",
                                                "rawText": "prot\\u0065cted",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 24
                                            },
                                            "flags": 256,
                                            "start": 9,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 9,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 7,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
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
                                            "left": {
                                                "kind": 134299649,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 768,
                                                "start": 44,
                                                "end": 47
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "protected",
                                                "rawText": "protected",
                                                "flags": 768,
                                                "start": 33,
                                                "end": 43
                                            },
                                            "flags": 256,
                                            "start": 33,
                                            "end": 47
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 33,
                                    "end": 47
                                },
                                "flags": 256,
                                "start": 31,
                                "end": 49
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 49
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 49
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 49
            },
            "flags": 128,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": true,
    "text": "var y = { prot\\u0065cted: x } = { protected: 42 };",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

