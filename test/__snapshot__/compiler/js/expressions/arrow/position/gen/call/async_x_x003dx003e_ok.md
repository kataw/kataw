# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/call
> :: test: call
> :: case: async x => ok
## Input

`````js
async x => ok()
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async x => ok()",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81936,
                "typeParameters": null,
                "parameters": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "contents": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 196712,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 13
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
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
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

