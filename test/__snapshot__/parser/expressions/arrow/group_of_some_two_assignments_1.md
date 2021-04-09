# Kataw parser test case

## Input

`````js
(a = 1, b = 2) => x;
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
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 67174402,
                                "autofix": 0,
                                "flags": 0,
                                "start": 0,
                                "end": 4
                            },
                            "right": {
                                "kind": 81921,
                                "value": 1,
                                "autofix": 0,
                                "flags": 768,
                                "start": 4,
                                "end": 6
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 6
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 67174402,
                                "autofix": 0,
                                "flags": 0,
                                "start": 0,
                                "end": 11
                            },
                            "right": {
                                "kind": 81921,
                                "value": 2,
                                "autofix": 0,
                                "flags": 768,
                                "start": 11,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 13
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(a = 1, b = 2) => x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

