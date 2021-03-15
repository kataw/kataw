# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/yield/gen/simple
> :: test: simple
> :: case: yield 3 + yield 4;
## Input

`````js
yield 3 + yield 4;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "yield 3 + yield 4;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "yield",
                "rawText": "yield",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 4261540,
                    "text": 3,
                    "rawText": "3",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "operator": "+",
                "right": {
                    "kind": 196712,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 5,
            "end": 15
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 4,
                "rawText": "4",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 15,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 16,
            "length": 0
        }
    ],
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

