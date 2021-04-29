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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 12,
                                                    "end": 13
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 9
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "x = { \"a\": {x} = y.z };\n// x = { \"a\": [x] = y.z };\n// (x = { a: {x} = y }) / y.z;\n// (x = { a: x = y }) / y.z;\n// (x = { a: (x) = y }) / y.z;\n// (x = { a: x = (y) }) / y.z;\n// (x = { a: (x = (y)) }) / y.z;\n// (x = { \"a\": {x} = y }) / y.z;\n// (x = { \"a\": x = y }) / y.z;\n// (x = { \"a\": (x) = y }) / y.z;\n// (x = { \"a\": x = (y) }) / y.z;\n// (x = { \"a\": (x = (y)) }) / y.z;\n// (x = { [a]: {x} = y }) / y.z;\n// (x = { [a]: x = y }) / y.z;\n// (x = { [a]: (x) = y }) / y.z;\n// (x = { [a]: x = (y) }) / y.z;\n// (x = { [a]: (x = (y)) }) / y.z;\n// x = { \"a\": ([] ? a : b.c[d]) };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 570
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

