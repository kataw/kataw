# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_lhs
> :: test: in lhs
> :: case: function b(a) { return null;
## Input

`````js
 function (x:function b(a) { return null; = function b(a) { return null;) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function (x:function b(a) { return null; = function b(a) { return null;) {}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 9
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "function",
                                "rawText": "function",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 21
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 23
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 21
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 21,
                            "end": 23
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 21,
                        "end": 23
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 24
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 25
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 25
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 25
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 25
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 25
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097346,
                        "expression": {
                            "kind": 4260512,
                            "text": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 40
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 41
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 41
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 43
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "b",
                "rawText": "b",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 52,
                "end": 54
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
                            "start": 55,
                            "end": 56
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 55,
                        "end": 56
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 55,
                "end": 57
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 4260512,
                                "text": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 71
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 72
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 72
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 57,
                "end": 72
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 43,
            "end": 72
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 75,
                "end": 75
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 73,
            "end": 76
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the the whole assignment in parentheses.",
            "start": 44,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 72,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

