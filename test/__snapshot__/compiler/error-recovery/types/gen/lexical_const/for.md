# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_const
> :: test: lexical const
> :: case: for
## Input

`````js
const x: for= {x:for}:for
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: for= {x:for}:for",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "for",
                                "rawText": "for",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 13
                        },
                        "initializer": {
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
                                            "start": 15,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "for",
                                        "rawText": "for",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 20
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 21
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 21
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 21
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 21
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "condition": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "incrementor": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "isVariableDeclarationList": false,
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 25
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 25
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 22,
            "end": 25
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 22,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

