# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/comma_lhs
> :: test: comma lhs
> :: case: async async => {}
## Input

`````js
async async => {}, a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async async => {}, a",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 81936,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 131102,
                            "text": "async",
                            "rawText": "async",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 11
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
                                "start": 16,
                                "end": 16
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 1073741824,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 17
                    },
                    {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
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
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

