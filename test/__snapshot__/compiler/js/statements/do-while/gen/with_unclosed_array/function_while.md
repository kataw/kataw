# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/do-while/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: function while
## Input

`````js
do[ function while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do[ function while",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 8456285,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 12
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 12
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 13,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

