# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\obj_tail
> :: test: obj tail
> :: case: async (x, y) => ok
## Input

`````js
x = {arrow: async (x, y) => ok}.y
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x = {arrow: async (x, y) => ok}.y",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operator": "=",
                    "right": {
                        "kind": 66232,
                        "member": {
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "arrow",
                                            "rawText": "arrow",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 10
                                        },
                                        "right": {
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
                                                            "start": 21,
                                                            "end": 23
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
                                                        "start": 21,
                                                        "end": 24
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
                                                            "start": 19,
                                                            "end": 20
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
                                                        "start": 21,
                                                        "end": 24
                                                    }
                                                ],
                                                "type": null,
                                                "accessModifier": null,
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 24
                                            },
                                            "contents": {
                                                "kind": 196712,
                                                "text": "ok",
                                                "rawText": "ok",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 30
                                            },
                                            "flags": 536870912,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 30
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 30
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 31
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 33
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 33,
                        "period": {
                            "kind": 254,
                            "pos": 31,
                            "end": 32
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 33
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

