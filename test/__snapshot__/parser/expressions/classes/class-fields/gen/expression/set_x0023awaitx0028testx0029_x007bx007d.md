# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: set #await(test) {}
## Input

`````js
class C extends Base { set #await(test) {} }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "C",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 81921,
                    "value": "Base",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 20
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 20
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
                                "kind": 67125499,
                                "text": "#await",
                                "flags": 768,
                                "start": 26,
                                "end": 33
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
                                            "start": 34,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 38
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 39
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
                                    "start": 41,
                                    "end": 41
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 39,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 4096,
                            "start": 33,
                            "end": 42
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 42
                    }
                ],
                "flags": 256,
                "start": 22,
                "end": 44
            },
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "class C extends Base { set #await(test) {} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: set #await(test) {}
## Input

`````js
class C extends Base { set #await(test) {} }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: set #await(test) {}
## Input

`````js
class C extends Base { set #await(test) {} }
`````
```

