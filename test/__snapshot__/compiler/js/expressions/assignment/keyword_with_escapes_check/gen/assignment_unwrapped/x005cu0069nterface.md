# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/assignment/keyword_with_escapes_check/gen/assignment_unwrapped
> :: test: assignment unwrapped
> :: case: \u0069nterface
## Input

`````js
\u0069nterface = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\\u0069nterface = x;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "interface",
                    "rawText": "\\u0069nterface",
                    "flags": 8388608,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 14
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
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

