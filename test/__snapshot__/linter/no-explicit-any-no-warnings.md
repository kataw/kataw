# Kataw parser test case

## Input

`````js
const age: number = 17;

const ages1: number[] = [17];

const ages2: Array<number> = [17];

function greet(): string {}

function greet(param: Array<string>): string {}

function greet(param: Array<string>): Array<string> {}
`````

## Options

### Parser Options

`````js
{ allowTypes: true, lint: { noAny: true } }
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
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "age",
                            "rawText": "age",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 17,
                            "rawText": "17",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 22
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 22
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 23,
                "end": 30
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ages1",
                            "rawText": "ages1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 36
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
                                    "start": 37,
                                    "end": 44
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 46
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 46
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 17,
                                        "rawText": "17",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 52
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 48,
                            "end": 53
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 30,
                        "end": 53
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 30,
                "end": 53
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 23,
            "end": 54
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 54,
                "end": 61
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ages2",
                            "rawText": "ages2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 67
                        },
                        "type": {
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
                                    "start": 68,
                                    "end": 74
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 81
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 81
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 75,
                                    "end": 81
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 82
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 82
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 17,
                                        "rawText": "17",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 88
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 88
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 84,
                            "end": 89
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 61,
                        "end": 89
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 61,
                "end": 89
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 54,
            "end": 90
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 90,
                "end": 100
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "greet",
                "rawText": "greet",
                "flags": 96,
                "transformFlags": 0,
                "start": 100,
                "end": 106
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 107,
                "end": 107
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 118
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 116,
                "end": 119
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 116
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 109,
                "end": 116
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 90,
            "end": 119
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 119,
                "end": 129
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "greet",
                "rawText": "greet",
                "flags": 96,
                "transformFlags": 0,
                "start": 129,
                "end": 135
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "param",
                            "rawText": "param",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 141
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
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 142,
                                    "end": 148
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 149,
                                                "end": 155
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 149,
                                            "end": 155
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 149,
                                    "end": 155
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 156
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 142,
                            "end": 156
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 136,
                        "end": 156
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 136,
                "end": 156
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 167,
                    "end": 167
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 165,
                "end": 168
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 165
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 158,
                "end": 165
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 119,
            "end": 168
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 168,
                "end": 178
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "greet",
                "rawText": "greet",
                "flags": 96,
                "transformFlags": 0,
                "start": 178,
                "end": 184
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "param",
                            "rawText": "param",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 185,
                            "end": 190
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
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 191,
                                    "end": 197
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 198,
                                                "end": 204
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 198,
                                            "end": 204
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 198,
                                    "end": 204
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 191,
                                "end": 205
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 191,
                            "end": 205
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 185,
                        "end": 205
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 185,
                "end": 205
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 223,
                    "end": 223
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 221,
                "end": 224
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
                        "start": 207,
                        "end": 213
                    },
                    "typeParameters": {
                        "kind": 310,
                        "types": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 214,
                                    "end": 220
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 214,
                                "end": 220
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 214,
                        "end": 220
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 207,
                    "end": 221
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 207,
                "end": 221
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 168,
            "end": 224
        }
    ],
    "isModule": false,
    "source": "const age: number = 17;\n\nconst ages1: number[] = [17];\n\nconst ages2: Array<number> = [17];\n\nfunction greet(): string {}\n\nfunction greet(param: Array<string>): string {}\n\nfunction greet(param: Array<string>): Array<string> {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 224
}
```

### Printed

```javascript
const age: number = 17;
const ages1: number[] = [17];

const ages2: Array<number> = [17];

function greet(): string {}

function greet(param: Array<string>): string {}

function greet(param: Array<string>): Array<string> {}

```

### Diagnostics

```javascript
✔ No errors
```

