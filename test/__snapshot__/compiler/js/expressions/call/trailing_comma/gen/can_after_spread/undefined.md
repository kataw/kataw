# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/call/trailing_comma/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/call/trailing_comma/gen/can_after_spread
> :: test: can after spread
> :: case: undefined
## Input

`````js
foo(...a,);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "foo(...a,);",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 65740,
                            "argument": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2,
                            "start": 4,
                            "end": 8
                        }
                    ],
                    "trailingComma": true,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 7,
                    "end": 10
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 11
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
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

