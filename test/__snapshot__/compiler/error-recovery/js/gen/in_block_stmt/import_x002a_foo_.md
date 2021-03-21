# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: import * foo ;;
## Input

`````js
{ import * foo ;; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ import * foo ;; }",
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
                            "start": 14,
                            "end": 14
                        },
                        "moduleSpecifier": null,
                        "importClause": {
                            "kind": 109,
                            "defaultBinding": null,
                            "nameSpaceImport": {
                                "kind": 131102,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 10,
                                "end": 14
                            },
                            "namedImports": null,
                            "isTypeOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 16
                    },
                    {
                        "kind": 6291526,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 17
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'as' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'from' expected.",
            "start": 15,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

