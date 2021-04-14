# Kataw parser test case

## Input

`````js
[[x = true] = true] = y
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
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 81921,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 2,
                                                    "end": 3
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 3,
                                                    "end": 5
                                                },
                                                "right": {
                                                    "kind": 134,
                                                    "text": true,
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 10
                                                },
                                                "flags": 256,
                                                "start": 2,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 1,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 11,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 134,
                                    "text": true,
                                    "flags": 768,
                                    "start": 13,
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
                    "text": "y",
                    "rawText": "y",
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
    "text": "[[x = true] = true] = y",
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

