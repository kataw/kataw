# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: static async(){}
## Input

`````js
(class extends Base {static async(){}});
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
                                "staticToken": {
                                    "kind": 8388716,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 27
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "value": "async",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 35
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
                                            "start": 36,
                                            "end": 36
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 33,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 27,
                                "end": 37
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 38
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 38
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "(class extends Base {static async(){}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: static async(){}
## Input

`````js
(class extends Base {static async(){}});
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-expr-extends
> :: case: static async(){}
## Input

`````js
(class extends Base {static async(){}});
`````
```

