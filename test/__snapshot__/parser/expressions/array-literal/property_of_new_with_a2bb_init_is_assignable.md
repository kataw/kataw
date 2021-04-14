# Kataw parser test case

## Input

`````js
[new x().y = a + b] = z
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
    "directives": [],
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
                                    "kind": 129,
                                    "member": {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 4259933,
                                            "flags": 768,
                                            "start": 1,
                                            "end": 4
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "flags": 256,
                                        "start": 1,
                                        "end": 8
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 1,
                                    "end": 10
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 10,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 768,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 81921,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "[new x().y = a + b] = z",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

