# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_head_and_body
> :: test: in arrow head and body
> :: case: export * as
## Input

`````js
(export * as) => {x = {export * as}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(export * as) => {x = {export * as}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
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
                    "start": 12,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "fromClause": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 1,
            "end": 12
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 65550,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 196711,
                                            "text": "export",
                                            "rawText": "export",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 29
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "as",
                                            "rawText": "as",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 34
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 34
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 35
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 35
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 35
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 36
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 30,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

