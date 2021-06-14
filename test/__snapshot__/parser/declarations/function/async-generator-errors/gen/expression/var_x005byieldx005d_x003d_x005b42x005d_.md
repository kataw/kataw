# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/gen/expression
> :: test: expression
> :: case: var [yield] = [42];
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {var [yield] = [42];} })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 2,
                                    "end": 8
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
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
                                                        "start": 19,
                                                        "end": 22
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
                                                                                "kind": 134299649,
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 96,
                                                                                "start": 24,
                                                                                "end": 29
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "start": 24,
                                                                        "end": 29
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 22,
                                                                    "end": 30
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 42,
                                                                                "rawText": "42",
                                                                                "flags": 96,
                                                                                "start": 34,
                                                                                "end": 36
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 34,
                                                                        "end": 36
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 32,
                                                                    "end": 37
                                                                },
                                                                "flags": 16,
                                                                "start": 22,
                                                                "end": 37
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 22,
                                                        "end": 37
                                                    },
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 38
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 39
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 39
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 39
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 41
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {var [yield] = [42];} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'yield' cannot be used as an identifier here - start: 24, end: 29

```

