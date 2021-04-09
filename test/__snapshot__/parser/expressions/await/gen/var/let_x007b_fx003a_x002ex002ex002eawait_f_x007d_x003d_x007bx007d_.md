# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let { f: ...await f } = {};
## Input

`````js
var await; var f = (async function() { let { f: ...await f } = {}; });
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
                                                "kind": 162,
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 204,
                                                                            "ellipsisToken": null,
                                                                            "key": {
                                                                                "kind": 81921,
                                                                                "value": "f",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 44,
                                                                                "end": 47
                                                                            },
                                                                            "value": {
                                                                                "kind": 203,
                                                                                "ellipsisToken": {
                                                                                    "kind": 524302,
                                                                                    "autofix": 0,
                                                                                    "flags": 0,
                                                                                    "start": 47,
                                                                                    "end": 51
                                                                                },
                                                                                "binding": {
                                                                                    "kind": 81921,
                                                                                    "value": "await",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 51,
                                                                                    "end": 56
                                                                                },
                                                                                "initializer": null,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 47,
                                                                                "end": 56
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 44,
                                                                            "end": 56
                                                                        },
                                                                        {
                                                                            "kind": 222,
                                                                            "ellipsisToken": null,
                                                                            "left": {
                                                                                "kind": 81921,
                                                                                "value": "f",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 56,
                                                                                "end": 58
                                                                            },
                                                                            "right": null,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 56,
                                                                            "end": 58
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 44,
                                                                    "end": 58
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 42,
                                                                "end": 60
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 0,
                                                                    "start": 64,
                                                                    "end": 64
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 62,
                                                                "end": 65
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 42,
                                                    "end": 65
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 66
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 66
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 68
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 68
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 69
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 69
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 69
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { let { f: ...await f } = {}; });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 56,
            "end": 58
        }
    ],
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let { f: ...await f } = {};
## Input

`````js
var await; var f = (async function() { let { f: ...await f } = {}; });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let { f: ...await f } = {};
## Input

`````js
var await; var f = (async function() { let { f: ...await f } = {}; });
`````
```

