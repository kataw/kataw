# Kataw parser test case

## Input

`````js
class x extends y { constructor(){ return function() { return () => super.foo; } }}
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
                                            "kind": 161,
                                            "expression": {
                                                "kind": 177,
                                                "asyncToken": null,
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 51,
                                                    "end": 52
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "statements": [
                                                            {
                                                                "kind": 161,
                                                                "expression": {
                                                                    "kind": 271,
                                                                    "typeParameters": null,
                                                                    "parameters": [],
                                                                    "asyncToken": null,
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 67,
                                                                            "end": 73
                                                                        },
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "value": "foo",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 74,
                                                                            "end": 77
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 67,
                                                                        "end": 77
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 61,
                                                                    "end": 77
                                                                },
                                                                "autofix": 0,
                                                                "flags": 128,
                                                                "start": 0,
                                                                "end": 54
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 54,
                                                        "end": 78
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 52,
                                                    "end": 80
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 41,
                                                "end": 80
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 0,
                                            "end": 34
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 80
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 33,
                                "end": 82
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 31,
                            "end": 82
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 82
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 83
            },
            "flags": 128,
            "start": 0,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor(){ return function() { return () => super.foo; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 73,
            "end": 74
        }
    ],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

