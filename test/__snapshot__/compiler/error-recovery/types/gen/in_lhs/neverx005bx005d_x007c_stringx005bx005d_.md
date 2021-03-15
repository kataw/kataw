# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_lhs
> :: test: in lhs
> :: case:  never[] | string[];
## Input

`````js
 function (x: never[] | string[]; =  never[] | string[];) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " function (x: never[] | string[]; =  never[] | string[];) {}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 9,
                "end": 9
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 12
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 8199,
                                    "elementType": {
                                        "kind": 4202651,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 13,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 13,
                                    "end": 23
                                },
                                {
                                    "kind": 8199,
                                    "elementType": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 23,
                                        "end": 30
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 23,
                                    "end": 33
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 32
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 33
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 33
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 196712,
                        "text": "never",
                        "rawText": "never",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 42
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 42
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
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
                        "start": 46,
                        "end": 53
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 53
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 55
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 55
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 56
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 59,
                "end": 59
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 57,
            "end": 60
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 32,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 43,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An element access expression should take an argument",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 56,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

