# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: r
> :: test: var
> :: case: var { f: await f } = {};
## Input

`````js
var await; var f = (async function() { var { f: await f } = {}; });
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
                                    "flags": 64,
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
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 204,
                                                                            "ellipsisToken": null,
                                                                            "key": {
                                                                                "kind": 134299649,
                                                                                "text": "f",
                                                                                "rawText": "f",
                                                                                "flags": 96,
                                                                                "start": 44,
                                                                                "end": 46
                                                                            },
                                                                            "value": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "start": 47,
                                                                                "end": 53
                                                                            },
                                                                            "initializer": null,
                                                                            "flags": 32,
                                                                            "start": 44,
                                                                            "end": 53
                                                                        },
                                                                        {
                                                                            "kind": 222,
                                                                            "ellipsisToken": null,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "f",
                                                                                "rawText": "f",
                                                                                "flags": 96,
                                                                                "start": 53,
                                                                                "end": 55
                                                                            },
                                                                            "right": null,
                                                                            "flags": 32,
                                                                            "start": 53,
                                                                            "end": 55
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 44,
                                                                    "end": 55
                                                                },
                                                                "flags": 32,
                                                                "start": 42,
                                                                "end": 57
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 61,
                                                                    "end": 61
                                                                },
                                                                "flags": 48,
                                                                "start": 59,
                                                                "end": 62
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 62
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 42,
                                                    "end": 62
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 63
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 63
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 65
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 65
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 66
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 66
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 66
            },
            "flags": 16,
            "start": 10,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { var { f: await f } = {}; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 47, end: 53
✖ ',' expected - start: 53, end: 55

```

