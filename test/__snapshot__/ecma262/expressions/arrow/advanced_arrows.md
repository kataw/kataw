# Kataw parser test case

## Input

`````js
var add = (x: number, y: number): number => x + y;

var bad = (x: number): string => x;

var ident = <T>(x: T): T => x;

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
                            "text": "add",
                            "rawText": "add",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "flags": 2097152,
                                        "start": 13,
                                        "end": 20
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 9,
                                    "end": 20
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
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
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 24,
                                            "end": 31
                                        },
                                        "flags": 2097152,
                                        "start": 24,
                                        "end": 31
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 9,
                                    "end": 31
                                }
                            ],
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 33,
                                    "end": 40
                                },
                                "flags": 2097152,
                                "start": 33,
                                "end": 40
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 40,
                                "end": 43
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 45
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 45,
                                    "end": 47
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 47,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 49
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 50
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 50,
                "end": 55
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "bad",
                            "rawText": "bad",
                            "flags": 96,
                            "start": 55,
                            "end": 59
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 63,
                                        "end": 64
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 65,
                                            "end": 72
                                        },
                                        "flags": 2097152,
                                        "start": 65,
                                        "end": 72
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 61,
                                    "end": 72
                                }
                            ],
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 74,
                                    "end": 81
                                },
                                "flags": 2097152,
                                "start": 74,
                                "end": 81
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 81,
                                "end": 84
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 84,
                                "end": 86
                            },
                            "flags": 32,
                            "start": 61,
                            "end": 86
                        },
                        "flags": 16,
                        "start": 55,
                        "end": 86
                    }
                ],
                "flags": 16,
                "start": 55,
                "end": 86
            },
            "flags": 16,
            "start": 50,
            "end": 87
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 87,
                "end": 92
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "ident",
                            "rawText": "ident",
                            "flags": 96,
                            "start": 92,
                            "end": 98
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": {
                                "kind": 307,
                                "declarations": {
                                    "kind": 337,
                                    "parameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 102,
                                                "end": 103
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 102,
                                            "end": 103
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 102,
                                    "end": 103
                                },
                                "flags": 2097152,
                                "start": 100,
                                "end": 104
                            },
                            "parameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 105,
                                        "end": 106
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 107,
                                                "end": 109
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 107,
                                            "end": 109
                                        },
                                        "flags": 2097152,
                                        "start": 107,
                                        "end": 109
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 100,
                                    "end": 109
                                }
                            ],
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 111,
                                        "end": 113
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 111,
                                    "end": 113
                                },
                                "flags": 2097152,
                                "start": 111,
                                "end": 113
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 113,
                                "end": 116
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 116,
                                "end": 118
                            },
                            "flags": 32,
                            "start": 100,
                            "end": 118
                        },
                        "flags": 16,
                        "start": 92,
                        "end": 118
                    }
                ],
                "flags": 16,
                "start": 92,
                "end": 118
            },
            "flags": 16,
            "start": 87,
            "end": 119
        }
    ],
    "isModule": false,
    "source": "var add = (x: number, y: number): number => x + y;\n\nvar bad = (x: number): string => x;\n\nvar ident = <T>(x: T): T => x;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 120
}
```

### Printed

```javascript

var add = (x, y) =>  x + y;
var bad = (x) =>  x;
var ident = (x) =>  x;
```

### Diagnostics

```javascript
✔ No errors
```

