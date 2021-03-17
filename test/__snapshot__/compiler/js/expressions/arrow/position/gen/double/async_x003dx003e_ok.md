# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/double
> :: test: double
> :: case: async => ok
## Input

`````js
async => ok async => ok
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async => ok async => ok",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "parameters": {
                    "kind": 4325406,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "contents": {
                    "kind": 196712,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 11
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
                    "start": 11,
                    "end": 17
                },
                "contents": {
                    "kind": 196712,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 23
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
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

