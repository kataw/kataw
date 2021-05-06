# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Input

`````js
'use strict'; async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 30,
                "end": 32
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
                                "start": 34,
                                "end": 40
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
                                                                "awaitKeyword": {
                                                                    "kind": 82032,
                                                                    "flags": 0,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "a",
                                                                    "rawText": "\"a\"",
                                                                    "flags": 96,
                                                                    "start": 49,
                                                                    "end": 53
                                                                },
                                                                "flags": 32,
                                                                "start": 44,
                                                                "end": 53
                                                            },
                                                            "flags": 32,
                                                            "start": 42,
                                                            "end": 54
                                                        },
                                                        "value": {
                                                            "kind": 203,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 55,
                                                                "end": 57
                                                            },
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 55,
                                                            "end": 57
                                                        },
                                                        "flags": 32,
                                                        "start": 42,
                                                        "end": 57
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 42,
                                                "end": 57
                                            },
                                            "flags": 32,
                                            "start": 40,
                                            "end": 59
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
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 66,
                                                            "end": 68
                                                        },
                                                        "flags": 32,
                                                        "start": 63,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 63,
                                                "end": 68
                                            },
                                            "flags": 32,
                                            "start": 61,
                                            "end": 70
                                        },
                                        "flags": 16,
                                        "start": 40,
                                        "end": 70
                                    }
                                ],
                                "flags": 33554448,
                                "start": 40,
                                "end": 70
                            },
                            "flags": 33554448,
                            "start": 34,
                            "end": 71
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 1,
                                "start": 71,
                                "end": 80
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 80,
                                "end": 82
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 71
                        }
                    ],
                    "flags": 33,
                    "start": 34,
                    "end": 83
                },
                "flags": 32,
                "start": 32,
                "end": 85
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

async function f() {
  let {
    [await "\"a\""]:
  } = { a: 1 };
  return  a;
}
```

### Diagnostics

```javascript
✔ No errors
```

