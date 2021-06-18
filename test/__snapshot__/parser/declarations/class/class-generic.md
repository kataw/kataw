# Kataw parser test case

## Input

`````js
class A<TYPE> {
  aaf = (): Promise<TYPE> => {
    return new Promise<TYPE>(console.log);
  };
  anf(): Promise<TYPE> {
    return new Promise<TYPE>(console.log);
  }
}
`````

## Options

`````js
{ allowTypes: true }
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
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
                                "text": "TYPE",
                                "rawText": "TYPE",
                                "flags": 96,
                                "start": 8,
                                "end": 12
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 12
                },
                "flags": 2097152,
                "start": 7,
                "end": 13
            },
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
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "aaf",
                                "rawText": "aaf",
                                "flags": 96,
                                "start": 15,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 41,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncKeyword": null,
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "Promise",
                                            "rawText": "Promise",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 35
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
                                                            "kind": 144,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "TYPE",
                                                                "rawText": "TYPE",
                                                                "flags": 96,
                                                                "start": 36,
                                                                "end": 40
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 36,
                                                            "end": 40
                                                        },
                                                        "flags": 2097152,
                                                        "start": 36,
                                                        "end": 40
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 36,
                                                "end": 40
                                            },
                                            "flags": 2097152,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "flags": 2097152,
                                        "start": 27,
                                        "end": 41
                                    },
                                    "flags": 2097152,
                                    "start": 27,
                                    "end": 41
                                },
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
                                                    "start": 46,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 210,
                                                            "newKeyword": {
                                                                "kind": 138477661,
                                                                "flags": 96,
                                                                "start": 57,
                                                                "end": 61
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "Promise",
                                                                "rawText": "Promise",
                                                                "flags": 96,
                                                                "start": 61,
                                                                "end": 69
                                                            },
                                                            "argumentList": null,
                                                            "flags": 96,
                                                            "start": 57,
                                                            "end": 69
                                                        },
                                                        "operatorToken": {
                                                            "kind": 536971330,
                                                            "flags": 96,
                                                            "start": 69,
                                                            "end": 70
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "TYPE",
                                                            "rawText": "TYPE",
                                                            "flags": 96,
                                                            "start": 70,
                                                            "end": 74
                                                        },
                                                        "flags": 32,
                                                        "start": 57,
                                                        "end": 74
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34883,
                                                        "flags": 96,
                                                        "start": 74,
                                                        "end": 75
                                                    },
                                                    "right": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "console",
                                                                "rawText": "console",
                                                                "flags": 96,
                                                                "start": 76,
                                                                "end": 83
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "log",
                                                                "rawText": "log",
                                                                "flags": 96,
                                                                "start": 84,
                                                                "end": 87
                                                            },
                                                            "flags": 536870944,
                                                            "start": 75,
                                                            "end": 87
                                                        },
                                                        "flags": 32,
                                                        "start": 75,
                                                        "end": 88
                                                    },
                                                    "flags": 32,
                                                    "start": 57,
                                                    "end": 88
                                                },
                                                "flags": 81,
                                                "start": 46,
                                                "end": 89
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 46,
                                        "end": 89
                                    },
                                    "flags": 32,
                                    "start": 44,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 93
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 93
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 93,
                            "end": 94
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "anf",
                                    "rawText": "anf",
                                    "flags": 96,
                                    "start": 94,
                                    "end": 100
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 101,
                                    "end": 102
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "Promise",
                                            "rawText": "Promise",
                                            "flags": 96,
                                            "start": 103,
                                            "end": 111
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
                                                            "kind": 144,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "TYPE",
                                                                "rawText": "TYPE",
                                                                "flags": 96,
                                                                "start": 112,
                                                                "end": 116
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 112,
                                                            "end": 116
                                                        },
                                                        "flags": 2097152,
                                                        "start": 112,
                                                        "end": 116
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 112,
                                                "end": 116
                                            },
                                            "flags": 2097152,
                                            "start": 111,
                                            "end": 117
                                        },
                                        "flags": 2097152,
                                        "start": 103,
                                        "end": 117
                                    },
                                    "flags": 2097152,
                                    "start": 103,
                                    "end": 117
                                },
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
                                                    "start": 119,
                                                    "end": 130
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 210,
                                                            "newKeyword": {
                                                                "kind": 138477661,
                                                                "flags": 96,
                                                                "start": 130,
                                                                "end": 134
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "Promise",
                                                                "rawText": "Promise",
                                                                "flags": 96,
                                                                "start": 134,
                                                                "end": 142
                                                            },
                                                            "argumentList": null,
                                                            "flags": 96,
                                                            "start": 130,
                                                            "end": 142
                                                        },
                                                        "operatorToken": {
                                                            "kind": 536971330,
                                                            "flags": 96,
                                                            "start": 142,
                                                            "end": 143
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "TYPE",
                                                            "rawText": "TYPE",
                                                            "flags": 96,
                                                            "start": 143,
                                                            "end": 147
                                                        },
                                                        "flags": 32,
                                                        "start": 130,
                                                        "end": 147
                                                    },
                                                    "operatorToken": {
                                                        "kind": 34883,
                                                        "flags": 96,
                                                        "start": 147,
                                                        "end": 148
                                                    },
                                                    "right": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "console",
                                                                "rawText": "console",
                                                                "flags": 96,
                                                                "start": 149,
                                                                "end": 156
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "log",
                                                                "rawText": "log",
                                                                "flags": 96,
                                                                "start": 157,
                                                                "end": 160
                                                            },
                                                            "flags": 536870944,
                                                            "start": 148,
                                                            "end": 160
                                                        },
                                                        "flags": 32,
                                                        "start": 148,
                                                        "end": 161
                                                    },
                                                    "flags": 32,
                                                    "start": 130,
                                                    "end": 161
                                                },
                                                "flags": 81,
                                                "start": 119,
                                                "end": 162
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 119,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "start": 117,
                                    "end": 166
                                },
                                "flags": 0,
                                "start": 100,
                                "end": 166
                            },
                            "flags": 0,
                            "start": 94,
                            "end": 166
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 166
                },
                "flags": 13,
                "start": 32,
                "end": 168
            },
            "flags": 16,
            "start": 0,
            "end": 168
        }
    ],
    "isModule": false,
    "source": "class A<TYPE> {\n  aaf = (): Promise<TYPE> => {\n    return new Promise<TYPE>(console.log);\n  };\n  anf(): Promise<TYPE> {\n    return new Promise<TYPE>(console.log);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 168
}
```

### Printed

```javascript

class A {
  aaf = () =>  {
      return  new  Promise()  < TYPE > (console.log);
    };

  anf {
    return  new  Promise()  < TYPE > (console.log);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

