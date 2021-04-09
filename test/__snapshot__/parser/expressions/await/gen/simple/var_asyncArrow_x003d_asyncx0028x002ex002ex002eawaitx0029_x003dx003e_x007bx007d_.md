# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var asyncArrow = async(...await) => {};
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
                            "value": "asyncArrow",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 81921,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 16,
                                "end": 22
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "argument": {
                                            "kind": 81921,
                                            "value": "await",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 23,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 31
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 32
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 32
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 32
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 37,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 38
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 38,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "var asyncArrow = async(...await) => {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 32,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 32,
            "end": 35
        }
    ],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var asyncArrow = async(...await) => {};
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var asyncArrow = async(...await) => {};
`````
```

