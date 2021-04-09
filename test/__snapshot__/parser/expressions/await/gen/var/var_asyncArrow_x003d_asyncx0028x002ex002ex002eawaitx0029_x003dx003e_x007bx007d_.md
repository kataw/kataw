# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(...await) => {}; });
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
                                "end": 71
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 71
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 14,
                        "end": 71
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 14,
                "end": 71
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 71
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 76,
                "end": 76
            },
            "autofix": 0,
            "flags": 128,
            "start": 74,
            "end": 77
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 77,
            "end": 78
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 81,
            "end": 82
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { var asyncArrow = async(...await) => {}; });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 70,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 71,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 71,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 71,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 71,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 71,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 71,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 71,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 78,
            "end": 80
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 80,
            "end": 81
        }
    ],
    "start": 0,
    "end": 82
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(...await) => {}; });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(...await) => {}; });
`````
```

