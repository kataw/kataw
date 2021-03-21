# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_arrow_body
> :: test: in arrow body
> :: case: export * as
## Input

`````js
([ export * as ]) => {x = {export * as}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ export * as ]) => {x = {export * as}}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 2
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
                    "start": 14,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 14
            },
            "fromClause": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 2,
            "end": 14
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
                                "start": 22,
                                "end": 23
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
                                            "start": 27,
                                            "end": 33
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "as",
                                            "rawText": "as",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 38
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 38
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 39
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 39
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 39
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 34,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

