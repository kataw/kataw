# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_block
> :: test: in block
> :: case: for (var i = 0; i < 1; i++) label: function f() { };
## Input

`````js
{for (var i = 0; i < 1; i++) label: function f() { };}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 165,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 4
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
                                        "start": 9,
                                        "end": 11
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 16,
                                    "start": 9,
                                    "end": 15
                                }
                            ],
                            "flags": 16,
                            "start": 9,
                            "end": 15
                        },
                        "condition": {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 64,
                                "start": 25,
                                "end": 27
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 27
                        },
                        "incrementor": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 64,
                                "start": 18,
                                "end": 20
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 22
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "label",
                                "rawText": "label",
                                "flags": 96,
                                "start": 28,
                                "end": 34
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 34,
                                "end": 35
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 44
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 46,
                                    "end": 48
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 50,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "start": 48,
                                    "end": 52
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 35,
                                "end": 52
                            },
                            "flags": 16,
                            "start": 28,
                            "end": 52
                        },
                        "flags": 80,
                        "start": 1,
                        "end": 52
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 52,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "{for (var i = 0; i < 1; i++) label: function f() { };}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 35, end: 44

```

