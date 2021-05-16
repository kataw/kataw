# Kataw parser test case

## Input

`````js
({ "__proto__": null, __proto__: null })
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
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 20
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 32,
                                    "end": 37
                                },
                                "flags": 36,
                                "start": 21,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 37
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 39
                },
                "flags": 32,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "({ \"__proto__\": null, __proto__: null })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

({ "\"__proto__\"": null, __proto__: null });
```

### Diagnostics

```javascript
✔ No errors
```

