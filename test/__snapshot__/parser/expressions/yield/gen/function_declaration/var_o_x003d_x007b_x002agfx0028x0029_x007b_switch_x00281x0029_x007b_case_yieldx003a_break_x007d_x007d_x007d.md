# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}
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
                "original": "not_gen",
                "text": "not_gen",
                "rawText": " not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 0,
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
                                            "original": "o",
                                            "text": "o",
                                            "rawText": " o",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 26
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
                                                            "kind": 134299649,
                                                            "original": "gf",
                                                            "text": "gf",
                                                            "rawText": "gf",
                                                            "flags": 96,
                                                            "start": 32,
                                                            "end": 34
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
                                                            "trailingComma": false,
                                                            "flags": 160,
                                                            "start": 35,
                                                            "end": 36
                                                        },
                                                        "type": null,
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
                                                                            "flags": 0,
                                                                            "start": 38,
                                                                            "end": 45
                                                                        },
                                                                        "expression": {
                                                                            "kind": 201392130,
                                                                            "text": 1,
                                                                            "original": "1",
                                                                            "rawText": "1",
                                                                            "flags": 96,
                                                                            "start": 47,
                                                                            "end": 48
                                                                        },
                                                                        "caseBlock": {
                                                                            "kind": 152,
                                                                            "clauses": [
                                                                                {
                                                                                    "kind": 175,
                                                                                    "caseKeyword": {
                                                                                        "kind": 4194382,
                                                                                        "flags": 0,
                                                                                        "start": 51,
                                                                                        "end": 56
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 229,
                                                                                        "yieldKeyword": {
                                                                                            "kind": 8454253,
                                                                                            "flags": 0,
                                                                                            "start": 56,
                                                                                            "end": 62
                                                                                        },
                                                                                        "delegate": false,
                                                                                        "asteriskToken": null,
                                                                                        "expression": null,
                                                                                        "flags": 32,
                                                                                        "start": 56,
                                                                                        "end": 62
                                                                                    },
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 150,
                                                                                            "breakKeyword": {
                                                                                                "kind": 37757005,
                                                                                                "flags": 0,
                                                                                                "start": 63,
                                                                                                "end": 69
                                                                                            },
                                                                                            "label": null,
                                                                                            "flags": 16,
                                                                                            "start": 63,
                                                                                            "end": 70
                                                                                        }
                                                                                    ],
                                                                                    "flags": 16,
                                                                                    "start": 51,
                                                                                    "end": 70
                                                                                }
                                                                            ],
                                                                            "flags": 16,
                                                                            "start": 49,
                                                                            "end": 72
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 38,
                                                                        "end": 72
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "start": 38,
                                                                "end": 72
                                                            },
                                                            "flags": 32,
                                                            "start": 36,
                                                            "end": 74
                                                        },
                                                        "flags": 160,
                                                        "start": 34,
                                                        "end": 74
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 30,
                                                "end": 74
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 76
                                        },
                                        "flags": 16,
                                        "start": 24,
                                        "end": 76
                                    }
                                ],
                                "flags": 16,
                                "start": 24,
                                "end": 76
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 76
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 76
                },
                "flags": 32,
                "start": 18,
                "end": 78
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "function not_gen() { var o = { *gf() { switch (1) { case yield: break; } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 78, end: 79

```

