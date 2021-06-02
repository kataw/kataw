# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\func-decl-errors\gen\in_func_expr_body
> :: test: in func expr body
> :: case: try function foo() {} catch (e) {}
## Input

`````js
(function() {try function foo() {} catch (e) {}})()
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
                                        "kind": 159,
                                        "tryKeyword": {
                                            "kind": 37757027,
                                            "flags": 80,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "block": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "flags": 16,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "catchClause": null,
                                        "finallyKeyword": null,
                                        "finallyBlock": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "flags": 16,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 16,
                                        "start": 13,
                                        "end": 16
                                    },
                                    {
                                        "kind": 176,
                                        "declareKeyword": null,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 25
                                        },
                                        "generatorToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 16,
                                        "start": 16,
                                        "end": 34
                                    },
                                    {
                                        "kind": 159,
                                        "tryKeyword": null,
                                        "block": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 34,
                                                "end": 34
                                            },
                                            "flags": 16,
                                            "start": 34,
                                            "end": 34
                                        },
                                        "catchClause": {
                                            "kind": 173,
                                            "catchKeyword": {
                                                "kind": 4202575,
                                                "flags": 80,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "catchParameter": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 43
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 46,
                                                    "end": 46
                                                },
                                                "flags": 16,
                                                "start": 44,
                                                "end": 47
                                            },
                                            "flags": 16,
                                            "start": 34,
                                            "end": 47
                                        },
                                        "finallyKeyword": null,
                                        "finallyBlock": null,
                                        "flags": 16,
                                        "start": 34,
                                        "end": 47
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 47
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 48
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 32,
                        "start": 1,
                        "end": 48
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 49
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 50,
                    "end": 50
                },
                "flags": 268435488,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "(function() {try function foo() {} catch (e) {}})()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 34, end: 40

```

