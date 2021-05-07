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
                                                    "flags": 32,
                                                    "start": 9,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "start": 8,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
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

(x);
```

### Diagnostics

```javascript
✔ No errors
```

