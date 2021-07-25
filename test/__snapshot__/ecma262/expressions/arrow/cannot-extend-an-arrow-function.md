# Kataw parser test case

## Input

`````js
class Foo extends x => {} {}

class Foo extends () => {} {}

class Foo extends async x => {} {}

(class extends x => {} {})

(class extends (x) => {} {})

(class extends async x => {} {})

(class extends async () => {} {})

(class extends async (x) => {} {})

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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 17
                    },
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 25
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 25
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 27
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 28,
                "end": 35
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 35,
                "end": 39
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 47
                    },
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 49
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 55,
                                "end": 55
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 56
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 56
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 56
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 58
                },
                "flags": 39,
                "transformFlags": 0,
                "start": 32,
                "end": 59
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 28,
            "end": 59
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 59,
                "end": 66
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 66,
                "end": 70
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 78
                    },
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 78,
                            "end": 84
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 86
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 89
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 91,
                                "end": 91
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 92
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 78,
                        "end": 92
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 92
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 94
                },
                "flags": 70,
                "transformFlags": 0,
                "start": 32,
                "end": 95
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 59,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 103
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": {
                                            "kind": 279,
                                            "extendsKeyword": {
                                                "kind": 4194391,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 103,
                                                "end": 111
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "asyncKeyword": null,
                                                "typeParameters": null,
                                                "arrowPatameterList": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 111,
                                                    "end": 113
                                                },
                                                "returnType": null,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 113,
                                                    "end": 116
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
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 111,
                                                "end": 119
                                            },
                                            "typeParameter": null,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 111,
                                            "end": 119
                                        },
                                        "body": {
                                            "kind": 303,
                                            "elements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 121,
                                            "end": 121
                                        },
                                        "flags": 103,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 122
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 98,
                                    "end": 122
                                },
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 123
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 126,
                                            "end": 131
                                        },
                                        "name": null,
                                        "typeParameters": null,
                                        "tail": {
                                            "kind": 277,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 131,
                                                    "end": 139
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 141,
                                                                "end": 142
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 141,
                                                        "end": 143
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 143,
                                                        "end": 146
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 148,
                                                            "end": 148
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 146,
                                                        "end": 149
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 139,
                                                    "end": 149
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 139,
                                                "end": 149
                                            },
                                            "body": {
                                                "kind": 303,
                                                "elements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 151,
                                                "end": 151
                                            },
                                            "flags": 131,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 152
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 126,
                                        "end": 152
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 126,
                                "end": 152
                            },
                            "flags": 33,
                            "transformFlags": 1,
                            "start": 95,
                            "end": 153
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 156,
                                        "end": 161
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": {
                                            "kind": 279,
                                            "extendsKeyword": {
                                                "kind": 4194391,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 161,
                                                "end": 169
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 169,
                                                    "end": 175
                                                },
                                                "typeParameters": null,
                                                "arrowPatameterList": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 175,
                                                    "end": 177
                                                },
                                                "returnType": null,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 177,
                                                    "end": 180
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 182,
                                                        "end": 182
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 180,
                                                    "end": 183
                                                },
                                                "flags": 288,
                                                "transformFlags": 0,
                                                "start": 169,
                                                "end": 183
                                            },
                                            "typeParameter": null,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 169,
                                            "end": 183
                                        },
                                        "body": {
                                            "kind": 303,
                                            "elements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 185,
                                            "end": 185
                                        },
                                        "flags": 161,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 186
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 156,
                                    "end": 186
                                }
                            ],
                            "trailingComma": false,
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 156,
                            "end": 186
                        },
                        "flags": 33,
                        "transformFlags": 1,
                        "start": 95,
                        "end": 187
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 190,
                                    "end": 195
                                },
                                "name": null,
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": {
                                        "kind": 279,
                                        "extendsKeyword": {
                                            "kind": 4194391,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 195,
                                            "end": 203
                                        },
                                        "expression": {
                                            "kind": 271,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 203,
                                                "end": 209
                                            },
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 211,
                                                "end": 211
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 212,
                                                "end": 215
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 217,
                                                    "end": 217
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 215,
                                                "end": 218
                                            },
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 203,
                                            "end": 218
                                        },
                                        "typeParameter": null,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 203,
                                        "end": 218
                                    },
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 220,
                                        "end": 220
                                    },
                                    "flags": 195,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 221
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 221
                            }
                        ],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 190,
                        "end": 221
                    },
                    "flags": 33,
                    "transformFlags": 1,
                    "start": 95,
                    "end": 222
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 230
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 230,
                                        "end": 238
                                    },
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 238,
                                            "end": 244
                                        },
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 246,
                                                    "end": 247
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 246,
                                            "end": 248
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 248,
                                            "end": 251
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 253,
                                                "end": 253
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 251,
                                            "end": 254
                                        },
                                        "flags": 288,
                                        "transformFlags": 0,
                                        "start": 238,
                                        "end": 254
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 238,
                                    "end": 254
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 256,
                                    "end": 256
                                },
                                "flags": 230,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 257
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 257
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 225,
                    "end": 257
                },
                "flags": 33,
                "transformFlags": 1,
                "start": 95,
                "end": 258
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 95,
            "end": 258
        }
    ],
    "isModule": false,
    "source": "class Foo extends x => {} {}\n\nclass Foo extends () => {} {}\n\nclass Foo extends async x => {} {}\n\n(class extends x => {} {})\n\n(class extends (x) => {} {})\n\n(class extends async x => {} {})\n\n(class extends async () => {} {})\n\n(class extends async (x) => {} {})\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 259
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ';' expected - start: 17, end: 22
✖ Duplicate bindingidentifier 'Foo' - start: 35, end: 39
✖ ',' expected - start: 50, end: 53
✖ ';' expected - start: 50, end: 53
✖ Duplicate bindingidentifier 'Foo' - start: 66, end: 70
✖ ';' expected - start: 84, end: 86
✖ ';' expected - start: 111, end: 116
✖ ';' expected - start: 143, end: 146
✖ ';' expected - start: 175, end: 177
✖ ';' expected - start: 238, end: 251

```

