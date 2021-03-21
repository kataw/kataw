# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: export * as
## Input

`````js
{ export * as }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ export * as }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 76,
                        "declaration": null,
                        "namedExports": null,
                        "exportFromClause": {
                            "kind": 78,
                            "moduleExportName": null,
                            "namedBinding": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 13
                        },
                        "fromClause": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
                        },
                        "isTypeOnly": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 13
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 13
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 14,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

