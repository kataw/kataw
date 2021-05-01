# Kataw parser test case

## Input

`````js
() => x
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
                    "start": 2,
                    "end": 5
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": " x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "() => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
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

