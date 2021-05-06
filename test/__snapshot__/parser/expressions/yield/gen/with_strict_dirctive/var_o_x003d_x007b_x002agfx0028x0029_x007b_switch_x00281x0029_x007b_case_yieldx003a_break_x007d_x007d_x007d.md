# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 28,
                                                "end": 29
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
                                                                "start": 31,
                                                                "end": 38
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 40,
                                                                "end": 41
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 175,
                                                                        "caseKeyword": {
                                                                            "kind": 4194382,
                                                                            "flags": 0,
                                                                            "start": 44,
                                                                            "end": 49
                                                                        },
                                                                        "expression": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 0,
                                                                                "start": 49,
                                                                                "end": 55
                                                                            },
                                                                            "delegate": false,
                                                                            "asteriskToken": null,
                                                                            "expression": null,
                                                                            "flags": 32,
                                                                            "start": 49,
                                                                            "end": 55
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "breakKeyword": {
                                                                                    "kind": 37757005,
                                                                                    "flags": 0,
                                                                                    "start": 56,
                                                                                    "end": 62
                                                                                },
                                                                                "label": null,
                                                                                "flags": 16,
                                                                                "start": 56,
                                                                                "end": 63
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "start": 44,
                                                                        "end": 63
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "start": 42,
                                                                "end": 65
                                                            },
                                                            "flags": 16,
                                                            "start": 31,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 31,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "start": 29,
                                                "end": 67
                                            },
                                            "flags": 160,
                                            "start": 27,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 23,
                                "end": 67
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 69
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 69
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 69
            },
            "flags": 16,
            "start": 13,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
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

