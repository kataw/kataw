# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: async try while { catch }
## Input

`````js
do do do async try while { catch } while while while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do do do async try while { catch } while while while",
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
                "start": 14,
                "end": 14
            },
            "statement": {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "statement": {
                    "kind": 2097218,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 14
                    },
                    "statement": {
                        "kind": 2097233,
                        "expression": {
                            "kind": 196712,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 14
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 14
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
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
                    "start": 18,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 18
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
                    "start": 18,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 18
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
                            "start": 26,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 32
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 34
            },
            "statement": {
                "kind": 2097399,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 40
                },
                "statement": {
                    "kind": 2097399,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 46
                    },
                    "statement": {
                        "kind": 2097399,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 52
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 52
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 52
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 52
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 52
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 52
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 18,
            "end": 52
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 47,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

