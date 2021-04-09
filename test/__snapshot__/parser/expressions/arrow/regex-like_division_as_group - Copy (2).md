# Kataw parser test case

## Input

`````js
({ident: [foo, bar]/x/g})
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 81921,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 13
                                                    },
                                                    {
                                                        "kind": 81921,
                                                        "value": "bar",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 14,
                                                        "end": 18
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 10,
                                                "end": 18
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 19
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 21
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 21,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "g",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "ident",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "({ident: [foo, bar]/x/g})",
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

