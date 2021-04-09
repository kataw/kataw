# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function * gen() { function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "gen",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "not_gen",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
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
                                                            "value": "foo",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncToken": null,
                                                            "generatorToken": {
                                                                "kind": 67143222,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 60,
                                                                "end": 61
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 159,
                                                                            "block": {
                                                                                "kind": 249,
                                                                                "block": {
                                                                                    "kind": 124,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 120,
                                                                                            "expression": {
                                                                                                "kind": 229,
                                                                                                "delegate": false,
                                                                                                "asteriskToken": null,
                                                                                                "expression": {
                                                                                                    "kind": 81921,
                                                                                                    "value": 42,
                                                                                                    "autofix": 0,
                                                                                                    "flags": 768,
                                                                                                    "start": 74,
                                                                                                    "end": 77
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 69,
                                                                                                "end": 77
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 128,
                                                                                            "start": 69,
                                                                                            "end": 77
                                                                                        }
                                                                                    ],
                                                                                    "multiLine": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 128,
                                                                                    "start": 69,
                                                                                    "end": 77
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 67,
                                                                                "end": 78
                                                                            },
                                                                            "catchClause": null,
                                                                            "finallyBlock": {
                                                                                "kind": 249,
                                                                                "block": {
                                                                                    "kind": 124,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 120,
                                                                                            "expression": {
                                                                                                "kind": 229,
                                                                                                "delegate": false,
                                                                                                "asteriskToken": null,
                                                                                                "expression": {
                                                                                                    "kind": 81921,
                                                                                                    "value": 43,
                                                                                                    "autofix": 0,
                                                                                                    "flags": 768,
                                                                                                    "start": 93,
                                                                                                    "end": 96
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 88,
                                                                                                "end": 96
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 128,
                                                                                            "start": 88,
                                                                                            "end": 97
                                                                                        }
                                                                                    ],
                                                                                    "multiLine": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 128,
                                                                                    "start": 88,
                                                                                    "end": 97
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 86,
                                                                                "end": 97
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 63,
                                                                            "end": 97
                                                                        },
                                                                        {
                                                                            "kind": 161,
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "value": 13,
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 104,
                                                                                "end": 107
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 0,
                                                                            "end": 97
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 63,
                                                                    "end": 107
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 61,
                                                                "end": 108
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "autofix": 0,
                                                            "flags": 2304,
                                                            "start": 49,
                                                            "end": 108
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 43,
                                                        "end": 108
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 43,
                                                "end": 108
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 108
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 108
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 110
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 110
                        },
                        {
                            "kind": 168,
                            "autofix": 0,
                            "flags": 128,
                            "start": 110,
                            "end": 111
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 111
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 113
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 113
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 97,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 113,
            "end": 114
        }
    ],
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function * gen() { function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function * gen() { function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
`````
```

