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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 80,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 0,
                                                                "start": 49,
                                                                "end": 58
                                                            },
                                                            "generatorToken": {
                                                                "kind": 67143222,
                                                                "flags": 64,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [
                                                                        {
                                                                            "kind": 159,
                                                                            "tryKeyword": {
                                                                                "kind": 37757027,
                                                                                "flags": 0,
                                                                                "start": 63,
                                                                                "end": 67
                                                                            },
                                                                            "block": {
                                                                                "kind": 249,
                                                                                "block": {
                                                                                    "kind": 124,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 120,
                                                                                            "expression": {
                                                                                                "kind": 229,
                                                                                                "yieldKeyword": {
                                                                                                    "kind": 8454253,
                                                                                                    "flags": 0,
                                                                                                    "start": 69,
                                                                                                    "end": 74
                                                                                                },
                                                                                                "delegate": false,
                                                                                                "asteriskToken": null,
                                                                                                "expression": {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 42,
                                                                                                    "rawText": "42",
                                                                                                    "flags": 96,
                                                                                                    "start": 74,
                                                                                                    "end": 77
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 69,
                                                                                                "end": 77
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "start": 69,
                                                                                            "end": 77
                                                                                        }
                                                                                    ],
                                                                                    "flags": 16,
                                                                                    "start": 69,
                                                                                    "end": 77
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 67,
                                                                                "end": 78
                                                                            },
                                                                            "catchClause": null,
                                                                            "finallyKeyword": {
                                                                                "kind": 37757016,
                                                                                "flags": 0,
                                                                                "start": 78,
                                                                                "end": 86
                                                                            },
                                                                            "finallyBlock": {
                                                                                "kind": 249,
                                                                                "block": {
                                                                                    "kind": 124,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 120,
                                                                                            "expression": {
                                                                                                "kind": 229,
                                                                                                "yieldKeyword": {
                                                                                                    "kind": 8454253,
                                                                                                    "flags": 0,
                                                                                                    "start": 88,
                                                                                                    "end": 93
                                                                                                },
                                                                                                "delegate": false,
                                                                                                "asteriskToken": null,
                                                                                                "expression": {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 43,
                                                                                                    "rawText": "43",
                                                                                                    "flags": 96,
                                                                                                    "start": 93,
                                                                                                    "end": 96
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "start": 88,
                                                                                                "end": 96
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "start": 88,
                                                                                            "end": 97
                                                                                        },
                                                                                        {
                                                                                            "kind": 161,
                                                                                            "returnKeyword": {
                                                                                                "kind": 37757022,
                                                                                                "flags": 0,
                                                                                                "start": 97,
                                                                                                "end": 104
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 201392130,
                                                                                                "text": 13,
                                                                                                "rawText": "13",
                                                                                                "flags": 96,
                                                                                                "start": 104,
                                                                                                "end": 107
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "start": 0,
                                                                                            "end": 97
                                                                                        }
                                                                                    ],
                                                                                    "flags": 16,
                                                                                    "start": 88,
                                                                                    "end": 107
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 86,
                                                                                "end": 108
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 63,
                                                                            "end": 108
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 63,
                                                                    "end": 108
                                                                },
                                                                "flags": 32,
                                                                "start": 61,
                                                                "end": 110
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 288,
                                                            "start": 49,
                                                            "end": 110
                                                        },
                                                        "flags": 16,
                                                        "start": 43,
                                                        "end": 110
                                                    }
                                                ],
                                                "flags": 33554448,
                                                "start": 43,
                                                "end": 110
                                            },
                                            "flags": 33554448,
                                            "start": 39,
                                            "end": 111
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 111
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 113
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 113
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 113
                },
                "flags": 32,
                "start": 16,
                "end": 114
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 114
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

