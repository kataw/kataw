# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(await) => 1; });
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
                                "end": 68
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 68
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 68
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 68
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 71,
                "end": 73
            },
            "autofix": 0,
            "flags": 128,
            "start": 71,
            "end": 74
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 77,
            "end": 78
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { var asyncArrow = async(await) => 1; });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 67,
            "end": 68
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 68,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 74,
            "end": 76
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 76,
            "end": 77
        }
    ],
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(await) => 1; });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(await) => 1; });
`````
```

