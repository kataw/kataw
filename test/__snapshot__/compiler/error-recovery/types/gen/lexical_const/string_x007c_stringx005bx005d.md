# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: string | string[]
## Input

`````js
const x: string | string[]= {x:string | string[]}:string | string[]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: string | string[]= {x:string | string[]}:string | string[]",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
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
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 8,
                                    "end": 15
                                },
                                {
                                    "kind": 8199,
                                    "elementType": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 17,
                                        "end": 24
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 17,
                                    "end": 27
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 15,
                            "end": 26
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
                                            "start": 29,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "string",
                                                "rawText": "string",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 67174980,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "string",
                                                    "rawText": "string",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 46
                                                },
                                                "expression": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 46
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 48
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 48
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 48
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 48
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 49
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 49
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 49
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 49
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "string",
                    "rawText": "string",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 56
                },
                "operator": "|",
                "right": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "string",
                        "rawText": "string",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 65
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 65
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 67
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 50,
                "end": 67
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 50,
            "end": 67
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 47,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 49,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 66,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

