# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: rhs div
> :: case: async x => {}
## Input

`````js
x / async x => {}
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 11,
                        "end": 14
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 3,
                            "end": 11
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 288,
                    "start": 3,
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
    "source": "x / async x => {}",
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
✖ Expected a `;` - start: 9, end: 11

```

