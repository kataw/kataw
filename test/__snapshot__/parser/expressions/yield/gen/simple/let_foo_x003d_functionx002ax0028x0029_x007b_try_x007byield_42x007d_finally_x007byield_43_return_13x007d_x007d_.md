# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 9,
                                "end": 18
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 18,
                                "end": 19
                            },
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 21
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
                                                "flags": 768,
                                                "start": 23,
                                                "end": 27
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
                                                                    "flags": 768,
                                                                    "start": 29,
                                                                    "end": 34
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": 42,
                                                                    "rawText": "42",
                                                                    "flags": 768,
                                                                    "start": 34,
                                                                    "end": 37
                                                                },
                                                                "flags": 256,
                                                                "start": 29,
                                                                "end": 37
                                                            },
                                                            "flags": 128,
                                                            "start": 29,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 29,
                                                    "end": 37
                                                },
                                                "flags": 128,
                                                "start": 27,
                                                "end": 38
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": {
                                                "kind": 37757016,
                                                "flags": 768,
                                                "start": 38,
                                                "end": 46
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
                                                                    "flags": 768,
                                                                    "start": 48,
                                                                    "end": 53
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": 43,
                                                                    "rawText": "43",
                                                                    "flags": 768,
                                                                    "start": 53,
                                                                    "end": 56
                                                                },
                                                                "flags": 256,
                                                                "start": 48,
                                                                "end": 56
                                                            },
                                                            "flags": 128,
                                                            "start": 48,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 48,
                                                    "end": 57
                                                },
                                                "flags": 128,
                                                "start": 46,
                                                "end": 57
                                            },
                                            "flags": 128,
                                            "start": 23,
                                            "end": 57
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 768,
                                                "start": 57,
                                                "end": 64
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": 13,
                                                "rawText": "13",
                                                "flags": 768,
                                                "start": 64,
                                                "end": 67
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 57
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 67
                                },
                                "flags": 256,
                                "start": 21,
                                "end": 68
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 9,
                            "end": 68
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 68
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 68
            },
            "flags": 128,
            "start": 0,
            "end": 68
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 70,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57,
            "end": 64
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 68,
            "end": 70
        }
    ],
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

