# Kataw parser test case

## Input

`````js
f(((a, b) => a + b));
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "typeParameters": null,
                                "parameters": [
                                    [
                                        {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 8
                                        }
                                    ]
                                ],
                                "asyncToken": false,
                                "returnType": null,
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 3,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "f(((a, b) => a + b));",
    "fileName": "__root__",
    "autofix": 0,
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

