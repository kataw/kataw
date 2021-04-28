# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: let x = function f(foo = await bar){
## Input

`````js
var await; var f = (async function() { let x = function f(foo = await bar){ });
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
                "flags": 0,
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
                "flags": 10,
                "start": 0,
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
                                    "flags": 20,
                                    "start": 512,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 25,
                                    "start": 0,
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
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 640,
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 46,
                                                                    "start": 0,
                                                                    "end": 55
                                                                },
                                                                "generatorToken": null,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 768,
                                                                    "start": 55,
                                                                    "end": 57
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
                                                                                "start": 58,
                                                                                "end": 61
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 768,
                                                                                "start": 63,
                                                                                "end": 69
                                                                            },
                                                                            "flags": 258,
                                                                            "start": 58,
                                                                            "end": 69
                                                                        },
                                                                        {
                                                                            "kind": 215,
                                                                            "ellipsisToken": null,
                                                                            "binding": {
                                                                                "kind": 134299649,
                                                                                "text": "bar",
                                                                                "rawText": "bar",
                                                                                "flags": 768,
                                                                                "start": 69,
                                                                                "end": 73
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 256,
                                                                            "start": 69,
                                                                            "end": 73
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 258,
                                                                    "start": 57,
                                                                    "end": 74
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "multiline": false,
                                                                        "flags": 256,
                                                                        "start": 75,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 74,
                                                                    "end": 77
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 256,
                                                                "start": 46,
                                                                "end": 77
                                                            },
                                                            "flags": 128,
                                                            "start": 42,
                                                            "end": 77
                                                        }
                                                    ],
                                                    "flags": 128,
                                                    "start": 42,
                                                    "end": 77
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 77
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 77
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 77
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 78
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 78
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 78
            },
            "flags": 128,
            "start": 10,
            "end": 79
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { let x = function f(foo = await bar){ });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 69, end: 73
✖ ',' expected - start: 77, end: 78

```

