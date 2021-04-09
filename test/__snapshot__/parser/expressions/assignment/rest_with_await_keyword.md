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
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
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
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "protected",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 24
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 9,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
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
                                                "kind": 81921,
                                                "value": 42,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 44,
                                                "end": 47
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "protected",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 33,
                                                "end": 43
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 33,
                                            "end": 47
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 33,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 31,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 49
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 49
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 49
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": true,
    "text": "var y = { prot\\u0065cted: x } = { protected: 42 };",
    "fileName": "__root__",
    "autofix": 0,
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

