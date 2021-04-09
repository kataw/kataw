# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: get static() {}
## Input

`````js
(class extends Base {get static() {}});
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
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "expression": {
                            "kind": 81921,
                            "value": "Base",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 14,
                        "end": 19
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 278,
                                "decorators": null,
                                "staticToken": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "value": "static",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 24,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "statements": [],
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 35,
                                            "end": 35
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 33,
                                        "end": 36
                                    },
                                    "autofix": 0,
                                    "flags": 8192,
                                    "start": 31,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 21,
                                "end": 36
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 37
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 37
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "(class extends Base {get static() {}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: get static() {}
## Input

`````js
(class extends Base {get static() {}});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: get static() {}
## Input

`````js
(class extends Base {get static() {}});
`````
```

