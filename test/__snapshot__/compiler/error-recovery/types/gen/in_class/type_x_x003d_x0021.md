# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
> :: test: in class
> :: case: type x = !
## Input

`````js
type x = ! class type x = ! { field: type x = !}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type x = ! class type x = ! { field: type x = !}",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "typeArguments": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65774,
                "operator": "!",
                "operand": {
                    "kind": 66099,
                    "name": {
                        "kind": 131102,
                        "text": "type",
                        "rawText": "type",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 16,
                        "end": 21
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 10,
                        "end": 10
                    },
                    "decorators": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 10,
                    "end": 21
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "operator": "=",
                "right": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "field",
                                        "rawText": "field",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 196712,
                                        "text": "type",
                                        "rawText": "type",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 41
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 41
                                },
                                {
                                    "kind": 65597,
                                    "left": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 43
                                    },
                                    "isOptional": false,
                                    "exclamation": false,
                                    "right": {
                                        "kind": 65774,
                                        "operator": "!",
                                        "operand": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 47
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "accessModifier": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 41,
                                    "end": 47
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 47
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 48
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 48
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 48
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 21,
            "end": 48
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 42,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 47,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

