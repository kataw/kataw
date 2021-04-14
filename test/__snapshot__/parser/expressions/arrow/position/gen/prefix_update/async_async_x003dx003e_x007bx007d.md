# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: prefix update
> :: case: async async => {}
## Input

`````js
++async async => {}
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
                    "flags": 768,
                    "start": 0,
                    "end": 2
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 13,
                        "end": 16
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
                                "start": 7,
                                "end": 13
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 2,
                            "end": 13
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 2,
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
                            "start": 18,
                            "end": 18
                        },
                        "flags": 256,
                        "start": 16,
                        "end": 19
                    },
                    "flags": 2304,
                    "start": 2,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "++async async => {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 25,
            "error": "The operand of an increment or decrement operator must be a variable or a property access",
            "start": 19,
            "end": 19
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: prefix update
> :: case: async async => {}
## Input

`````js
++async async => {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: prefix update
> :: case: async async => {}
## Input

`````js
++async async => {}
`````
```

