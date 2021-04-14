# Kataw parser test case

## Input

`````js
result = [...x[yield]] = vals;
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "result",
                    "rawText": "result",
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 768,
                                            "start": 15,
                                            "end": 20
                                        },
                                        "flags": 256,
                                        "start": 13,
                                        "end": 21
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 10,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 22
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 22,
                        "end": 24
                    },
                    "right": {
                        "kind": 81921,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 768,
                        "start": 24,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "result = [...x[yield]] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

