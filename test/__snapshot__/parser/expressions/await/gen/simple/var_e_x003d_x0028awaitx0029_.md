# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var e = (await);
## Input

`````js
var e = (await);
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
                                "kind": 81921,
                                "value": "await",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 14
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 15
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "var e = (await);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var e = (await);
## Input

`````js
var e = (await);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var e = (await);
## Input

`````js
var e = (await);
`````
```

