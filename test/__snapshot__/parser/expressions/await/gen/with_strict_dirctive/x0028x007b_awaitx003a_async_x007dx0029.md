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
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
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
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 23,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 16,
                                    "end": 22
                                },
                                "flags": 256,
                                "start": 16,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 16,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 31
                },
                "flags": 256,
                "start": 13,
                "end": 32
            },
            "flags": 128,
            "start": 13,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "'use strict'; ({ await: async })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

