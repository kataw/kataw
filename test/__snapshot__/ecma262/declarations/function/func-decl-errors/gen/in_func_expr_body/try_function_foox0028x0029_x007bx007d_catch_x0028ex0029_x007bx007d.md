# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: try function foo() {} catch (e) {}
## Options

`````js
{}
`````
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
                            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
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
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "block": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 16
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 25
                                        },
                                        "asteriskToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 30
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "returnType": null,
                                        "flags": 16,
                                        "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 34
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 34
                                        },
                                        "catchClause": {
                                            "kind": 173,
                                            "catchKeyword": {
                                                "kind": 4202575,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "catchParameter": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 43
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 46
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 47
                                            },
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 47
                                        },
                                        "finallyKeyword": null,
                                        "finallyBlock": null,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 47
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 47
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 48
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 48
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 49
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 50
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "(function() {try function foo() {} catch (e) {}})()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 16, end: 25
✖ 'try' expected - start: 34, end: 40

```

