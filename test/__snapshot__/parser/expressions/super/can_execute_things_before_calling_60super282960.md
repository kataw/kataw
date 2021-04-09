# Kataw parser test case

## Input

`````js
class x extends y { constructor() { let xx = x + x; super.mom; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "name": {
                "kind": 81921,
                "value": "x",
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
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 19,
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
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "value": "xx",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 39,
                                                            "end": 42
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 44,
                                                                "end": 46
                                                            },
                                                            "operatorToken": {
                                                                "kind": 34098,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 46,
                                                                "end": 48
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 48,
                                                                "end": 50
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 44,
                                                            "end": 50
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 39,
                                                        "end": 50
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 39,
                                                "end": 50
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 35,
                                            "end": 51
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 51,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "mom",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 58,
                                                    "end": 61
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 51,
                                                "end": 61
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 51,
                                            "end": 62
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 62
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 33,
                                "end": 64
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 31,
                            "end": 64
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 64
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 66
            },
            "flags": 128,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor() { let xx = x + x; super.mom; } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

