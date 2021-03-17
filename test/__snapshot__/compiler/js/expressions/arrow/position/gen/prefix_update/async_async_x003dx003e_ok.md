# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/prefix_update
> :: test: prefix update
> :: case: async async => ok
## Input

`````js
++async async => ok
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "++async async => ok",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65715,
                "operator": "++",
                "operand": {
                    "kind": 196712,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 7
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "parameters": {
                    "kind": 4325406,
                    "text": "async",
                    "rawText": "async",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
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
                "start": 7,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 19
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
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

