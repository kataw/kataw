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
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
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
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 19,
                                "end": 31
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "type": null,
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
                                                "flags": 768,
                                                "start": 34,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37814362,
                                                    "flags": 768,
                                                    "start": 41,
                                                    "end": 50
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 50,
                                                    "end": 52
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
                                                                    "flags": 768,
                                                                    "start": 54,
                                                                    "end": 61
                                                                },
                                                                "expression": {
                                                                    "kind": 271,
                                                                    "arrowToken": {
                                                                        "kind": 10,
                                                                        "flags": 768,
                                                                        "start": 64,
                                                                        "end": 67
                                                                    },
                                                                    "typeParameters": null,
                                                                    "parameters": [],
                                                                    "asyncToken": null,
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 768,
                                                                                "start": 67,
                                                                                "end": 73
                                                                            },
                                                                            "flags": 768,
                                                                            "start": 67,
                                                                            "end": 73
                                                                        },
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 768,
                                                                            "start": 74,
                                                                            "end": 77
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 67,
                                                                        "end": 77
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 61,
                                                                    "end": 77
                                                                },
                                                                "flags": 128,
                                                                "start": 0,
                                                                "end": 54
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 54,
                                                        "end": 78
                                                    },
                                                    "flags": 256,
                                                    "start": 52,
                                                    "end": 80
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 256,
                                                "start": 41,
                                                "end": 80
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 34
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 80
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 82
                            },
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

