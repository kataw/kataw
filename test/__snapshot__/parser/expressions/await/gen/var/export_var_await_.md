# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: export var await;
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { export var await; });
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
                                                "kind": 257,
                                                "exportKeyword": {
                                                    "kind": 4202582,
                                                    "flags": 80,
                                                    "start": 38,
                                                    "end": 45
                                                },
                                                "declaration": {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 45,
                                                        "end": 49
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
                                                                    "start": 49,
                                                                    "end": 55
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 49,
                                                                "end": 55
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 49,
                                                        "end": 55
                                                    },
                                                    "flags": 16,
                                                    "start": 45,
                                                    "end": 56
                                                },
                                                "namedExports": null,
                                                "exportFromClause": null,
                                                "fromClause": null,
                                                "exportKind": 0,
                                                "flags": 80,
                                                "start": 38,
                                                "end": 56
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 56
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 58
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 58
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 59
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 59
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 59
            },
            "flags": 16,
            "start": 10,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { export var await; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 38, end: 45
✖ 'await' cannot be used as an identifier here - start: 49, end: 55

```

