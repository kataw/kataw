# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (class { static async method(...await) {} })
## Input

`````js
var await; var f = (async function() { (class { static async method(...await) {} }) });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
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
                                                                        "start": 47,
                                                                        "end": 54
                                                                    },
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 81921,
                                                                            "value": "method",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 60,
                                                                            "end": 67
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [
                                                                                {
                                                                                    "kind": 215,
                                                                                    "ellipsisToken": {
                                                                                        "kind": 524302,
                                                                                        "autofix": 0,
                                                                                        "flags": 0,
                                                                                        "start": 68,
                                                                                        "end": 71
                                                                                    },
                                                                                    "binding": {
                                                                                        "kind": 81921,
                                                                                        "value": "await",
                                                                                        "autofix": 0,
                                                                                        "flags": 768,
                                                                                        "start": 71,
                                                                                        "end": 76
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "initializer": null,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 68,
                                                                                    "end": 76
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 68,
                                                                            "end": 77
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
                                                                                "start": 79,
                                                                                "end": 79
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 77,
                                                                            "end": 80
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 2048,
                                                                        "start": 67,
                                                                        "end": 80
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 54,
                                                                    "end": 80
                                                                }
                                                            ],
                                                            "flags": 256,
                                                            "start": 47,
                                                            "end": 82
                                                        },
                                                        "flags": 256,
                                                        "start": 40,
                                                        "end": 82
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 83
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 38,
                                                "end": 83
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 83
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 85
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 20,
                                "end": 85
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 86
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 86
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 86
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { (class { static async method(...await) {} }) });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (class { static async method(...await) {} })
## Input

`````js
var await; var f = (async function() { (class { static async method(...await) {} }) });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (class { static async method(...await) {} })
## Input

`````js
var await; var f = (async function() { (class { static async method(...await) {} }) });
`````
```

