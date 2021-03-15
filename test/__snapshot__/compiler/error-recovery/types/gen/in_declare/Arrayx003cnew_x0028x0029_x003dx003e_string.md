# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_declare
> :: test: in declare
> :: case:  Array<new () => string
## Input

`````js
declare  Array<new () => string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare  Array<new () => string",
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
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 14
                },
                "operator": "<",
                "right": {
                    "kind": 66204,
                    "expression": {
                        "kind": 81929,
                        "elements": [],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 18
                    },
                    "typeArguments": null,
                    "argumentList": null,
                    "flags": 15,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 21
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "string",
                "rawText": "string",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 31
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 31
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

