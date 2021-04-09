# Kataw parser test case

## Input

`````js
var y = { \u0066inally: x } = { finally: 42 };
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
                                                "start": 23,
                                                "end": 25
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "finally",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 22
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 9,
                                    "end": 25
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 27
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 27,
                                "end": 29
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
                                                "start": 40,
                                                "end": 43
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "finally",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 31,
                                                "end": 39
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 31,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 31,
                                    "end": 43
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 29,
                                "end": 45
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 45
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 45
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "var y = { \\u0066inally: x } = { finally: 42 };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

