# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
(class { get st\u0061tic() {}});

(class { set st\u0061tic(x){}});

(class { *st\u0061tic() {}});

(class { st\u0061tic(){}});

(class { static get st\u0061tic(){}});

(class { static set st\u0061tic(x) {}});
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
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
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "st\\u0061tic",
                                            "flags": 16480,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 24
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 26
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
                                            "start": 26,
                                            "end": 29
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 29
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 29
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 29
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 30
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 30
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 40
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
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 46
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "st\\u0061tic",
                                            "flags": 16480,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 58
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
                                                    "start": 59,
                                                    "end": 60
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 61
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
                                                "start": 62,
                                                "end": 62
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 63
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 63
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 63
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 63
                        },
                        "flags": 40,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 64
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 64
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 32,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 32,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 69,
                        "end": 74
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
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 76,
                                        "end": 78
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "st\\u0061tic",
                                            "flags": 16480,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 89
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 90,
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
                                                "transformFlags": 0,
                                                "start": 93,
                                                "end": 93
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 91,
                                            "end": 94
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 89,
                                        "end": 94
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 94
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 94
                        },
                        "flags": 74,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 95
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 95
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 66,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 66,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 100,
                        "end": 105
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
                                            "text": "static",
                                            "rawText": "st\\u0061tic",
                                            "flags": 16480,
                                            "transformFlags": 0,
                                            "start": 107,
                                            "end": 119
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 120,
                                            "end": 121
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
                                                "start": 122,
                                                "end": 122
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 121,
                                            "end": 123
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 119,
                                        "end": 123
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 123
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 107,
                            "end": 123
                        },
                        "flags": 105,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 124
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 124
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 97,
                "end": 125
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 97,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 129,
                        "end": 134
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
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 136,
                                        "end": 143
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 143,
                                        "end": 147
                                    },
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "st\\u0061tic",
                                            "flags": 16480,
                                            "transformFlags": 0,
                                            "start": 147,
                                            "end": 159
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1024,
                                            "transformFlags": 0,
                                            "start": 160,
                                            "end": 161
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
                                                "start": 162,
                                                "end": 162
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 161,
                                            "end": 163
                                        },
                                        "flags": 1024,
                                        "transformFlags": 0,
                                        "start": 159,
                                        "end": 163
                                    },
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 163
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 163
                        },
                        "flags": 134,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 164
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 164
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 126,
                "end": 165
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 126,
            "end": 166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 169,
                        "end": 174
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
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 176,
                                        "end": 183
                                    },
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": {
                                        "kind": 16499,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 183,
                                        "end": 187
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "static",
                                            "rawText": "st\\u0061tic",
                                            "flags": 16480,
                                            "transformFlags": 0,
                                            "start": 187,
                                            "end": 199
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
                                                    "start": 200,
                                                    "end": 201
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 200,
                                            "end": 202
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
                                                "start": 204,
                                                "end": 204
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 202,
                                            "end": 205
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 199,
                                        "end": 205
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 183,
                                    "end": 205
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 176,
                            "end": 205
                        },
                        "flags": 174,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 206
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 169,
                    "end": 206
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 166,
                "end": 207
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 166,
            "end": 208
        }
    ],
    "isModule": true,
    "source": "(class { get st\\u0061tic() {}});\n\n(class { set st\\u0061tic(x){}});\n\n(class { *st\\u0061tic() {}});\n\n(class { st\\u0061tic(){}});\n\n(class { static get st\\u0061tic(){}});\n\n(class { static set st\\u0061tic(x) {}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 208
}
```

### Printed

```javascript
(class {
    get st\u0061tic() {}
  });
(class {
    set st\u0061tic(x) {}
  });

(class {
    *st\u0061tic() {}
  });

(class {
    st\u0061tic() {}
  });

(class {
    static get st\u0061tic() {}
  });

(class {
    static set st\u0061tic(x) {}
  });

```

### Diagnostics

```javascript
✔ No errors
```

