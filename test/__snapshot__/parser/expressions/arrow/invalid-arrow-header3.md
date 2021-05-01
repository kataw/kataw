# Kataw parser test case

## Input

`````js
(static) => y
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
                    "start": 8,
                    "end": 11
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "original": "static",
                        "text": "static",
                        "rawText": "static",
                        "flags": 96,
                        "start": 1,
                        "end": 7
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "original": "y",
                    "text": "y",
                    "rawText": " y",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(static) => y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

