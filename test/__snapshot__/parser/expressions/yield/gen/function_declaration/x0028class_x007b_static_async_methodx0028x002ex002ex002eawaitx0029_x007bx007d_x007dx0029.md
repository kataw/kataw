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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
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
                                        "start": 22,
                                        "end": 27
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
                                                    "start": 29,
                                                    "end": 36
                                                },
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "method",
                                                        "rawText": "method",
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
                                                                    "flags": 768,
                                                                    "start": 50,
                                                                    "end": 53
                                                                },
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "await",
                                                                    "rawText": "await",
                                                                    "flags": 768,
                                                                    "start": 53,
                                                                    "end": 58
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 258,
                                                                "start": 50,
                                                                "end": 58
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2306,
                                                        "start": 50,
                                                        "end": 59
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
                                                            "start": 61,
                                                            "end": 61
                                                        },
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 62
                                                    },
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
                                "flags": 256,
                                "start": 20,
                                "end": 65
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 65
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 65
                },
                "flags": 256,
                "start": 18,
                "end": 67
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "function not_gen() { (class { static async method(...await) {} }) }}",
    "fileName": "__root__",
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
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

