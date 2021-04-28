# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: prefix update
> :: case: async x => {}
## Input

`````js
++async x => {}
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
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 0,
                    "start": 512,
                    "end": 2
                },
                "expression": {
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 2,
                            "end": 9
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 2,
                        "start": 512,
                        "end": 7
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
                    "start": 2,
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
    "text": "++async x => {}",
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
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 15, end: 15

```

