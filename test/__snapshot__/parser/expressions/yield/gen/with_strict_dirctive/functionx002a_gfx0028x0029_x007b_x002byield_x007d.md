# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { +yield; }
## Input

`````js
'use strict'; function* gf() { +yield; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "'use strict'",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 22,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "original": "gf",
                "text": "gf",
                "rawText": " gf",
                "flags": 96,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 26,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 0,
                                        "start": 32,
                                        "end": 37
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 37
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "start": 30,
                    "end": 38
                },
                "flags": 32,
                "start": 28,
                "end": 40
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* gf() { +yield; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
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

