# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_interface
> :: test: in interface
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
interface <U extends object = { x: number }> = Array< {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface <U extends object = { x: number }> = Array< {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "interface",
                    "rawText": "interface",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 9
                },
                "operator": "<",
                "right": {
                    "kind": 196712,
                    "text": "U",
                    "rawText": "U",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "object",
                    "rawText": "object",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 27
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "number",
                                            "rawText": "number",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 41
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 41
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 43
                        },
                        "operator": ">",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 44
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 44
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "Array",
                            "rawText": "Array",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 52
                        },
                        "operator": "<",
                        "right": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 55
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 56
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 56
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 56
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 56
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 56
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

