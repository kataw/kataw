# Kataw parser test case

## Input

`````js
interface I<T> {
    new <U extends T>(u: U): U;
}
var i: I<string>;
var y = new i(""); // y should be string
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface I<T> {\n    new <U extends T>(u: U): U;\n}\nvar i: I<string>;\nvar y = new i(\"\"); // y should be string",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "I",
                "rawText": "I",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 13
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 12,
                        "end": 13
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 12,
                "end": 13
            },
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8250,
                        "isReadOnly": false,
                        "accessModifier": null,
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
                                        "start": 26,
                                        "end": 27
                                    },
                                    "constraint": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 37
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 35,
                                        "end": 38
                                    },
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 26,
                                    "end": 37
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 26,
                            "end": 37
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "u",
                                        "rawText": "u",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "isOptional": false,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 41,
                                        "end": 44
                                    },
                                    "initializer": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 39,
                                    "end": 43
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 39,
                            "end": 43
                        },
                        "returnType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 45,
                            "end": 48
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 24,
                        "end": 48
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 16,
                "end": 48
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 50
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "i",
                            "rawText": "i",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 54,
                            "end": 56
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "I",
                                "rawText": "I",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 59
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 60,
                                        "end": 66
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 60,
                                "end": 66
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 57,
                            "end": 68
                        },
                        "initializer": null,
                        "flags": 54,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 67
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 54,
                "end": 67
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 50,
            "end": 68
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 72,
                            "end": 74
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "i",
                                "rawText": "i",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 82
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 85
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 83,
                                "end": 85
                            },
                            "flags": 76,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 86
                        },
                        "flags": 72,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 86
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 72,
                "end": 86
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 68,
            "end": 87
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
    "end": 109
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

