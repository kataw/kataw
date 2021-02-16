# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/statements/while/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\while\gen\unclosed_parens
> :: test: unclosed parens
> :: case: try { !xxx
## Input

`````js
while( try { !xxx
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "while( try { !xxx",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097399,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 6
                },
                "statement": {
                    "kind": 2097375,
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [
                                {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 65774,
                                        "operator": "!",
                                        "operand": {
                                            "kind": 196712,
                                            "text": "xxx",
                                            "rawText": "xxx",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 14,
                                            "end": 17
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 12,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 12,
                                    "end": 17
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 12,
                            "end": 17
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 10,
                        "end": 17
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
                            "start": 17,
                            "end": 17
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 17
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 17
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 14,
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
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

