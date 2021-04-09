# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async function *(){}
## Input

`````js
(class B extends async function *(){} {})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": {
                        "kind": 81921,
                        "value": "B",
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "expression": {
                            "kind": 177,
                            "asyncToken": {
                                "kind": 82031,
                                "autofix": 0,
                                "flags": 0,
                                "start": 16,
                                "end": 22
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 31,
                                "end": 33
                            },
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 36
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 3328,
                            "start": 16,
                            "end": 37
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 37
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 39,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 40
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 41
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "(class B extends async function *(){} {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async function *(){}
## Input

`````js
(class B extends async function *(){} {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async function *(){}
## Input

`````js
(class B extends async function *(){} {})
`````
```

