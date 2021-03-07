# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\obj_tail
> :: test: obj tail
> :: case: async async => ok
## Input

`````js
x = {arrow: async async => ok}.y
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x = {arrow: async async => ok}.y",
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
                                                            "kind": 131102,
                                                            "text": "async",
                                                            "rawText": "async",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "start": 17,
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
                                                        "start": 26,
                                                        "end": 23
                                                    }
                                                ],
                                                "type": null,
                                                "accessModifier": null,
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 23
                                            },
                                            "contents": {
                                                "kind": 196712,
                                                "text": "ok",
                                                "rawText": "ok",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 29
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 29
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 29
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 30
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 32
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 32,
                        "period": {
                            "kind": 254,
                            "pos": 30,
                            "end": 31
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 32
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

