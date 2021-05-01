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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 14,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 2,
                                "end": 4
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 4,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 6
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": " b",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 9,
                                "end": 11
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 13
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": " x",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 34,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(a = 1, b = 2) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

