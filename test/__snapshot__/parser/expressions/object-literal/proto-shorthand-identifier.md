# Kataw parser test case

## Input

`````js
({ __proto__, __proto__: null })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 768,
                                "start": 2,
                                "end": 12
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 768,
                                    "start": 24,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 23
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 31
                },
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "({ __proto__, __proto__: null })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

