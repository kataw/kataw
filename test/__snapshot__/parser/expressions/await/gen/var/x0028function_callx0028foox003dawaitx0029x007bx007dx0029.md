# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: (function call(foo=await){})
## Input

`````js
var await; var f = (async function() { (function call(foo=await){}) });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
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
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37814362,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 34,
                                    "end": 36
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
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37814362,
                                                            "flags": 768,
                                                            "start": 40,
                                                            "end": 48
                                                        },
                                                        "generatorToken": null,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "call",
                                                            "rawText": "call",
                                                            "flags": 768,
                                                            "start": 48,
                                                            "end": 53
                                                        },
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 215,
                                                                    "ellipsisToken": null,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 54,
                                                                        "end": 57
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 768,
                                                                        "start": 58,
                                                                        "end": 63
                                                                    },
                                                                    "flags": 258,
                                                                    "start": 54,
                                                                    "end": 63
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 258,
                                                            "start": 53,
                                                            "end": 64
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 256,
                                                                "start": 65,
                                                                "end": 65
                                                            },
                                                            "flags": 256,
                                                            "start": 64,
                                                            "end": 66
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "flags": 256,
                                                        "start": 40,
                                                        "end": 66
                                                    },
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 67
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 67
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 67
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 69
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 69
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 70
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 70
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 70
            },
            "flags": 128,
            "start": 10,
            "end": 71
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { (function call(foo=await){}) });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

