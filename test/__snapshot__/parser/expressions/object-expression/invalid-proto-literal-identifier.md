# Kataw parser test case

## Input

`````js
({ "__proto__": null, __proto__: null })
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 269,
                                    "value": null,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "__proto__",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 14
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 20
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 269,
                                    "value": null,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 32,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "__proto__",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 37
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 40
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "({ \"__proto__\": null, __proto__: null })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

