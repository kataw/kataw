# Kataw parser test case

## Input

`````js
({ __proto__, __proto__: null })
`````

## Output

### CST

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
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 12
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 29
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 13,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 31
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "({ __proto__, __proto__: null })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

({ __proto__, __proto__: null });
```

### Diagnostics

```javascript
✔ No errors
```

