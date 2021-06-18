# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: (class { async method(await) {} })
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { (class { async method(await) {} }) });
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 189,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 64,
                                                            "start": 40,
                                                            "end": 45
                                                        },
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "tail": {
                                                            "kind": 277,
                                                            "classHeritage": null,
                                                            "body": {
                                                                "kind": 303,
                                                                "elements": [
                                                                    {
                                                                        "kind": 278,
                                                                        "declareToken": null,
                                                                        "decorators": null,
                                                                        "generatorToken": null,
                                                                        "staticKeyword": null,
                                                                        "asyncKeyword": {
                                                                            "kind": 82031,
                                                                            "flags": 64,
                                                                            "start": 47,
                                                                            "end": 53
                                                                        },
                                                                        "setKeyword": null,
                                                                        "getKeyword": null,
                                                                        "method": {
                                                                            "kind": 209,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "method",
                                                                                "rawText": "method",
                                                                                "flags": 96,
                                                                                "start": 53,
                                                                                "end": 60
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameters": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "await",
                                                                                        "rawText": "await",
                                                                                        "flags": 96,
                                                                                        "start": 61,
                                                                                        "end": 66
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 352,
                                                                                "start": 61,
                                                                                "end": 67
                                                                            },
                                                                            "returnType": null,
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "flags": 32,
                                                                                    "start": 69,
                                                                                    "end": 69
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 67,
                                                                                "end": 70
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 60,
                                                                            "end": 70
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 47,
                                                                        "end": 70
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "start": 47,
                                                                "end": 70
                                                            },
                                                            "flags": 45,
                                                            "start": 32,
                                                            "end": 72
                                                        },
                                                        "flags": 32,
                                                        "start": 40,
                                                        "end": 72
                                                    },
                                                    "flags": 32,
                                                    "start": 38,
                                                    "end": 73
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 73
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 73
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 75
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 75
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 76
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 76
            },
            "flags": 16,
            "start": 10,
            "end": 77
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { (class { async method(await) {} }) });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 61, end: 66

```

