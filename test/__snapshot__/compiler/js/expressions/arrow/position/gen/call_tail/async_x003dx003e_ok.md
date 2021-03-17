# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/call_tail
> :: test: call tail
> :: case: async => ok
## Input

`````js
foo(async => ok).bar
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "foo(async => ok).bar",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
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
                                "kind": 81936,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 4325406,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 9
                                },
                                "contents": {
                                    "kind": 196712,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 1073741824,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 9,
                        "end": 16
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 16
                },
                "expression": {
                    "kind": 196711,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 20
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 20,
                "period": {
                    "kind": 255,
                    "pos": 16,
                    "end": 17
                }
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
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
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

