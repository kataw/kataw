# Kataw parser test case

## Input

`````js
declare var x3: ?(() => (() => number));
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
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x3",
                            "rawText": "x3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 14
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 17
                                },
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 288,
                                        "typeParameters": null,
                                        "arrowTypeParameterList": {
                                            "kind": 292,
                                            "parameters": [
                                                []
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 20
                                        },
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 290,
                                                "type": {
                                                    "kind": 288,
                                                    "typeParameters": null,
                                                    "arrowTypeParameterList": {
                                                        "kind": 292,
                                                        "parameters": [
                                                            []
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 27
                                                    },
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 27,
                                                        "end": 30
                                                    },
                                                    "returnType": {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 37
                                                        },
                                                        "flags": 2097152,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 37
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 37
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 38
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 38
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 38
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 39
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 39
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 39
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 11,
                        "end": 39
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 39
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "declare var x3: ?(() => (() => number));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
declare var x3: ? (() => (() => number));
```

### Diagnostics

```javascript
✔ No errors
```

