# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
`````

## Output

### Hybrid CST

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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 640,
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
                                            "flags": 768,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 0,
                                                "start": 30,
                                                "end": 39
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 512,
                                                "start": 39,
                                                "end": 40
                                            },
                                            "name": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
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
                                                                "flags": 0,
                                                                "start": 44,
                                                                "end": 48
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
                                                                                    "start": 50,
                                                                                    "end": 55
                                                                                },
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 42,
                                                                                    "rawText": "42",
                                                                                    "flags": 768,
                                                                                    "start": 55,
                                                                                    "end": 58
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 50,
                                                                                "end": 58
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 50,
                                                                            "end": 58
                                                                        }
                                                                    ],
                                                                    "multiLine": false,
                                                                    "flags": 128,
                                                                    "start": 50,
                                                                    "end": 58
                                                                },
                                                                "flags": 128,
                                                                "start": 48,
                                                                "end": 59
                                                            },
                                                            "catchClause": null,
                                                            "finallyKeyword": {
                                                                "kind": 37757016,
                                                                "flags": 0,
                                                                "start": 59,
                                                                "end": 67
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
                                                                                    "start": 69,
                                                                                    "end": 74
                                                                                },
                                                                                "delegate": false,
                                                                                "asteriskToken": null,
                                                                                "expression": {
                                                                                    "kind": 201392130,
                                                                                    "text": 43,
                                                                                    "rawText": "43",
                                                                                    "flags": 768,
                                                                                    "start": 74,
                                                                                    "end": 77
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 69,
                                                                                "end": 77
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 69,
                                                                            "end": 78
                                                                        },
                                                                        {
                                                                            "kind": 161,
                                                                            "returnKeyword": {
                                                                                "kind": 37757022,
                                                                                "flags": 0,
                                                                                "start": 78,
                                                                                "end": 85
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392130,
                                                                                "text": 13,
                                                                                "rawText": "13",
                                                                                "flags": 768,
                                                                                "start": 85,
                                                                                "end": 88
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 0,
                                                                            "end": 78
                                                                        }
                                                                    ],
                                                                    "multiLine": false,
                                                                    "flags": 128,
                                                                    "start": 69,
                                                                    "end": 88
                                                                },
                                                                "flags": 128,
                                                                "start": 67,
                                                                "end": 89
                                                            },
                                                            "flags": 128,
                                                            "start": 44,
                                                            "end": 89
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 44,
                                                    "end": 89
                                                },
                                                "flags": 256,
                                                "start": 42,
                                                "end": 91
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 2304,
                                            "start": 30,
                                            "end": 91
                                        },
                                        "flags": 128,
                                        "start": 24,
                                        "end": 91
                                    }
                                ],
                                "flags": 128,
                                "start": 24,
                                "end": 91
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 92
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 92
                },
                "flags": 256,
                "start": 18,
                "end": 94
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "text": "function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 95
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 94, end: 95

```

