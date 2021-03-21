# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: import {} from 'x'
## Input

`````js
{ import {} from 'x' }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ import {} from 'x' }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 110,
                        "fromClause": {
                            "kind": 4261583,
                            "text": "x",
                            "rawText": "x",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 20
                        },
                        "moduleSpecifier": null,
                        "importClause": {
                            "kind": 109,
                            "defaultBinding": null,
                            "nameSpaceImport": null,
                            "namedImports": {
                                "kind": 153,
                                "importsList": {
                                    "kind": 115,
                                    "specifiers": [],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 10
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 11
                            },
                            "isTypeOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 20
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 20
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

