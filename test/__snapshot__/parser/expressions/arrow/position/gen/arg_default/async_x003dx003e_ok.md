# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: arg default
> :: case: async => ok
## Input

`````js
function f(a = async => ok) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 81921,
                                        "value": "async",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 20
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "autofix": 0,
                                "flags": 0,
                                "start": 14,
                                "end": 20
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "ok",
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 26
                            },
                            "autofix": 0,
                            "flags": 2304,
                            "start": 14,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 11,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 29,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function f(a = async => ok) {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: arg default
> :: case: async => ok
## Input

`````js
function f(a = async => ok) {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: arg default
> :: case: async => ok
## Input

`````js
function f(a = async => ok) {}
`````
```

