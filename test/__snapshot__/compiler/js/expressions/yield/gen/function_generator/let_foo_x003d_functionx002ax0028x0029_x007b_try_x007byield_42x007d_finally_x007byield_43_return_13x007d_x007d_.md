# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
function * gen() { function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function * gen() { function not_gen() { let foo = function*() { try {yield 42} finally {yield 43; return 13} }; }}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gen",
                "rawText": "gen",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 37
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 142,
                                            "binding": {
                                                "kind": 31,
                                                "bindingList": [
                                                    {
                                                        "kind": 16525,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "exclamation": false,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 8915041,
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 61
                                                            },
                                                            "contents": {
                                                                "kind": 91,
                                                                "functionStatementList": {
                                                                    "kind": 94,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097375,
                                                                            "block": {
                                                                                "kind": 2099237,
                                                                                "block": {
                                                                                    "kind": 2084,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 2097233,
                                                                                            "expression": {
                                                                                                "kind": 65785,
                                                                                                "delegate": false,
                                                                                                "expression": {
                                                                                                    "kind": 4261540,
                                                                                                    "text": 42,
                                                                                                    "rawText": "42",
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 74,
                                                                                                    "end": 77
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 16393,
                                                                                                "start": 69,
                                                                                                "end": 77
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 69,
                                                                                            "end": 77
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 69,
                                                                                    "end": 77
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 67,
                                                                                "end": 78
                                                                            },
                                                                            "catchClause": null,
                                                                            "finallyBlock": {
                                                                                "kind": 2099237,
                                                                                "block": {
                                                                                    "kind": 2084,
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 2097233,
                                                                                            "expression": {
                                                                                                "kind": 65785,
                                                                                                "delegate": false,
                                                                                                "expression": {
                                                                                                    "kind": 4261540,
                                                                                                    "text": 43,
                                                                                                    "rawText": "43",
                                                                                                    "flags": 0,
                                                                                                    "symbol": null,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 93,
                                                                                                    "end": 96
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 16393,
                                                                                                "start": 88,
                                                                                                "end": 96
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 88,
                                                                                            "end": 97
                                                                                        },
                                                                                        {
                                                                                            "kind": 2097346,
                                                                                            "expression": {
                                                                                                "kind": 4261540,
                                                                                                "text": 13,
                                                                                                "rawText": "13",
                                                                                                "flags": 0,
                                                                                                "symbol": null,
                                                                                                "transformFlags": 0,
                                                                                                "start": 104,
                                                                                                "end": 107
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "symbol": null,
                                                                                            "transformFlags": 0,
                                                                                            "start": 97,
                                                                                            "end": 107
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 88,
                                                                                    "end": 107
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 86,
                                                                                "end": 108
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 63,
                                                                            "end": 108
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 63,
                                                                    "end": 108
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 61,
                                                                "end": 110
                                                            },
                                                            "typeParameters": null,
                                                            "type": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 128,
                                                            "start": 49,
                                                            "end": 110
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 110
                                                    }
                                                ],
                                                "flags": 24,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 110
                                            },
                                            "flags": 8,
                                            "symbol": null,
                                            "transformFlags": 769,
                                            "start": 39,
                                            "end": 111
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 111
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 113
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 256,
                            "start": 18,
                            "end": 113
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 113
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 114
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 384,
            "start": 0,
            "end": 114
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

