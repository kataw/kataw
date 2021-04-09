# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: set #arguments(test) {}
## Input

`````js
(class { set #arguments(test) {} });
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
                                        "kind": 67125499,
                                        "text": "#arguments",
                                        "flags": 768,
                                        "start": 12,
                                        "end": 23
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
                                                    "value": "test",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 24,
                                                    "end": 28
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 24,
                                                "end": 28
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 24,
                                        "end": 29
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
                                            "start": 31,
                                            "end": 31
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "autofix": 0,
                                    "flags": 4096,
                                    "start": 23,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 32
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 34
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "(class { set #arguments(test) {} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: set #arguments(test) {}
## Input

`````js
(class { set #arguments(test) {} });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: set #arguments(test) {}
## Input

`````js
(class { set #arguments(test) {} });
`````
```

