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

### CST

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
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
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
                            "flags": 96,
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
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
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
                                                    "flags": 80,
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
                                                                "flags": 96,
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
                                                                    "flags": 0,
                                                                    "start": 46,
                                                                    "end": 55
                                                                },
                                                                "generatorToken": null,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 96,
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
                                                                                "flags": 96,
                                                                                "start": 58,
                                                                                "end": 61
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "start": 63,
                                                                                "end": 69
                                                                            },
                                                                            "flags": 34,
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
                                                                                "flags": 96,
                                                                                "start": 69,
                                                                                "end": 73
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "initializer": null,
                                                                            "flags": 32,
                                                                            "start": 69,
                                                                            "end": 73
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 34,
                                                                    "start": 57,
                                                                    "end": 74
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 75,
                                                                        "end": 75
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 74,
                                                                    "end": 77
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 32,
                                                                "start": 46,
                                                                "end": 77
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 77
                                                        }
                                                    ],
                                                    "flags": 33554448,
                                                    "start": 42,
                                                    "end": 77
                                                },
                                                "flags": 33554448,
                                                "start": 38,
                                                "end": 77
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 77
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 77
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 78
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 78
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 78
            },
            "flags": 16,
            "start": 10,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { let x = function f(foo = await bar){ });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 69, end: 73
✖ ',' expected - start: 77, end: 78
✖ Expected a `;` - start: 77, end: 78

```

