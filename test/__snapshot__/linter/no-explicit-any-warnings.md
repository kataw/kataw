# Kataw parser test case

## Input

`````js
const age: any = 'seventeen';

const ages1: any[] = ['seventeen'];

const ages2: Array<any> = ['seventeen'];

function greet(): Array<Array<any>> {}

function greet(param: Array<any>): Array<any> {}

function greet(param: Array<any>): string {}
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
                                "kind": 134234252,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 14
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 14
                        },
                        "initializer": {
                            "kind": 201392131,
                            "text": "seventeen",
                            "rawText": "'seventeen'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 28
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 28
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 29,
                "end": 36
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
                            "start": 36,
                            "end": 42
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234252,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 47
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 49
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 49
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "seventeen",
                                        "rawText": "'seventeen'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 64
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194336,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 64
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 51,
                            "end": 65
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 36,
                        "end": 65
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 36,
                "end": 65
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 29,
            "end": 66
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 66,
                "end": 73
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
                            "start": 73,
                            "end": 79
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
                                    "start": 80,
                                    "end": 86
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234252,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 87,
                                                "end": 90
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 87,
                                            "end": 90
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 87,
                                    "end": 90
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 91
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 91
                        },
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "seventeen",
                                        "rawText": "'seventeen'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 95,
                                        "end": 106
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4194336,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 106
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 93,
                            "end": 107
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 73,
                        "end": 107
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 73,
                "end": 107
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 66,
            "end": 108
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 108,
                "end": 118
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "greet",
                "rawText": "greet",
                "flags": 96,
                "transformFlags": 0,
                "start": 118,
                "end": 124
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 125,
                "end": 125
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 147
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 145,
                "end": 148
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
                        "start": 127,
                        "end": 133
                    },
                    "typeParameters": {
                        "kind": 310,
                        "types": [
                            {
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
                                        "start": 134,
                                        "end": 139
                                    },
                                    "typeParameters": {
                                        "kind": 310,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234252,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 140,
                                                    "end": 143
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 140,
                                                "end": 143
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 140,
                                        "end": 143
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 144
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 134,
                                "end": 144
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 134,
                        "end": 144
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 127,
                    "end": 145
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 127,
                "end": 145
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 108,
            "end": 148
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 148,
                "end": 158
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "greet",
                "rawText": "greet",
                "flags": 96,
                "transformFlags": 0,
                "start": 158,
                "end": 164
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
                            "start": 165,
                            "end": 170
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
                                    "start": 171,
                                    "end": 177
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234252,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 178,
                                                "end": 181
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 178,
                                            "end": 181
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 178,
                                    "end": 181
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 171,
                                "end": 182
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 171,
                            "end": 182
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 165,
                        "end": 182
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 165,
                "end": 182
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 197,
                    "end": 197
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 195,
                "end": 198
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
                        "start": 184,
                        "end": 190
                    },
                    "typeParameters": {
                        "kind": 310,
                        "types": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234252,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 191,
                                    "end": 194
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 191,
                                "end": 194
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 191,
                        "end": 194
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 184,
                    "end": 195
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 184,
                "end": 195
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 148,
            "end": 198
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 198,
                "end": 208
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "greet",
                "rawText": "greet",
                "flags": 96,
                "transformFlags": 0,
                "start": 208,
                "end": 214
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
                            "start": 215,
                            "end": 220
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
                                    "start": 221,
                                    "end": 227
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "types": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234252,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 228,
                                                "end": 231
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 228,
                                            "end": 231
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 228,
                                    "end": 231
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 221,
                                "end": 232
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 221,
                            "end": 232
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 215,
                        "end": 232
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 215,
                "end": 232
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 243,
                    "end": 243
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 241,
                "end": 244
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 241
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 234,
                "end": 241
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 198,
            "end": 244
        }
    ],
    "isModule": false,
    "source": "const age: any = 'seventeen';\n\nconst ages1: any[] = ['seventeen'];\n\nconst ages2: Array<any> = ['seventeen'];\n\nfunction greet(): Array<Array<any>> {}\n\nfunction greet(param: Array<any>): Array<any> {}\n\nfunction greet(param: Array<any>): string {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 244
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 10, end: 14
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 43, end: 47
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 87, end: 90
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 140, end: 143
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 178, end: 181
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 191, end: 194
✖ Type declaration of 'any' loses type-safety. Consider replacing it with a more precise type - start: 228, end: 231

```

