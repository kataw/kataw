# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foo = yield = 1;
## Input

`````js
'use strict'; var foo = yield = 1;
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
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "yield",
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 67174402,
                                "autofix": 0,
                                "flags": 0,
                                "start": 23,
                                "end": 31
                            },
                            "right": {
                                "kind": 81921,
                                "value": 1,
                                "autofix": 0,
                                "flags": 768,
                                "start": 31,
                                "end": 33
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 23,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 33
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "'use strict'; var foo = yield = 1;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foo = yield = 1;
## Input

`````js
'use strict'; var foo = yield = 1;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foo = yield = 1;
## Input

`````js
'use strict'; var foo = yield = 1;
`````
```

