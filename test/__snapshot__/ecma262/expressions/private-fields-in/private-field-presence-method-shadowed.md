# Kataw parser test case

## Input

`````js
let Child;
let parentCount = 0;
let childCount = 0;

class Parent {
  #method() {
    parentCount += 1;
  }

  static init() {
    Child = class {
      #method() {
        childCount += 1;
      }

      static isNameIn(value) {
        return #method in value;
      }
    };
  }
}

Parent.init();
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
                "transformFlags": 0,
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
                            "text": "Child",
                            "rawText": "Child",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "parentCount",
                            "rawText": "parentCount",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 26
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 30
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 30
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 14,
                "end": 30
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 10,
            "end": 31
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 31,
                "end": 35
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "childCount",
                            "rawText": "childCount",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 46
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 50
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 35,
                        "end": 50
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 35,
                "end": 50
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 31,
            "end": 51
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 51,
                "end": 58
            },
            "name": {
                "kind": 134299649,
                "text": "Parent",
                "rawText": "Parent",
                "flags": 96,
                "transformFlags": 0,
                "start": 58,
                "end": 65
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
                                    "text": "#method",
                                    "rawText": "#method",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 79
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "parentCount",
                                                        "rawText": "parentCount",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 81,
                                                        "end": 97
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 97,
                                                        "end": 100
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 100,
                                                        "end": 102
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 81,
                                                    "end": 102
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 81,
                                                "end": 103
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 103
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 79,
                                    "end": 107
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 107
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 107
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 117
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "init",
                                    "rawText": "init",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 117,
                                    "end": 122
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 124
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "Child",
                                                        "rawText": "Child",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 126,
                                                        "end": 136
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 136,
                                                        "end": 138
                                                    },
                                                    "right": {
                                                        "kind": 189,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 138,
                                                            "end": 144
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
                                                                                "text": "#method",
                                                                                "rawText": "#method",
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 146,
                                                                                "end": 160
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameterList": {
                                                                                "kind": 214,
                                                                                "formalParameters": [],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "transformFlags": 0,
                                                                                "start": 161,
                                                                                "end": 162
                                                                            },
                                                                            "returnType": null,
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 120,
                                                                                            "expression": {
                                                                                                "kind": 125,
                                                                                                "left": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "childCount",
                                                                                                    "rawText": "childCount",
                                                                                                    "flags": 97,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 164,
                                                                                                    "end": 183
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 4130,
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 183,
                                                                                                    "end": 186
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 1,
                                                                                                    "rawText": "1",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 186,
                                                                                                    "end": 188
                                                                                                },
                                                                                                "flags": 0,
                                                                                                "transformFlags": 128,
                                                                                                "start": 164,
                                                                                                "end": 188
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "transformFlags": 4096,
                                                                                            "start": 164,
                                                                                            "end": 189
                                                                                        }
                                                                                    ],
                                                                                    "flags": 33,
                                                                                    "transformFlags": 0,
                                                                                    "start": 164,
                                                                                    "end": 189
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 162,
                                                                                "end": 197
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 0,
                                                                            "start": 160,
                                                                            "end": 197
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 146,
                                                                        "end": 197
                                                                    },
                                                                    {
                                                                        "kind": 278,
                                                                        "declareToken": null,
                                                                        "decorators": null,
                                                                        "staticKeyword": {
                                                                            "kind": 8388716,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 197,
                                                                            "end": 211
                                                                        },
                                                                        "asyncKeyword": null,
                                                                        "setKeyword": null,
                                                                        "getKeyword": null,
                                                                        "asteriskToken": null,
                                                                        "method": {
                                                                            "kind": 209,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "isNameIn",
                                                                                "rawText": "isNameIn",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 211,
                                                                                "end": 220
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameterList": {
                                                                                "kind": 214,
                                                                                "formalParameters": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "value",
                                                                                        "rawText": "value",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 221,
                                                                                        "end": 226
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 221,
                                                                                "end": 227
                                                                            },
                                                                            "returnType": null,
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 161,
                                                                                            "returnKeyword": {
                                                                                                "kind": 37757022,
                                                                                                "flags": 81,
                                                                                                "transformFlags": 0,
                                                                                                "start": 229,
                                                                                                "end": 244
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 198,
                                                                                                "left": {
                                                                                                    "kind": 67191035,
                                                                                                    "text": "#method",
                                                                                                    "rawText": "#method",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 244,
                                                                                                    "end": 252
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 21006388,
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 8192,
                                                                                                    "start": 252,
                                                                                                    "end": 255
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "value",
                                                                                                    "rawText": "value",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 255,
                                                                                                    "end": 261
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "transformFlags": 5120,
                                                                                                "start": 244,
                                                                                                "end": 261
                                                                                            },
                                                                                            "flags": 81,
                                                                                            "transformFlags": 256,
                                                                                            "start": 229,
                                                                                            "end": 262
                                                                                        }
                                                                                    ],
                                                                                    "flags": 33,
                                                                                    "transformFlags": 0,
                                                                                    "start": 229,
                                                                                    "end": 262
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 227,
                                                                                "end": 270
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 0,
                                                                            "start": 220,
                                                                            "end": 270
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 211,
                                                                        "end": 270
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 146,
                                                                "end": 270
                                                            },
                                                            "flags": 144,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 276
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 138,
                                                        "end": 276
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 126,
                                                    "end": 276
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 126,
                                                "end": 277
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 126,
                                        "end": 277
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 124,
                                    "end": 281
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 281
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 117,
                            "end": 281
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 281
                },
                "flags": 65,
                "transformFlags": 0,
                "start": 32,
                "end": 283
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 51,
            "end": 283
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "Parent",
                        "rawText": "Parent",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 283,
                        "end": 291
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "init",
                        "rawText": "init",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 292,
                        "end": 296
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 283,
                    "end": 296
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 297,
                    "end": 297
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 283,
                "end": 298
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 283,
            "end": 299
        }
    ],
    "isModule": false,
    "source": "let Child;\nlet parentCount = 0;\nlet childCount = 0;\n\nclass Parent {\n  #method() {\n    parentCount += 1;\n  }\n\n  static init() {\n    Child = class {\n      #method() {\n        childCount += 1;\n      }\n\n      static isNameIn(value) {\n        return #method in value;\n      }\n    };\n  }\n}\n\nParent.init();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 299
}
```

### Printed

```javascript

let Child;
let parentCount = 0;
let childCount = 0;
class Parent {
    #method() {
        parentCount += 1;
    }
    static init() {
        Child = class {
            #method() {
                childCount += 1;
            }
            static isNameIn(value) {
                return #method in value;
            }
        };
    }
}
Parent.init();

```

### Diagnostics

```javascript
✔ No errors
```

