# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/binary/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\binary\gen\toplevel
> :: test: toplevel
> :: case: a instanceof b + c
## Input

`````js
a instanceof b + c
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "a instanceof b + c",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "instanceof",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "operator": "+",
                    "right": {
                        "kind": 196712,
                        "text": "c",
                        "rawText": "c",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
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
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

