# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_func_expr_body
> :: test: in func expr body
> :: case: for (var i = 0; i < 1; i++) label: function f() { };
## Input

`````js
(function() {for (var i = 0; i < 1; i++) label: function f() { };})()
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 9
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 9,
                            "end": 11
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 165,
                                        "forKeyword": {
                                            "kind": 37757017,
                                            "flags": 80,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "initializer": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "i",
                                                        "rawText": "i",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "flags": 16,
                                                    "start": 21,
                                                    "end": 27
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "condition": {
                                            "kind": 127,
                                            "operandToken": {
                                                "kind": 196635,
                                                "flags": 64,
                                                "start": 37,
                                                "end": 39
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "i",
                                                "rawText": "i",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 39
                                        },
                                        "incrementor": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "i",
                                                "rawText": "i",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "operatorToken": {
                                                "kind": 536971330,
                                                "flags": 64,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 34
                                        },
                                        "statement": {
                                            "kind": 163,
                                            "label": {
                                                "kind": 134299649,
                                                "text": "label",
                                                "rawText": "label",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 46
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 46,
                                                "end": 47
                                            },
                                            "statement": {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 47,
                                                    "end": 56
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 62,
                                                        "end": 62
                                                    },
                                                    "flags": 32,
                                                    "start": 60,
                                                    "end": 64
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 47,
                                                "end": 64
                                            },
                                            "flags": 16,
                                            "start": 40,
                                            "end": 64
                                        },
                                        "flags": 16,
                                        "start": 13,
                                        "end": 64
                                    },
                                    {
                                        "kind": 168,
                                        "flags": 16,
                                        "start": 64,
                                        "end": 65
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 65
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 66
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 66
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 67
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 68,
                    "end": 68
                },
                "flags": 268435488,
                "start": 0,
                "end": 69
            },
            "flags": 16,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "(function() {for (var i = 0; i < 1; i++) label: function f() { };})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 47, end: 56

```

