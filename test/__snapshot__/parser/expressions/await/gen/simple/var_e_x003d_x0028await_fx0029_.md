# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var e = (await, f);
## Input

`````js
var e = (await, f);
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
                            "value": "e",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 81921,
                                        "value": "await",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 9,
                                        "end": 14
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "f",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 17
                                    }
                                ],
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 18
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 18
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "var e = (await, f);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var e = (await, f);
## Input

`````js
var e = (await, f);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var e = (await, f);
## Input

`````js
var e = (await, f);
`````
```

