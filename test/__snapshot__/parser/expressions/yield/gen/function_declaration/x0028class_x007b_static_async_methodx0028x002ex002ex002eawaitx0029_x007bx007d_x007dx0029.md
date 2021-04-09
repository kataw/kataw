# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (class { static async method(...await) {} })
## Input

`````js
function not_gen() { (class { static async method(...await) {} }) }}
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
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
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
                                                    "start": 29,
                                                    "end": 36
                                                },
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 81921,
                                                        "value": "method",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 42,
                                                        "end": 49
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
                                                                    "start": 50,
                                                                    "end": 53
                                                                },
                                                                "binding": {
                                                                    "kind": 81921,
                                                                    "value": "await",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 53,
                                                                    "end": 58
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 50,
                                                                "end": 58
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 50,
                                                        "end": 59
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
                                                            "start": 61,
                                                            "end": 61
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 62
                                                    },
                                                    "autofix": 0,
                                                    "flags": 2048,
                                                    "start": 49,
                                                    "end": 62
                                                },
                                                "flags": 256,
                                                "start": 36,
                                                "end": 62
                                            }
                                        ],
                                        "flags": 256,
                                        "start": 29,
                                        "end": 64
                                    },
                                    "flags": 256,
                                    "start": 22,
                                    "end": 64
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 65
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 65
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 65
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 67
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "function not_gen() { (class { static async method(...await) {} }) }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 67,
            "end": 68
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (class { static async method(...await) {} })
## Input

`````js
function not_gen() { (class { static async method(...await) {} }) }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (class { static async method(...await) {} })
## Input

`````js
function not_gen() { (class { static async method(...await) {} }) }}
`````
```

