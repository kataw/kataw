# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await => async.await[foo]
## Input

`````js
var await; var f = (async function() { await => async.await[foo] });
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
                        "kind": 81921,
                        "text": "async",
                        "rawText": "async",
                        "flags": 768,
                        "start": 47,
                        "end": 53
                    },
                    "expression": {
                        "kind": 81921,
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
                    "kind": 81921,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 60,
                    "end": 63
                },
                "flags": 256,
                "start": 47,
                "end": 64
            },
            "flags": 128,
            "start": 47,
            "end": 64
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 67,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { await => async.await[foo] });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 64,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 66,
            "end": 67
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await => async.await[foo]
## Input

`````js
var await; var f = (async function() { await => async.await[foo] });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await => async.await[foo]
## Input

`````js
var await; var f = (async function() { await => async.await[foo] });
`````
```

