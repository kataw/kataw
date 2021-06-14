# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: if (true) label: function f() {}
## Options

`````js
{}
`````
## Input

`````js
(function() {if (true) label: function f() {}})()
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
                                        "kind": 164,
                                        "ifKeyword": {
                                            "kind": 37757019,
                                            "flags": 80,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "start": 17,
                                            "end": 21
                                        },
                                        "consequent": {
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
                                                    "end": 45
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 29,
                                                "end": 45
                                            },
                                            "flags": 16,
                                            "start": 22,
                                            "end": 45
                                        },
                                        "elseKeyword": null,
                                        "alternate": null,
                                        "flags": 80,
                                        "start": 13,
                                        "end": 45
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 46
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 47
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 48,
                    "end": 48
                },
                "flags": 268435488,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "(function() {if (true) label: function f() {}})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 29, end: 38

```

