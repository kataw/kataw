# Kataw parser test case

## Input

`````js
interface Generic<T> {
    x: T;
}

var y: Generic<number> = { x: 3 };

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface Generic<T> {\n    x: T;\n}\n\nvar y: Generic<number> = { x: 3 };\n",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Generic",
                "rawText": "Generic",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 17
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
                            "start": 18,
                            "end": 19
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 18,
                        "end": 19
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 18,
                "end": 19
            },
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 28
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 29,
                            "end": 32
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 22,
                        "end": 32
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 22,
                "end": 32
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 34
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
                            "start": 39,
                            "end": 41
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Generic",
                                "rawText": "Generic",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 50
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 51,
                                        "end": 57
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 51,
                                "end": 57
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 42,
                            "end": 60
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
                                            "start": 62,
                                            "end": 64
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 67
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 62,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 67
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 69
                        },
                        "flags": 39,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 69
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 69
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 70
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
    "end": 71
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

