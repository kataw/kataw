# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_let
> :: test: lexical let
> :: case:  Array<new () => string
## Input

`````js
let x:  Array<new () => string  Array<new () => string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x:  Array<new () => string  Array<new () => string",
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
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 13
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 8251,
                                        "isAbstract": false,
                                        "isReadOnly": false,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 19,
                                            "end": 19
                                        },
                                        "returnType": {
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
                                        "start": 14,
                                        "end": 30
                                    },
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "Array",
                                            "rawText": "Array",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 37
                                        },
                                        "typeArguments": {
                                            "kind": 8419,
                                            "typeArgumentsList": [
                                                {
                                                    "kind": 8251,
                                                    "isAbstract": false,
                                                    "isReadOnly": false,
                                                    "accessModifier": null,
                                                    "typeParameters": null,
                                                    "parameters": {
                                                        "kind": 134226095,
                                                        "parameterList": [],
                                                        "trailingcomma": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 43,
                                                        "end": 43
                                                    },
                                                    "returnType": {
                                                        "kind": 4202702,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 47,
                                                        "end": 54
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 38,
                                                    "end": 54
                                                }
                                            ],
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 38,
                                            "end": 54
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 30,
                                        "end": 54
                                    }
                                ],
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 14,
                                "end": 54
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 54
                        },
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 54
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 54
            },
            "flags": 24,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 48,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

