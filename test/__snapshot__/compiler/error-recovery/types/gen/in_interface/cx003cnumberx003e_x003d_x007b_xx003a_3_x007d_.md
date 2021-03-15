# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_interface
> :: test: in interface
> :: case: c<number> = { x: 3 };
## Input

`````js
interface c<number> = { x: 3 }; {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface c<number> = { x: 3 }; {}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "c",
                "rawText": "c",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "number",
                            "rawText": "number",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 18
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 12,
                        "end": 18
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 12,
                "end": 18
            },
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 19,
                "end": 19
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 19
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4261540,
                                "text": 3,
                                "rawText": "3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 28
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 28
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 30
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 31
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 31,
            "end": 34
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 20,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

