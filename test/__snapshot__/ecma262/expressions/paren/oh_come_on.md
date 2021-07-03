# Kataw parser test case

## Input

`````js
((((((((((x))))))))));
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
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "flags": 9,
                                                    "start": 32,
                                                    "end": 12
                                                },
                                                "flags": 8,
                                                "start": 32,
                                                "end": 13
                                            },
                                            "flags": 7,
                                            "start": 32,
                                            "end": 14
                                        },
                                        "flags": 6,
                                        "start": 32,
                                        "end": 15
                                    },
                                    "flags": 5,
                                    "start": 32,
                                    "end": 16
                                },
                                "flags": 4,
                                "start": 32,
                                "end": 17
                            },
                            "flags": 3,
                            "start": 32,
                            "end": 18
                        },
                        "flags": 2,
                        "start": 32,
                        "end": 19
                    },
                    "flags": 1,
                    "start": 32,
                    "end": 20
                },
                "flags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "((((((((((x))))))))));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

((((((((((x))))))))));

```

### Diagnostics

```javascript
✔ No errors
```

