# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\with_abstract_modifier
> :: test: with abstract modifier
> :: case: { [index: number]:
## Input

`````js
absrtact { [index: number]:
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "absrtact { [index: number]:",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "absrtact",
                "rawText": "absrtact",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
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
                                        "kind": 196712,
                                        "text": "index",
                                        "rawText": "index",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 17
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 17
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 17
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "number",
                "rawText": "number",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 18,
            "end": 25
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 26,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

