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

### CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
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
                                                        "flags": 0,
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
                                                                "declareToken": null,
                                                                "decorators": null,
                                                                "generatorToken": null,
                                                                "staticKeyword": {
                                                                    "kind": 8388716,
                                                                    "flags": 64,
                                                                    "start": 48,
                                                                    "end": 55
                                                                },
                                                                "asyncKeyword": {
                                                                    "kind": 82031,
                                                                    "flags": 64,
                                                                    "start": 55,
                                                                    "end": 61
                                                                },
                                                                "setKeyword": null,
                                                                "getKeyword": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 134299649,
                                                                        "text": "method",
                                                                        "rawText": "method",
                                                                        "flags": 96,
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
                                                                                    "flags": 64,
                                                                                    "start": 69,
                                                                                    "end": 72
                                                                                },
                                                                                "binding": {
                                                                                    "kind": 134299649,
                                                                                    "text": "await",
                                                                                    "rawText": "await",
                                                                                    "flags": 96,
                                                                                    "start": 72,
                                                                                    "end": 77
                                                                                },
                                                                                "optionalToken": null,
                                                                                "type": null,
                                                                                "initializer": null,
                                                                                "flags": 34,
                                                                                "start": 69,
                                                                                "end": 77
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 290,
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
                                                                            "flags": 32,
                                                                            "start": 80,
                                                                            "end": 80
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 78,
                                                                        "end": 81
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 68,
                                                                    "end": 81
                                                                },
                                                                "flags": 256,
                                                                "start": 55,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 48,
                                                        "end": 83
                                                    },
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 83
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 84
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 84
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 84
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 86
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 86
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 86
                },
                "flags": 32,
                "start": 16,
                "end": 87
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { (class { static async method(...await) {} }) }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ `Await` expression cannot be used in function parameters - start: 72, end: 77

```

