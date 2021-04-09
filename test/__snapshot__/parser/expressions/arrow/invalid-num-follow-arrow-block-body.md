# Kataw parser test case

## Input

`````js
() => {} 1
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
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 7,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "() => {} 1",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

