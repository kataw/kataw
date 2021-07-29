# Kataw parser test case

## Input

`````js
let Child;

class Parent {
  #field;

  static init() {
    Child = class {
      #field;

      static isNameIn(value) {
        return #field in value;
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 10,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "Parent",
                "rawText": "Parent",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 24
            },
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
                                "text": "#field",
                                "rawText": "#field",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 35
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 26,
                            "end": 35
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 36
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 46
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
                                    "start": 46,
                                    "end": 51
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 53
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
                                                        "start": 55,
                                                        "end": 65
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 65,
                                                        "end": 67
                                                    },
                                                    "right": {
                                                        "kind": 189,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 67,
                                                            "end": 73
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
                                                                            "text": "#field",
                                                                            "rawText": "#field",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 75,
                                                                            "end": 88
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 75,
                                                                        "end": 88
                                                                    },
                                                                    {
                                                                        "kind": 1108353041,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 88,
                                                                        "end": 89
                                                                    },
                                                                    {
                                                                        "kind": 278,
                                                                        "declareToken": null,
                                                                        "decorators": null,
                                                                        "staticKeyword": {
                                                                            "kind": 8388716,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 89,
                                                                            "end": 103
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
                                                                                "start": 103,
                                                                                "end": 112
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
                                                                                        "start": 113,
                                                                                        "end": 118
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 113,
                                                                                "end": 119
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
                                                                                                "start": 121,
                                                                                                "end": 136
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 198,
                                                                                                "left": {
                                                                                                    "kind": 67191035,
                                                                                                    "text": "#field",
                                                                                                    "rawText": "#field",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 136,
                                                                                                    "end": 143
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 21006388,
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 143,
                                                                                                    "end": 146
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "value",
                                                                                                    "rawText": "value",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 146,
                                                                                                    "end": 152
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "transformFlags": 5120,
                                                                                                "start": 136,
                                                                                                "end": 152
                                                                                            },
                                                                                            "flags": 81,
                                                                                            "transformFlags": 256,
                                                                                            "start": 121,
                                                                                            "end": 153
                                                                                        }
                                                                                    ],
                                                                                    "flags": 33,
                                                                                    "transformFlags": 0,
                                                                                    "start": 121,
                                                                                    "end": 153
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 119,
                                                                                "end": 161
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 0,
                                                                            "start": 112,
                                                                            "end": 161
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 103,
                                                                        "end": 161
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 75,
                                                                "end": 161
                                                            },
                                                            "flags": 73,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 167
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 67,
                                                        "end": 167
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 55,
                                                    "end": 167
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 55,
                                                "end": 168
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 168
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 172
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 172
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 172
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 172
                },
                "flags": 24,
                "transformFlags": 0,
                "start": 32,
                "end": 174
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 10,
            "end": 174
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
                        "start": 174,
                        "end": 182
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "init",
                        "rawText": "init",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 183,
                        "end": 187
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 174,
                    "end": 187
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 188,
                    "end": 188
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 174,
                "end": 189
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 174,
            "end": 190
        }
    ],
    "isModule": false,
    "source": "let Child;\n\nclass Parent {\n  #field;\n\n  static init() {\n    Child = class {\n      #field;\n\n      static isNameIn(value) {\n        return #field in value;\n      }\n    };\n  }\n}\n\nParent.init();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 190
}
```

### Printed

```javascript
let Child;
class Parent {
  #field;;
  static init() {
    Child = class {
      #field;;
      static isNameIn(value) {
        return #field in value;
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

