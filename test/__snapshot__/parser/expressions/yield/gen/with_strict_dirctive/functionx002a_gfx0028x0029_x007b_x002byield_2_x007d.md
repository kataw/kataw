# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function* gf() { +yield 2; }
## Input

`````js
'use strict'; function* gf() { +yield 2; }
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
                "flags": 768,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 22,
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
                                "kind": 126,
                                "operandToken": {
                                    "kind": 34098,
                                    "flags": 768,
                                    "start": 30,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 32,
                                        "end": 37
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "flags": 256,
                                    "start": 32,
                                    "end": 39
                                },
                                "flags": 256,
                                "start": 30,
                                "end": 39
                            },
                            "flags": 128,
                            "start": 30,
                            "end": 40
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 30,
                    "end": 40
                },
                "flags": 256,
                "start": 28,
                "end": 42
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 13,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "'use strict'; function* gf() { +yield 2; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

