# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: const { f: await f } = {};
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { const { f: await f } = {}; });
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
                                    "start": 35,
                                    "end": 35
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
                                                    "kind": 37757004,
                                                    "flags": 80,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 329,
                                                                            "key": {
                                                                                "kind": 134299649,
                                                                                "text": "f",
                                                                                "rawText": "f",
                                                                                "flags": 96,
                                                                                "start": 46,
                                                                                "end": 48
                                                                            },
                                                                            "value": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "start": 49,
                                                                                "end": 55
                                                                            },
                                                                            "initializer": null,
                                                                            "flags": 32,
                                                                            "start": 46,
                                                                            "end": 55
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 96,
                                                                            "start": 55,
                                                                            "end": 57
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 46,
                                                                    "end": 57
                                                                },
                                                                "flags": 32,
                                                                "start": 44,
                                                                "end": 59
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 220,
                                                                "propertyList": {
                                                                    "kind": 218,
                                                                    "properties": [],
                                                                    "trailingComma": false,
                                                                    "flags": 16,
                                                                    "start": 63,
                                                                    "end": 63
                                                                },
                                                                "flags": 48,
                                                                "start": 61,
                                                                "end": 64
                                                            },
                                                            "flags": 16,
                                                            "start": 44,
                                                            "end": 64
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "start": 44,
                                                    "end": 64
                                                },
                                                "flags": 33554448,
                                                "start": 38,
                                                "end": 65
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 65
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 67
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 67
                            },
                            "flags": 18,
                            "start": 32,
                            "end": 68
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 68
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 68
            },
            "flags": 16,
            "start": 10,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { const { f: await f } = {}; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 49, end: 55
✖ ',' expected - start: 55, end: 57

```

