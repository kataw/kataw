# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* gf() { yield++; }
## Input

`````js
'use strict'; function* gf() { yield++; }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
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
                "text": "gf",
                "rawText": "gf",
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 36
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 64,
                                        "start": 36,
                                        "end": 38
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 30,
                    "end": 39
                },
                "flags": 32,
                "start": 28,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* gf() { yield++; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 38, end: 39
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 38, end: 39

```

