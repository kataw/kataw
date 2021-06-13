# Kataw parser test case

## Input

`````js
[this=x];

[this]=x;
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

### CST

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
                            "kind": 125,
                            "left": {
                                "kind": 4276321,
                                "flags": 96,
                                "start": 1,
                                "end": 5
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 5,
                                "end": 6
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
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
                                "kind": 4276321,
                                "flags": 96,
                                "start": 12,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 12,
                        "end": 16
                    },
                    "flags": 33,
                    "start": 9,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 17,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 18,
                    "end": 19
                },
                "flags": 32,
                "start": 9,
                "end": 19
            },
            "flags": 16,
            "start": 9,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "[this=x];\n\n[this]=x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 1, end: 6
✖ The left-hand side must be a variable or a property access. - start: 17, end: 18

```

