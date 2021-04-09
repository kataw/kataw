# Kataw parser test case

## Input

`````js
[foo = A, bar = B] = arr;
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
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 1,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "A",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 8
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 8
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 13
                                },
                                "operatorToken": {
                                    "kind": 81921,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 9,
                                    "end": 15
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "B",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 17
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 9,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 17
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 81921,
                    "value": "arr",
                    "autofix": 0,
                    "flags": 768,
                    "start": 20,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "[foo = A, bar = B] = arr;",
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

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

