# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { yield++; }
## Input

`````js
'use strict'; function* gf() { yield++; }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 13,
                "start": 0,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 22,
                "start": 512,
                "end": 23
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 768,
                "start": 23,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 30,
                                    "start": 0,
                                    "end": 36
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 36,
                                        "start": 512,
                                        "end": 38
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 30,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 30,
                            "end": 39
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 30,
                    "end": 39
                },
                "flags": 256,
                "start": 28,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 13,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* gf() { yield++; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 38, end: 39

```

