# Kataw parser test case

## Input

`````js
let x = (): Array<(string) => number> => []
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 9
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "typeParameters": {
                                        "kind": 310,
                                        "typeInstantiations": {
                                            "kind": 309,
                                            "types": [
                                                {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 288,
                                                        "typeParameters": null,
                                                        "arrowTypeParameterList": {
                                                            "kind": 292,
                                                            "parameters": [
                                                                {
                                                                    "kind": 284,
                                                                    "ellipsisToken": null,
                                                                    "name": {
                                                                        "kind": 134234347,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 19,
                                                                        "end": 25
                                                                    },
                                                                    "optionalToken": null,
                                                                    "types": null,
                                                                    "flags": 2097152,
                                                                    "transformFlags": 0,
                                                                    "start": 18,
                                                                    "end": 26
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 18,
                                                            "end": 26
                                                        },
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 29
                                                        },
                                                        "returnType": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "transformFlags": 0,
                                                                "start": 29,
                                                                "end": 36
                                                            },
                                                            "flags": 2097152,
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 36
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 36
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 18,
                                                    "end": 36
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 36
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 17,
                                        "end": 37
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 37
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 37
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 40
                            },
                            "contents": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 42
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 40,
                                "end": 43
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 43
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 43
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 43
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "let x = (): Array<(string) => number> => []",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
let x = () => [];
```

### Diagnostics

```javascript
✔ No errors
```

