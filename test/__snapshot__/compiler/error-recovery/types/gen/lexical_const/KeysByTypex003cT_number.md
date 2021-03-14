# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case:  KeysByType<T, number
## Input

`````js
const x:  KeysByType<T, number= {x: KeysByType<T, number}: KeysByType<T, number
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x:  KeysByType<T, number= {x: KeysByType<T, number}: KeysByType<T, number",
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
                                "text": "KeysByType",
                                "rawText": "KeysByType",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 20
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
                                            "start": 21,
                                            "end": 22
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 21,
                                        "end": 23
                                    },
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 23,
                                        "end": 30
                                    }
                                ],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 30
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 31
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
                                            "start": 33,
                                            "end": 34
                                        },
                                        "right": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "KeysByType",
                                                "rawText": "KeysByType",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 46
                                            },
                                            "operator": "<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 48
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 48
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 48
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196712,
                                            "text": "number",
                                            "rawText": "number",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 56
                                        },
                                        "right": null,
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 56
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 56
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 57
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 57
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 57
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 57
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "KeysByType",
                            "rawText": "KeysByType",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 69
                        },
                        "operator": "<",
                        "right": {
                            "kind": 196712,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 71
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 71
                    },
                    {
                        "kind": 196712,
                        "text": "number",
                        "rawText": "number",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 72,
                        "end": 79
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 58,
                "end": 79
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 58,
            "end": 79
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

