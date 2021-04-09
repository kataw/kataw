# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
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
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "g",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 31,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 162,
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncToken": {
                                                "kind": 82031,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 40,
                                                "end": 46
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "f",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 55,
                                                "end": 57
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
                                                            "start": 58,
                                                            "end": 61
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [
                                                                    {
                                                                        "kind": 81921,
                                                                        "value": "h",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 65,
                                                                        "end": 66
                                                                    },
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
                                                                                            "start": 71,
                                                                                            "end": 73
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
                                                                                                        "start": 79,
                                                                                                        "end": 83
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 74,
                                                                                                    "end": 83
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 74,
                                                                                            "end": 83
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 69,
                                                                                        "end": 84
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 81921,
                                                                                        "value": "m",
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 69,
                                                                                        "end": 70
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 69,
                                                                                    "end": 84
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "multiline": false,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 69,
                                                                            "end": 84
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 67,
                                                                        "end": 85
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 65,
                                                                "end": 85
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 63,
                                                            "end": 86
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 58,
                                                        "end": 86
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 58,
                                                "end": 87
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 88,
                                                    "end": 88
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 87,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 1280,
                                            "start": 40,
                                            "end": 89
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 36,
                                        "end": 89
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 36,
                                "end": 89
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 33,
                            "end": 89
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 89
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 94
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 94
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
## Input

`````js
'use strict'; async function g(){let x = async function f(foo = [h, {m: t(await bar)}]){}    }
`````
```

