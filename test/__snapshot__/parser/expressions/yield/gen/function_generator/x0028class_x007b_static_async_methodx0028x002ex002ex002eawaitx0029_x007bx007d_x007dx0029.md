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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 768,
                                                        "start": 41,
                                                        "end": 46
                                                    },
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
                                                                    "flags": 768,
                                                                    "start": 48,
                                                                    "end": 55
                                                                },
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "method",
                                                                        "rawText": "method",
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
                                                                                    "flags": 768,
                                                                                    "start": 69,
                                                                                    "end": 72
                                                                                },
                                                                                "binding": {
                                                                                    "kind": 134299649,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 768,
                                                                                    "start": 72,
                                                                                    "end": 77
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "flags": 258,
                                                                                "start": 69,
                                                                                "end": 77
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 2306,
                                                                        "start": 69,
                                                                        "end": 78
                                                                    },
                                                                    "type": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "multiline": false,
                                                                            "flags": 256,
                                                                            "start": 80,
                                                                            "end": 80
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 78,
                                                                        "end": 81
                                                                    },
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
                                                "flags": 256,
                                                "start": 39,
                                                "end": 84
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 84
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 86
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 86
                },
                "flags": 256,
                "start": 16,
                "end": 87
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { (class { static async method(...await) {} }) }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

