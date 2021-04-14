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
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 768,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 16,
                        "end": 19
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 81921,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 10,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 4,
                            "end": 16
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
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
                            "multiline": false,
                            "flags": 256,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 22
                    },
                    "flags": 2304,
                    "start": 4,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "x ** async async => {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: async async => {}
## Input

`````js
x ** async async => {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: async async => {}
## Input

`````js
x ** async async => {}
`````
```

