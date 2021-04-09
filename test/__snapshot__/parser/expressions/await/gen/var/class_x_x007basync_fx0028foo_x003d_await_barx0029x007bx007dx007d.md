# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
var await; var f = (async function() { class x {async f(foo = await bar){}} });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [
                                            {
                                                "kind": 178,
                                                "decorators": null,
                                                "name": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "typeParameters": null,
                                                "classHeritage": null,
                                                "members": {
                                                    "kind": 277,
                                                    "elements": [
                                                        {
                                                            "kind": 278,
                                                            "decorators": null,
                                                            "staticToken": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 81921,
                                                                    "value": "f",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 53,
                                                                    "end": 55
                                                                },
                                                                "typeParameters": null,
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
                                                                                "start": 56,
                                                                                "end": 59
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 208,
                                                                                "expression": {
                                                                                    "kind": 81921,
                                                                                    "value": "bar",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 67,
                                                                                    "end": 71
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 61,
                                                                                "end": 71
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 56,
                                                                            "end": 71
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 56,
                                                                    "end": 72
                                                                },
                                                                "type": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "statements": [],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 73,
                                                                        "end": 73
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 72,
                                                                    "end": 74
                                                                },
                                                                "autofix": 0,
                                                                "flags": 2048,
                                                                "start": 55,
                                                                "end": 74
                                                            },
                                                            "flags": 256,
                                                            "start": 48,
                                                            "end": 74
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 48,
                                                    "end": 75
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 75
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 75
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 77
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 78
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 78
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 78
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 79
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { class x {async f(foo = await bar){}} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
var await; var f = (async function() { class x {async f(foo = await bar){}} });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {async f(foo = await bar){}}
## Input

`````js
var await; var f = (async function() { class x {async f(foo = await bar){}} });
`````
```

