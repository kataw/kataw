# Kataw parser test case

## Input

`````js
[x, y, z = 1]
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
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "text": "z",
                                "rawText": "z",
                                "flags": 768,
                                "start": 6,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 81921,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "[x, y, z = 1]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

