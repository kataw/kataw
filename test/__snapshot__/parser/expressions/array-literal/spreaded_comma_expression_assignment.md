# Kataw parser test case

## Input

`````js
[...[(x, y)]] = x;
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 132,
                                                    "expressions": [
                                                        {
                                                            "kind": 134299649,
                                                            "original": "x",
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 6,
                                                            "end": 7
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "original": "y",
                                                            "text": "y",
                                                            "rawText": " y",
                                                            "flags": 96,
                                                            "start": 8,
                                                            "end": 10
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 5,
                                                    "end": 11
                                                },
                                                "flags": 32,
                                                "start": 5,
                                                "end": 11
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 13,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": " x",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "[...[(x, y)]] = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 13, end: 15

```

