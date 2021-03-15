# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_const
> :: test: lexical const
> :: case: never break?=
## Input

`````js
const x: never break?== {x:never break?=}:never break?=
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: never break?== {x:never break?=}:never break?=",
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
                            "kind": 4202651,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 14
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 14
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097193,
            "label": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 20
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "operator": "==",
                "right": {
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
                                    "start": 25,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 196712,
                                    "text": "never",
                                    "rawText": "never",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 32
                                },
                                "accessModifier": null,
                                "decorators": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 32
                            },
                            {
                                "kind": 65597,
                                "left": {
                                    "kind": 196712,
                                    "text": "break",
                                    "rawText": "break",
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 38
                                },
                                "isOptional": true,
                                "exclamation": false,
                                "right": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 40
                                },
                                "accessModifier": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 32,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 40
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 41
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 41
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 41
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "never",
                "rawText": "never",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 42,
                "end": 47
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 42,
            "end": 47
        },
        {
            "kind": 2097193,
            "label": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 53
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 47,
            "end": 53
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 15,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 20,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 33,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 40,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 53,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 54,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

