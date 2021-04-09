# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var e = (await);
## Input

`````js
'use strict'; var e = (await);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
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
                            "value": "e",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
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
                                "start": 23,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 21,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 29
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "'use strict'; var e = (await);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var e = (await);
## Input

`````js
'use strict'; var e = (await);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var e = (await);
## Input

`````js
'use strict'; var e = (await);
`````
```

