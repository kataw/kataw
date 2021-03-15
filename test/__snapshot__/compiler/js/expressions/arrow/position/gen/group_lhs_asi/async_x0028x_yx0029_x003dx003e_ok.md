# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/group_lhs_asi
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
    "kind": 2243,
    "source": "(async (x, y) => ok)\n* x",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 66224,
                    "expression": {
                        "kind": 81936,
                        "typeParameters": null,
                        "arrowParameters": {
                            "kind": 81929,
                            "elements": [
                                {
                                    "kind": 16473,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "symbol": null,
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
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 10,
                                    "end": 13
                                },
                                {
                                    "kind": 16473,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
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
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 10,
                                    "end": 13
                                }
                            ],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 13
                        },
                        "contents": {
                            "kind": 196712,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 1073741824,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 19
                    },
                    "flags": 32768,
                    "symbol": null,
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
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
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

