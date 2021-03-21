# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: import m ;;'baz';
## Input

`````js
{ import m ;;'baz'; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ import m ;;'baz'; }",
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
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "moduleSpecifier": null,
                        "importClause": {
                            "kind": 109,
                            "defaultBinding": {
                                "kind": 131102,
                                "text": "m",
                                "rawText": "m",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 8,
                                "end": 10
                            },
                            "nameSpaceImport": null,
                            "namedImports": null,
                            "isTypeOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 12
                    },
                    {
                        "kind": 6291526,
                        "flags": 33554432,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 13
                    },
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 4261583,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 19
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'from' expected.",
            "start": 11,
            "length": 0
        }
    ],
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

