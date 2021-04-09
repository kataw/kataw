# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: ({ await: async })
## Input

`````js
'use strict'; ({ await: async })
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "await",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 16,
                                    "end": 22
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 16,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 16,
                        "end": 29
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "'use strict'; ({ await: async })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: ({ await: async })
## Input

`````js
'use strict'; ({ await: async })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: ({ await: async })
## Input

`````js
'use strict'; ({ await: async })
`````
```

