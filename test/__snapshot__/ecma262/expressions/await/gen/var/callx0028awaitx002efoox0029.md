# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: call(await.foo)
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { call(await.foo) });
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
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
                                    "transformFlags": 0,
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "call",
                                                        "rawText": "call",
                                                        "flags": 96,
                                                        "transformFlags": 0,
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
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 16637,
                                                                        "text": "",
                                                                        "rawText": "",
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 49,
                                                                        "end": 49
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 50,
                                                                        "end": 53
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 49,
                                                                    "end": 53
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 44,
                                                                "end": 53
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 53
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 38,
                                                    "end": 54
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 38,
                                                "end": 54
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 56
                                },
                                "returnType": null,
                                "flags": 160,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 56
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 57
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 57
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { call(await.foo) });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 49, end: 50

```

