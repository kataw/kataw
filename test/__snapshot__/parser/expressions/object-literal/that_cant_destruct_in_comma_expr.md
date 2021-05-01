# Kataw parser test case

## Input

`````js
x, {x: foo + y, bar} = doo
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
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
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 10
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "start": 4,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 14
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 4,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 20
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 20,
                            "end": 22
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "doo",
                            "rawText": "doo",
                            "flags": 96,
                            "start": 22,
                            "end": 26
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 26
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "x, {x: foo + y, bar} = doo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 20, end: 22

```

