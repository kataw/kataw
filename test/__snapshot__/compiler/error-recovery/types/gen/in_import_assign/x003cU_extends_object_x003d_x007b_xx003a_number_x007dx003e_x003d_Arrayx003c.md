# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
import <U extends object = { x: number }> = Array< = <U extends object = { x: number }> = Array< ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import <U extends object = { x: number }> = Array< = <U extends object = { x: number }> = Array< ;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66156,
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 17
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 8,
                    "end": 9
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 262152,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
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
                    "start": 17,
                    "end": 24
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
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "number",
                                            "rawText": "number",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 38
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 38
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 38
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 40
                        },
                        "operator": ">",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 41
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 41
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 49
                            },
                            "operator": "<",
                            "right": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 50
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 50
                        },
                        "operator": "=",
                        "right": {
                            "kind": 83976,
                            "typeParameters": {
                                "kind": 134226153,
                                "typeParameterList": [
                                    {
                                        "kind": 134226152,
                                        "name": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 55
                                        },
                                        "constraint": {
                                            "kind": 4202663,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 63,
                                            "end": 70
                                        },
                                        "defaultType": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 74,
                                                            "end": 76
                                                        },
                                                        "isOptional": false,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 77,
                                                            "end": 84
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 74,
                                                        "end": 84
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 74,
                                                "end": 86
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 72,
                                            "end": 86
                                        },
                                        "expression": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 54,
                                        "end": 86
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 54,
                                "end": 86
                            },
                            "parameters": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 87
                            },
                            "contents": {
                                "kind": 65550,
                                "left": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 87
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
                                        "start": 89,
                                        "end": 95
                                    },
                                    "operator": "<",
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 96
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 96
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 96
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 96
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 96
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 96
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 96
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 98
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 97,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

