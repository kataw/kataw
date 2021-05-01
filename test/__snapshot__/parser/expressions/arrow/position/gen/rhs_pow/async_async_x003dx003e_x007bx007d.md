# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: async async => {}
## Input

`````js
x ** async async => {}
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
                    "kind": 35897,
                    "flags": 64,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 16,
                        "end": 19
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 10,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 4,
                            "end": 16
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 4,
                        "end": 10
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 22
                    },
                    "flags": 288,
                    "start": 4,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "x ** async async => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 10, end: 16

```

