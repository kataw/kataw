# Kataw parser test case

## Input

`````js
async function f(){    async function f(){   (a= {[await foo](){}, "x"(){}} ) => a    }    }
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "flags": 64,
                                "start": 19,
                                "end": 28
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 28,
                                "end": 37
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 37,
                                "end": 39
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 39,
                                "end": 41
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
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 77,
                                                    "end": 80
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 351,
                                                                        "asyncKeyword": null,
                                                                        "asteriskToken": null,
                                                                        "getKeyword": null,
                                                                        "setKeyword": null,
                                                                        "method": {
                                                                            "kind": 209,
                                                                            "name": {
                                                                                "kind": 194,
                                                                                "expression": {
                                                                                    "kind": 208,
                                                                                    "awaitKeyword": {
                                                                                        "kind": 82196,
                                                                                        "flags": 64,
                                                                                        "start": 51,
                                                                                        "end": 56
                                                                                    },
                                                                                    "expression": {
                                                                                        "kind": 134299649,
                                                                                        "text": "foo",
                                                                                        "rawText": "foo",
                                                                                        "flags": 96,
                                                                                        "start": 56,
                                                                                        "end": 60
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 51,
                                                                                    "end": 60
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 50,
                                                                                "end": 61
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameters": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 62,
                                                                                "end": 63
                                                                            },
                                                                            "returnType": null,
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "flags": 32,
                                                                                    "start": 64,
                                                                                    "end": 64
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 63,
                                                                                "end": 65
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 61,
                                                                            "end": 65
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 50,
                                                                        "end": 65
                                                                    },
                                                                    {
                                                                        "kind": 351,
                                                                        "asyncKeyword": null,
                                                                        "asteriskToken": null,
                                                                        "getKeyword": null,
                                                                        "setKeyword": null,
                                                                        "method": {
                                                                            "kind": 209,
                                                                            "name": {
                                                                                "kind": 201392131,
                                                                                "text": "x",
                                                                                "rawText": "\"x\"",
                                                                                "flags": 96,
                                                                                "start": 66,
                                                                                "end": 70
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameters": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 71,
                                                                                "end": 72
                                                                            },
                                                                            "returnType": null,
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "flags": 32,
                                                                                    "start": 73,
                                                                                    "end": 73
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 72,
                                                                                "end": 74
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 70,
                                                                            "end": 74
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 66,
                                                                        "end": 74
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 50,
                                                                "end": 74
                                                            },
                                                            "flags": 48,
                                                            "start": 48,
                                                            "end": 75
                                                        },
                                                        "flags": 32,
                                                        "start": 42,
                                                        "end": 75
                                                    }
                                                ],
                                                "asyncKeyword": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 80,
                                                    "end": 82
                                                },
                                                "flags": 34,
                                                "start": 42,
                                                "end": 82
                                            },
                                            "flags": 16,
                                            "start": 42,
                                            "end": 82
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 42,
                                    "end": 82
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 87
                            },
                            "returnType": null,
                            "flags": 144,
                            "start": 19,
                            "end": 87
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 87
                },
                "flags": 32,
                "start": 18,
                "end": 92
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "async function f(){    async function f(){   (a= {[await foo](){}, \"x\"(){}} ) => a    }    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript

async function f() {
  async function f() {
    (a = { [await foo] {}, "\"x\"" {} }) =>  a;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

