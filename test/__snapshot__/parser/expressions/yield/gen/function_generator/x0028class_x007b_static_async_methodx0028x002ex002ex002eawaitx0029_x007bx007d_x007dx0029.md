# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: (class { static async method(...await) {} })
## Input

`````js
function * gen() { function not_gen() { (class { static async method(...await) {} }) }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "gen",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "not_gen",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
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
                                                                    "start": 48,
                                                                    "end": 55
                                                                },
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 81921,
                                                                        "value": "method",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 61,
                                                                        "end": 68
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
                                                                                    "start": 69,
                                                                                    "end": 72
                                                                                },
                                                                                "binding": {
                                                                                    "kind": 81921,
                                                                                    "value": "await",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 72,
                                                                                    "end": 77
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 69,
                                                                                "end": 77
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 69,
                                                                        "end": 78
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
                                                                            "start": 80,
                                                                            "end": 80
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 78,
                                                                        "end": 81
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 2048,
                                                                    "start": 68,
                                                                    "end": 81
                                                                },
                                                                "flags": 256,
                                                                "start": 55,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "flags": 256,
                                                        "start": 48,
                                                        "end": 83
                                                    },
                                                    "flags": 256,
                                                    "start": 41,
                                                    "end": 83
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 39,
                                                "end": 84
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 84
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 86
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 18,
                    "end": 86
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 87
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { (class { static async method(...await) {} }) }}",
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
> :: test: function generator
> :: case: (class { static async method(...await) {} })
## Input

`````js
function * gen() { function not_gen() { (class { static async method(...await) {} }) }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: (class { static async method(...await) {} })
## Input

`````js
function * gen() { function not_gen() { (class { static async method(...await) {} }) }}
`````
```

