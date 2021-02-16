# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\if_triple
> :: test: if triple
> :: case: /)finally
## Input

`````js
if if if /)finally
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if if if /)finally",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 2
                },
                "consequent": {
                    "kind": 2097257,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 5
                    },
                    "consequent": {
                        "kind": 2097257,
                        "expression": {
                            "kind": 65563,
                            "left": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 8,
                                "end": 8
                            },
                            "operator": "/",
                            "right": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 8,
                            "end": 10
                        },
                        "consequent": {
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
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 11,
                                "end": 11
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
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 11,
                            "end": 18
                        },
                        "alternate": null,
                        "isWebCompat": true,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 18
                    },
                    "alternate": null,
                    "isWebCompat": true,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 18
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 18
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'try' expected.",
            "start": 11,
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

