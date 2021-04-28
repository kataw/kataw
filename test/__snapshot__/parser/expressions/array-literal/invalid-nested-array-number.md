# Kataw parser test case

## Input

`````js
[[1]] = [];
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 2,
                                            "end": 3
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 3
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 4
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 5,
                    "start": 512,
                    "end": 7
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "[[1]] = [];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7

```

