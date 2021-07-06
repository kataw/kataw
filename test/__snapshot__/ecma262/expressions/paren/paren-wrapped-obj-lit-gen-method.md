# Kataw parser test case

## Input

`````js
x({*[foo](){}});

x({*get(){}});

x({*123(){}});

x({async foo(){}, bar(){}});

x({foo(){}, async bar(){}});

x({async "foo"(){}});

x({async [foo](){}});

x({foo(){}, *bar(){}});

x({*foo(){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 8
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 9
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 11
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
                                                    "start": 12,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 13
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 2,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 14
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 19
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "get",
                                                "rawText": "get",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 27
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
                                                    "start": 28,
                                                    "end": 28
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 29
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 20,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 30
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 16,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 35
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 37,
                                            "end": 38
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392130,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 41
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 43
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
                                                    "start": 44,
                                                    "end": 44
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 45
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 36,
                            "end": 46
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 46
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 32,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 51
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 58
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 62
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 64
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
                                                    "start": 65,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 66
                                            },
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 62,
                                            "end": 66
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 66
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 67,
                                                "end": 71
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 72,
                                                "end": 73
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
                                                    "start": 74,
                                                    "end": 74
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 73,
                                                "end": 75
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 75
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 75
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 52,
                            "end": 76
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 76
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 48,
                "end": 77
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 48,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 81
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 86
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 87,
                                                "end": 88
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
                                                    "start": 89,
                                                    "end": 89
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 88,
                                                "end": 90
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 86,
                                            "end": 90
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 90
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 97
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 97,
                                                "end": 101
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "transformFlags": 0,
                                                "start": 102,
                                                "end": 103
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
                                                    "start": 104,
                                                    "end": 104
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 103,
                                                "end": 105
                                            },
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 101,
                                            "end": 105
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 105
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 105
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 82,
                            "end": 106
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 106
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 78,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 78,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 111
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 118
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "\"foo\"",
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
                                                "flags": 288,
                                                "transformFlags": 0,
                                                "start": 125,
                                                "end": 126
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
                                                    "start": 127,
                                                    "end": 127
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 126,
                                                "end": 128
                                            },
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 128
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 113,
                                        "end": 128
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 113,
                                "end": 128
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 112,
                            "end": 129
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 129
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 108,
                "end": 130
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 108,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 131,
                    "end": 134
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 352,
                                            "transformFlags": 0,
                                            "start": 136,
                                            "end": 141
                                        },
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 143,
                                                    "end": 146
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 141,
                                                "end": 147
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 288,
                                                "transformFlags": 0,
                                                "start": 148,
                                                "end": 149
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
                                                    "start": 150,
                                                    "end": 150
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 149,
                                                "end": 151
                                            },
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 147,
                                            "end": 151
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 136,
                                        "end": 151
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 136,
                                "end": 151
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 135,
                            "end": 152
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 152
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 131,
                "end": 153
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 131,
            "end": 154
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 157
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 159,
                                                "end": 162
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 163,
                                                "end": 164
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
                                                    "start": 165,
                                                    "end": 165
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 164,
                                                "end": 166
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 166
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 159,
                                        "end": 166
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 167,
                                            "end": 169
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 169,
                                                "end": 172
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 173,
                                                "end": 174
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
                                                    "start": 175,
                                                    "end": 175
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 174,
                                                "end": 176
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 172,
                                            "end": 176
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 167,
                                        "end": 176
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 176
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 158,
                            "end": 177
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 177
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 154,
                "end": 178
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 154,
            "end": 179
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 179,
                    "end": 182
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 184,
                                            "end": 185
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 185,
                                                "end": 188
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 189,
                                                "end": 190
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
                                                    "start": 191,
                                                    "end": 191
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 190,
                                                "end": 192
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 188,
                                            "end": 192
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 184,
                                        "end": 192
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 184,
                                "end": 192
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 183,
                            "end": 193
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 193
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 179,
                "end": 194
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 179,
            "end": 195
        }
    ],
    "isModule": false,
    "source": "x({*[foo](){}});\n\nx({*get(){}});\n\nx({*123(){}});\n\nx({async foo(){}, bar(){}});\n\nx({foo(){}, async bar(){}});\n\nx({async \"foo\"(){}});\n\nx({async [foo](){}});\n\nx({foo(){}, *bar(){}});\n\nx({*foo(){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 195
}
```

### Printed

```javascript

x({* [foo]() {}});
x({* get() {}});

x({* 123() {}});

x({async foo() {}, bar() {}});

x({foo() {}, async bar() {}});

x({async "\"foo\""() {}});

x({async [foo]() {}});

x({foo() {}, * bar() {}});

x({* foo() {}});

```

### Diagnostics

```javascript
✔ No errors
```

