# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (function call(foo=await){})
## Input

`````js
(function call(foo=await){})
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
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "call",
                        "autofix": 0,
                        "flags": 768,
                        "start": 9,
                        "end": 14
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 18
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 81921,
                                    "value": "await",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 24
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 15,
                        "end": 25
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 26,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 25,
                        "end": 27
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 27
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "(function call(foo=await){})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (function call(foo=await){})
## Input

`````js
(function call(foo=await){})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (function call(foo=await){})
## Input

`````js
(function call(foo=await){})
`````
```

