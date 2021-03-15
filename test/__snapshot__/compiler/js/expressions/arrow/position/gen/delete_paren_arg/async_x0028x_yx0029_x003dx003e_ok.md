# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/delete_paren_arg
> :: test: delete paren arg
> :: case: async (x, y) => ok
## Input

`````js
delete (async (x, y) => ok)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "delete (async (x, y) => ok)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "delete",
                "operand": {
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
                                        "start": 17,
                                        "end": 19
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
                                    "start": 17,
                                    "end": 20
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
                                        "start": 15,
                                        "end": 16
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
                                    "start": 17,
                                    "end": 20
                                }
                            ],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 20
                        },
                        "contents": {
                            "kind": 196712,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 26
                        },
                        "flags": 1073741824,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 26
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
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
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

