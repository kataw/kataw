# Kataw parser test case

## Input

`````js
[a[x.y] = a] = z
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
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "original": "a",
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 1,
                                        "end": 2
                                    },
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "original": "x",
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "y",
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 6
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 7
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 7,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "a",
                                    "text": "a",
                                    "rawText": " a",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 11
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 134299649,
                    "original": "z",
                    "text": "z",
                    "rawText": " z",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "[a[x.y] = a] = z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

