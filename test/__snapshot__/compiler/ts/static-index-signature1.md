# Kataw parser test case

## Input

`````js
class DD extends D {
    static readonly [s: string]: 421
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class DD extends D {\n    static readonly [s: string]: 421\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "DD",
                "rawText": "DD",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 8
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "D",
                    "rawText": "D",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 73844,
                        "accessModifier": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "s",
                                        "rawText": "s",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 42,
                                        "end": 43
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 44,
                                        "end": 51
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 42,
                                    "end": 51
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 42,
                            "end": 51
                        },
                        "returnType": {
                            "kind": 8355,
                            "text": 421,
                            "rawText": "421",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 53,
                            "end": 57
                        },
                        "isStatic": true,
                        "isReadOnly": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 42,
                        "end": 57
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 20,
                "end": 59
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 59
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
    "end": 59
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

