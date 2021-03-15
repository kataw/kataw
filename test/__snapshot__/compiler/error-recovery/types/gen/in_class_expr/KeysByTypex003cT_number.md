# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_class_expr
> :: test: in class expr
> :: case:  KeysByType<T, number
## Input

`````js
(class { field:  KeysByType<T, number })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "(class { field:  KeysByType<T, number })",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
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
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "KeysByType",
                                        "rawText": "KeysByType",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 27
                                    },
                                    "typeArguments": {
                                        "kind": 8419,
                                        "typeArgumentsList": [
                                            {
                                                "kind": 134226156,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 29
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 28,
                                                "end": 30
                                            },
                                            {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 30,
                                                "end": 37
                                            }
                                        ],
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 28,
                                        "end": 37
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 15,
                                    "end": 39
                                },
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isStatic": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 524352,
                                "start": 8,
                                "end": 37
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 8,
                        "end": 39
                    },
                    "decorators": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 39
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 40
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 38,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

