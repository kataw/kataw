# Kataw parser test case

## Input

`````js
({790: true})
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
                                    "kind": 201392130,
                                    "text": 790,
                                    "rawText": "790",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 6,
                                    "end": 11
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "({790: true})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

({ 790: true });

```

### Diagnostics

```javascript
✔ No errors
```

