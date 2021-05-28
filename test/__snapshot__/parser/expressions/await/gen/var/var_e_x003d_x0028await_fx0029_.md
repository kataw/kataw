# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: r
> :: test: var
> :: case: var e = (await, f);
## Input

`````js
var await; var f = (async function() { var e = (await, f); });
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
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "e",
                                                                "rawText": "e",
                                                                "flags": 96,
                                                                "start": 42,
                                                                "end": 44
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 132,
                                                                    "expressions": [
                                                                        {
                                                                            "kind": 208,
                                                                            "awaitKeyword": {
                                                                                "kind": 90224,
                                                                                "flags": 0,
                                                                                "start": 48,
                                                                                "end": 53
                                                                            },
                                                                            "expression": {
                                                                                "kind": 16637,
                                                                                "text": "",
                                                                                "flags": 64,
                                                                                "start": 53,
                                                                                "end": 53
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 48,
                                                                            "end": 53
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 96,
                                                                            "start": 54,
                                                                            "end": 56
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 46,
                                                                    "end": 57
                                                                },
                                                                "flags": 32,
                                                                "start": 46,
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
                                                "flags": 16,
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
                                "typeParameters": null,
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
    "source": "var await; var f = (async function() { var e = (await, f); });",
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
✖ Identifier expected - start: 53, end: 54

```

