# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/import-call/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\import-call\gen\new-expr
> :: test: new-expr
> :: case: import(x,import(y))
## Input

`````js
import(x,import(y))
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import(x,import(y))",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 66156,
                        "typeArguments": null,
                        "expression": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 262152,
                        "start": 0,
                        "end": 8
                    },
                    {
                        "kind": 66156,
                        "typeArguments": null,
                        "expression": {
                            "kind": 196712,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 262152,
                        "start": 9,
                        "end": 18
                    }
                ],
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        }
    ],
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

