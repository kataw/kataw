# Kataw parser test case

## Input

`````js
function test1() {
  async function foo() {
    return 42;
  }

  async function bar() {
    var a = await foo();
    var b: number = a; // valid
    var c: string = a; // Error: number ~> string
  }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "test1",
                "rawText": "test1",
                "flags": 96,
                "start": 8,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 18,
                                "end": 26
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 26,
                                "end": 35
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 35,
                                "end": 39
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 40,
                                "end": 40
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
                                                "start": 43,
                                                "end": 54
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 57
                                            },
                                            "flags": 81,
                                            "start": 43,
                                            "end": 58
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 43,
                                    "end": 58
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 62
                            },
                            "returnType": null,
                            "flags": 144,
                            "start": 18,
                            "end": 62
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 62,
                                "end": 71
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 71,
                                "end": 80
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 80,
                                "end": 84
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 85,
                                "end": 85
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
                                                "start": 88,
                                                "end": 96
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 96,
                                                            "end": 98
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 208,
                                                            "awaitKeyword": {
                                                                "kind": 82196,
                                                                "flags": 64,
                                                                "start": 100,
                                                                "end": 106
                                                            },
                                                            "expression": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 106,
                                                                    "end": 110
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 111,
                                                                    "end": 111
                                                                },
                                                                "flags": 268435488,
                                                                "start": 106,
                                                                "end": 112
                                                            },
                                                            "flags": 32,
                                                            "start": 100,
                                                            "end": 112
                                                        },
                                                        "flags": 16,
                                                        "start": 96,
                                                        "end": 112
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 96,
                                                "end": 112
                                            },
                                            "flags": 16,
                                            "start": 88,
                                            "end": 113
                                        },
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 81,
                                                "start": 113,
                                                "end": 121
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 121,
                                                            "end": 123
                                                        },
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 124,
                                                                "end": 131
                                                            },
                                                            "flags": 2097152,
                                                            "start": 124,
                                                            "end": 131
                                                        },
                                                        "initializer": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 133,
                                                            "end": 135
                                                        },
                                                        "flags": 16,
                                                        "start": 121,
                                                        "end": 135
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 121,
                                                "end": 135
                                            },
                                            "flags": 16,
                                            "start": 113,
                                            "end": 136
                                        },
                                        {
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 81,
                                                "start": 136,
                                                "end": 153
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "c",
                                                            "rawText": "c",
                                                            "flags": 96,
                                                            "start": 153,
                                                            "end": 155
                                                        },
                                                        "type": {
                                                            "kind": 139,
                                                            "bitwiseOrToken": null,
                                                            "bitwiseAndToken": null,
                                                            "type": {
                                                                "kind": 134234347,
                                                                "flags": 2097216,
                                                                "start": 156,
                                                                "end": 163
                                                            },
                                                            "flags": 2097152,
                                                            "start": 156,
                                                            "end": 163
                                                        },
                                                        "initializer": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 165,
                                                            "end": 167
                                                        },
                                                        "flags": 16,
                                                        "start": 153,
                                                        "end": 167
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 153,
                                                "end": 167
                                            },
                                            "flags": 16,
                                            "start": 136,
                                            "end": 168
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 88,
                                    "end": 168
                                },
                                "flags": 32,
                                "start": 86,
                                "end": 199
                            },
                            "returnType": null,
                            "flags": 144,
                            "start": 62,
                            "end": 199
                        }
                    ],
                    "flags": 33,
                    "start": 18,
                    "end": 199
                },
                "flags": 32,
                "start": 16,
                "end": 201
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 201
        }
    ],
    "isModule": false,
    "source": "function test1() {\n  async function foo() {\n    return 42;\n  }\n\n  async function bar() {\n    var a = await foo();\n    var b: number = a; // valid\n    var c: string = a; // Error: number ~> string\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 201
}
```

### Printed

```javascript

function test1() {
  async function foo() {
    return 42;
  }
  async function bar() {
    var a = await foo();
    var b: number = a; // valid
    var c: string = a; // Error: number ~> string
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

