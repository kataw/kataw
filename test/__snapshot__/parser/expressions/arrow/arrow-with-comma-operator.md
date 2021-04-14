# Kataw parser test case

## Input

`````js
(b, a, a, d) => a
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
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 6,
                            "end": 8
                        },
                        {
                            "kind": 81921,
                            "text": "d",
                            "rawText": "d",
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "(b, a, a, d) => a",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

