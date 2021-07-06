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
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "flags": 9,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 12
                                                },
                                                "flags": 8,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 13
                                            },
                                            "flags": 7,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 14
                                        },
                                        "flags": 6,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 15
                                    },
                                    "flags": 5,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 16
                                },
                                "flags": 4,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 17
                            },
                            "flags": 3,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 18
                        },
                        "flags": 2,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 19
                    },
                    "flags": 1,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "((((((((((x))))))))));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

