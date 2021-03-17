# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_throw_stmt
> :: test: in throw stmt
> :: case: function arguments(){}v:switch(x){default:}let arguments=l
## Input

`````js
throw function arguments(){}v:switch(x){default:}let arguments=l
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "throw function arguments(){}v:switch(x){default:}let arguments=l",
    "filename": "",
    "statements": [
        {
            "kind": 2097373,
            "expression": {
                "kind": 8456285,
                "name": {
                    "kind": 131102,
                    "text": "arguments",
                    "rawText": "arguments",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 14,
                    "end": 24
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
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
                    "start": 26,
                    "end": 28
                },
                "typeParameters": null,
                "type": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 28
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "v",
                "rawText": "v",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 29
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
                    "start": 37,
                    "end": 38
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
                            "start": 40,
                            "end": 48
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 49
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 49
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 49
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
                            "start": 52,
                            "end": 62
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
                            "start": 63,
                            "end": 64
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 64
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 49,
                "end": 64
            },
            "flags": 24,
            "symbol": null,
            "transformFlags": 769,
            "start": 49,
            "end": 64
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
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

