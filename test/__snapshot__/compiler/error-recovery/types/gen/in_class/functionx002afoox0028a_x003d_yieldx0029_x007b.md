# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: function*foo(a = yield) {
## Input

`````js
function*foo(a = yield) { class function*foo(a = yield) { { field: function*foo(a = yield) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function*foo(a = yield) { class function*foo(a = yield) { { field: function*foo(a = yield) {}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 13,
                            "end": 14
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 22
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 13,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 23
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 48,
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 25,
                                "end": 25
                            },
                            "decorators": null,
                            "isAbstract": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 25,
                            "end": 31
                        },
                        {
                            "kind": 788576,
                            "name": {
                                "kind": 131102,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 41,
                                "end": 44
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 45,
                                            "end": 46
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65785,
                                            "delegate": false,
                                            "expression": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 16393,
                                            "start": 48,
                                            "end": 54
                                        },
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 45,
                                        "end": 54
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 55
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2099237,
                                            "block": {
                                                "kind": 2084,
                                                "statements": [
                                                    {
                                                        "kind": 2097292,
                                                        "label": {
                                                            "kind": 196712,
                                                            "text": "field",
                                                            "rawText": "field",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 65
                                                        },
                                                        "statement": {
                                                            "kind": 788576,
                                                            "name": {
                                                                "kind": 131102,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 76,
                                                                "end": 79
                                                            },
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [
                                                                    {
                                                                        "kind": 16473,
                                                                        "ellipsis": false,
                                                                        "binding": {
                                                                            "kind": 131102,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1025,
                                                                            "start": 80,
                                                                            "end": 81
                                                                        },
                                                                        "isOptional": false,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 65785,
                                                                            "delegate": false,
                                                                            "expression": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 16393,
                                                                            "start": 83,
                                                                            "end": 89
                                                                        },
                                                                        "decorators": null,
                                                                        "accessModifier": null,
                                                                        "isReadOnly": false,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1,
                                                                        "start": 80,
                                                                        "end": 89
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 80,
                                                                "end": 90
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 91,
                                                                "functionStatementList": {
                                                                    "kind": 94,
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 92,
                                                                    "end": 92
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 90,
                                                                "end": 93
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 384,
                                                            "start": 66,
                                                            "end": 93
                                                        },
                                                        "isWebCompat": true,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 59,
                                                        "end": 93
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 93
                                            },
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 93
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 93
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 93
                            },
                            "typeParameters": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 384,
                            "start": 31,
                            "end": 93
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 93
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 93
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 93
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 92,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

