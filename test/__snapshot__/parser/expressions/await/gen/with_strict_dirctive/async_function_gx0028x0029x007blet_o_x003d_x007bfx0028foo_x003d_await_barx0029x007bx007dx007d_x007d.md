# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {f(foo = await bar){}}    }
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
                                            "value": "o",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 81921,
                                                            "value": "f",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 42,
                                                            "end": 43
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
                                                                        "start": 44,
                                                                        "end": 47
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 81921,
                                                                        "value": "await",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 49,
                                                                        "end": 55
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 44,
                                                                    "end": 55
                                                                },
                                                                {
                                                                    "kind": 215,
                                                                    "ellipsisToken": null,
                                                                    "binding": {
                                                                        "kind": 81921,
                                                                        "value": "bar",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 55,
                                                                        "end": 59
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 55,
                                                                    "end": 59
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 44,
                                                            "end": 60
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
                                                                "start": 61,
                                                                "end": 61
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 43,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 42,
                                                "end": 62
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 40,
                                            "end": 63
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 36,
                                        "end": 63
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 36,
                                "end": 63
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 33,
                            "end": 63
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 63
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 68
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function g(){let o = {f(foo = await bar){}}    }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 55,
            "end": 59
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {f(foo = await bar){}}    }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {f(foo = await bar){}}    }
`````
```

