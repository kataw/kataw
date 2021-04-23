# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 23,
                                "end": 32
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 32,
                                "end": 33
                            },
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 33,
                                "end": 35
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
                                                "start": 37,
                                                "end": 41
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
                                                                    "start": 43,
                                                                    "end": 48
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": 42,
                                                                    "rawText": "42",
                                                                    "flags": 768,
                                                                    "start": 48,
                                                                    "end": 51
                                                                },
                                                                "flags": 256,
                                                                "start": 43,
                                                                "end": 51
                                                            },
                                                            "flags": 128,
                                                            "start": 43,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 43,
                                                    "end": 51
                                                },
                                                "flags": 128,
                                                "start": 41,
                                                "end": 52
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": {
                                                "kind": 37757016,
                                                "flags": 768,
                                                "start": 52,
                                                "end": 60
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
                                                                    "start": 62,
                                                                    "end": 67
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": 43,
                                                                    "rawText": "43",
                                                                    "flags": 768,
                                                                    "start": 67,
                                                                    "end": 70
                                                                },
                                                                "flags": 256,
                                                                "start": 62,
                                                                "end": 70
                                                            },
                                                            "flags": 128,
                                                            "start": 62,
                                                            "end": 71
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 128,
                                                    "start": 62,
                                                    "end": 71
                                                },
                                                "flags": 128,
                                                "start": 60,
                                                "end": 71
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 71
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 768,
                                                "start": 71,
                                                "end": 78
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": 13,
                                                "rawText": "13",
                                                "flags": 768,
                                                "start": 78,
                                                "end": 81
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 71
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 81
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 82
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 23,
                            "end": 82
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 82
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 82
            },
            "flags": 128,
            "start": 13,
            "end": 82
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 84,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

