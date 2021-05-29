# Kataw parser test case

## Input

`````js
[x, y, ...z = arr] = obj
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
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 10
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "arr",
                                        "rawText": "arr",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 6,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "start": 20,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "[x, y, ...z = arr] = obj",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 18, end: 20

```

