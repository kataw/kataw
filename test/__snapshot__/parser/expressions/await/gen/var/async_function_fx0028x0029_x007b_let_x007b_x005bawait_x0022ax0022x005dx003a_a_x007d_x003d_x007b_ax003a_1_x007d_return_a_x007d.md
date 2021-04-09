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
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
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
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "asyncToken": {
                                                    "kind": 82031,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 81921,
                                                    "value": "f",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 57
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "statements": [
                                                            {
                                                                "kind": 162,
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
                                                                                                    "expression": {
                                                                                                        "kind": 67174403,
                                                                                                        "value": "a",
                                                                                                        "autofix": 0,
                                                                                                        "flags": 768,
                                                                                                        "start": 74,
                                                                                                        "end": 78
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 69,
                                                                                                    "end": 78
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 67,
                                                                                                "end": 79
                                                                                            },
                                                                                            "value": {
                                                                                                "kind": 203,
                                                                                                "ellipsisToken": null,
                                                                                                "binding": {
                                                                                                    "kind": 81921,
                                                                                                    "value": "a",
                                                                                                    "autofix": 0,
                                                                                                    "flags": 768,
                                                                                                    "start": 80,
                                                                                                    "end": 82
                                                                                                },
                                                                                                "initializer": null,
                                                                                                "autofix": 0,
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
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 67,
                                                                                    "end": 82
                                                                                },
                                                                                "autofix": 0,
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
                                                                                                "kind": 81921,
                                                                                                "value": 1,
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 91,
                                                                                                "end": 93
                                                                                            },
                                                                                            "right": {
                                                                                                "kind": 81921,
                                                                                                "value": "a",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 88,
                                                                                                "end": 90
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 88,
                                                                                            "end": 93
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 0,
                                                                                    "start": 88,
                                                                                    "end": 93
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 86,
                                                                                "end": 95
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 65,
                                                                            "end": 95
                                                                        }
                                                                    ],
                                                                    "autofix": 0,
                                                                    "flags": 128,
                                                                    "start": 65,
                                                                    "end": 95
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 59,
                                                                "end": 96
                                                            },
                                                            {
                                                                "kind": 161,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "value": "a",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 105,
                                                                    "end": 107
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 1,
                                                                "end": 96
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 108
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 110
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 1280,
                                                "start": 38,
                                                "end": 110
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 110
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 112
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 112
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 113
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 113
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 113
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 114
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
ed test cases ( Kataw )
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
```

### Diagnostics

```javascript
ed test cases ( Kataw )
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
```

