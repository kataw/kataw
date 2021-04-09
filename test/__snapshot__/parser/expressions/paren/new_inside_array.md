# Kataw parser test case

## Input

`````js
([new x]);

(x, [new y]);
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 210,
                                "expression": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "argumentList": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 13,
                            "end": 14
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 210,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "argumentList": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 17,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 22
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 15,
                            "end": 23
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 10,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 10,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 10,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "([new x]);\n\n(x, [new y]);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

