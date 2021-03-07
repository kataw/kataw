# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\delete_arg
> :: test: delete arg
> :: case: async (x, y) => ok
## Input

`````js
delete async (x, y) => ok
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "delete async (x, y) => ok",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65774,
                    "operator": "delete",
                    "operand": {
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
                                    "start": 16,
                                    "end": 18
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
                                "start": 16,
                                "end": 19
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
                                    "start": 14,
                                    "end": 15
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
                                "start": 16,
                                "end": 19
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 19
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 22,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 20,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

