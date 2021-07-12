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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 10,
                                                "end": 17
                                            },
                                            "flags": 2097152,
                                            "start": 10,
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
                    "trailingComma": false,
                    "flags": 34,
                    "start": 7,
                    "end": 19
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 19,
                    "end": 22
                },
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
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 27,
                    "end": 34
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 41,
                                                "end": 48
                                            },
                                            "flags": 2097152,
                                            "start": 41,
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
                    "trailingComma": false,
                    "flags": 34,
                    "start": 36,
                    "end": 50
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 50,
                    "end": 53
                },
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
            "flags": 16,
            "start": 27,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 58,
                    "end": 65
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234347,
                                                                "flags": 2097216,
                                                                "start": 71,
                                                                "end": 78
                                                            },
                                                            "flags": 2097152,
                                                            "start": 71,
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
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 80,
                                                "end": 87
                                            },
                                            "flags": 2097152,
                                            "start": 80,
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
                    "trailingComma": false,
                    "flags": 34,
                    "start": 67,
                    "end": 89
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 89,
                    "end": 92
                },
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
            "flags": 16,
            "start": 58,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 97,
                    "end": 104
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 111,
                                                "end": 118
                                            },
                                            "flags": 2097152,
                                            "start": 111,
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
                    "trailingComma": false,
                    "flags": 34,
                    "start": 106,
                    "end": 120
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 120,
                    "end": 123
                },
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
            "flags": 16,
            "start": 97,
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

  async ([x: string]) => {};
  async ([[x,]: string]) => {};
  async ([[,]: string]) => {};
  async ([{ x }: string]) => {};

```

### Diagnostics

```javascript
✔ No errors
```

