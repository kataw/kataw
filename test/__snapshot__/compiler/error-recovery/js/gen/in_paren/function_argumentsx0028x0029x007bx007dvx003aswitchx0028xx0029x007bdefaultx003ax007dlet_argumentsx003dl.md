# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_paren
> :: test: in paren
> :: case: function arguments(){}v:switch(x){default:}let arguments=l
## Input

`````js
(function arguments(){}v:switch(x){default:}let arguments=l)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(function arguments(){}v:switch(x){default:}let arguments=l)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 8456285,
                    "name": {
                        "kind": 131102,
                        "text": "arguments",
                        "rawText": "arguments",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 9,
                        "end": 19
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 21
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
                            "start": 22,
                            "end": 22
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 23
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
                "start": 23,
                "end": 24
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
                    "start": 32,
                    "end": 33
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
                            "start": 35,
                            "end": 43
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 44
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 44
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 23,
            "end": 44
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
                            "start": 47,
                            "end": 57
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
                            "start": 58,
                            "end": 59
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 59
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 44,
                "end": 59
            },
            "flags": 24,
            "symbol": null,
            "transformFlags": 769,
            "start": 44,
            "end": 59
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 59,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

