# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/template_tail
> :: test: template tail
> :: case: async x => ok
## Input

`````js
`a ${async x => ok} b`.length
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "`a ${async x => ok} b`.length",
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
                                "kind": 81936,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 10,
                                    "end": 12
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 18
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 18
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 18
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
                        "start": 18,
                        "end": 22
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 22
                },
                "expression": {
                    "kind": 196711,
                    "text": "length",
                    "rawText": "length",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 29
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 29,
                "period": {
                    "kind": 255,
                    "pos": 22,
                    "end": 23
                }
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

