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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
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
                "flags": 13,
                "start": 512,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 19,
                "start": 0,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 641,
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
                                                                "awaitToken": {
                                                                    "kind": 82032,
                                                                    "flags": 44,
                                                                    "start": 0,
                                                                    "end": 49
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 768,
                                                                    "start": 49,
                                                                    "end": 53
                                                                },
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 53
                                                            },
                                                            "flags": 256,
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
                                                                "flags": 768,
                                                                "start": 55,
                                                                "end": 57
                                                            },
                                                            "initializer": null,
                                                            "flags": 256,
                                                            "start": 55,
                                                            "end": 57
                                                        },
                                                        "flags": 256,
                                                        "start": 42,
                                                        "end": 57
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 42,
                                                "end": 57
                                            },
                                            "flags": 256,
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
                                                        "left": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 768,
                                                            "start": 66,
                                                            "end": 68
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "flags": 256,
                                                        "start": 63,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 63,
                                                "end": 68
                                            },
                                            "flags": 256,
                                            "start": 61,
                                            "end": 70
                                        },
                                        "flags": 128,
                                        "start": 40,
                                        "end": 70
                                    }
                                ],
                                "flags": 128,
                                "start": 40,
                                "end": 70
                            },
                            "flags": 128,
                            "start": 34,
                            "end": 71
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 71,
                                "start": 1,
                                "end": 80
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 80,
                                "end": 82
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 71
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 34,
                    "end": 83
                },
                "flags": 256,
                "start": 32,
                "end": 85
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
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

