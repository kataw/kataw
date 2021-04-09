# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var asyncArrow = async(await) => 1;
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
                                        "kind": 81921,
                                        "value": "await",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 28
                            },
                            "flags": 256,
                            "start": 16,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 29
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 1,
                "autofix": 0,
                "flags": 768,
                "start": 32,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "var asyncArrow = async(await) => 1;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 29,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 29,
            "end": 32
        }
    ],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var asyncArrow = async(await) => 1;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
var asyncArrow = async(await) => 1;
`````
```

