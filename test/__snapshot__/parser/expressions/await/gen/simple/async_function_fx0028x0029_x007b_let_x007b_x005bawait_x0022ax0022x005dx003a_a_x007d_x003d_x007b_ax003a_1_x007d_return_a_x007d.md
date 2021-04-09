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

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                                                    "start": 35,
                                                                    "end": 39
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 30,
                                                                "end": 39
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 28,
                                                            "end": 40
                                                        },
                                                        "value": {
                                                            "kind": 203,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "a",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 41,
                                                                "end": 43
                                                            },
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 41,
                                                            "end": 43
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 28,
                                                        "end": 43
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 28,
                                                "end": 43
                                            },
                                            "autofix": 0,
                                            "flags": 256,
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
                                                        "left": {
                                                            "kind": 81921,
                                                            "value": 1,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 52,
                                                            "end": 54
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "a",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 49,
                                                            "end": 51
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 49,
                                                        "end": 54
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 49,
                                                "end": 54
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 47,
                                            "end": 56
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 26,
                                        "end": 56
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 26,
                                "end": 56
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 57
                        },
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 66,
                                "end": 68
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 1,
                            "end": 57
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 69
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 71
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
ed test cases ( Kataw )
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
```

### Diagnostics

```javascript
ed test cases ( Kataw )
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
```

