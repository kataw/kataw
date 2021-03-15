# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: var [...await f] = [];
## Input

`````js
var [...await f] = [];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var [...await f] = [];",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 4097,
                                        "start": 5,
                                        "end": 13
                                    },
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 13,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 5,
                                "end": 15
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 16
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 21
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 14,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

