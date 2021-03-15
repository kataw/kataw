# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class_expr
> :: test: in class expr
> :: case: x + y
## Input

`````js
(class { field: x + y })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class { field: x + y })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65563,
                    "left": {
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 15,
                                        "end": 19
                                    },
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isStatic": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 524352,
                                    "start": 8,
                                    "end": 17
                                }
                            ],
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 8,
                            "end": 17
                        },
                        "decorators": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 17
                    },
                    "operator": "+",
                    "right": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 21
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 23,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

