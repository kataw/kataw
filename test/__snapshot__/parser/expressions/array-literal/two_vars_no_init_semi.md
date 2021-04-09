# Kataw parser test case

## Input

`````js
[foo, bar] = arr;
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 4
                            },
                            {
                                "kind": 81921,
                                "value": "bar",
                                "autofix": 0,
                                "flags": 768,
                                "start": 5,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 81921,
                    "value": "arr",
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "[foo, bar] = arr;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

