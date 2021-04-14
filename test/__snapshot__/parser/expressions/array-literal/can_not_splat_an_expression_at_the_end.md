# Kataw parser test case

## Input

`````js
[x, y, ...z + arr] = obj
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
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 3,
                                "end": 5
                            },
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 768,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "arr",
                                        "rawText": "arr",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 6,
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
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 768,
                    "start": 20,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "[x, y, ...z + arr] = obj",
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
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

