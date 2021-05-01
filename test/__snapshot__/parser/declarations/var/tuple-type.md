# Kataw parser test case

## Input

`````js
var x: [] = [];

var x: [number,] = [123,];

var x: [Foo<T>] = [foo];

var x: [number, string] = [123, "aladdin"];

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

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
                "flags": 0,
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "types": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 6,
                                "end": 9
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 15,
                "end": 20
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "types": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "start": 23,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 22,
                            "end": 33
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 123,
                                        "rawText": "123",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 37,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 35,
                            "end": 42
                        },
                        "flags": 16,
                        "start": 20,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 20,
                "end": 42
            },
            "flags": 16,
            "start": 15,
            "end": 43
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 43,
                "end": 48
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 48,
                            "end": 50
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Foo",
                                            "rawText": "Foo",
                                            "flags": 96,
                                            "start": 53,
                                            "end": 56
                                        },
                                        "typeParameters": {
                                            "kind": 146,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 57,
                                                        "end": 58
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 57,
                                                    "end": 58
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 56,
                                            "end": 59
                                        },
                                        "flags": 0,
                                        "start": 53,
                                        "end": 59
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 51,
                                "end": 60
                            },
                            "flags": 0,
                            "start": 50,
                            "end": 60
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 64,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 64,
                                "end": 67
                            },
                            "flags": 32,
                            "start": 62,
                            "end": 68
                        },
                        "flags": 16,
                        "start": 48,
                        "end": 68
                    }
                ],
                "flags": 16,
                "start": 48,
                "end": 68
            },
            "flags": 16,
            "start": 43,
            "end": 69
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 69,
                "end": 74
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 74,
                            "end": 76
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 147,
                                "types": [
                                    {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 79,
                                        "end": 85
                                    },
                                    {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 86,
                                        "end": 93
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 77,
                                "end": 94
                            },
                            "flags": 0,
                            "start": 76,
                            "end": 94
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 123,
                                        "rawText": "123",
                                        "flags": 96,
                                        "start": 98,
                                        "end": 101
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "aladdin",
                                        "rawText": " \"aladdin\"",
                                        "flags": 96,
                                        "start": 102,
                                        "end": 112
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 98,
                                "end": 112
                            },
                            "flags": 32,
                            "start": 96,
                            "end": 113
                        },
                        "flags": 16,
                        "start": 74,
                        "end": 113
                    }
                ],
                "flags": 16,
                "start": 74,
                "end": 113
            },
            "flags": 16,
            "start": 69,
            "end": 114
        }
    ],
    "isModule": false,
    "source": "var x: [] = [];\n\nvar x: [number,] = [123,];\n\nvar x: [Foo<T>] = [foo];\n\nvar x: [number, string] = [123, \"aladdin\"];\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 115
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

