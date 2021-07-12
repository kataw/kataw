# Kataw parser test case

## Input

`````js
function f(x: any) {
  x();
  const y = x();
}

function g(x: () => any) {
  x();
  const y = x();
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 13,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 17
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 17
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 97,
                                    "start": 20,
                                    "end": 24
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 268435488,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 27
                        },
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 81,
                                "start": 27,
                                "end": 35
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 37
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 42,
                                                "end": 42
                                            },
                                            "flags": 268435488,
                                            "start": 39,
                                            "end": 43
                                        },
                                        "flags": 16,
                                        "start": 35,
                                        "end": 43
                                    }
                                ],
                                "flags": 16777232,
                                "start": 35,
                                "end": 43
                            },
                            "flags": 33554448,
                            "start": 27,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 44
                },
                "flags": 32,
                "start": 18,
                "end": 46
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 46
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 46,
                "end": 56
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 56,
                "end": 58
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 59,
                            "end": 60
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 63,
                                    "end": 63
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 64,
                                    "end": 67
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234252,
                                        "flags": 2097216,
                                        "start": 67,
                                        "end": 71
                                    },
                                    "flags": 2097152,
                                    "start": 67,
                                    "end": 71
                                },
                                "flags": 2097152,
                                "start": 61,
                                "end": 71
                            },
                            "flags": 2097152,
                            "start": 61,
                            "end": 71
                        },
                        "right": null,
                        "flags": 32,
                        "start": 59,
                        "end": 71
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 59,
                "end": 71
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
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 97,
                                    "start": 74,
                                    "end": 78
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 79,
                                    "end": 79
                                },
                                "flags": 268435488,
                                "start": 74,
                                "end": 80
                            },
                            "flags": 16,
                            "start": 74,
                            "end": 81
                        },
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 81,
                                "start": 81,
                                "end": 89
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 89,
                                            "end": 91
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 93,
                                                "end": 95
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 96,
                                                "end": 96
                                            },
                                            "flags": 268435488,
                                            "start": 93,
                                            "end": 97
                                        },
                                        "flags": 16,
                                        "start": 89,
                                        "end": 97
                                    }
                                ],
                                "flags": 16777232,
                                "start": 89,
                                "end": 97
                            },
                            "flags": 33554448,
                            "start": 81,
                            "end": 98
                        }
                    ],
                    "flags": 33,
                    "start": 74,
                    "end": 98
                },
                "flags": 32,
                "start": 72,
                "end": 100
            },
            "returnType": null,
            "flags": 16,
            "start": 46,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "function f(x: any) {\n  x();\n  const y = x();\n}\n\nfunction g(x: () => any) {\n  x();\n  const y = x();\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript

  function f(x: any) {
    x();
    const y = x();
  }
  function g(x: () => any) {
    x();
    const y = x();
  }

```

### Diagnostics

```javascript
✔ No errors
```

