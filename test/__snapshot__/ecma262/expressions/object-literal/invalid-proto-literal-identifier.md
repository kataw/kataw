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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 20
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
                                    "start": 21,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 37
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 21,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 20,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 37
                    },
                    "flags": 52,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 39
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "({ \"__proto__\": null, __proto__: null })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 39, end: 40

```

