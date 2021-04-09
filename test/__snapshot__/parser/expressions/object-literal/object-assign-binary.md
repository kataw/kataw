# Kataw parser test case

## Input

`````js
x = { "a": {x} = y.z };
// x = { "a": [x] = y.z };
// (x = { a: {x} = y }) / y.z;
// (x = { a: x = y }) / y.z;
// (x = { a: (x) = y }) / y.z;
// (x = { a: x = (y) }) / y.z;
// (x = { a: (x = (y)) }) / y.z;
// (x = { "a": {x} = y }) / y.z;
// (x = { "a": x = y }) / y.z;
// (x = { "a": (x) = y }) / y.z;
// (x = { "a": x = (y) }) / y.z;
// (x = { "a": (x = (y)) }) / y.z;
// (x = { [a]: {x} = y }) / y.z;
// (x = { [a]: x = y }) / y.z;
// (x = { [a]: (x) = y }) / y.z;
// (x = { [a]: x = (y) }) / y.z;
// (x = { [a]: (x = (y)) }) / y.z;
// x = { "a": ([] ? a : b.c[d]) };
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 12,
                                                    "end": 13
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "z",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 20
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 67174403,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 9
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 5,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 22
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "x = { \"a\": {x} = y.z };\n// x = { \"a\": [x] = y.z };\n// (x = { a: {x} = y }) / y.z;\n// (x = { a: x = y }) / y.z;\n// (x = { a: (x) = y }) / y.z;\n// (x = { a: x = (y) }) / y.z;\n// (x = { a: (x = (y)) }) / y.z;\n// (x = { \"a\": {x} = y }) / y.z;\n// (x = { \"a\": x = y }) / y.z;\n// (x = { \"a\": (x) = y }) / y.z;\n// (x = { \"a\": x = (y) }) / y.z;\n// (x = { \"a\": (x = (y)) }) / y.z;\n// (x = { [a]: {x} = y }) / y.z;\n// (x = { [a]: x = y }) / y.z;\n// (x = { [a]: (x) = y }) / y.z;\n// (x = { [a]: x = (y) }) / y.z;\n// (x = { [a]: (x = (y)) }) / y.z;\n// x = { \"a\": ([] ? a : b.c[d]) };",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 570
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

