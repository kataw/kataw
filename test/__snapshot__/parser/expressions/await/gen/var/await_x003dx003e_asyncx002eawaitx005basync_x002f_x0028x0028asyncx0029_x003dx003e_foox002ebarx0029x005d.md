# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await => async.await[async / ((async) => foo.bar)]
## Input

`````js
var await; var f = (async function() { await => async.await[async / ((async) => foo.bar)] });
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
            "declareKeyword": null,
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
                            "kind": 134299649,
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
            "declareKeyword": null,
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
                            "kind": 134299649,
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
                                "kind": 132,
                                "flags": 256,
                                "start": 18,
                                "end": 44
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 44
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 44
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 44
            },
            "flags": 128,
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
                        "flags": 768,
                        "start": 47,
                        "end": 53
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 768,
                        "start": 54,
                        "end": 59
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 47,
                    "end": 59
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 768,
                        "start": 60,
                        "end": 65
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 768,
                        "start": 65,
                        "end": 67
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 76,
                                "end": 79
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 70,
                                    "end": 75
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 79,
                                    "end": 83
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 84,
                                    "end": 87
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 79,
                                "end": 87
                            },
                            "flags": 256,
                            "start": 69,
                            "end": 87
                        },
                        "flags": 256,
                        "start": 67,
                        "end": 88
                    },
                    "flags": 256,
                    "start": 60,
                    "end": 88
                },
                "flags": 256,
                "start": 47,
                "end": 89
            },
            "flags": 128,
            "start": 47,
            "end": 89
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 92,
            "end": 93
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { await => async.await[async / ((async) => foo.bar)] });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 44, end: 47
@{x2716}@ Unexpected token. - start: 44, end: 47
@{x2716}@ Unexpected token. - start: 44, end: 47
@{x2716}@ Unexpected token. - start: 44, end: 47
@{x2716}@ ',' expected - start: 44, end: 47
@{x2716}@ Unexpected token. - start: 44, end: 47
@{x2716}@ Statement expected - start: 44, end: 47
@{x2716}@ Statement expected - start: 89, end: 91
@{x2716}@ Statement expected - start: 91, end: 92

```

