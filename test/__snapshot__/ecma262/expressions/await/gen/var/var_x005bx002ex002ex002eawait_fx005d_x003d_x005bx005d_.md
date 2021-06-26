# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: var [...await f] = [];
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { var [...await f] = []; });
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
                                    "end": 34
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
                                                                "kind": 201,
                                                                "elementList": {
                                                                    "kind": 324,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 281,
                                                                            "ellipsisToken": {
                                                                                "kind": 524302,
                                                                                "flags": 64,
                                                                                "start": 44,
                                                                                "end": 47
                                                                            },
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "start": 47,
                                                                                "end": 52
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "right": null,
                                                                            "flags": 32,
                                                                            "start": 44,
                                                                            "end": 52
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 96,
                                                                            "start": 52,
                                                                            "end": 54
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 44,
                                                                    "end": 54
                                                                },
                                                                "flags": 32,
                                                                "start": 42,
                                                                "end": 55
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 59,
                                                                    "end": 59
                                                                },
                                                                "flags": 32,
                                                                "start": 57,
                                                                "end": 60
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 42,
                                                    "end": 60
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 61
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 63
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 63
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 64
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 64
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 64
            },
            "flags": 16,
            "start": 10,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { var [...await f] = []; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 47, end: 52
✖ ',' expected - start: 52, end: 54

```

