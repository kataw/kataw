# Kataw parser test case

## Input

`````js
[foo, [x,y,z], bar = B] = arr;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 10
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "z",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 12
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 12
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 13
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 14,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "B",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 22
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 23,
                    "end": 25
                },
                "right": {
                    "kind": 81921,
                    "value": "arr",
                    "autofix": 0,
                    "flags": 768,
                    "start": 25,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "[foo, [x,y,z], bar = B] = arr;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

