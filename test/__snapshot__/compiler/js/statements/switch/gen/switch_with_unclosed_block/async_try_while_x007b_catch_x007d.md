# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\switch\gen\switch_with_unclosed_block
> :: test: switch with unclosed block
> :: case: async try while { catch }
## Input

`````js
switch {} default(x) { async try while { catch }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch {} default(x) { async try while { catch }",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 98984,
                "propertyList": {
                    "kind": 65722,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 65,
                        "statements": [
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
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 20
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
                                                "start": 22,
                                                "end": 28
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 28
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
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 32
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
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 32
                                            },
                                            "flags": 1,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 32
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
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 40,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 40,
                                                    "end": 46
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 48
                                            },
                                            "statement": {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 48
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 48
                                            },
                                            "flags": 1,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 48
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 48
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 48
                            }
                        ],
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 48
                    }
                ],
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 48
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 39,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 47,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

