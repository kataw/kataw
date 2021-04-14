# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: call(await.foo)
## Input

`````js
var await; var f = (async function() { call(await.foo) });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
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
                                    "flags": 768,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37814362,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                                        "kind": 81921,
                                                        "text": "call",
                                                        "rawText": "call",
                                                        "flags": 768,
                                                        "start": 38,
                                                        "end": 43
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 208,
                                                                "awaitToken": {
                                                                    "kind": 82032,
                                                                    "flags": 768,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "autofix": 0,
                                                                        "flags": 12,
                                                                        "start": 49,
                                                                        "end": 49
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 768,
                                                                        "start": 50,
                                                                        "end": 53
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 49,
                                                                    "end": 53
                                                                },
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 53
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 44,
                                                        "end": 53
                                                    },
                                                    "flags": 256,
                                                    "start": 38,
                                                    "end": 54
                                                },
                                                "flags": 128,
                                                "start": 38,
                                                "end": 54
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 54
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 56
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1280,
                                "start": 20,
                                "end": 56
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 57
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 57
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 57
            },
            "flags": 128,
            "start": 10,
            "end": 58
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { call(await.foo) });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 49,
            "end": 50
        }
    ],
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: call(await.foo)
## Input

`````js
var await; var f = (async function() { call(await.foo) });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: call(await.foo)
## Input

`````js
var await; var f = (async function() { call(await.foo) });
`````
```

