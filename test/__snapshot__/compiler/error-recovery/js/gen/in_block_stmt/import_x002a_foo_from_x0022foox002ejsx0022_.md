# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: import * foo from "foo.js";;
## Input

`````js
{ import * foo from "foo.js";; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ import * foo from \"foo.js\";; }",
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
                            "text": "foo.js",
                            "rawText": "foo.js",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 28
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
                        "end": 29
                    },
                    {
                        "kind": 6291526,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 30
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 32
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
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

