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
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 14,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 2,
                                "end": 4
                            },
                            "right": {
                                "kind": 81921,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 4,
                                "end": 6
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 6
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 9,
                                "end": 11
                            },
                            "right": {
                                "kind": 81921,
                                "text": 2,
                                "rawText": "2",
                                "flags": 768,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 13
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(a = 1, b = 2) => x;",
    "fileName": "__root__",
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

