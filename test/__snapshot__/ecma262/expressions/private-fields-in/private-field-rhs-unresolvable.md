# Kataw parser test case

## Input

`````js
let caught = null;

class C {
  #field;
  constructor() {
    try {
      #field in test262unresolvable;
    } catch (error) {
      caught = error;
    }
  }
}

new C();
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
                            "text": "caught",
                            "rawText": "caught",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 138477575,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 17
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 18,
                "end": 25
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 27
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
                                "start": 29,
                                "end": 38
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 29,
                            "end": 38
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 39
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
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 53
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 55
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 159,
                                                "tryKeyword": {
                                                    "kind": 37757027,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 65
                                                },
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [
                                                            {
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 198,
                                                                    "left": {
                                                                        "kind": 67191035,
                                                                        "text": "#field",
                                                                        "rawText": "#field",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 67,
                                                                        "end": 80
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 21006388,
                                                                        "flags": 96,
                                                                        "transformFlags": 8192,
                                                                        "start": 80,
                                                                        "end": 83
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "test262unresolvable",
                                                                        "rawText": "test262unresolvable",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 83,
                                                                        "end": 103
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 5120,
                                                                    "start": 67,
                                                                    "end": 103
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4096,
                                                                "start": 67,
                                                                "end": 104
                                                            }
                                                        ],
                                                        "flags": 17,
                                                        "transformFlags": 0,
                                                        "start": 67,
                                                        "end": 104
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 65,
                                                    "end": 110
                                                },
                                                "catchClause": {
                                                    "kind": 173,
                                                    "catchKeyword": {
                                                        "kind": 4202575,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 110,
                                                        "end": 116
                                                    },
                                                    "catchParameter": {
                                                        "kind": 134299649,
                                                        "text": "error",
                                                        "rawText": "error",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 118,
                                                        "end": 123
                                                    },
                                                    "block": {
                                                        "kind": 124,
                                                        "block": {
                                                            "kind": 249,
                                                            "statements": [
                                                                {
                                                                    "kind": 120,
                                                                    "expression": {
                                                                        "kind": 125,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "caught",
                                                                            "rawText": "caught",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 126,
                                                                            "end": 139
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 139,
                                                                            "end": 141
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "error",
                                                                            "rawText": "error",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 141,
                                                                            "end": 147
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 128,
                                                                        "start": 126,
                                                                        "end": 147
                                                                    },
                                                                    "flags": 16,
                                                                    "transformFlags": 4096,
                                                                    "start": 126,
                                                                    "end": 148
                                                                }
                                                            ],
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 126,
                                                            "end": 148
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 124,
                                                        "end": 154
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 110,
                                                    "end": 154
                                                },
                                                "finallyKeyword": null,
                                                "finallyBlock": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 154
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 154
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 158
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 158
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 158
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 158
                },
                "flags": 27,
                "transformFlags": 0,
                "start": 32,
                "end": 160
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 18,
            "end": 160
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 160,
                    "end": 165
                },
                "expression": {
                    "kind": 134299649,
                    "text": "C",
                    "rawText": "C",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 167
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 168,
                    "end": 168
                },
                "flags": 97,
                "transformFlags": 2048,
                "start": 160,
                "end": 169
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 160,
            "end": 170
        }
    ],
    "isModule": false,
    "source": "let caught = null;\n\nclass C {\n  #field;\n  constructor() {\n    try {\n      #field in test262unresolvable;\n    } catch (error) {\n      caught = error;\n    }\n  }\n}\n\nnew C();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 170
}
```

### Printed

```javascript

let caught = null;
class C {
    #field
    ;
    constructor() {
        try {
            #field in test262unresolvable;
        }
        catch (error){
            caught = error;
        }
    }
}
new C();

```

### Diagnostics

```javascript
✔ No errors
```

