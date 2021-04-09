# Kataw parser test case

## Input

`````js
(x = yield) => {}
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
                    {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 8454253,
                            "autofix": 0,
                            "flags": 0,
                            "start": 0,
                            "end": 4
                        },
                        "right": {
                            "kind": 81921,
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 4,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 10
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 16,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "(x = yield) => {}",
    "fileName": "__root__",
    "autofix": 0,
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

