# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: class x {}
## Input

`````js
{[ class x {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{[ class x {}",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 66099,
                                        "name": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "typeParameters": null,
                                        "classHeritage": null,
                                        "implementClauses": null,
                                        "members": {
                                            "kind": 50,
                                            "elements": [],
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 2,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 13
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 13
                        },
                        "flags": 0,
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
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 12,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

