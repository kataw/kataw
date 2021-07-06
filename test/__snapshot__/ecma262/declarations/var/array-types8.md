# Kataw parser test case

## Input

`````js
var a: number[];
var a: ?number[];
var a: (?number)[];
var a: () => number[];
var a: typeof A[];
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
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 13
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 15
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 15
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
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
                                    "start": 23,
                                    "end": 25
                                },
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 33
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 33
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 20,
                        "end": 33
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 20,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 34
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 34,
                "end": 38
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 40
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 290,
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
                                                "start": 43,
                                                "end": 44
                                            },
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 50
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 50
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 51
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 53
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 53
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 38,
                        "end": 53
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 38,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 34,
            "end": 54
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 54,
                "end": 58
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 60
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 63
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 67
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 136,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 67,
                                            "end": 74
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 76
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 76
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 76
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 76
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 58,
                        "end": 76
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 58,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 54,
            "end": 77
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 77,
                "end": 81
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 81,
                            "end": 83
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134299891,
                                    "typeOfKeyword": {
                                        "kind": 138477613,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 91
                                    },
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 93
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 93
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 93
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 84,
                                "end": 95
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 95
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 81,
                        "end": 95
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 81,
                "end": 95
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 77,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "var a: number[];\nvar a: ?number[];\nvar a: (?number)[];\nvar a: () => number[];\nvar a: typeof A[];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
var a: number[];
var a: ? number[];

var a: (? number)[];

var a: () =>  number[];

var a: typeof A[];

```

### Diagnostics

```javascript
✔ No errors
```

