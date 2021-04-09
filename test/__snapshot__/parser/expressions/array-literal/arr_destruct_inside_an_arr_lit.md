# Kataw parser test case

## Input

`````js
(foo, [bar, baz] = doo);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "bar",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 10
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "baz",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 15
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "right": {
                                "kind": 81921,
                                "value": "doo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 18,
                                "end": 22
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 22
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "(foo, [bar, baz] = doo);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

