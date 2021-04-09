# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var [...await f] = [];
## Input

`````js
'use strict'; var [...await f] = [];
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
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 22
                                        },
                                        "binding": {
                                            "kind": 81921,
                                            "value": "await",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 27
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 27
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "f",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 27,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 30
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 34
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 32,
                            "end": 35
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 35
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "'use strict'; var [...await f] = [];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 27,
            "end": 29
        }
    ],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var [...await f] = [];
## Input

`````js
'use strict'; var [...await f] = [];
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var [...await f] = [];
## Input

`````js
'use strict'; var [...await f] = [];
`````
```

