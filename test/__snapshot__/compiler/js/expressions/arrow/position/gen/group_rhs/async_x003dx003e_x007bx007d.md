# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/group_rhs
> :: test: group rhs
> :: case: async => {}
## Input

`````js
x * (async => {})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x * (async => {})",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "*",
                "right": {
                    "kind": 66224,
                    "expression": {
                        "kind": 81936,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 4325406,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 16
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 17
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
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

