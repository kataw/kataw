# Kataw parser test case

## Input

`````js
class x extends y { constructor(){ return async function() { return async function() { super[foo]; } } }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 32,
                                    "end": 33
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 80,
                                                    "start": 34,
                                                    "end": 41
                                                },
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": {
                                                        "kind": 82031,
                                                        "flags": 64,
                                                        "start": 41,
                                                        "end": 47
                                                    },
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 47,
                                                        "end": 56
                                                    },
                                                    "generatorToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 56,
                                                        "end": 58
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 60,
                                                                        "end": 67
                                                                    },
                                                                    "expression": {
                                                                        "kind": 177,
                                                                        "asyncKeyword": {
                                                                            "kind": 82031,
                                                                            "flags": 64,
                                                                            "start": 67,
                                                                            "end": 73
                                                                        },
                                                                        "functionKeyword": {
                                                                            "kind": 37822554,
                                                                            "flags": 64,
                                                                            "start": 73,
                                                                            "end": 82
                                                                        },
                                                                        "generatorToken": null,
                                                                        "name": null,
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 82,
                                                                            "end": 84
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
                                                                                            "kind": 536871042,
                                                                                            "member": {
                                                                                                "kind": 225,
                                                                                                "superKeyword": {
                                                                                                    "kind": 4259935,
                                                                                                    "flags": 96,
                                                                                                    "start": 86,
                                                                                                    "end": 92
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "start": 86,
                                                                                                "end": 92
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "foo",
                                                                                                "rawText": "foo",
                                                                                                "flags": 96,
                                                                                                "start": 93,
                                                                                                "end": 96
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 86,
                                                                                            "end": 97
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 86,
                                                                                        "end": 98
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "start": 86,
                                                                                "end": 98
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 84,
                                                                            "end": 100
                                                                        },
                                                                        "returnType": null,
                                                                        "flags": 160,
                                                                        "start": 67,
                                                                        "end": 100
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 60,
                                                                    "end": 100
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 60,
                                                            "end": 100
                                                        },
                                                        "flags": 32,
                                                        "start": 58,
                                                        "end": 102
                                                    },
                                                    "returnType": null,
                                                    "flags": 160,
                                                    "start": 41,
                                                    "end": 102
                                                },
                                                "flags": 80,
                                                "start": 34,
                                                "end": 102
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 34,
                                        "end": 102
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 104
                                },
                                "flags": 2048,
                                "start": 31,
                                "end": 104
                            },
                            "flags": 2048,
                            "start": 19,
                            "end": 104
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 104
                },
                "flags": 7,
                "start": 32,
                "end": 105
            },
            "flags": 16,
            "start": 0,
            "end": 105
        }
    ],
    "isModule": false,
    "source": "class x extends y { constructor(){ return async function() { return async function() { super[foo]; } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 86, end: 93

```

