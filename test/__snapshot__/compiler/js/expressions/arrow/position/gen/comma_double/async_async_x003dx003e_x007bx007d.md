# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/comma_double
> :: test: comma double
> :: case: async async => {}
## Input

`````js
async async => {}, async async => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async async => {}, async async => {}",
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
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
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
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
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

