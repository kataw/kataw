# Kataw parser test case

## Input

`````js
(bar, yield) => {}
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
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 5,
                            "end": 11
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(bar, yield) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

