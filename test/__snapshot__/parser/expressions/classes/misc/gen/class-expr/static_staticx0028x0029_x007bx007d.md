# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: static static() {}
## Input

`````js
(class { static static() {} });
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
                                "staticToken": {
                                    "kind": 8388716,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 8,
                                    "end": 15
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 81921,
                                        "value": "static",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 23,
                                        "end": 24
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
                                            "start": 26,
                                            "end": 26
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 22,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 27
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "(class { static static() {} });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: static static() {}
## Input

`````js
(class { static static() {} });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: static static() {}
## Input

`````js
(class { static static() {} });
`````
```

