# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\yield\gen\simple
> :: test: simple
> :: case: await.b[c] => async
## Input

`````js
await.b[c] => async
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "await.b[c] => async",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67174980,
                "member": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "await",
                        "rawText": "await",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 5
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7,
                    "period": {
                        "kind": 255,
                        "pos": 5,
                        "end": 6
                    }
                },
                "expression": {
                    "kind": 196712,
                    "text": "c",
                    "rawText": "c",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "async",
                "rawText": "async",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
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

