# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: await => async.await[async / ((async) => foo.bar)]
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { await => async.await[async / ((async) => foo.bar)] });
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
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "start": 18,
                                "end": 44
                            },
                            "flags": 18,
                            "start": 32,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 44
            },
            "flags": 16,
            "start": 10,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 47,
                        "end": 53
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "start": 54,
                        "end": 59
                    },
                    "flags": 96,
                    "start": 47,
                    "end": 59
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 60,
                        "end": 65
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "start": 65,
                        "end": 67
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 70,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 70,
                                "end": 76
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 76,
                                "end": 79
                            },
                            "contents": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 83
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 84,
                                    "end": 87
                                },
                                "flags": 96,
                                "start": 79,
                                "end": 87
                            },
                            "flags": 32,
                            "start": 69,
                            "end": 87
                        },
                        "flags": 67,
                        "start": 32,
                        "end": 88
                    },
                    "flags": 96,
                    "start": 60,
                    "end": 88
                },
                "flags": 536870944,
                "start": 47,
                "end": 89
            },
            "flags": 16,
            "start": 47,
            "end": 89
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 92,
            "end": 93
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { await => async.await[async / ((async) => foo.bar)] });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 44, end: 47
✖ ',' expected - start: 44, end: 47
✖ Declaration or statement expected - start: 89, end: 91
✖ Declaration or statement expected - start: 91, end: 92

```

