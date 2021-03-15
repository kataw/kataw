# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class
> :: test: in class
> :: case: @{x20ac}@
## Input

`````js
@{x20ac}@ class @{x20ac}@ { field: @{x20ac}@}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "@{x20ac}@ class @{x20ac}@ { field: @{x20ac}@}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": null,
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 1,
                "end": 1
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 1,
            "end": 7
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "field",
                            "rawText": "field",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 17
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 18
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 18
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 9,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 0,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 8,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 19,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 20,
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

