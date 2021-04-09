# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: set static(v) {}
## Input

`````js
(class { set static(v) {} });
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
                    "classHeritage": null,
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
                                        "start": 12,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 81921,
                                                    "value": "v",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 20,
                                                "end": 21
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 20,
                                        "end": 22
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
                                            "start": 24,
                                            "end": 24
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 22,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 4096,
                                    "start": 19,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 25
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 27
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "(class { set static(v) {} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: set static(v) {}
## Input

`````js
(class { set static(v) {} });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: set static(v) {}
## Input

`````js
(class { set static(v) {} });
`````
```

