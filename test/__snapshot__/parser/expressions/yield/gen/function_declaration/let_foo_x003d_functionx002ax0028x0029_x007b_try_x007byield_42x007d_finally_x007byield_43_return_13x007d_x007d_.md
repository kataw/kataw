# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: function declaration
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "start": 20,
                                "end": 24
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
                                            "start": 24,
                                            "end": 28
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 30,
                                                "end": 39
                                            },
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 39,
                                                "end": 40
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 40,
                                                "end": 42
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
                                                                "flags": 80,
                                                                "start": 44,
                                                                "end": 48
                                                            },
                                                            "block": {
                                                                "kind": 124,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 229,
                                                                                "yieldKeyword": {
                                                                                    "kind": 8454253,
                                                                                    "flags": 64,
                                                                                    "start": 50,
                                                                                    "end": 55
                                                                                },
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 42,
                                                                                    "rawText": "42",
                                                                                    "flags": 96,
                                                                                    "start": 55,
                                                                                    "end": 58
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 50,
                                                                                "end": 58
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 50,
                                                                            "end": 58
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "start": 50,
                                                                    "end": 58
                                                                },
                                                                "flags": 16,
                                                                "start": 48,
                                                                "end": 59
                                                            },
                                                            "catchClause": null,
                                                            "finallyKeyword": {
                                                                "kind": 37757016,
                                                                "flags": 64,
                                                                "start": 59,
                                                                "end": 67
                                                            },
                                                            "finallyBlock": {
                                                                "kind": 124,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 229,
                                                                                "yieldKeyword": {
                                                                                    "kind": 8454253,
                                                                                    "flags": 64,
                                                                                    "start": 69,
                                                                                    "end": 74
                                                                                },
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 43,
                                                                                    "rawText": "43",
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
                                                                            "end": 78
                                                                        },
                                                                        {
                                                                            "kind": 161,
                                                                            "returnKeyword": {
                                                                                "kind": 37757022,
                                                                                "flags": 80,
                                                                                "start": 78,
                                                                                "end": 85
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392130,
                                                                                "text": 13,
                                                                                "rawText": "13",
                                                                                "flags": 96,
                                                                                "start": 85,
                                                                                "end": 88
                                                                            },
                                                                            "flags": 80,
                                                                            "start": 78,
                                                                            "end": 88
                                                                        }
                                                                    ],
                                                                    "flags": 16,
                                                                    "start": 69,
                                                                    "end": 88
                                                                },
                                                                "flags": 16,
                                                                "start": 67,
                                                                "end": 89
                                                            },
                                                            "flags": 16,
                                                            "start": 44,
                                                            "end": 89
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 44,
                                                    "end": 89
                                                },
                                                "flags": 32,
                                                "start": 42,
                                                "end": 91
                                            },
                                            "returnType": null,
                                            "flags": 288,
                                            "start": 30,
                                            "end": 91
                                        },
                                        "flags": 16,
                                        "start": 24,
                                        "end": 91
                                    }
                                ],
                                "flags": 16,
                                "start": 24,
                                "end": 91
                            },
                            "flags": 33554448,
                            "start": 20,
                            "end": 92
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 92
                },
                "flags": 32,
                "start": 18,
                "end": 94
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 95
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 94, end: 95

```

