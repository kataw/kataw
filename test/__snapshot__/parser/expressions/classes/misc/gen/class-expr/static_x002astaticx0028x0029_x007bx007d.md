# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: static *static() {}
## Input

`````js
(class { static *static() {} });
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
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 8,
                                    "end": 15
                                },
                                "key": {
                                    "kind": 253,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 15,
                                    "end": 15
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 15,
                                "end": 17
                            },
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
                                        "start": 17,
                                        "end": 23
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 24,
                                        "end": 25
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
                                            "start": 27,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 28
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 30
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 30
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "(class { static *static() {} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 15,
            "end": 17
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: static *static() {}
## Input

`````js
(class { static *static() {} });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: static *static() {}
## Input

`````js
(class { static *static() {} });
`````
```

