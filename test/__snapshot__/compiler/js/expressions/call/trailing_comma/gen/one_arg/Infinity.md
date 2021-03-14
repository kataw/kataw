# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/call/trailing_comma/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\call\trailing_comma\gen\one_arg
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/call/trailing_comma/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/call/trailing_comma/gen/one_arg
>>>>>>> chore: autogen & update snapshots
> :: test: one arg
> :: case: Infinity
## Input

`````js
foo(x,);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "foo(x,);",
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
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 5
                        }
                    ],
                    "trailingComma": true,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 5,
                    "end": 7
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
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
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

