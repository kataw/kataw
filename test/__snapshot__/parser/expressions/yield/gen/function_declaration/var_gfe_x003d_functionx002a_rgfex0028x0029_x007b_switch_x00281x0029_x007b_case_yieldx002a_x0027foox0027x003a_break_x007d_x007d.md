# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}
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
                "flags": 768,
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
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 768,
                                "start": 20,
                                "end": 24
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "gfe",
                                            "rawText": "gfe",
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
                                                "flags": 768,
                                                "start": 30,
                                                "end": 39
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 40
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "rgfe",
                                                "rawText": "rgfe",
                                                "flags": 768,
                                                "start": 40,
                                                "end": 45
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 45,
                                                "end": 47
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 160,
                                                            "switchKeyword": {
                                                                "kind": 37757024,
                                                                "flags": 768,
                                                                "start": 49,
                                                                "end": 56
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 768,
                                                                "start": 58,
                                                                "end": 59
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 175,
                                                                        "caseKeyword": {
                                                                            "kind": 4194382,
                                                                            "flags": 768,
                                                                            "start": 62,
                                                                            "end": 67
                                                                        },
                                                                        "expression": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 768,
                                                                                "start": 67,
                                                                                "end": 73
                                                                            },
                                                                            "delegate": true,
                                                                            "asteriskToken": {
                                                                                "kind": 67143222,
                                                                                "flags": 768,
                                                                                "start": 73,
                                                                                "end": 74
                                                                            },
                                                                            "expression": {
                                                                                "kind": 201392131,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 67109632,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 67,
                                                                            "end": 80
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "breakKeyword": {
                                                                                    "kind": 37757005,
                                                                                    "flags": 768,
                                                                                    "start": 81,
                                                                                    "end": 87
                                                                                },
                                                                                "label": null,
                                                                                "flags": 128,
                                                                                "start": 81,
                                                                                "end": 88
                                                                            }
                                                                        ],
                                                                        "flags": 128,
                                                                        "start": 62,
                                                                        "end": 88
                                                                    }
                                                                ],
                                                                "flags": 128,
                                                                "start": 60,
                                                                "end": 90
                                                            },
                                                            "flags": 128,
                                                            "start": 49,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 49,
                                                    "end": 90
                                                },
                                                "flags": 256,
                                                "start": 47,
                                                "end": 92
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 2304,
                                            "start": 30,
                                            "end": 92
                                        },
                                        "flags": 128,
                                        "start": 24,
                                        "end": 92
                                    }
                                ],
                                "flags": 128,
                                "start": 24,
                                "end": 92
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
    "text": "function not_gen() { var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 94,
            "end": 95
        }
    ],
    "start": 0,
    "end": 95
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

