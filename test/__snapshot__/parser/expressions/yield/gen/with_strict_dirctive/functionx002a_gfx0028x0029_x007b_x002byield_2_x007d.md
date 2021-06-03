# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function* gf() { +yield 2; }
## Input

`````js
'use strict'; function* gf() { +yield 2; }
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
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 32
                                },
                                "operand": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 32,
                                        "end": 37
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 32,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 30,
                    "end": 40
                },
                "flags": 32,
                "start": 28,
                "end": 42
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 13,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "'use strict'; function* gf() { +yield 2; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

function * gf() {
  +yield 2;
}
```

### Diagnostics

```javascript
✔ No errors
```

