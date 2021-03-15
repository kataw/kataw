# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\return\gen\return_with_unclosed_block
> :: test: return with unclosed block
> :: case: catch
## Input

`````js
return {} return(x) { catch
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "return {} return(x) { catch",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 98984,
                "propertyList": {
                    "kind": 65722,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 2097346,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 19
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 9,
            "end": 19
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
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
                                "start": 21,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "catchClause": {
                            "kind": 2095,
                            "catchParameter": null,
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
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 16,
                            "start": 21,
                            "end": 27
                        },
                        "finallyBlock": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 16,
                        "start": 21,
                        "end": 27
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 27
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 22,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

