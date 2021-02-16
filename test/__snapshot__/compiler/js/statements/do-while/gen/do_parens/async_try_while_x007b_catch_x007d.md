# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_parens
> :: test: do parens
> :: case: async try while { catch }
## Input

`````js
do( async try while { catch } while
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do( async try while { catch } while",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 9
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 196712,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 2,
                        "end": 9
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 9
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 9
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
                        "parent": null,
                        "emitNode": null,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 13
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
                        "parent": null,
                        "emitNode": null,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 13
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 9,
                "end": 13
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
                                "parent": null,
                                "emitNode": null,
                                "start": 21,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 21,
                        "end": 27
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 29
                },
                "statement": {
                    "kind": 2097399,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 35,
                        "end": 35
                    },
                    "statement": {
                        "kind": 2097233,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 35,
                            "end": 35
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 29,
                    "end": 35
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 13,
                "end": 35
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 35
    },
    "jsx": false,
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
            "message": "'{' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 30,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

