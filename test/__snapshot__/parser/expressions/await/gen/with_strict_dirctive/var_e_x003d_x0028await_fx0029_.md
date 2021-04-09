# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var e = (await, f);
## Input

`````js
'use strict'; var e = (await, f);
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
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 81921,
                                        "value": "await",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 28
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "f",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 29,
                                        "end": 31
                                    }
                                ],
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 32
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 21,
                            "end": 32
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 32
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "'use strict'; var e = (await, f);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var e = (await, f);
## Input

`````js
'use strict'; var e = (await, f);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var e = (await, f);
## Input

`````js
'use strict'; var e = (await, f);
`````
```

