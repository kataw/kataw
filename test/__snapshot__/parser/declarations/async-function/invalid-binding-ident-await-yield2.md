# Kataw parser test case

## Input

`````js
async function foo () {
  var await = 1;
}

async function bar () {
  let await = 2;
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                        "optionalToken": null,
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
            "typeParameters": null,
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 58,
                "end": 62
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                        "optionalToken": null,
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
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 42,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "async function foo () {\n  var await = 1;\n}\n\nasync function bar () {\n  let await = 2;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 29, end: 35
✖ 'await' cannot be used as an identifier here - start: 73, end: 79

```

