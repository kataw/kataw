# Kataw parser test case

## Input

`````js
({a: (b) = c} = [2])

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
                                            "kind": 121,
                                            "expression": {
                                                "kind": 81921,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 256,
                                            "start": 4,
                                            "end": 8
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 12
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
                                    "end": 12
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 768,
                                    "start": 17,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 17,
                            "end": 18
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "({a: (b) = c} = [2])\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

