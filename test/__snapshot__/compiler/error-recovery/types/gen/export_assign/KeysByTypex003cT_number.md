# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
> :: test: export assign
> :: case:  KeysByType<T, number
## Input

`````js
export  KeysByType<T, number =  KeysByType<T, number
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export  KeysByType<T, number =  KeysByType<T, number",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "KeysByType",
                            "rawText": "KeysByType",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 18
                        },
                        "operator": "<",
                        "right": {
                            "kind": 196712,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 20
                    },
                    {
                        "kind": 65550,
                        "left": {
                            "kind": 196712,
                            "text": "number",
                            "rawText": "number",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 28
                        },
                        "operator": "=",
                        "right": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "KeysByType",
                                "rawText": "KeysByType",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 42
                            },
                            "operator": "<",
                            "right": {
                                "kind": 196712,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 44
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 44
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 44
                    },
                    {
                        "kind": 196712,
                        "text": "number",
                        "rawText": "number",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 52
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 52
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 52
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
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

