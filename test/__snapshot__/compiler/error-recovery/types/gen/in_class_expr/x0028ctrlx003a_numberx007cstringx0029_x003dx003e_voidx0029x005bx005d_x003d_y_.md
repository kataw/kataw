# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class_expr
> :: test: in class expr
> :: case: (ctrl: number|string) => void)[] = y;
## Input

`````js
(class { field: (ctrl: number|string) => void)[] = y; })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class { field: (ctrl: number|string) => void)[] = y; })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67174980,
                    "member": {
                        "kind": 66224,
                        "expression": {
                            "kind": 66099,
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "implementClauses": null,
                            "members": {
                                "kind": 50,
                                "elements": [
                                    {
                                        "kind": 16468,
                                        "key": {
                                            "kind": 196711,
                                            "text": "field",
                                            "rawText": "field",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 14
                                        },
                                        "isInKeyword": false,
                                        "expression": null,
                                        "isAbstract": false,
                                        "isReadOnly": false,
                                        "isOptional": false,
                                        "exclamation": false,
                                        "type": {
                                            "kind": 8287,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 134226095,
                                                "parameterList": [
                                                    {
                                                        "kind": 134226094,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "ctrl",
                                                            "rawText": "ctrl",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 17,
                                                            "end": 21
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 8432,
                                                            "types": [
                                                                {
                                                                    "kind": 4202657,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 2097152,
                                                                    "start": 22,
                                                                    "end": 29
                                                                },
                                                                {
                                                                    "kind": 4202702,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 2097152,
                                                                    "start": 30,
                                                                    "end": 36
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 29,
                                                            "end": 36
                                                        },
                                                        "initializer": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 17,
                                                        "end": 36
                                                    }
                                                ],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 17,
                                                "end": 36
                                            },
                                            "returnType": {
                                                "kind": 4202742,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 40,
                                                "end": 45
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 15,
                                            "end": 45
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isStatic": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 524352,
                                        "start": 8,
                                        "end": 45
                                    }
                                ],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 8,
                                "end": 45
                            },
                            "decorators": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 45
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
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
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 52
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 52
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 45,
            "length": 0
        },
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
            "message": "Declaration or statement expected",
            "start": 54,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 55,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

