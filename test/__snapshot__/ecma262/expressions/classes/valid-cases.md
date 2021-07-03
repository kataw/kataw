# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
x = class {y = 1; 'z' = 2}

x = class {y() {}; 'z'() {}}

x = class {get y() {}; set 'z'(z) {}}

x = class {get y() {}; set 'z'(z) {}}

x = class {y = 1; 'z' = 2}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 16
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 17
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "z",
                                        "rawText": "'z'",
                                        "flags": 4194400,
                                        "start": 17,
                                        "end": 21
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 25
                                }
                            ],
                            "flags": 32,
                            "start": 11,
                            "end": 25
                        },
                        "flags": 9,
                        "start": 32,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 26,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 31,
                        "end": 37
                    },
                    "name": null,
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
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 44,
                                                "end": 44
                                            },
                                            "flags": 32,
                                            "start": 42,
                                            "end": 45
                                        },
                                        "flags": 0,
                                        "start": 40,
                                        "end": 45
                                    },
                                    "flags": 0,
                                    "start": 39,
                                    "end": 45
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 45,
                                    "end": 46
                                },
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
                                            "kind": 201392131,
                                            "text": "z",
                                            "rawText": "'z'",
                                            "flags": 4194400,
                                            "start": 46,
                                            "end": 50
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 51,
                                            "end": 52
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 54,
                                                "end": 54
                                            },
                                            "flags": 32,
                                            "start": 52,
                                            "end": 55
                                        },
                                        "flags": 0,
                                        "start": 50,
                                        "end": 55
                                    },
                                    "flags": 0,
                                    "start": 46,
                                    "end": 55
                                }
                            ],
                            "flags": 32,
                            "start": 39,
                            "end": 55
                        },
                        "flags": 37,
                        "start": 32,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 31,
                    "end": 56
                },
                "flags": 32,
                "start": 26,
                "end": 56
            },
            "flags": 16,
            "start": 26,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 56,
                    "end": 59
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 59,
                    "end": 61
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 61,
                        "end": 67
                    },
                    "name": null,
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
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 69,
                                        "end": 72
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 72,
                                            "end": 74
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 75,
                                            "end": 76
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 78,
                                                "end": 78
                                            },
                                            "flags": 32,
                                            "start": 76,
                                            "end": 79
                                        },
                                        "flags": 1024,
                                        "start": 74,
                                        "end": 79
                                    },
                                    "flags": 1024,
                                    "start": 69,
                                    "end": 79
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 79,
                                    "end": 80
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 80,
                                        "end": 84
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "z",
                                            "rawText": "'z'",
                                            "flags": 4194400,
                                            "start": 84,
                                            "end": 88
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 89,
                                                    "end": 90
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 89,
                                            "end": 91
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 93,
                                                "end": 93
                                            },
                                            "flags": 32,
                                            "start": 91,
                                            "end": 94
                                        },
                                        "flags": 512,
                                        "start": 88,
                                        "end": 94
                                    },
                                    "flags": 512,
                                    "start": 80,
                                    "end": 94
                                }
                            ],
                            "flags": 32,
                            "start": 69,
                            "end": 94
                        },
                        "flags": 67,
                        "start": 32,
                        "end": 95
                    },
                    "flags": 32,
                    "start": 61,
                    "end": 95
                },
                "flags": 32,
                "start": 56,
                "end": 95
            },
            "flags": 16,
            "start": 56,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 95,
                    "end": 98
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 98,
                    "end": 100
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 100,
                        "end": 106
                    },
                    "name": null,
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
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 108,
                                        "end": 111
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 111,
                                            "end": 113
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "start": 114,
                                            "end": 115
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 117,
                                                "end": 117
                                            },
                                            "flags": 32,
                                            "start": 115,
                                            "end": 118
                                        },
                                        "flags": 1024,
                                        "start": 113,
                                        "end": 118
                                    },
                                    "flags": 1024,
                                    "start": 108,
                                    "end": 118
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 118,
                                    "end": 119
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "start": 119,
                                        "end": 123
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "z",
                                            "rawText": "'z'",
                                            "flags": 4194400,
                                            "start": 123,
                                            "end": 127
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 128,
                                                    "end": 129
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "start": 128,
                                            "end": 130
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 132,
                                                "end": 132
                                            },
                                            "flags": 32,
                                            "start": 130,
                                            "end": 133
                                        },
                                        "flags": 512,
                                        "start": 127,
                                        "end": 133
                                    },
                                    "flags": 512,
                                    "start": 119,
                                    "end": 133
                                }
                            ],
                            "flags": 32,
                            "start": 108,
                            "end": 133
                        },
                        "flags": 106,
                        "start": 32,
                        "end": 134
                    },
                    "flags": 32,
                    "start": 100,
                    "end": 134
                },
                "flags": 32,
                "start": 95,
                "end": 134
            },
            "flags": 16,
            "start": 95,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 134,
                    "end": 137
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 137,
                    "end": 139
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 139,
                        "end": 145
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 147,
                                        "end": 148
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 150,
                                        "end": 152
                                    },
                                    "flags": 32,
                                    "start": 147,
                                    "end": 152
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "start": 152,
                                    "end": 153
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "z",
                                        "rawText": "'z'",
                                        "flags": 4194400,
                                        "start": 153,
                                        "end": 157
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 159,
                                        "end": 161
                                    },
                                    "flags": 32,
                                    "start": 153,
                                    "end": 161
                                }
                            ],
                            "flags": 32,
                            "start": 147,
                            "end": 161
                        },
                        "flags": 145,
                        "start": 32,
                        "end": 162
                    },
                    "flags": 32,
                    "start": 139,
                    "end": 162
                },
                "flags": 32,
                "start": 134,
                "end": 162
            },
            "flags": 16,
            "start": 134,
            "end": 162
        }
    ],
    "isModule": true,
    "source": "x = class {y = 1; 'z' = 2}\n\nx = class {y() {}; 'z'() {}}\n\nx = class {get y() {}; set 'z'(z) {}}\n\nx = class {get y() {}; set 'z'(z) {}}\n\nx = class {y = 1; 'z' = 2}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 162
}
```

### Printed

```javascript

x = class  {
  y = 1
  ;
  '\'z\'' = 2
};
x = class  {
  y() {}
  ;
  '\'z\''() {}
};
x = class  {
  get y() {}
  ;
  set '\'z\''(z) {}
};
x = class  {
  get y() {}
  ;
  set '\'z\''(z) {}
};
x = class  {
  y = 1
  ;
  '\'z\'' = 2
};

```

### Diagnostics

```javascript
✔ No errors
```

