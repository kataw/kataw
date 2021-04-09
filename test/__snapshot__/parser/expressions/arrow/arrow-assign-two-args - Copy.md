# Kataw parser test case

## Input

`````js
x = (a,b) =>{}
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        [
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 5,
                                "end": 6
                            },
                            {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            }
                        ]
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
                            "start": 13,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 12,
                        "end": 14
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "x = (a,b) =>{}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

