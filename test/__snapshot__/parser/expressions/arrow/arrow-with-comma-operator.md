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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "original": "b",
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": " a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": " a",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        {
                            "kind": 134299649,
                            "original": "d",
                            "text": "d",
                            "rawText": " d",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "original": "a",
                    "text": "a",
                    "rawText": " a",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(b, a, a, d) => a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
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

