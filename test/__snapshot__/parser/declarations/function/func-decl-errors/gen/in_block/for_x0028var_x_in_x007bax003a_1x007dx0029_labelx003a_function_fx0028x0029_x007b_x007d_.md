# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_block
> :: test: in block
> :: case: for (var x in {a: 1}) label: function f() { };
## Input

`````js
{for (var x in {a: 1}) label: function f() { };}
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
                        "kind": 166,
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 9,
                                    "end": 11
                                }
                            ],
                            "flags": 16,
                            "start": 9,
                            "end": 11
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "start": 11,
                            "end": 14
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 16,
                                "end": 20
                            },
                            "flags": 48,
                            "start": 14,
                            "end": 21
                        },
                        "statement": {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "label",
                                "rawText": "label",
                                "flags": 96,
                                "start": 22,
                                "end": 28
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 28,
                                "end": 29
                            },
                            "statement": {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 38
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 40
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 40,
                                    "end": 42
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 46
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 29,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 22,
                            "end": 46
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 46
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 46,
                        "end": 47
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "{for (var x in {a: 1}) label: function f() { };}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 29, end: 38

```

