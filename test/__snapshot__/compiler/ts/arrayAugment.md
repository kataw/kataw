# Kataw parser test case

## Input

`````js
interface Array<T> {
    split: (parts: number) => T[][];
}

var x = [''];
var y = x.split(4);
var y: string[][]; // Expect no error here
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface Array<T> {\n    split: (parts: number) => T[][];\n}\n\nvar x = [''];\nvar y = x.split(4);\nvar y: string[][]; // Expect no error here",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Array",
                "rawText": "Array",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 15
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
                            "start": 16,
                            "end": 17
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 16,
                        "end": 17
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 16,
                "end": 17
            },
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "split",
                            "rawText": "split",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 30
                        },
                        "isOptional": false,
                        "accessModifier": null,
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
                                            "text": "parts",
                                            "rawText": "parts",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 33,
                                            "end": 38
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 39,
                                            "end": 46
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 33,
                                        "end": 46
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 33,
                                "end": 46
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8199,
                                    "elementType": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 50,
                                            "end": 52
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 50,
                                        "end": 53
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 50,
                                    "end": 55
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 50,
                                "end": 57
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 31,
                            "end": 56
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 20,
                        "end": 57
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 20,
                "end": 57
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 59
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 64,
                            "end": 66
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 33554432,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 72
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 72
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 73
                        },
                        "flags": 64,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 73
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 64,
                "end": 73
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 59,
            "end": 74
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
                            "start": 78,
                            "end": 80
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 84
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "split",
                                    "rawText": "split",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 90
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 90,
                                "period": {
                                    "kind": 255,
                                    "pos": 84,
                                    "end": 85
                                }
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261540,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 92
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 92,
                                "end": 93
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 93
                        },
                        "flags": 78,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 93
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 78,
                "end": 93
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 74,
            "end": 94
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
                            "start": 98,
                            "end": 100
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 101,
                                    "end": 108
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 101,
                                "end": 111
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 101,
                            "end": 113
                        },
                        "initializer": null,
                        "flags": 98,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 112
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 98,
                "end": 112
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 94,
            "end": 113
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
    "end": 137
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

