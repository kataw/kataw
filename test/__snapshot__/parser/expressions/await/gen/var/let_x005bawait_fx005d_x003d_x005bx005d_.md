# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: r
> :: test: var
> :: case: let [await f] = [];
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { let [await f] = []; });
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
                "flags": 80,
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
                "flags": 80,
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
                                    "flags": 64,
                                    "start": 25,
                                    "end": 34
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
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
                                                                "kind": 201,
                                                                "elementList": {
                                                                    "kind": 324,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 96,
                                                                            "start": 44,
                                                                            "end": 49
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 96,
                                                                            "start": 49,
                                                                            "end": 51
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 44,
                                                                    "end": 51
                                                                },
                                                                "flags": 32,
                                                                "start": 42,
                                                                "end": 52
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 56,
                                                                    "end": 56
                                                                },
                                                                "flags": 32,
                                                                "start": 54,
                                                                "end": 57
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 42,
                                                    "end": 57
                                                },
                                                "flags": 33554448,
                                                "start": 38,
                                                "end": 58
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 58
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 60
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 60
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 61
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 61
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 61
            },
            "flags": 16,
            "start": 10,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { let [await f] = []; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 44, end: 49
✖ ',' expected - start: 49, end: 51

```

