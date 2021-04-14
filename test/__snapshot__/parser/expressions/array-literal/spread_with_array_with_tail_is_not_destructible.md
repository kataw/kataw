# Kataw parser test case

## Input

`````js
[...[x].map(y, z)] = a;
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
                                "kind": 223,
                                "argument": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 81921,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 5,
                                                        "end": 6
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": "map",
                                            "rawText": "map",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 11
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 81921,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 12,
                                                "end": 13
                                            },
                                            {
                                                "kind": 81921,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 768,
                                                "start": 14,
                                                "end": 16
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "[...[x].map(y, z)] = a;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 18,
            "end": 20
        }
    ],
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

