# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/template_tail
> :: test: template tail
> :: case: async => ok
## Input

`````js
`a ${async => ok} b`.length
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`a ${async => ok} b`.length",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 66261,
                    "spans": [
                        {
                            "kind": 66263,
                            "rawText": "a ",
                            "text": "a ",
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
                                    "start": 5,
                                    "end": 10
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 16
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 16
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 16
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": " b",
                        "text": " b",
                        "literal": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 16,
                        "end": 20
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 20
                },
                "expression": {
                    "kind": 196711,
                    "text": "length",
                    "rawText": "length",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 27
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 27,
                "period": {
                    "kind": 255,
                    "pos": 20,
                    "end": 21
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
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
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

