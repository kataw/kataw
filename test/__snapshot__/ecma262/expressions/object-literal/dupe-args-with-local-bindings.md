# Kataw parser test case

## Input

`````js
class o {f(x) { const x = y }

class o {f(x) { function x() {} }}

class o {f(x) { var x; }}

class o {f([b, a], {b}) {}}

class o {f([b, a], ...b) {}}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "o",
                "rawText": "o",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 12
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 13
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 21
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
                                                                "start": 21,
                                                                "end": 23
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 25,
                                                                "end": 27
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 21,
                                                            "end": 27
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "flags": 33554448,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 27
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 29
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 29
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 29
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "class",
                                "rawText": "class",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 36
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 29,
                            "end": 36
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "o",
                                "rawText": "o",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 38
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 36,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 38
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 41
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 43
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 40,
                            "end": 44
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 40,
                        "end": 44
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 55
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 58
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 61
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 62
                                    },
                                    "returnType": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 62
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 62
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 64
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 40,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 38,
            "end": 65
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 65,
                "end": 72
            },
            "name": {
                "kind": 134299649,
                "text": "o",
                "rawText": "o",
                "flags": 96,
                "transformFlags": 0,
                "start": 72,
                "end": 74
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 79
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 80
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 82,
                                                    "end": 86
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
                                                                "transformFlags": 0,
                                                                "start": 86,
                                                                "end": 88
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 86,
                                                            "end": 88
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 86,
                                                    "end": 88
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 82,
                                                "end": 89
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 82,
                                        "end": 89
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 80,
                                    "end": 91
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 91
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 91
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 91
                },
                "flags": 74,
                "transformFlags": 0,
                "start": 32,
                "end": 92
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 65,
            "end": 92
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 92,
                "end": 99
            },
            "name": {
                "kind": 134299649,
                "text": "o",
                "rawText": "o",
                "flags": 96,
                "transformFlags": 0,
                "start": 99,
                "end": 101
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 103,
                                    "end": 104
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 106,
                                                        "end": 107
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 108,
                                                        "end": 110
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 106,
                                                "end": 110
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 105,
                                            "end": 111
                                        },
                                        {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 114,
                                                        "end": 115
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 114,
                                                "end": 115
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 112,
                                            "end": 116
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 105,
                                    "end": 117
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 119,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 117,
                                    "end": 120
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 104,
                                "end": 120
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 103,
                            "end": 120
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 120
                },
                "flags": 101,
                "transformFlags": 0,
                "start": 32,
                "end": 121
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 92,
            "end": 121
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 121,
                "end": 128
            },
            "name": {
                "kind": 134299649,
                "text": "o",
                "rawText": "o",
                "flags": 96,
                "transformFlags": 0,
                "start": 128,
                "end": 130
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 132,
                                    "end": 133
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 135,
                                                        "end": 136
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 137,
                                                        "end": 139
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 135,
                                                "end": 139
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 134,
                                            "end": 140
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 141,
                                                "end": 145
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 145,
                                                "end": 146
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 34,
                                            "transformFlags": 4096,
                                            "start": 141,
                                            "end": 146
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 147
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 149,
                                        "end": 149
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 147,
                                    "end": 150
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 150
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 132,
                            "end": 150
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 132,
                    "end": 150
                },
                "flags": 130,
                "transformFlags": 0,
                "start": 32,
                "end": 151
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 121,
            "end": 151
        }
    ],
    "isModule": false,
    "source": "class o {f(x) { const x = y }\n\nclass o {f(x) { function x() {} }}\n\nclass o {f(x) { var x; }}\n\nclass o {f([b, a], {b}) {}}\n\nclass o {f([b, a], ...b) {}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 151
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable 'x' - start: 21, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 39, end: 40
✖ '{' is not allowed here. Did you mean ';'? - start: 44, end: 46
✖ Duplicate bindingidentifier 'o' - start: 72, end: 74
✖ Duplicate bindingidentifier 'o' - start: 99, end: 101
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 115, end: 117
✖ Duplicate bindingidentifier 'o' - start: 128, end: 130
✖ Duplicate bindingidentifier 'b' - start: 145, end: 146

```

