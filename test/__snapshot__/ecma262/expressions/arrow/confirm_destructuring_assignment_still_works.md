# Kataw parser test case

## Input

`````js
({x: y.z} = b)
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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 96,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 13
                },
                "flags": 0,
                "start": 34,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "({x: y.z} = b)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

({x: y.z} = b);
```

### Diagnostics

```javascript
✔ No errors
```

