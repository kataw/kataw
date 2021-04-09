# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let x = function f(foo = await bar){
## Input

`````js
var await; var f = (async function() { let x = function f(foo = await bar){ });
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
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncToken": null,
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
                                                                                "kind": 81921,
                                                                                "value": "await",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 63,
                                                                                "end": 69
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 58,
                                                                            "end": 69
                                                                        },
                                                                        {
                                                                            "kind": 215,
                                                                            "ellipsisToken": null,
                                                                            "binding": {
                                                                                "kind": 81921,
                                                                                "value": "bar",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 69,
                                                                                "end": 73
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 69,
                                                                            "end": 73
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 58,
                                                                    "end": 74
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "statements": [],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 75,
                                                                        "end": 75
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 74,
                                                                    "end": 77
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 46,
                                                                "end": 77
                                                            },
                                                            "autofix": 0,
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 77
                                                        }
                                                    ],
                                                    "autofix": 0,
                                                    "flags": 128,
                                                    "start": 42,
                                                    "end": 77
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 77
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 77
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
    "text": "var await; var f = (async function() { let x = function f(foo = await bar){ });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 69,
            "end": 73
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 77,
            "end": 78
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 77,
            "end": 78
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 77,
            "end": 78
        }
    ],
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
> :: case: let x = function f(foo = await bar){
## Input

`````js
var await; var f = (async function() { let x = function f(foo = await bar){ });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let x = function f(foo = await bar){
## Input

`````js
var await; var f = (async function() { let x = function f(foo = await bar){ });
`````
```

