# Kataw parser test case

## Input

`````js
(a,b) => c
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
                    "start": 5,
                    "end": 8
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "original": "b",
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 3,
                            "end": 4
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "original": "c",
                    "text": "c",
                    "rawText": " c",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(a,b) => c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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

