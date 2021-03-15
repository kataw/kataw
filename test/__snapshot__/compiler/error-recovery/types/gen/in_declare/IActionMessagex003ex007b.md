# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_declare
> :: test: in declare
> :: case: IActionMessage>{
## Input

`````js
declare IActionMessage>{
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare IActionMessage>{",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "declare",
                "rawText": "declare",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "IActionMessage",
                    "rawText": "IActionMessage",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 22
                },
                "operator": ">",
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
                        "start": 24,
                        "end": 24
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 24
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 24
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 24
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 23,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

