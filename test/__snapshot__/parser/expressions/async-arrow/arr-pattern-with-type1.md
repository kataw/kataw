# Kataw parser test case

## Input

`````js
async ([x: string]) =>  {};

async ([[x]: string]) =>  {};

async ([[x: string]: string]) =>  {};

async ([{x}: string]) =>  {};
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
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 19,
                "end": 22
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 201,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 10,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "start": 9,
                                    "end": 17
                                },
                                "right": null,
                                "flags": 32,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 18
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "start": 22,
                "end": 26
            },
            "flags": 290,
            "start": 0,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 26,
            "end": 27
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 50,
                "end": 53
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 201,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 39
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 40
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 41,
                                        "end": 48
                                    },
                                    "flags": 0,
                                    "start": 40,
                                    "end": 48
                                },
                                "right": null,
                                "flags": 32,
                                "start": 37,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 37,
                        "end": 48
                    },
                    "flags": 32,
                    "start": 36,
                    "end": 49
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 27,
                "end": 34
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 56,
                    "end": 56
                },
                "flags": 32,
                "start": 53,
                "end": 57
            },
            "flags": 290,
            "start": 27,
            "end": 57
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 57,
            "end": 58
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 89,
                "end": 92
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 201,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 69,
                                                    "end": 70
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 71,
                                                        "end": 78
                                                    },
                                                    "flags": 0,
                                                    "start": 70,
                                                    "end": 78
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 69,
                                                "end": 78
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 69,
                                        "end": 78
                                    },
                                    "flags": 32,
                                    "start": 68,
                                    "end": 79
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 80,
                                        "end": 87
                                    },
                                    "flags": 0,
                                    "start": 79,
                                    "end": 87
                                },
                                "right": null,
                                "flags": 32,
                                "start": 68,
                                "end": 87
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 68,
                        "end": 87
                    },
                    "flags": 32,
                    "start": 67,
                    "end": 88
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 58,
                "end": 65
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 95,
                    "end": 95
                },
                "flags": 32,
                "start": 92,
                "end": 96
            },
            "flags": 290,
            "start": 58,
            "end": 96
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 96,
            "end": 97
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 120,
                "end": 123
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 201,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 108,
                                                "end": 109
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 108,
                                        "end": 109
                                    },
                                    "flags": 48,
                                    "start": 107,
                                    "end": 110
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 111,
                                        "end": 118
                                    },
                                    "flags": 0,
                                    "start": 110,
                                    "end": 118
                                },
                                "right": null,
                                "flags": 32,
                                "start": 107,
                                "end": 118
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 107,
                        "end": 118
                    },
                    "flags": 32,
                    "start": 106,
                    "end": 119
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 97,
                "end": 104
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 126,
                    "end": 126
                },
                "flags": 32,
                "start": 123,
                "end": 127
            },
            "flags": 290,
            "start": 97,
            "end": 127
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 127,
            "end": 128
        }
    ],
    "isModule": false,
    "source": "async ([x: string]) =>  {};\n\nasync ([[x]: string]) =>  {};\n\nasync ([[x: string]: string]) =>  {};\n\nasync ([{x}: string]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 128
}
```

### Printed

```javascript

async ([]) =>  {}
async ([]) =>  {}
async ([]) =>  {}
async ([]) =>  {}

```

### Diagnostics

```javascript
✔ No errors
```

