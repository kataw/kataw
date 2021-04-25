# Kataw parser test case

## Input

`````js
[]=n/f>>=v
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
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 2
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 2,
                        "end": 3
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 768,
                            "start": 3,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 768,
                            "start": 4,
                            "end": 5
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4127,
                    "flags": 768,
                    "start": 6,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "v",
                    "rawText": "v",
                    "flags": 768,
                    "start": 9,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "[]=n/f>>=v",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 6, end: 9

```

