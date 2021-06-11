# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: for (var x in {a: 1}) label: function f() { };
## Options

`````js
{}
`````
## Input

`````js
(function() {for (var x in {a: 1}) label: function f() { };})()
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
                                        "kind": 166,
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
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 21,
                                                    "end": 23
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "inKeyword": {
                                            "kind": 21006388,
                                            "flags": 64,
                                            "start": 23,
                                            "end": 26
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
                                                            "start": 28,
                                                            "end": 29
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "flags": 32,
                                                        "start": 28,
                                                        "end": 32
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "flags": 48,
                                            "start": 26,
                                            "end": 33
                                        },
                                        "statement": {
                                            "kind": 163,
                                            "label": {
                                                "kind": 134299649,
                                                "text": "label",
                                                "rawText": "label",
                                                "flags": 96,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 40,
                                                "end": 41
                                            },
                                            "statement": {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 41,
                                                    "end": 50
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 50,
                                                    "end": 52
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 52,
                                                    "end": 54
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 56,
                                                        "end": 56
                                                    },
                                                    "flags": 32,
                                                    "start": 54,
                                                    "end": 58
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 41,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 34,
                                            "end": 58
                                        },
                                        "flags": 80,
                                        "start": 13,
                                        "end": 58
                                    },
                                    {
                                        "kind": 168,
                                        "flags": 16,
                                        "start": 58,
                                        "end": 59
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 59
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 60
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 60
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 61
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 62,
                    "end": 62
                },
                "flags": 268435488,
                "start": 0,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "(function() {for (var x in {a: 1}) label: function f() { };})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 41, end: 50

```

