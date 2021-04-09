# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f(){ await \n x; }
## Input

`````js
var await; var f = (async function() { async function f(){ await \n x; } });
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
                                "end": 64
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 64
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 64
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "n",
                "autofix": 0,
                "flags": 768,
                "start": 66,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 66,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 67,
                "end": 69
            },
            "autofix": 0,
            "flags": 128,
            "start": 67,
            "end": 70
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 75,
            "end": 76
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function f(){ await \\n x; } });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 65
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 64,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 64,
            "end": 66
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64,
            "end": 66
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
            "code": 1,
            "error": "Unexpected token.",
            "start": 67,
            "end": 69
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 70,
            "end": 72
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 72,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 74,
            "end": 75
        }
    ],
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f(){ await \n x; }
## Input

`````js
var await; var f = (async function() { async function f(){ await \n x; } });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f(){ await \n x; }
## Input

`````js
var await; var f = (async function() { async function f(){ await \n x; } });
`````
```

