# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/js/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/import-call/gen/lexical
> :: test: lexical
> :: case: async () => { await import(x) }
## Input

`````js
async () => { await import(x) }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "async () => { await import(x) }",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81936,
                "typeParameters": null,
                "parameters": {
                    "kind": 81929,
                    "elements": [],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 65559,
                                    "expression": {
                                        "kind": 66156,
                                        "typeArguments": null,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 262152,
                                        "start": 19,
                                        "end": 29
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 32780,
                                    "start": 13,
                                    "end": 29
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 29
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 29
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 31
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
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
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

