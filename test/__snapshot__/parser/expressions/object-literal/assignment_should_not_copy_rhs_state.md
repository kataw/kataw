# Kataw parser test case

## Input

`````js
({a: x = true} = y)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 134,
                                            "text": true,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 81921,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "({a: x = true} = y)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

