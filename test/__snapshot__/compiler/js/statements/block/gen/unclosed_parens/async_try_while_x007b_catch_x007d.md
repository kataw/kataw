# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/block/gen/unclosed_parens
> :: test: unclosed parens
> :: case: async try while { catch }
## Input

`````js
{( async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{( async try while { catch }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 66224,
                            "expression": {
                                "kind": 196712,
                                "text": "async",
                                "rawText": "async",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
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
                                "start": 12,
                                "end": 12
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
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
                                "start": 12,
                                "end": 12
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 12
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
                                        "start": 20,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 28
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 28
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 28
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 27,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

