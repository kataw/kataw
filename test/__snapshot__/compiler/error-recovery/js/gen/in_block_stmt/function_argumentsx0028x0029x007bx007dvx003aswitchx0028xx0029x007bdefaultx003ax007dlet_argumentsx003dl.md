# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: function arguments(){}v:switch(x){default:}let arguments=l
## Input

`````js
{ function arguments(){}v:switch(x){default:}let arguments=l }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ function arguments(){}v:switch(x){default:}let arguments=l }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 264284,
                        "name": {
                            "kind": 131102,
                            "text": "arguments",
                            "rawText": "arguments",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 10,
                            "end": 20
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
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
                                "start": 23,
                                "end": 23
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 24
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 256,
                        "start": 1,
                        "end": 24
                    },
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "v",
                            "rawText": "v",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 25
                        },
                        "statement": {
                            "kind": 2097362,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34
                            },
                            "caseBlock": {
                                "kind": 2093,
                                "clauses": [
                                    {
                                        "kind": 65,
                                        "statements": [],
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 44
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 45
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 45
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 45
                    },
                    {
                        "kind": 142,
                        "binding": {
                            "kind": 31,
                            "lexicals": [
                                {
                                    "kind": 16525,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 48,
                                        "end": 58
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 196712,
                                        "text": "l",
                                        "rawText": "l",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 60
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 60
                                }
                            ],
                            "flags": 24,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 60
                        },
                        "flags": 24,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 45,
                        "end": 60
                    }
                ],
                "multiline": false,
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 60
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 62
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
    "end": 62
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

