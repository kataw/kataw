# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: rhs add asi
> :: case: async => {}
## Input

`````js
x
+ async => {}
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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 1,
                    "start": 513,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 9,
                        "start": 0,
                        "end": 12
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
                                "flags": 768,
                                "start": 3,
                                "end": 9
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 3,
                            "end": 9
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 3,
                        "start": 512,
                        "end": 9
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 256,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 2304,
                    "start": 3,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "x\n+ async => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
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

