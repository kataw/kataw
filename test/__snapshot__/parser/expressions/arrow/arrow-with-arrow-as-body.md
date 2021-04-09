# Kataw parser test case

## Input

`````js
(x, y) => (u, v) => x*u + y*v;
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
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 81921,
                                "value": "u",
                                "autofix": 0,
                                "flags": 768,
                                "start": 11,
                                "end": 12
                            },
                            {
                                "kind": 81921,
                                "value": "v",
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 15
                            }
                        ]
                    ],
                    "asyncToken": false,
                    "returnType": null,
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 19,
                                "end": 21
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 21,
                                "end": 22
                            },
                            "right": {
                                "kind": 81921,
                                "value": "u",
                                "autofix": 0,
                                "flags": 768,
                                "start": 22,
                                "end": 23
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 23
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 25,
                                "end": 27
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 27,
                                "end": 28
                            },
                            "right": {
                                "kind": 81921,
                                "value": "v",
                                "autofix": 0,
                                "flags": 768,
                                "start": 28,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 27,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 29
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 9,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "(x, y) => (u, v) => x*u + y*v;",
    "fileName": "__root__",
    "autofix": 0,
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

