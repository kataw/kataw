# Kataw parser test case

## Input

`````js
(x, y)=>x;
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
                    "start": 6,
                    "end": 8
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "original": "y",
                            "text": "y",
                            "rawText": " y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(x, y)=>x;",
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

