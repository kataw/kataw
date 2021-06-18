# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: let { f: ...await f } = {};
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { let { f: ...await f } = {}; });
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
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 329,
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
                                                                                "kind": 16637,
                                                                                "text": "",
                                                                                "flags": 64,
                                                                                "start": 47,
                                                                                "end": 47
                                                                            },
                                                                            "initializer": null,
                                                                            "flags": 32,
                                                                            "start": 44,
                                                                            "end": 47
                                                                        },
                                                                        {
                                                                            "kind": 281,
                                                                            "ellipsisToken": {
                                                                                "kind": 524302,
                                                                                "flags": 64,
                                                                                "start": 47,
                                                                                "end": 51
                                                                            },
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "start": 51,
                                                                                "end": 56
                                                                            },
                                                                            "optionalToken": null,
                                                                            "type": null,
                                                                            "right": null,
                                                                            "flags": 0,
                                                                            "start": 47,
                                                                            "end": 56
                                                                        },
                                                                        {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 96,
                                                                            "start": 56,
                                                                            "end": 58
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 44,
                                                                    "end": 58
                                                                },
                                                                "flags": 32,
                                                                "start": 42,
                                                                "end": 60
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
                                                                    "start": 64,
                                                                    "end": 64
                                                                },
                                                                "flags": 48,
                                                                "start": 62,
                                                                "end": 65
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 42,
                                                    "end": 65
                                                },
                                                "flags": 33554448,
                                                "start": 38,
                                                "end": 66
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 68
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 68
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 69
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 69
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 69
            },
            "flags": 16,
            "start": 10,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { let { f: ...await f } = {}; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object property expected - start: 47, end: 51
✖ ',' expected - start: 47, end: 51
✖ ',' expected - start: 56, end: 58

```

