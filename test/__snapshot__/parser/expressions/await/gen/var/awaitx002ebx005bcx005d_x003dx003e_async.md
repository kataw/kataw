# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await.b[c] => async
## Input

`````js
var await; var f = (async function() { await.b[c] => async });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "f",
                            "autofix": 0,
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
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 49
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 49
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 49
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "async",
                "autofix": 0,
                "flags": 768,
                "start": 52,
                "end": 58
            },
            "autofix": 0,
            "flags": 128,
            "start": 52,
            "end": 58
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 61,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { await.b[c] => async });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 49,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 49,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 49,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 49,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 49,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 49,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 58,
            "end": 60
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 60,
            "end": 61
        }
    ],
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await.b[c] => async
## Input

`````js
var await; var f = (async function() { await.b[c] => async });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await.b[c] => async
## Input

`````js
var await; var f = (async function() { await.b[c] => async });
`````
```

