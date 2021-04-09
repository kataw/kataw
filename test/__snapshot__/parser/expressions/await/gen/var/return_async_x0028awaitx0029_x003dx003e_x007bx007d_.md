# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: return async (await) => {};
## Input

`````js
var await; var f = (async function() { return async (await) => {}; });
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
                                "end": 59
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 59
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 59
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 59
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 59
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 64,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 62,
            "end": 65
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 65,
            "end": 66
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 69,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { return async (await) => {}; });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 58,
            "end": 59
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 59,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 59,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 59,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 59,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 59,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 59,
            "end": 62
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 66,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 68,
            "end": 69
        }
    ],
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: return async (await) => {};
## Input

`````js
var await; var f = (async function() { return async (await) => {}; });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: return async (await) => {};
## Input

`````js
var await; var f = (async function() { return async (await) => {}; });
`````
```

