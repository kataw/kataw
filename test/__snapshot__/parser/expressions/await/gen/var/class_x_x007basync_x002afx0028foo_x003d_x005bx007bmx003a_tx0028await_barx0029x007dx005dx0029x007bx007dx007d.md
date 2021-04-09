# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
var await; var f = (async function() { class x {async *f(foo = [{m: t(await bar)}]){}} });
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
                                                                    "start": 55,
                                                                    "end": 56
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
                                                                                "start": 57,
                                                                                "end": 60
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 220,
                                                                                            "propertyList": {
                                                                                                "kind": 218,
                                                                                                "properties": [
                                                                                                    {
                                                                                                        "kind": 219,
                                                                                                        "left": {
                                                                                                            "kind": 131,
                                                                                                            "expression": {
                                                                                                                "kind": 81921,
                                                                                                                "value": "t",
                                                                                                                "autofix": 0,
                                                                                                                "flags": 768,
                                                                                                                "start": 67,
                                                                                                                "end": 69
                                                                                                            },
                                                                                                            "argumentList": {
                                                                                                                "kind": 256,
                                                                                                                "elements": [
                                                                                                                    {
                                                                                                                        "kind": 208,
                                                                                                                        "expression": {
                                                                                                                            "kind": 81921,
                                                                                                                            "value": "bar",
                                                                                                                            "autofix": 0,
                                                                                                                            "flags": 768,
                                                                                                                            "start": 75,
                                                                                                                            "end": 79
                                                                                                                        },
                                                                                                                        "autofix": 0,
                                                                                                                        "flags": 256,
                                                                                                                        "start": 70,
                                                                                                                        "end": 79
                                                                                                                    }
                                                                                                                ],
                                                                                                                "trailingComma": false,
                                                                                                                "autofix": 0,
                                                                                                                "flags": 256,
                                                                                                                "start": 70,
                                                                                                                "end": 79
                                                                                                            },
                                                                                                            "flags": 256,
                                                                                                            "start": 65,
                                                                                                            "end": 80
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 81921,
                                                                                                            "value": "m",
                                                                                                            "autofix": 0,
                                                                                                            "flags": 768,
                                                                                                            "start": 65,
                                                                                                            "end": 66
                                                                                                        },
                                                                                                        "autofix": 0,
                                                                                                        "flags": 256,
                                                                                                        "start": 65,
                                                                                                        "end": 80
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "autofix": 0,
                                                                                                "flags": 0,
                                                                                                "start": 65,
                                                                                                "end": 80
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 64,
                                                                                            "end": 81
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 64,
                                                                                    "end": 81
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 62,
                                                                                "end": 82
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 57,
                                                                            "end": 82
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 57,
                                                                    "end": 83
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
                                                                        "start": 84,
                                                                        "end": 84
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 83,
                                                                    "end": 85
                                                                },
                                                                "autofix": 0,
                                                                "flags": 3072,
                                                                "start": 56,
                                                                "end": 85
                                                            },
                                                            "flags": 256,
                                                            "start": 48,
                                                            "end": 85
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 48,
                                                    "end": 86
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 86
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 86
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 88
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 88
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 89
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 89
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 89
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 90
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { class x {async *f(foo = [{m: t(await bar)}]){}} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 90
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
var await; var f = (async function() { class x {async *f(foo = [{m: t(await bar)}]){}} });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {async *f(foo = [{m: t(await bar)}]){}}
## Input

`````js
var await; var f = (async function() { class x {async *f(foo = [{m: t(await bar)}]){}} });
`````
```

