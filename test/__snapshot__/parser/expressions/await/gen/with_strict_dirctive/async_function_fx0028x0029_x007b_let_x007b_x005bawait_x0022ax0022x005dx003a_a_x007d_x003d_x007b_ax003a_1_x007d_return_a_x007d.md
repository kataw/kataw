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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 31,
                "end": 32
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
                                                                    "start": 49,
                                                                    "end": 53
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 53
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 42,
                                                            "end": 54
                                                        },
                                                        "value": {
                                                            "kind": 203,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 81921,
                                                                "value": "a",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 55,
                                                                "end": 57
                                                            },
                                                            "initializer": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 55,
                                                            "end": 57
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 42,
                                                        "end": 57
                                                    }
                                                ],
                                                "multiline": false,
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 42,
                                                "end": 57
                                            },
                                            "autofix": 0,
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
                                                            "kind": 81921,
                                                            "value": 1,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 66,
                                                            "end": 68
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "value": "a",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 63,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 63,
                                                "end": 68
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 61,
                                            "end": 70
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 40,
                                        "end": 70
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 40,
                                "end": 70
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 34,
                            "end": 71
                        },
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 80,
                                "end": 82
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 1,
                            "end": 71
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 34,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 32,
                "end": 85
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
ed test cases ( Kataw )
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
```

### Diagnostics

```javascript
ed test cases ( Kataw )
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
```

