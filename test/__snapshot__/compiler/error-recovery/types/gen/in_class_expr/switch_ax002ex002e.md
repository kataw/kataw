# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class_expr
> :: test: in class expr
> :: case: switch a..
## Input

`````js
(class { field: switch a.. })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class { field: switch a.. })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 67175096,
                        "member": {
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
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "switch",
                                                "rawText": "switch",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 15,
                                            "end": 24
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isStatic": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 524352,
                                        "start": 8,
                                        "end": 22
                                    },
                                    {
                                        "kind": 16468,
                                        "key": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "isInKeyword": false,
                                        "expression": null,
                                        "isAbstract": false,
                                        "isReadOnly": false,
                                        "isOptional": false,
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isStatic": false,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 524352,
                                        "start": 22,
                                        "end": 24
                                    }
                                ],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 8,
                                "end": 24
                            },
                            "decorators": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 24
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "",
                            "rawText": "",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 25
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 25,
                        "period": {
                            "kind": 255,
                            "pos": 24,
                            "end": 25
                        }
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "",
                        "rawText": "",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26,
                    "period": {
                        "kind": 255,
                        "pos": 25,
                        "end": 26
                    }
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 28,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

