# Kataw parser test case

## Input

`````js
function foo():(_:bool) => number{}

function foo(callback: (_1:bool, _2:string) => number){}

function foo(callback: (_1:bool, ...foo:Array<number>) => number){}

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 34,
                    "end": 34
                },
                "flags": 32,
                "start": 33,
                "end": 35
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 23,
                        "end": 26
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_",
                                    "rawText": "_",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 17
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "bool",
                                            "rawText": "bool",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 22
                                    },
                                    "flags": 2097152,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 15,
                        "end": 22
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 26,
                            "end": 33
                        },
                        "flags": 2097152,
                        "start": 26,
                        "end": 33
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 15,
                    "end": 33
                },
                "flags": 2097152,
                "start": 15,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 35
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 35,
                "end": 45
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 45,
                "end": 49
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
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 50,
                            "end": 58
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 32,
                        "start": 50,
                        "end": 58
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 49,
                "end": 59
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 90,
                    "end": 90
                },
                "flags": 32,
                "start": 90,
                "end": 90
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 80,
                        "end": 83
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_1",
                                    "rawText": "_1",
                                    "flags": 96,
                                    "start": 61,
                                    "end": 63
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "bool",
                                            "rawText": "bool",
                                            "flags": 96,
                                            "start": 64,
                                            "end": 68
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 64,
                                        "end": 68
                                    },
                                    "flags": 2097152,
                                    "start": 64,
                                    "end": 68
                                },
                                "flags": 2097152,
                                "start": 59,
                                "end": 68
                            },
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_2",
                                    "rawText": "_2",
                                    "flags": 96,
                                    "start": 69,
                                    "end": 72
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 73,
                                        "end": 79
                                    },
                                    "flags": 2097152,
                                    "start": 73,
                                    "end": 79
                                },
                                "flags": 2097152,
                                "start": 69,
                                "end": 79
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 59,
                        "end": 79
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 83,
                            "end": 90
                        },
                        "flags": 2097152,
                        "start": 83,
                        "end": 90
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 59,
                    "end": 90
                },
                "flags": 2097152,
                "start": 59,
                "end": 90
            },
            "flags": 16,
            "start": 35,
            "end": 90
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 92,
                "end": 92
            },
            "flags": 16,
            "start": 91,
            "end": 93
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 93,
                "end": 103
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 103,
                "end": 107
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
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 108,
                            "end": 116
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 32,
                        "start": 108,
                        "end": 116
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 107,
                "end": 117
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 159,
                    "end": 159
                },
                "flags": 32,
                "start": 159,
                "end": 159
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 149,
                        "end": 152
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "_1",
                                    "rawText": "_1",
                                    "flags": 96,
                                    "start": 119,
                                    "end": 121
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "bool",
                                            "rawText": "bool",
                                            "flags": 96,
                                            "start": 122,
                                            "end": 126
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 122,
                                        "end": 126
                                    },
                                    "flags": 2097152,
                                    "start": 122,
                                    "end": 126
                                },
                                "flags": 2097152,
                                "start": 117,
                                "end": 126
                            },
                            {
                                "kind": 149,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 127,
                                    "end": 131
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 131,
                                    "end": 134
                                },
                                "optionalToken": null,
                                "types": {
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
                                            "start": 135,
                                            "end": 140
                                        },
                                        "typeParameters": {
                                            "kind": 310,
                                            "typeInstantiations": {
                                                "kind": 309,
                                                "types": [
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "start": 141,
                                                            "end": 147
                                                        },
                                                        "flags": 2097152,
                                                        "start": 141,
                                                        "end": 147
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 141,
                                                "end": 147
                                            },
                                            "flags": 2097152,
                                            "start": 140,
                                            "end": 148
                                        },
                                        "flags": 2097152,
                                        "start": 135,
                                        "end": 148
                                    },
                                    "flags": 2097152,
                                    "start": 135,
                                    "end": 148
                                },
                                "flags": 2097152,
                                "start": 127,
                                "end": 148
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 117,
                        "end": 148
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234345,
                            "flags": 2097216,
                            "start": 152,
                            "end": 159
                        },
                        "flags": 2097152,
                        "start": 152,
                        "end": 159
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 117,
                    "end": 159
                },
                "flags": 2097152,
                "start": 117,
                "end": 159
            },
            "flags": 16,
            "start": 93,
            "end": 159
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 161,
                "end": 161
            },
            "flags": 16,
            "start": 160,
            "end": 162
        }
    ],
    "isModule": false,
    "source": "function foo():(_:bool) => number{}\n\nfunction foo(callback: (_1:bool, _2:string) => number){}\n\nfunction foo(callback: (_1:bool, ...foo:Array<number>) => number){}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 163
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 58, end: 59
✖ Missing an opening brace - '{ - start: 90, end: 91
✖ ',' expected - start: 116, end: 117
✖ Missing an opening brace - '{ - start: 159, end: 160

```

