# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\statements\if\gen\if_with_unclosed_block
> :: test: if with unclosed block
> :: case: async try while { catch }
## Input

`````js
else {} if(x) { async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "else {} if(x) { async try while { catch }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 4,
            "end": 7
        },
        {
            "kind": 2097257,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "consequent": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "async",
                                "rawText": "async",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 21
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
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
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
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 25
                        },
                        {
                            "kind": 2097399,
                            "expression": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196712,
                                            "text": "catch",
                                            "rawText": "catch",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 39
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 39
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 41
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 41
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 41
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 41
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 41
            },
            "alternate": null,
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 41
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 40,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

