# Kataw parser test case

## Input

`````js
[x, ...z + arr, y] = obj
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 7
                                },
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "arr",
                                        "rawText": "arr",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "flags": 256,
                                    "start": 7,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 14
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 15,
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
                    "kind": 134299649,
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
    "text": "[x, ...z + arr, y] = obj",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20

```

