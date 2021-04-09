# Kataw parser test case

## Input

`````js
 0, [{ x }] = [null];
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": 0,
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 2
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 6,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 269,
                                        "value": null,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 19
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 13,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 3,
                        "end": 20
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": " 0, [{ x }] = [null];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

