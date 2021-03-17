# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_function_block
> :: test: in function block
> :: case: I try and try and try, but soon to give up. I switch to better code!
## Input

`````js
function x() {I try and try and try, but soon to give up. I switch to better code!}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function x() {I try and try and try, but soon to give up. I switch to better code!}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
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
                                "text": "I",
                                "rawText": "I",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 15
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        {
                            "kind": 2097375,
                            "block": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 19
                            },
                            "catchClause": null,
                            "finallyBlock": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 19
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "and",
                                "rawText": "and",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 23
                        },
                        {
                            "kind": 2097375,
                            "block": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "catchClause": null,
                            "finallyBlock": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 27
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "and",
                                "rawText": "and",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 31
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 31
                        },
                        {
                            "kind": 2097375,
                            "block": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "catchClause": null,
                            "finallyBlock": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 35
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 35
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 35
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 35
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "but",
                "rawText": "but",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 36,
                "end": 40
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 36,
            "end": 40
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "soon",
                "rawText": "soon",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 45
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 40,
            "end": 45
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "to",
                "rawText": "to",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 45,
                "end": 48
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 45,
            "end": 48
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "give",
                "rawText": "give",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 53
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 48,
            "end": 53
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 196712,
                    "text": "up",
                    "rawText": "up",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 56
                },
                "expression": {
                    "kind": 196711,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 59
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 56,
                "end": 59,
                "period": {
                    "kind": 255,
                    "pos": 56,
                    "end": 57
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 53,
            "end": 59
        },
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "to",
                "rawText": "to",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 66,
                "end": 69
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 69,
                "end": 69
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 59,
            "end": 69
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "better",
                "rawText": "better",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 69,
                "end": 76
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 76
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 74398,
                "expression": {
                    "kind": 196712,
                    "text": "code",
                    "rawText": "code",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 81
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 81,
                "end": 82
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 76,
            "end": 82
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 28,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 46,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 60,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 67,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 70,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 77,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 82,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

