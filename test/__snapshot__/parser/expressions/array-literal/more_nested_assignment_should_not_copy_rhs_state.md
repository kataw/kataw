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
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 2,
                                                    "end": 3
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 3,
                                                    "end": 5
                                                },
                                                "right": {
                                                    "kind": 134,
                                                    "text": true,
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 10
                                                },
                                                "flags": 32,
                                                "start": 2,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 2,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 11
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 134,
                                    "text": true,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": " y",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "[[x = true] = true] = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

