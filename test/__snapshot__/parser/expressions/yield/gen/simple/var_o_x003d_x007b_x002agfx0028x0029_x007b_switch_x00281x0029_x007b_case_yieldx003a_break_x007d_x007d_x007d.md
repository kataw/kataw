# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
var o = { *gf() { switch (1) { case yield: break; } } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
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
                                            "start": 11,
                                            "end": 13
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 14,
                                            "end": 15
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
                                                            "flags": 768,
                                                            "start": 17,
                                                            "end": 24
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 768,
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        "caseBlock": {
                                                            "kind": 152,
                                                            "clauses": [
                                                                {
                                                                    "kind": 175,
                                                                    "caseKeyword": {
                                                                        "kind": 4194382,
                                                                        "flags": 768,
                                                                        "start": 30,
                                                                        "end": 35
                                                                    },
                                                                    "expression": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 768,
                                                                            "start": 35,
                                                                            "end": 41
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 256,
                                                                        "start": 35,
                                                                        "end": 41
                                                                    },
                                                                    "statements": [
                                                                        {
                                                                            "kind": 150,
                                                                            "breakKeyword": {
                                                                                "kind": 37757005,
                                                                                "flags": 768,
                                                                                "start": 42,
                                                                                "end": 48
                                                                            },
                                                                            "label": null,
                                                                            "flags": 128,
                                                                            "start": 42,
                                                                            "end": 49
                                                                        }
                                                                    ],
                                                                    "flags": 128,
                                                                    "start": 30,
                                                                    "end": 49
                                                                }
                                                            ],
                                                            "flags": 128,
                                                            "start": 28,
                                                            "end": 51
                                                        },
                                                        "flags": 128,
                                                        "start": 17,
                                                        "end": 51
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 17,
                                                "end": 51
                                            },
                                            "flags": 256,
                                            "start": 15,
                                            "end": 53
                                        },
                                        "flags": 1280,
                                        "start": 13,
                                        "end": 53
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 9,
                                "end": 53
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 55
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 55
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 55
            },
            "flags": 128,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "text": "var o = { *gf() { switch (1) { case yield: break; } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
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

