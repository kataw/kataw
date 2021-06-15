# Kataw parser test case

## Input

`````js
var a: number[];

var a: (() => number)[];

var a: () => number[];

var a: number[][];

var a: number
[];

var a: (?number)[];
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
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 6,
                                    "end": 13
                                },
                                "flags": 2097152,
                                "start": 6,
                                "end": 15
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 15
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 16,
                "end": 21
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
                            "start": 21,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 288,
                                        "arrowTypeParameterList": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 28,
                                            "end": 31
                                        },
                                        "arrowToken": {
                                            "kind": 292,
                                            "parameters": [
                                                []
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 24,
                                            "end": 31
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 31,
                                                "end": 38
                                            },
                                            "flags": 2097152,
                                            "start": 31,
                                            "end": 38
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 24,
                                        "end": 38
                                    },
                                    "flags": 2097152,
                                    "start": 24,
                                    "end": 39
                                },
                                "flags": 2097152,
                                "start": 24,
                                "end": 41
                            },
                            "flags": 2097152,
                            "start": 24,
                            "end": 41
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 21,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 21,
                "end": 41
            },
            "flags": 16,
            "start": 16,
            "end": 42
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 42,
                "end": 47
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
                            "start": 47,
                            "end": 49
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 52,
                                    "end": 52
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 53,
                                    "end": 56
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
                                            "start": 56,
                                            "end": 63
                                        },
                                        "flags": 2097152,
                                        "start": 56,
                                        "end": 65
                                    },
                                    "flags": 2097152,
                                    "start": 56,
                                    "end": 65
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 50,
                                "end": 65
                            },
                            "flags": 2097152,
                            "start": 50,
                            "end": 65
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 47,
                        "end": 65
                    }
                ],
                "flags": 16,
                "start": 47,
                "end": 65
            },
            "flags": 16,
            "start": 42,
            "end": 66
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 66,
                "end": 71
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
                            "start": 71,
                            "end": 73
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 74,
                                        "end": 81
                                    },
                                    "flags": 2097152,
                                    "start": 74,
                                    "end": 83
                                },
                                "flags": 2097152,
                                "start": 74,
                                "end": 85
                            },
                            "flags": 2097152,
                            "start": 74,
                            "end": 85
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 71,
                        "end": 85
                    }
                ],
                "flags": 16,
                "start": 71,
                "end": 85
            },
            "flags": 16,
            "start": 66,
            "end": 86
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 86,
                "end": 91
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
                            "start": 91,
                            "end": 93
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 94,
                                "end": 101
                            },
                            "flags": 2097152,
                            "start": 94,
                            "end": 101
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 91,
                        "end": 101
                    }
                ],
                "flags": 16,
                "start": 91,
                "end": 101
            },
            "flags": 16,
            "start": 86,
            "end": 101
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 103,
                    "end": 103
                },
                "flags": 33,
                "start": 101,
                "end": 104
            },
            "flags": 16,
            "start": 101,
            "end": 105
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 105,
                "end": 110
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
                            "start": 110,
                            "end": 112
                        },
                        "optionalToken": null,
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
                                                "start": 115,
                                                "end": 116
                                            },
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 116,
                                                "end": 122
                                            },
                                            "flags": 2097152,
                                            "start": 115,
                                            "end": 122
                                        },
                                        "flags": 2097152,
                                        "start": 115,
                                        "end": 122
                                    },
                                    "flags": 2097152,
                                    "start": 113,
                                    "end": 123
                                },
                                "flags": 2097152,
                                "start": 113,
                                "end": 125
                            },
                            "flags": 2097152,
                            "start": 113,
                            "end": 125
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 110,
                        "end": 125
                    }
                ],
                "flags": 16,
                "start": 110,
                "end": 125
            },
            "flags": 16,
            "start": 105,
            "end": 126
        }
    ],
    "isModule": false,
    "source": "var a: number[];\n\nvar a: (() => number)[];\n\nvar a: () => number[];\n\nvar a: number[][];\n\nvar a: number\n[];\n\nvar a: (?number)[];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 126
}
```

### Printed

```javascript

var a: [ number ];
var a: [  ];
var a: ;
var a: [ [ number ] ];
var a: number;
[];
var a: [  ];
```

### Diagnostics

```javascript
✔ No errors
```

