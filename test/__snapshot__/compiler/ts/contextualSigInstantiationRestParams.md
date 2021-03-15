# Kataw parser test case

## Input

`````js
declare function toInstantiate<A, B>(a?: A, b?: B): B;
declare function contextual(...s: string[]): string

var sig: typeof contextual = toInstantiate;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare function toInstantiate<A, B>(a?: A, b?: B): B;\ndeclare function contextual(...s: string[]): string\n\nvar sig: typeof contextual = toInstantiate;",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "toInstantiate",
                "rawText": "toInstantiate",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 16,
                "end": 30
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 37,
                            "end": 38
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "A",
                                "rawText": "A",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 42
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 40,
                            "end": 43
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 37,
                        "end": 42
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 43,
                            "end": 45
                        },
                        "isOptional": true,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "B",
                                "rawText": "B",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 49
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 47,
                            "end": 50
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 43,
                        "end": 49
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 50
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "B",
                    "rawText": "B",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 53
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 51,
                "end": 54
            },
            "contents": null,
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "A",
                            "rawText": "A",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 32
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 31,
                        "end": 32
                    },
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "B",
                            "rawText": "B",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 35
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 33,
                        "end": 35
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 31,
                "end": 35
            },
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 54
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "contextual",
                "rawText": "contextual",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 71,
                "end": 82
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 86,
                            "end": 87
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 88,
                                "end": 95
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 88,
                            "end": 98
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 83,
                        "end": 97
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 83,
                "end": 98
            },
            "type": {
                "kind": 4202702,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 99,
                "end": 106
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 62,
            "end": 106
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
                            "text": "sig",
                            "rawText": "sig",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 111,
                            "end": 115
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8427,
                            "exprName": {
                                "kind": 196711,
                                "text": "contextual",
                                "rawText": "contextual",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 134
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 116,
                            "end": 134
                        },
                        "initializer": {
                            "kind": 196712,
                            "text": "toInstantiate",
                            "rawText": "toInstantiate",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 150
                        },
                        "flags": 111,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 150
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 111,
                "end": 150
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 106,
            "end": 151
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
    "end": 151
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

