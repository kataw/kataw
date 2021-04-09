# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: function f(){}
## Input

`````js
(class B extends function f(){} {})
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
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "f",
                                "autofix": 0,
                                "flags": 768,
                                "start": 25,
                                "end": 27
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 28,
                                "end": 29
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 30,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 29,
                                "end": 31
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 31
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 31
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 33,
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
            "end": 35
        }
    ],
    "isModule": false,
    "text": "(class B extends function f(){} {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: function f(){}
## Input

`````js
(class B extends function f(){} {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: function f(){}
## Input

`````js
(class B extends function f(){} {})
`````
```

