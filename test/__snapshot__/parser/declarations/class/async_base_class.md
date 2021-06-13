# Kataw parser test case

## Input

`````js
class C {};

var P: Promise<Class<C>> = new Promise(function (resolve, reject) {
  resolve(C);
});

async function foo() {
  class Bar extends (await P) { }
  return Bar;
}
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "start": 32,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 10,
            "end": 11
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 11,
                "end": 16
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "P",
                            "rawText": "P",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Promise",
                                    "rawText": "Promise",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 27
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "Class",
                                                    "rawText": "Class",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 33
                                                },
                                                "typeParameters": {
                                                    "kind": 266,
                                                    "parameters": [
                                                        {
                                                            "kind": 267,
                                                            "type": {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "C",
                                                                    "rawText": "C",
                                                                    "flags": 96,
                                                                    "start": 34,
                                                                    "end": 35
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 2097152,
                                                                "start": 34,
                                                                "end": 35
                                                            },
                                                            "flags": 2097152,
                                                            "start": 34,
                                                            "end": 35
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 33,
                                                    "end": 35
                                                },
                                                "flags": 2097152,
                                                "start": 28,
                                                "end": 35
                                            },
                                            "flags": 2097152,
                                            "start": 28,
                                            "end": 35
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 27,
                                    "end": 35
                                },
                                "flags": 2097152,
                                "start": 19,
                                "end": 35
                            },
                            "flags": 2097152,
                            "start": 18,
                            "end": 35
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 16,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 16,
                "end": 35
            },
            "flags": 16,
            "start": 11,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 35,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 35141,
                    "flags": 96,
                    "start": 35,
                    "end": 37
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 37,
                    "end": 37
                },
                "flags": 32,
                "start": 35,
                "end": 37
            },
            "flags": 16,
            "start": 35,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 39,
                    "end": 43
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Promise",
                    "rawText": "Promise",
                    "flags": 96,
                    "start": 43,
                    "end": 51
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 52,
                                "end": 60
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 134299649,
                                        "text": "resolve",
                                        "rawText": "resolve",
                                        "flags": 96,
                                        "start": 62,
                                        "end": 69
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "reject",
                                        "rawText": "reject",
                                        "flags": 96,
                                        "start": 70,
                                        "end": 77
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 60,
                                "end": 78
                            },
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
                                                    "kind": 134299649,
                                                    "text": "resolve",
                                                    "rawText": "resolve",
                                                    "flags": 96,
                                                    "start": 80,
                                                    "end": 90
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "C",
                                                            "rawText": "C",
                                                            "flags": 96,
                                                            "start": 91,
                                                            "end": 92
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 91,
                                                    "end": 92
                                                },
                                                "flags": 268435488,
                                                "start": 80,
                                                "end": 93
                                            },
                                            "flags": 16,
                                            "start": 80,
                                            "end": 94
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 80,
                                    "end": 94
                                },
                                "flags": 32,
                                "start": 78,
                                "end": 96
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 52,
                            "end": 96
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 52,
                    "end": 96
                },
                "flags": 96,
                "start": 39,
                "end": 97
            },
            "flags": 16,
            "start": 39,
            "end": 98
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 98,
                "end": 105
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 105,
                "end": 114
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 114,
                "end": 118
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 118,
                "end": 120
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "start": 122,
                                "end": 130
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "Bar",
                                "rawText": "Bar",
                                "flags": 96,
                                "start": 130,
                                "end": 134
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 134,
                                        "end": 142
                                    },
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 144,
                                                "end": 149
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "P",
                                                "rawText": "P",
                                                "flags": 96,
                                                "start": 149,
                                                "end": 151
                                            },
                                            "flags": 32,
                                            "start": 144,
                                            "end": 151
                                        },
                                        "flags": 32,
                                        "start": 142,
                                        "end": 152
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 142,
                                    "end": 152
                                },
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 154,
                                    "end": 154
                                },
                                "flags": 134,
                                "start": 32,
                                "end": 156
                            },
                            "flags": 17,
                            "start": 122,
                            "end": 156
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 156,
                                "end": 165
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Bar",
                                "rawText": "Bar",
                                "flags": 96,
                                "start": 165,
                                "end": 169
                            },
                            "flags": 81,
                            "start": 156,
                            "end": 170
                        }
                    ],
                    "flags": 33,
                    "start": 122,
                    "end": 170
                },
                "flags": 32,
                "start": 120,
                "end": 172
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 98,
            "end": 172
        }
    ],
    "isModule": false,
    "source": "class C {};\n\nvar P: Promise<Class<C>> = new Promise(function (resolve, reject) {\n  resolve(C);\n});\n\nasync function foo() {\n  class Bar extends (await P) { }\n  return Bar;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 172
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 35, end: 37
✖ ',' expected - start: 35, end: 37
✖ Identifier expected - start: 37, end: 39

```

