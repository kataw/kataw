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
                            "flags": 768,
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
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "gf",
                                            "rawText": "gf",
                                            "flags": 768,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
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
                                                            "flags": 768,
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
                                                                        "flags": 256,
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
                                                                            "flags": 128,
                                                                            "start": 56,
                                                                            "end": 63
                                                                        }
                                                                    ],
                                                                    "flags": 128,
                                                                    "start": 44,
                                                                    "end": 63
                                                                }
                                                            ],
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 65
                                                        },
                                                        "flags": 128,
                                                        "start": 31,
                                                        "end": 65
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 31,
                                                "end": 65
                                            },
                                            "flags": 256,
                                            "start": 29,
                                            "end": 67
                                        },
                                        "flags": 1280,
                                        "start": 27,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 23,
                                "end": 67
                            },
                            "flags": 256,
                            "start": 21,
                            "end": 69
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 69
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 69
            },
            "flags": 128,
            "start": 13,
            "end": 69
        }
    ],
    "isModule": false,
    "text": "'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }",
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

