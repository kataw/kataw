# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\expression
> :: test: expression
> :: case: fooo.bar
## Input

`````js
(class B extends fooo.bar {})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class B extends fooo.bar {})",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": {
                        "kind": 131102,
                        "text": "B",
                        "rawText": "B",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 52,
                        "expression": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "fooo",
                                "rawText": "fooo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 21
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 25,
                            "period": {
                                "kind": 255,
                                "pos": 21,
                                "end": 22
                            }
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 25
                    },
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 27,
                        "end": 28
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 29
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
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

