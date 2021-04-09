# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let { ...await f } = {};
## Input

`````js
'use strict'; let { ...await f } = {};
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
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "left": {
                                            "kind": 81921,
                                            "value": "await",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 19,
                                            "end": 28
                                        },
                                        "right": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 28
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 81921,
                                            "value": "f",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 32
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 36,
                                "end": 36
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 34,
                            "end": 37
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 37
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "'use strict'; let { ...await f } = {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let { ...await f } = {};
## Input

`````js
'use strict'; let { ...await f } = {};
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let { ...await f } = {};
## Input

`````js
'use strict'; let { ...await f } = {};
`````
```

