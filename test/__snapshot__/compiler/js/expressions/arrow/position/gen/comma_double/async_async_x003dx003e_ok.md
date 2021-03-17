# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/comma_double
> :: test: comma double
> :: case: async async => ok
## Input

`````js
async async => ok, async async => ok
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async async => ok, async async => ok",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
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
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 196712,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 17
                        },
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
                                "start": 24,
                                "end": 30
                            },
                            "contents": {
                                "kind": 196712,
                                "text": "ok",
                                "rawText": "ok",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 36
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 36
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 36
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 36
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
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

