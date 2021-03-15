# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\with_abstract_modifier
> :: test: with abstract modifier
> :: case:  KeysByType<T, number
## Input

`````js
absrtact  KeysByType<T, number
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "absrtact  KeysByType<T, number",
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
                            "start": 8,
                            "end": 20
                        },
                        "operator": "<",
                        "right": {
                            "kind": 196712,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 22
                    },
                    {
                        "kind": 196712,
                        "text": "number",
                        "rawText": "number",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 30
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
            "end": 30
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

