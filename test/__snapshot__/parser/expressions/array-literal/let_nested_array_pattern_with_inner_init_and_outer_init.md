# Kataw parser test case

## Input

`````js
[foo, [x,y = 20,z], bar = B] = arr;
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
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "operatorToken": {
                                                "kind": 67174402,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 9,
                                                "end": 12
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 20,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 15
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "z",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 17
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 18
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "B",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 27
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 81921,
                    "value": "arr",
                    "autofix": 0,
                    "flags": 768,
                    "start": 30,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "[foo, [x,y = 20,z], bar = B] = arr;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

