# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/as_tag
> :: test: as tag
> :: case: async async => ok
## Input

`````js
async async => ok`foo`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async async => ok`foo`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81936,
                "typeParameters": null,
                "parameters": {
                    "kind": 131102,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 11
                },
                "contents": {
                    "kind": 66260,
                    "member": {
                        "kind": 196712,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 17
                    },
                    "typeArguments": null,
                    "template": {
                        "kind": 4260568,
                        "rawText": "foo",
                        "text": "foo",
                        "literal": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 17,
                        "end": 22
                    },
                    "optional": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 17,
                    "end": 22
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

