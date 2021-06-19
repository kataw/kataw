# Kataw parser test case

## Input

`````js
async function foo () {
  var await = 1;
}

async function bar () {
  let await = 2;
}

function * foo1() {
  var yield = 1;
}

function * bar1() {
  let yield = 2;
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 23,
                                "end": 29
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 35
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "flags": 16,
                                        "start": 29,
                                        "end": 39
                                    }
                                ],
                                "flags": 16,
                                "start": 29,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 23,
                            "end": 40
                        }
                    ],
                    "flags": 33,
                    "start": 23,
                    "end": 40
                },
                "flags": 32,
                "start": 21,
                "end": 42
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 42
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 42,
                "end": 49
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 49,
                "end": 58
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 58,
                "end": 62
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 62,
                "end": 65
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 81,
                                "start": 67,
                                "end": 73
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 73,
                                            "end": 79
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 81,
                                            "end": 83
                                        },
                                        "flags": 16,
                                        "start": 73,
                                        "end": 83
                                    }
                                ],
                                "flags": 17,
                                "start": 73,
                                "end": 83
                            },
                            "flags": 33554448,
                            "start": 67,
                            "end": 84
                        }
                    ],
                    "flags": 33,
                    "start": 67,
                    "end": 84
                },
                "flags": 32,
                "start": 65,
                "end": 86
            },
            "returnType": null,
            "flags": 144,
            "start": 42,
            "end": 86
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 86,
                "end": 96
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 96,
                "end": 98
            },
            "name": {
                "kind": 134299649,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 96,
                "start": 98,
                "end": 103
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 103,
                "end": 105
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 107,
                                "end": 113
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 113,
                                            "end": 119
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 121,
                                            "end": 123
                                        },
                                        "flags": 16,
                                        "start": 113,
                                        "end": 123
                                    }
                                ],
                                "flags": 16,
                                "start": 113,
                                "end": 123
                            },
                            "flags": 16,
                            "start": 107,
                            "end": 124
                        }
                    ],
                    "flags": 33,
                    "start": 107,
                    "end": 124
                },
                "flags": 32,
                "start": 105,
                "end": 126
            },
            "returnType": null,
            "flags": 272,
            "start": 86,
            "end": 126
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 126,
                "end": 136
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 136,
                "end": 138
            },
            "name": {
                "kind": 134299649,
                "text": "bar1",
                "rawText": "bar1",
                "flags": 96,
                "start": 138,
                "end": 143
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 143,
                "end": 145
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 81,
                                "start": 147,
                                "end": 153
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 153,
                                            "end": 159
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 161,
                                            "end": 163
                                        },
                                        "flags": 16,
                                        "start": 153,
                                        "end": 163
                                    }
                                ],
                                "flags": 17,
                                "start": 153,
                                "end": 163
                            },
                            "flags": 33554448,
                            "start": 147,
                            "end": 164
                        }
                    ],
                    "flags": 33,
                    "start": 147,
                    "end": 164
                },
                "flags": 32,
                "start": 145,
                "end": 166
            },
            "returnType": null,
            "flags": 272,
            "start": 126,
            "end": 166
        }
    ],
    "isModule": false,
    "source": "async function foo () {\n  var await = 1;\n}\n\nasync function bar () {\n  let await = 2;\n}\n\nfunction * foo1() {\n  var yield = 1;\n}\n\nfunction * bar1() {\n  let yield = 2;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 166
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 29, end: 35
✖ 'await' cannot be used as an identifier here - start: 73, end: 79
✖ 'yield' cannot be used as an identifier here - start: 113, end: 119
✖ 'yield' cannot be used as an identifier here - start: 153, end: 159

```

