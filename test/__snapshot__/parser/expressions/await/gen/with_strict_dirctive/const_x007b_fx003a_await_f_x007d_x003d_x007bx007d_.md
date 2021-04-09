# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: const { f: await f } = {};
## Input

`````js
'use strict'; const { f: await f } = {};
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
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 81921,
                                            "value": "f",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "await",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 21,
                                        "end": 30
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 81921,
                                            "value": "f",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "right": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 30,
                                        "end": 32
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 32
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 34
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
                                "start": 38,
                                "end": 38
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 36,
                            "end": 39
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 19,
                        "end": 39
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 19,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "'use strict'; const { f: await f } = {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 30,
            "end": 32
        }
    ],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: const { f: await f } = {};
## Input

`````js
'use strict'; const { f: await f } = {};
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: const { f: await f } = {};
## Input

`````js
'use strict'; const { f: await f } = {};
`````
```

