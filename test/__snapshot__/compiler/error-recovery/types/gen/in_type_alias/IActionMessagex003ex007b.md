# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_type_alias
> :: test: in type alias
> :: case: IActionMessage>{
## Input

`````js
type IActionMessage>{ = x extends IActionMessage>{
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type IActionMessage>{ = x extends IActionMessage>{",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "IActionMessage",
                "rawText": "IActionMessage",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 19
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196712,
                    "text": "",
                    "rawText": "",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "typeArguments": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 19,
                "end": 20
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 19
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 19
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
                            "start": 21,
                            "end": 21
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 21
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 25
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "IActionMessage",
                    "rawText": "IActionMessage",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 48
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
                        "start": 50,
                        "end": 50
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 50
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 50
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 50
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'=' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 49,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

