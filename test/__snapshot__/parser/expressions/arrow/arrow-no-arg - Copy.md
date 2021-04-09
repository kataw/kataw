# Kataw parser test case

## Input

`````js
() => a + b - yield / 1
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
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 5,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "autofix": 0,
                        "flags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 35379,
                            "autofix": 0,
                            "flags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "yield",
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 19
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "autofix": 0,
                                "flags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "right": {
                                "kind": 81921,
                                "value": 1,
                                "autofix": 0,
                                "flags": 768,
                                "start": 21,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 23
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 11,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "() => a + b - yield / 1",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

