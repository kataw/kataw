# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: var x; for (x in {}) label: function foo() {}
## Options

`````js
{}
`````
## Input

`````js
(function() {var x; for (x in {}) label: function foo() {}})()
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
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 9,
                            "end": 9
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "declarationList": {
                                            "kind": 156,
                                            "declarations": [
                                                {
                                                    "kind": 157,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 18
                                                    },
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 16,
                                                    "end": 18
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 16,
                                        "start": 13,
                                        "end": 19
                                    },
                                    {
                                        "kind": 166,
                                        "forKeyword": {
                                            "kind": 37757017,
                                            "flags": 80,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "inKeyword": {
                                            "kind": 21006388,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 48,
                                            "start": 29,
                                            "end": 32
                                        },
                                        "statement": {
                                            "kind": 163,
                                            "label": {
                                                "kind": 134299649,
                                                "text": "label",
                                                "rawText": "label",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 39
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 39,
                                                "end": 40
                                            },
                                            "statement": {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 40,
                                                    "end": 49
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 49,
                                                    "end": 53
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 53,
                                                    "end": 53
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 57,
                                                        "end": 57
                                                    },
                                                    "flags": 32,
                                                    "start": 55,
                                                    "end": 58
                                                },
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 40,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 33,
                                            "end": 58
                                        },
                                        "flags": 80,
                                        "start": 19,
                                        "end": 58
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 58
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 59
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 59
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 60
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 61,
                    "end": 61
                },
                "flags": 268435488,
                "start": 0,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "(function() {var x; for (x in {}) label: function foo() {}})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 40, end: 49

```

