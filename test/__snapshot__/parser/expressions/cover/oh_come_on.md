# Kataw parser test case

## Input

`````js
((((((((((x))))))))));
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
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "flags": 256,
                                                    "start": 9,
                                                    "end": 12
                                                },
                                                "flags": 256,
                                                "start": 8,
                                                "end": 13
                                            },
                                            "flags": 256,
                                            "start": 7,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 18
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "((((((((((x))))))))));",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

