# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Input

`````js
async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
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
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 81,
                                "start": 20,
                                "end": 26
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
                                                                    "flags": 0,
                                                                    "start": 30,
                                                                    "end": 35
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "a",
                                                                    "rawText": "\"a\"",
                                                                    "flags": 96,
                                                                    "start": 35,
                                                                    "end": 39
                                                                },
                                                                "flags": 32,
                                                                "start": 30,
                                                                "end": 39
                                                            },
                                                            "flags": 32,
                                                            "start": 28,
                                                            "end": 40
                                                        },
                                                        "value": {
                                                            "kind": 203,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 41,
                                                            "end": 43
                                                        },
                                                        "flags": 32,
                                                        "start": 28,
                                                        "end": 43
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 28,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 45
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
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 52,
                                                            "end": 54
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 49,
                                                            "end": 51
                                                        },
                                                        "flags": 32,
                                                        "start": 49,
                                                        "end": 54
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 49,
                                                "end": 54
                                            },
                                            "flags": 32,
                                            "start": 47,
                                            "end": 56
                                        },
                                        "flags": 16,
                                        "start": 26,
                                        "end": 56
                                    }
                                ],
                                "flags": 33554448,
                                "start": 26,
                                "end": 56
                            },
                            "flags": 33554448,
                            "start": 20,
                            "end": 57
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 1,
                                "start": 57,
                                "end": 66
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 66,
                                "end": 68
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 57
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 69
                },
                "flags": 32,
                "start": 18,
                "end": 71
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
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

