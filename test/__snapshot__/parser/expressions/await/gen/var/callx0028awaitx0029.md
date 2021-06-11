# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: call(await)
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { call(await) });
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "call",
                                                        "rawText": "call",
                                                        "flags": 96,
                                                        "start": 38,
                                                        "end": 43
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 64,
                                                                    "start": 49,
                                                                    "end": 49
                                                                },
                                                                "flags": 32,
                                                                "start": 44,
                                                                "end": 49
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 44,
                                                        "end": 49
                                                    },
                                                    "flags": 268435488,
                                                    "start": 38,
                                                    "end": 50
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 50
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 38,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 52
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 53
            },
            "flags": 16,
            "start": 10,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { call(await) });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 49, end: 50

```

