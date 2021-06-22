# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: for (var x in {}) function foo() {}
## Options

`````js
{}
`````
## Input

`````js
(function() {for (var x in {}) function foo() {}})()
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
                                            "kind": 341,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 64,
                                                "start": 18,
                                                "end": 21
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
                                                            "start": 21,
                                                            "end": 23
                                                        },
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
                                            "flags": 16,
                                            "start": 13,
                                            "end": 26
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
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 48,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "statement": {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 30,
                                                "end": 39
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 47,
                                                    "end": 47
                                                },
                                                "flags": 32,
                                                "start": 45,
                                                "end": 48
                                            },
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 30,
                                            "end": 48
                                        },
                                        "flags": 80,
                                        "start": 13,
                                        "end": 48
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 48
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 49
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 50
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 51,
                    "end": 51
                },
                "flags": 268435488,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "(function() {for (var x in {}) function foo() {}})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 30, end: 39

```

