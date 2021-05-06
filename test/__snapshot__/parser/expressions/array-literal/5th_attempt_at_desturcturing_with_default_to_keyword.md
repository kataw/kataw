# Kataw parser test case

## Input

`````js
[...{true=x} = c]
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
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 224,
                                                "ellipsisToken": null,
                                                "argument": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 68,
                                                        "start": 9,
                                                        "end": 9
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 9,
                                                        "end": 10
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "flags": 32,
                                                    "start": 9,
                                                    "end": 11
                                                },
                                                "flags": 32,
                                                "start": 5,
                                                "end": 11
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 4,
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
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "[...{true=x} = c]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

[...{ ... = x } = c];
```

### Diagnostics

```javascript
✖ Expression expected - start: 9, end: 10
✖ The left-hand side must be a variable or a property access. - start: 12, end: 14

```

