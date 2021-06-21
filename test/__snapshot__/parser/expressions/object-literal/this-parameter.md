# Kataw parser test case

## Input

`````js
let one = {
  m1(this: number) {},

  m2(this: number, a) {},

  m3(this: number, ...a) {},

  m4(this: number, a, b, ...c) {},

  m5<T>(this: T) {}

};
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "one",
                            "rawText": "one",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
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
                                                "text": "m1",
                                                "rawText": "m1",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 16
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
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 21
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 22,
                                                                "end": 29
                                                            },
                                                            "flags": 2097152,
                                                            "start": 22,
                                                            "end": 29
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 17,
                                                        "end": 29
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 17,
                                                "end": 30
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "flags": 32,
                                                "start": 30,
                                                "end": 33
                                            },
                                            "flags": 33,
                                            "start": 16,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 33
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
                                                "text": "m2",
                                                "rawText": "m2",
                                                "flags": 96,
                                                "start": 34,
                                                "end": 40
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
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 96,
                                                            "start": 41,
                                                            "end": 45
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 46,
                                                                "end": 53
                                                            },
                                                            "flags": 2097152,
                                                            "start": 46,
                                                            "end": 53
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 41,
                                                        "end": 53
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 54,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 97,
                                                "start": 41,
                                                "end": 57
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 59,
                                                    "end": 59
                                                },
                                                "flags": 32,
                                                "start": 57,
                                                "end": 60
                                            },
                                            "flags": 33,
                                            "start": 40,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 34,
                                        "end": 60
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
                                                "text": "m3",
                                                "rawText": "m3",
                                                "flags": 96,
                                                "start": 61,
                                                "end": 67
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
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 96,
                                                            "start": 68,
                                                            "end": 72
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 73,
                                                                "end": 80
                                                            },
                                                            "flags": 2097152,
                                                            "start": 73,
                                                            "end": 80
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 68,
                                                        "end": 80
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 81,
                                                            "end": 85
                                                        },
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 85,
                                                            "end": 86
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": null,
                                                        "flags": 34,
                                                        "start": 81,
                                                        "end": 86
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 35,
                                                "start": 68,
                                                "end": 87
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 89,
                                                    "end": 89
                                                },
                                                "flags": 32,
                                                "start": 87,
                                                "end": 90
                                            },
                                            "flags": 33,
                                            "start": 67,
                                            "end": 90
                                        },
                                        "flags": 32,
                                        "start": 61,
                                        "end": 90
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
                                                "text": "m4",
                                                "rawText": "m4",
                                                "flags": 96,
                                                "start": 91,
                                                "end": 97
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
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 96,
                                                            "start": 98,
                                                            "end": 102
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 103,
                                                                "end": 110
                                                            },
                                                            "flags": 2097152,
                                                            "start": 103,
                                                            "end": 110
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 98,
                                                        "end": 110
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 111,
                                                        "end": 113
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 114,
                                                        "end": 116
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 117,
                                                            "end": 121
                                                        },
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 121,
                                                            "end": 122
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": null,
                                                        "flags": 34,
                                                        "start": 117,
                                                        "end": 122
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 99,
                                                "start": 98,
                                                "end": 123
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 125,
                                                    "end": 125
                                                },
                                                "flags": 32,
                                                "start": 123,
                                                "end": 126
                                            },
                                            "flags": 33,
                                            "start": 97,
                                            "end": 126
                                        },
                                        "flags": 32,
                                        "start": 91,
                                        "end": 126
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
                                                "text": "m5",
                                                "rawText": "m5",
                                                "flags": 96,
                                                "start": 127,
                                                "end": 133
                                            },
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
                                                                "start": 134,
                                                                "end": 135
                                                            },
                                                            "type": null,
                                                            "defaultType": null,
                                                            "flags": 2097152,
                                                            "start": 134,
                                                            "end": 135
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 134,
                                                    "end": 135
                                                },
                                                "flags": 2097152,
                                                "start": 133,
                                                "end": 136
                                            },
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 96,
                                                            "start": 137,
                                                            "end": 141
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 144,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "T",
                                                                    "rawText": "T",
                                                                    "flags": 96,
                                                                    "start": 142,
                                                                    "end": 144
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 142,
                                                                "end": 144
                                                            },
                                                            "flags": 2097152,
                                                            "start": 142,
                                                            "end": 144
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 137,
                                                        "end": 144
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 137,
                                                "end": 145
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 147,
                                                    "end": 147
                                                },
                                                "flags": 32,
                                                "start": 145,
                                                "end": 148
                                            },
                                            "flags": 33,
                                            "start": 133,
                                            "end": 148
                                        },
                                        "flags": 32,
                                        "start": 127,
                                        "end": 148
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 11,
                                "end": 148
                            },
                            "flags": 49,
                            "start": 9,
                            "end": 151
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 151
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 151
            },
            "flags": 33554448,
            "start": 0,
            "end": 152
        }
    ],
    "isModule": false,
    "source": "let one = {\n  m1(this: number) {},\n\n  m2(this: number, a) {},\n\n  m3(this: number, ...a) {},\n\n  m4(this: number, a, b, ...c) {},\n\n  m5<T>(this: T) {}\n\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 152
}
```

### Printed

```javascript

 let one = { m1() {
    }, m2(, a) {
    }, m3(, ) {
    }, m4(, a, b, ) {
    }, m5() {
    } }; 
```

### Diagnostics

```javascript
✔ No errors
```

