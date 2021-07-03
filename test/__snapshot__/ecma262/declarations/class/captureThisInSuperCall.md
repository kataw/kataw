# Kataw parser test case

## Input

`````js
class A {
    constructor(p:any) {}
}

class B extends A {
    constructor() { super({ test: () => this.someMethod()}); }
    someMethod() {}
}
`````

## Options

### Parser Options

`````js
{allowTypes: true}
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "start": 9,
                                    "end": 25
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
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234252,
                                                    "flags": 2097216,
                                                    "start": 28,
                                                    "end": 31
                                                },
                                                "flags": 2097152,
                                                "start": 28,
                                                "end": 31
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 26,
                                            "end": 31
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2080,
                                    "start": 26,
                                    "end": 32
                                },
                                "returnType": null,
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
                                    "start": 32,
                                    "end": 35
                                },
                                "flags": 2048,
                                "start": 25,
                                "end": 35
                            },
                            "flags": 2048,
                            "start": 9,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 35
                },
                "flags": 7,
                "start": 32,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 37,
                "end": 44
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 44,
                "end": 46
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 46,
                        "end": 54
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "start": 54,
                        "end": 56
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 54,
                    "end": 56
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "start": 58,
                                    "end": 74
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 75,
                                    "end": 76
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
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "start": 78,
                                                        "end": 84
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
                                                                            "kind": 219,
                                                                            "asteriskToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "test",
                                                                                "rawText": "test",
                                                                                "flags": 96,
                                                                                "start": 86,
                                                                                "end": 91
                                                                            },
                                                                            "right": {
                                                                                "kind": 271,
                                                                                "asyncKeyword": null,
                                                                                "typeParameters": null,
                                                                                "arrowPatameterList": {
                                                                                    "kind": 342,
                                                                                    "parameters": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 0,
                                                                                    "start": 94,
                                                                                    "end": 94
                                                                                },
                                                                                "returnType": null,
                                                                                "arrowToken": {
                                                                                    "kind": 10,
                                                                                    "flags": 64,
                                                                                    "start": 95,
                                                                                    "end": 98
                                                                                },
                                                                                "contents": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 129,
                                                                                        "member": {
                                                                                            "kind": 4276321,
                                                                                            "flags": 96,
                                                                                            "start": 98,
                                                                                            "end": 103
                                                                                        },
                                                                                        "expression": {
                                                                                            "kind": 134299649,
                                                                                            "text": "someMethod",
                                                                                            "rawText": "someMethod",
                                                                                            "flags": 96,
                                                                                            "start": 104,
                                                                                            "end": 114
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 98,
                                                                                        "end": 114
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 115,
                                                                                        "end": 115
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "start": 98,
                                                                                    "end": 116
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 92,
                                                                                "end": 116
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 86,
                                                                            "end": 116
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 86,
                                                                    "end": 116
                                                                },
                                                                "flags": 48,
                                                                "start": 85,
                                                                "end": 117
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 85,
                                                        "end": 117
                                                    },
                                                    "flags": 268435488,
                                                    "start": 78,
                                                    "end": 118
                                                },
                                                "flags": 16,
                                                "start": 78,
                                                "end": 119
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 78,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "start": 76,
                                    "end": 121
                                },
                                "flags": 2048,
                                "start": 74,
                                "end": 121
                            },
                            "flags": 2048,
                            "start": 58,
                            "end": 121
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
                                    "text": "someMethod",
                                    "rawText": "someMethod",
                                    "flags": 97,
                                    "start": 121,
                                    "end": 136
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 137,
                                    "end": 138
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 140,
                                        "end": 140
                                    },
                                    "flags": 32,
                                    "start": 138,
                                    "end": 141
                                },
                                "flags": 0,
                                "start": 136,
                                "end": 141
                            },
                            "flags": 0,
                            "start": 121,
                            "end": 141
                        }
                    ],
                    "flags": 32,
                    "start": 58,
                    "end": 141
                },
                "flags": 46,
                "start": 32,
                "end": 143
            },
            "flags": 17,
            "start": 37,
            "end": 143
        }
    ],
    "isModule": false,
    "source": "class A {\n    constructor(p:any) {}\n}\n\nclass B extends A {\n    constructor() { super({ test: () => this.someMethod()}); }\n    someMethod() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 143
}
```

### Printed

```javascript

class A {
  constructor(p: any) {}
}
class B extends A {
  constructor() {
    super({ test : () => this.someMethod() });
  }
  someMethod() {}
}

```

### Diagnostics

```javascript
✔ No errors
```

