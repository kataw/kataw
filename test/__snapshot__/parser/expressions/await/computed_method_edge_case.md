# Kataw parser test case

## Input

`````js
async function f(){    async function f(){   (a= {[await foo](){}, "x"(){}} ) => a    }    }
`````

## Output

### Hybrid CST

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
                "flags": 512,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 512,
                                "start": 19,
                                "end": 28
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 28,
                                "end": 37
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 37,
                                "end": 39
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
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
                                                    "flags": 0,
                                                    "start": 77,
                                                    "end": 80
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 46,
                                                            "end": 47
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 512,
                                                            "start": 47,
                                                            "end": 48
                                                        },
                                                        "right": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 194,
                                                                            "expression": {
                                                                                "kind": 208,
                                                                                "awaitToken": {
                                                                                    "kind": 82032,
                                                                                    "flags": 0,
                                                                                    "start": 51,
                                                                                    "end": 56
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 768,
                                                                                    "start": 56,
                                                                                    "end": 60
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 51,
                                                                                "end": 60
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 50,
                                                                            "end": 61
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 256,
                                                                            "start": 62,
                                                                            "end": 63
                                                                        },
                                                                        "type": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "multiline": false,
                                                                                "flags": 256,
                                                                                "start": 64,
                                                                                "end": 64
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 63,
                                                                            "end": 65
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 61,
                                                                        "end": 65
                                                                    },
                                                                    {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 201392131,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 768,
                                                                            "start": 66,
                                                                            "end": 70
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 256,
                                                                            "start": 71,
                                                                            "end": 72
                                                                        },
                                                                        "type": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "multiline": false,
                                                                                "flags": 256,
                                                                                "start": 73,
                                                                                "end": 73
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 72,
                                                                            "end": 74
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 70,
                                                                        "end": 74
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "multiline": false,
                                                                "flags": 0,
                                                                "start": 50,
                                                                "end": 74
                                                            },
                                                            "flags": 256,
                                                            "start": 48,
                                                            "end": 75
                                                        },
                                                        "flags": 256,
                                                        "start": 42,
                                                        "end": 75
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 80,
                                                    "end": 82
                                                },
                                                "flags": 256,
                                                "start": 42,
                                                "end": 82
                                            },
                                            "flags": 128,
                                            "start": 42,
                                            "end": 82
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 42,
                                    "end": 82
                                },
                                "flags": 256,
                                "start": 41,
                                "end": 87
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1152,
                            "start": 19,
                            "end": 87
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 87
                },
                "flags": 256,
                "start": 18,
                "end": 92
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "text": "async function f(){    async function f(){   (a= {[await foo](){}, \"x\"(){}} ) => a    }    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

