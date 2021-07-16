# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/in_func_expr_body
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
                                        "kind": 164,
                                        "ifKeyword": {
                                            "kind": 37757019,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 38
                                                },
                                                "asteriskToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 40
                                                },
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 41
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 44
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 42,
                                                    "end": 45
                                                },
                                                "returnType": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 45
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 45
                                        },
                                        "elseKeyword": null,
                                        "alternate": null,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 45
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 45
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 46
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 46
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 47
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 48
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "(function() {if (true) label: function f() {}})()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

