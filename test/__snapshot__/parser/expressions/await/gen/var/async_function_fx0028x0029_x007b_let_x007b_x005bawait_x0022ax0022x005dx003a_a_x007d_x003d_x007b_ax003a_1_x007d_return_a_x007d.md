# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Input

`````js
var await; var f = (async function() { async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
} });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
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
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37814362,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "functionKeyword": {
                                                    "kind": 37814362,
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 53
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 55,
                                                    "end": 57
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
                                                                    "flags": 768,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "binding": {
                                                                    "kind": 151,
                                                                    "bindingList": [
                                                                        {
                                                                            "kind": 190,
                                                                            "binding": {
                                                                                "kind": 212,
                                                                                "propertyList": {
                                                                                    "kind": 213,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 204,
                                                                                            "ellipsisToken": null,
                                                                                            "key": {
                                                                                                "kind": 194,
                                                                                                "expression": {
                                                                                                    "kind": 208,
                                                                                                    "awaitToken": {
                                                                                                        "kind": 82032,
                                                                                                        "flags": 768,
                                                                                                        "start": 69,
                                                                                                        "end": 74
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 201392131,
                                                                                                        "text": "a",
                                                                                                        "rawText": "a",
                                                                                                        "flags": 768,
                                                                                                        "start": 74,
                                                                                                        "end": 78
                                                                                                    },
                                                                                                    "flags": 256,
                                                                                                    "start": 69,
                                                                                                    "end": 78
                                                                                                },
                                                                                                "flags": 256,
                                                                                                "start": 67,
                                                                                                "end": 79
                                                                                            },
                                                                                            "value": {
                                                                                                "kind": 203,
                                                                                                "ellipsisToken": null,
                                                                                                "binding": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "a",
                                                                                                    "rawText": "a",
                                                                                                    "flags": 768,
                                                                                                    "start": 80,
                                                                                                    "end": 82
                                                                                                },
                                                                                                "initializer": null,
                                                                                                "flags": 256,
                                                                                                "start": 80,
                                                                                                "end": 82
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 67,
                                                                                            "end": 82
                                                                                        }
                                                                                    ],
                                                                                    "multiline": false,
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 67,
                                                                                    "end": 82
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 65,
                                                                                "end": 84
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 220,
                                                                                "propertyList": {
                                                                                    "kind": 218,
                                                                                    "properties": [
                                                                                        {
                                                                                            "kind": 219,
                                                                                            "left": {
                                                                                                "kind": 134299649,
                                                                                                "text": 1,
                                                                                                "rawText": "1",
                                                                                                "flags": 768,
                                                                                                "start": 91,
                                                                                                "end": 93
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 134299649,
                                                                                                "text": "a",
                                                                                                "rawText": "a",
                                                                                                "flags": 768,
                                                                                                "start": 88,
                                                                                                "end": 90
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 88,
                                                                                            "end": 93
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "start": 88,
                                                                                    "end": 93
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 86,
                                                                                "end": 95
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 65,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "flags": 128,
                                                                    "start": 65,
                                                                    "end": 95
                                                                },
                                                                "flags": 128,
                                                                "start": 59,
                                                                "end": 96
                                                            },
                                                            {
                                                                "kind": 161,
                                                                "returnKeyword": {
                                                                    "kind": 37757022,
                                                                    "flags": 768,
                                                                    "start": 96,
                                                                    "end": 105
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 768,
                                                                    "start": 105,
                                                                    "end": 107
                                                                },
                                                                "flags": 128,
                                                                "start": 1,
                                                                "end": 96
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 108
                                                    },
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 110
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 110
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 110
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 112
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 112
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 113
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 113
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 113
            },
            "flags": 128,
            "start": 10,
            "end": 114
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n} });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

