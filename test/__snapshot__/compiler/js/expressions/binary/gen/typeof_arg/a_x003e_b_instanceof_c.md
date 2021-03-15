# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/binary/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\binary\gen\typeof_arg
> :: test: typeof arg
> :: case: a > b instanceof c
## Input

`````js
typeof a > b instanceof c
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "typeof a > b instanceof c",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 65774,
                        "operator": "typeof",
                        "operand": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 8
                    },
                    "operator": ">",
                    "right": {
                        "kind": 196712,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "operator": "instanceof",
                "right": {
                    "kind": 196712,
                    "text": "c",
                    "rawText": "c",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 25
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
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

