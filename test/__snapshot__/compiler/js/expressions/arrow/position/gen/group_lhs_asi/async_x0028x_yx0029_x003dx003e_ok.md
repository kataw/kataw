# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\group_lhs_asi
> :: test: group lhs asi
> :: case: async (x, y) => ok
## Input

`````js
(async (x, y) => ok)
* x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(async (x, y) => ok)\n* x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 66224,
                        "expression": {
                            "kind": 65552,
                            "typeParameters": null,
                            "arrowParameters": {
                                "kind": 65545,
                                "elements": [
                                    {
                                        "kind": 89,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 10,
                                        "end": 13
                                    },
                                    {
                                        "kind": 89,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 4325406,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 10,
                                        "end": 13
                                    }
                                ],
                                "type": null,
                                "accessModifier": null,
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "ok",
                                "rawText": "ok",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 536870912,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 19
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 20
                    },
                    "operator": "*",
                    "right": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

