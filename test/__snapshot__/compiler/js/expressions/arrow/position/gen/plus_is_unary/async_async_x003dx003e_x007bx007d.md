# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/arrow/position/gen/plus_is_unary
> :: test: plus is unary
> :: case: async async => {}
## Input

`````js
async async => {}
+ x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async async => {}\n+ x",
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
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "flags": 1073774592,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "+",
                "operand": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 21
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
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

