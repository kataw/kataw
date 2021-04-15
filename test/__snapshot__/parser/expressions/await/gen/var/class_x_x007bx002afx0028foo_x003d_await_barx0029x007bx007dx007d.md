# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: class x {*f(foo = await bar){}}
## Input

`````js
var await; var f = (async function() { class x {*f(foo = await bar){}} });
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
                                                "kind": 178,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37814352,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 46
                                                },
                                                "typeParameters": null,
                                                "classHeritage": null,
                                                "members": {
                                                    "kind": 277,
                                                    "elements": [
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "key": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "autofix": 0,
                                                                "flags": 12,
                                                                "start": 48,
                                                                "end": 48
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 256,
                                                            "start": 48,
                                                            "end": 49
                                                        },
                                                        {
                                                            "kind": 278,
                                                            "decorators": null,
                                                            "staticToken": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 768,
                                                                    "start": 49,
                                                                    "end": 50
                                                                },
                                                                "typeParameters": null,
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
                                                                                "start": 51,
                                                                                "end": 54
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 768,
                                                                                "start": 56,
                                                                                "end": 62
                                                                            },
                                                                            "flags": 258,
                                                                            "start": 51,
                                                                            "end": 62
                                                                        },
                                                                        {
                                                                            "kind": 215,
                                                                            "ellipsisToken": null,
                                                                            "binding": {
                                                                                "kind": 134299649,
                                                                                "text": "bar",
                                                                                "rawText": "bar",
                                                                                "flags": 768,
                                                                                "start": 62,
                                                                                "end": 66
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 256,
                                                                            "start": 62,
                                                                            "end": 66
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 258,
                                                                    "start": 51,
                                                                    "end": 67
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
                                                                        "start": 68,
                                                                        "end": 68
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 67,
                                                                    "end": 69
                                                                },
                                                                "flags": 0,
                                                                "start": 50,
                                                                "end": 69
                                                            },
                                                            "flags": 256,
                                                            "start": 49,
                                                            "end": 69
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 48,
                                                    "end": 70
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 70
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 70
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 72
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 72
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 73
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 73
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 73
            },
            "flags": 128,
            "start": 10,
            "end": 74
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { class x {*f(foo = await bar){}} });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 48,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 62,
            "end": 66
        }
    ],
    "start": 0,
    "end": 74
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

