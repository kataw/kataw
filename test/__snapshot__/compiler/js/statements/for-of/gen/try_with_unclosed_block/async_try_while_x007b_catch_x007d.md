# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/for-of/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\for-of\gen\try_with_unclosed_block
> :: test: try with unclosed block
> :: case: async try while { catch }
## Input

`````js
try {} finally(x) { async try while { catch }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {} finally(x) { async try while { catch }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 6
                },
                "catchClause": null,
                "finallyBlock": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            {
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 25
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 25
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
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "catchClause": null,
                            "finallyBlock": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 29
                        },
                        {
                            "kind": 2097399,
                            "expression": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196712,
                                            "text": "catch",
                                            "rawText": "catch",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 43
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 45
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 6,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 45
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 45
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 45
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 45
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 45
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 36,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 44,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

