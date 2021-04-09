# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
x, [foo, bar] = doo;
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
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
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
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 4,
                                        "end": 7
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "bar",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 12
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 81921,
                            "value": "doo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 15,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 19
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "x, [foo, bar] = doo;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

