# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: import { 123 } from "foo";
## Input

`````js
{ import { 123 } from "foo"; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ import { 123 } from \"foo\"; }",
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
                            "kind": 4261540,
                            "text": 123,
                            "rawText": "123",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 14
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
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "isTypeOnly": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 14
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "from",
                "rawText": "from",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "foo",
                "rawText": "foo",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 29,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

