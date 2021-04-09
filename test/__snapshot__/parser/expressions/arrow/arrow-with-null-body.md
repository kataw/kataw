# Kataw parser test case

## Input

`````js
(a) => 00;
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
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 0,
                    "autofix": 0,
                    "flags": 768,
                    "start": 6,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "(a) => 00;",
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

